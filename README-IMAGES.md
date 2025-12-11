# Image Setup Instructions

This document explains how to update the website with images from your Figma designs.

## Current Status

The website is currently using placeholder images from Unsplash. To use the actual images from your Figma designs, follow these steps:

## Step 1: Access Figma Designs

Once the Figma API rate limit clears, you can access the designs using the Figma MCP tool. The file key is: `SeM2FCFopRi5aX1hZfoNJT`

## Step 2: Identify Images in Figma

The following images need to be extracted from Figma:

### Home Page (`index.html`)
- **Welcome Section Background**: Hero image for the welcome section
- **Curator's Picks**: 6 art images for the curator's picks carousel
- **Trending Art**: 6 art images for the trending art carousel  
- **Featured Artist**: 6 art images for the featured artist carousel

### Paintings Page (`paintings.html`)
- **Paintings Grid**: 12+ art images for the paintings grid

### Other Images
- Social media icons (email, etc.)

## Step 3: Download Images from Figma

Once you have access to Figma, you can:

1. Use the Figma MCP tool to fetch image nodes
2. Use the `download_figma_images` function to download images
3. Save images to the `images/` folder with the following naming convention:
   - `welcome-background.jpg` - Welcome section background
   - `curator-pick-1.jpg` through `curator-pick-6.jpg` - Curator's picks
   - `trending-1.jpg` through `trending-6.jpg` - Trending art
   - `featured-1.jpg` through `featured-6.jpg` - Featured artist
   - `painting-1.jpg` through `painting-12.jpg` - Paintings grid

## Step 4: Update Image Configuration

The `image-config.js` file contains the image mapping. Update the paths in this file to match your downloaded images.

## Step 5: Verify Images

After adding images:
1. Check that all image paths in `image-config.js` are correct
2. Verify images display correctly on both pages
3. Test that fallback images work if local images are missing

## Image Requirements

- **Format**: JPG or PNG for photos, SVG for icons
- **Size**: Optimize images for web (recommended max width: 1200px for large images, 600px for thumbnails)
- **Naming**: Use lowercase with hyphens (e.g., `curator-pick-1.jpg`)

## Current Image Structure

```
images/
├── welcome-background.jpg (to be added from Figma)
├── curator-pick-1.jpg through curator-pick-6.jpg (to be added)
├── trending-1.jpg through trending-6.jpg (to be added)
├── featured-1.jpg through featured-6.jpg (to be added)
├── painting-1.jpg through painting-12.jpg (to be added)
└── email-icon.svg, social-icon.svg (to be added)
```

## Automatic Image Loading

The website is configured to:
1. First try to load images from the local `images/` folder (as configured in `image-config.js`)
2. Fall back to placeholder images if local images are not found
3. This ensures the site works even before all images are added

## Notes

- The `script.js` file uses the `getArtImage()` function which automatically handles image loading
- Images are loaded dynamically, so you can update `image-config.js` without modifying the main script
- Make sure all image files are in the `images/` folder relative to the HTML files

