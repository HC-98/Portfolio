import os
import uuid
from io import BytesIO
from flask import Flask, render_template, request, send_file, flash, redirect, url_for, session, jsonify
from werkzeug.utils import secure_filename
from PyPDF2 import PdfReader, PdfWriter
from reportlab.pdfgen import canvas

app = Flask(__name__)

# Configuration
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-key-change-in-production')
app.config['MAX_CONTENT_LENGTH'] = int(os.environ.get('MAX_CONTENT_LENGTH', 16 * 1024 * 1024))  # 16MB default
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['OUTPUT_FOLDER'] = 'outputs'

# Security headers
@app.after_request
def add_security_headers(response):
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    return response

# Create necessary folders
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
os.makedirs(app.config['OUTPUT_FOLDER'], exist_ok=True)

# Store uploaded files temporarily (in production, use Redis or similar)
uploaded_files = {}

# ---------- Core watermark logic (reused from app.py) ----------
def make_watermark(text, w, h, font_size=60, opacity=0.25, rotation=45, x_offset=0, y_offset=0):
    """Create a semi-transparent diagonal watermark PDF in memory."""
    packet = BytesIO()
    c = canvas.Canvas(packet, pagesize=(w, h))
    c.setFont("Helvetica-Bold", font_size)
    c.setFillAlpha(opacity)
    c.saveState()
    c.translate(w / 2 + x_offset, h / 2 + y_offset)
    c.rotate(rotation)
    c.drawCentredString(0, 0, text)
    c.restoreState()
    c.save()
    packet.seek(0)
    return packet

def add_watermark_to_pdf(pdf_file, text, font_size=60, opacity=0.25, rotation=45, x_offset=0, y_offset=0):
    """Add watermark to PDF and return the watermarked PDF as bytes."""
    reader = PdfReader(pdf_file)
    writer = PdfWriter()
    
    first = reader.pages[0]
    wm_pdf = make_watermark(
        text, 
        float(first.mediabox.width), 
        float(first.mediabox.height),
        font_size=font_size,
        opacity=opacity,
        rotation=rotation,
        x_offset=x_offset,
        y_offset=y_offset
    )
    wm_page = PdfReader(wm_pdf).pages[0]

    for p in reader.pages:
        p.merge_page(wm_page)
        writer.add_page(p)

    # Write to BytesIO object
    output = BytesIO()
    writer.write(output)
    output.seek(0)
    return output

# ---------- Flask routes ----------
@app.route('/')
def index():
    # Clear any previous session data
    session.pop('file_id', None)
    return render_template('index.html')

@app.route('/editor')
def editor():
    file_id = session.get('file_id')
    if not file_id or file_id not in uploaded_files:
        flash('No file uploaded. Please upload a PDF first.')
        return redirect(url_for('index'))
    return render_template('editor.html', filename=uploaded_files[file_id]['filename'])

@app.route('/upload', methods=['POST'])
def upload_file():
    # Check if file was uploaded
    if 'pdf_file' not in request.files:
        flash('No file uploaded')
        return redirect(url_for('index'))
    
    file = request.files['pdf_file']
    
    if file.filename == '':
        flash('No file selected')
        return redirect(url_for('index'))
    
    # Check if it's a PDF
    if not file.filename.lower().endswith('.pdf'):
        flash('Please upload a PDF file')
        return redirect(url_for('index'))
    
    try:
        # Generate unique file ID
        file_id = str(uuid.uuid4())
        
        # Read file content
        file_content = file.read()
        
        # Store file in memory
        uploaded_files[file_id] = {
            'content': file_content,
            'filename': secure_filename(file.filename)
        }
        
        # Store file ID in session
        session['file_id'] = file_id
        
        # Redirect to editor
        return redirect(url_for('editor'))
    
    except Exception as e:
        flash(f'Error uploading PDF: {str(e)}')
        return redirect(url_for('index'))

@app.route('/get_original_pdf')
def get_original_pdf():
    file_id = session.get('file_id')
    if not file_id or file_id not in uploaded_files:
        return 'File not found', 404
    
    file_data = uploaded_files[file_id]
    return send_file(
        BytesIO(file_data['content']),
        mimetype='application/pdf'
    )

@app.route('/preview', methods=['POST'])
def preview():
    file_id = session.get('file_id')
    if not file_id or file_id not in uploaded_files:
        return jsonify({'error': 'File not found'}), 404
    
    try:
        # Get parameters from request
        data = request.json
        text = data.get('text', 'Confidential')
        font_size = int(data.get('fontSize', 60))
        opacity = float(data.get('opacity', 0.25))
        rotation = float(data.get('rotation', 45))
        x_offset = float(data.get('xOffset', 0))
        y_offset = float(data.get('yOffset', 0))
        
        # Get the uploaded file
        file_data = uploaded_files[file_id]
        pdf_file = BytesIO(file_data['content'])
        
        # Generate preview
        preview_pdf = add_watermark_to_pdf(
            pdf_file, 
            text, 
            font_size=font_size, 
            opacity=opacity, 
            rotation=rotation,
            x_offset=x_offset,
            y_offset=y_offset
        )
        
        return send_file(
            preview_pdf,
            mimetype='application/pdf'
        )
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/download', methods=['POST'])
def download():
    file_id = session.get('file_id')
    if not file_id or file_id not in uploaded_files:
        return 'File not found', 404
    
    try:
        # Get parameters from request
        data = request.json
        text = data.get('text', 'Confidential')
        font_size = int(data.get('fontSize', 60))
        opacity = float(data.get('opacity', 0.25))
        rotation = float(data.get('rotation', 45))
        x_offset = float(data.get('xOffset', 0))
        y_offset = float(data.get('yOffset', 0))
        
        # Get the uploaded file
        file_data = uploaded_files[file_id]
        pdf_file = BytesIO(file_data['content'])
        
        # Generate watermarked PDF
        watermarked_pdf = add_watermark_to_pdf(
            pdf_file, 
            text, 
            font_size=font_size, 
            opacity=opacity, 
            rotation=rotation,
            x_offset=x_offset,
            y_offset=y_offset
        )
        
        # Generate output filename
        base_name = os.path.splitext(file_data['filename'])[0]
        output_filename = f"{base_name}_watermarked.pdf"
        
        return send_file(
            watermarked_pdf,
            mimetype='application/pdf',
            as_attachment=True,
            download_name=output_filename
        )
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
