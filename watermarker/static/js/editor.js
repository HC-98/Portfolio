// Set up PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// State management
let currentPages = {
    original: 1,
    preview: 1
};
let pdfDocs = {
    original: null,
    preview: null
};

// Toast notification function
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const icon = type === 'success' ? '✓' : '✕';
    toast.innerHTML = `<span style="font-size: 1.5em;">${icon}</span><span style="font-weight: 600;">${message}</span>`;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Update slider value displays
document.getElementById('fontSize').addEventListener('input', (e) => {
    document.getElementById('fontSizeValue').textContent = e.target.value;
});

document.getElementById('opacity').addEventListener('input', (e) => {
    document.getElementById('opacityValue').textContent = e.target.value;
});

document.getElementById('rotation').addEventListener('input', (e) => {
    document.getElementById('rotationValue').textContent = e.target.value;
});

document.getElementById('xOffset').addEventListener('input', (e) => {
    document.getElementById('xOffsetValue').textContent = e.target.value;
});

document.getElementById('yOffset').addEventListener('input', (e) => {
    document.getElementById('yOffsetValue').textContent = e.target.value;
});

// Get responsive scale based on screen size and container width
function getResponsiveScale(container) {
    const containerWidth = container.clientWidth;
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1400;
    
    // Use larger scale on mobile to make PDFs more readable
    if (isMobile) {
        return 2.5;  // Larger scale for mobile
    } else if (isTablet) {
        return 2.0;  // Medium scale for tablets
    } else {
        return 1.5;  // Original scale for desktop
    }
}

// Load and render PDF
async function renderPDF(url, viewerType, pageNum = 1) {
    const containerId = viewerType + 'Viewer';
    const container = document.getElementById(containerId);
    
    try {
        const loadingTask = pdfjsLib.getDocument(url);
        const pdf = await loadingTask.promise;
        
        // Store PDF document
        pdfDocs[viewerType] = pdf;
        
        // Make sure page number is valid
        if (pageNum < 1) pageNum = 1;
        if (pageNum > pdf.numPages) pageNum = pdf.numPages;
        
        currentPages[viewerType] = pageNum;
        
        // Update page info
        document.getElementById(viewerType + 'PageInfo').textContent = 
            `Page ${pageNum} of ${pdf.numPages}`;
        
        // Update navigation buttons
        document.getElementById(viewerType + 'PrevBtn').disabled = (pageNum <= 1);
        document.getElementById(viewerType + 'NextBtn').disabled = (pageNum >= pdf.numPages);
        
        // Render the page
        const page = await pdf.getPage(pageNum);
        
        const scale = getResponsiveScale(container);
        const viewport = page.getViewport({ scale });
        
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        container.innerHTML = '';
        container.appendChild(canvas);
        
        await page.render({
            canvasContext: context,
            viewport: viewport
        }).promise;
        
    } catch (error) {
        container.innerHTML = `<div style="color: #ef4444; padding: 20px; text-align: center;">
            <div style="font-size: 2em; margin-bottom: 10px;">⚠️</div>
            <div style="font-weight: 600;">Error loading PDF</div>
            <div style="font-size: 0.9em; margin-top: 8px;">${error.message}</div>
        </div>`;
    }
}

// Change page
async function changePage(viewerType, delta) {
    const pdf = pdfDocs[viewerType];
    if (!pdf) return;
    
    const newPage = currentPages[viewerType] + delta;
    if (newPage < 1 || newPage > pdf.numPages) return;
    
    currentPages[viewerType] = newPage;
    
    // Re-render from the cached PDF blob or URL
    if (viewerType === 'original') {
        await renderPDF('/get_original_pdf', 'original', newPage);
    } else {
        await renderFromCachedPreview(newPage);
    }
}

let cachedPreviewUrl = null;

