# Adding Project Images

## Quick Guide

To add images to your projects, follow these simple steps:

### 1. Add Images to Public Folder

Place your project images in the `public` folder. Use descriptive names:
- `project-name-1.png`
- `project-name-2.png`
- `canvas-attendance-1.png`
- `moneybird-telegram-1.png`

### 2. Update Project Data

Edit `src/data/index.ts` and add the `images` array to your project:

```typescript
"canvas-attendance": {
  slug: "canvas-attendance",
  title: "Canvas Attendance System",
  // ... other fields ...
  images: [
    "/canvas-attendance-1.png",
    "/canvas-attendance-2.png",
    "/canvas-attendance-3.png"
  ],
  // ... rest of fields
}
```

### 3. Image Specifications

**Recommended:**
- Format: PNG or JPG
- Dimensions: 1920x1080 (16:9 aspect ratio) or similar
- File size: < 500KB for fast loading
- Clear screenshots showing key features

**What to capture:**
- Main interface/dashboard
- Key features in action
- Before/after comparisons
- User workflow examples

### 4. Current Status

✅ **Qur'an Word Add-in** - Has 3 images
- Shows task pane interface
- Search functionality
- Verse insertion feature

⏳ **Canvas Attendance** - Ready for images
⏳ **Moneybird Telegram** - Ready for images

### 5. Features

**Project Cards:**
- First image displays as card background
- Icon overlays on bottom-left
- Hover zoom effect
- Projects without images show icon only

**Project Detail Pages:**
- Image gallery with main view
- Thumbnail navigation (if multiple images)
- Click to switch between images
- Full-width responsive display

### Need Help?

Just add your images to the `public` folder and let me know - I'll update the project data for you!