async function renderFromCachedPreview(pageNum) {
    if (cachedPreviewUrl && pdfDocs.preview) {
        const pdf = pdfDocs.preview;
        const containerId = 'previewViewer';
        const container = document.getElementById(containerId);
        
        const page = await pdf.getPage(pageNum);
        const scale = getResponsiveScale(container);
        const viewport = page.getViewport({ scale });
        
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        container.innerHTML = '';
        container.appendChild(canvas);
        
        await page.render({
            canvasContext: context,
            viewport: viewport
        }).promise;
        
        // Update page info
        document.getElementById('previewPageInfo').textContent = 
            `Page ${pageNum} of ${pdf.numPages}`;
        document.getElementById('previewPrevBtn').disabled = (pageNum <= 1);
        document.getElementById('previewNextBtn').disabled = (pageNum >= pdf.numPages);
        
        currentPages.preview = pageNum;
    }
}

// Get current settings
function getSettings() {
    return {
        text: document.getElementById('watermarkText').value || 'Confidential',
        fontSize: parseInt(document.getElementById('fontSize').value),
        opacity: parseFloat(document.getElementById('opacity').value) / 100,
        rotation: parseFloat(document.getElementById('rotation').value),
        xOffset: parseFloat(document.getElementById('xOffset').value),
        yOffset: parseFloat(document.getElementById('yOffset').value)
    };
}

// Update preview
async function updatePreview() {
    const previewViewer = document.getElementById('previewViewer');
    previewViewer.innerHTML = `<div class="loading">
        <div class="spinner"></div>
        <span>Generating preview...</span>
    </div>`;
    
    try {
        const settings = getSettings();
        const response = await fetch('/preview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(settings)
        });
        
        if (!response.ok) {
            throw new Error('Failed to generate preview');
        }
        
        const blob = await response.blob();
        
        // Clean up old URL if exists
        if (cachedPreviewUrl) {
            URL.revokeObjectURL(cachedPreviewUrl);
        }
        
        cachedPreviewUrl = URL.createObjectURL(blob);
        await renderPDF(cachedPreviewUrl, 'preview', 1);
        showToast('Preview updated successfully');
        
    } catch (error) {
        previewViewer.innerHTML = `<div style="color: #ef4444; padding: 20px; text-align: center;">
            <div style="font-size: 2em; margin-bottom: 10px;">⚠️</div>
            <div style="font-weight: 600;">Error generating preview</div>
            <div style="font-size: 0.9em; margin-top: 8px;">${error.message}</div>
        </div>`;
        showToast('Failed to generate preview', 'error');
    }
}

// Download watermarked PDF
async function downloadWatermarked() {
    const btn = event.target.closest('.btn-download');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<div style="display: inline-block; width: 16px; height: 16px; border: 2px solid #fff; border-top-color: transparent; border-radius: 50%; animation: spin 0.6s linear infinite;"></div><span>Processing...</span>';
    btn.disabled = true;
    
    try {
        const settings = getSettings();
        const response = await fetch('/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(settings)
        });
        
        if (!response.ok) {
            throw new Error('Failed to download PDF');
        }
        
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'watermarked.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showToast('PDF downloaded successfully!');
        
    } catch (error) {
        showToast('Failed to download PDF', 'error');
    } finally {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
    }
}

// Reset settings
function resetSettings() {
    document.getElementById('watermarkText').value = 'Confidential';
    document.getElementById('fontSize').value = 60;
    document.getElementById('opacity').value = 25;
    document.getElementById('rotation').value = 45;
    document.getElementById('xOffset').value = 0;
    document.getElementById('yOffset').value = 0;
    
    document.getElementById('fontSizeValue').textContent = '60';
    document.getElementById('opacityValue').textContent = '25';
    document.getElementById('rotationValue').textContent = '45';
    document.getElementById('xOffsetValue').textContent = '0';
    document.getElementById('yOffsetValue').textContent = '0';
    
    updatePreview();
    showToast('Settings reset to defaults');
}

// Load original PDF on page load
window.addEventListener('load', () => {
    renderPDF('/get_original_pdf', 'original', 1);
    updatePreview();
});
