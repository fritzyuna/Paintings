# Figma Images Integration Guide

## Current Status

The website is set up to use images from your Figma designs. Due to Figma API rate limits, the images need to be manually added or downloaded when the API is available.

## Image Requirements from Figma

Based on the Figma designs you provided, the following images are needed:

### Home Page Images
1. **Welcome Section Background** - `images/welcome-background.jpg`
2. **Curator's Picks** (6 images):
   - `images/curator-pick-1.jpg`
   - `images/curator-pick-2.jpg`
   - `images/curator-pick-3.jpg`
   - `images/curator-pick-4.jpg`
   - `images/curator-pick-5.jpg`
   - `images/curator-pick-6.jpg`

3. **Trending Art** (6 images):
   - `images/trending-1.jpg`
   - `images/trending-2.jpg`
   - `images/trending-3.jpg`
   - `images/trending-4.jpg`
   - `images/trending-5.jpg`
   - `images/trending-6.jpg`

4. **Featured Artist** (6 images):
   - `images/featured-1.jpg`
   - `images/featured-2.jpg`
   - `images/featured-3.jpg`
   - `images/featured-4.jpg`
   - `images/featured-5.jpg`
   - `images/featured-6.jpg`

### Paintings Page Images
- **Paintings Grid** (12+ images):
   - `images/painting-1.jpg` through `images/painting-12.jpg`
   - Add more as needed

## How to Add Images from Figma

### Option 1: Manual Download from Figma
1. Open your Figma file: `SeM2FCFopRi5aX1hZfoNJT`
2. Select each image/artwork
3. Export as JPG or PNG
4. Save to the `images/` folder with the correct naming convention

### Option 2: Using Figma API (when available)
Once the Figma API rate limit clears, you can use the download tool to automatically extract images.

## Image Mapping

The images are mapped in `image-config.js`. Each art item has an ID that corresponds to:
- Curator's Picks: IDs 1-6
- Trending Art: IDs 7-12
- Featured Artist: IDs 13-18
- Paintings Grid: IDs 1-12 (can overlap with Curator's Picks)

## Current Functionality

✅ **Like/Wishlist System** - Fully implemented
- Heart icon on each art item
- Like icon in header shows count
- Wishlist page to view liked items
- Persistent storage using localStorage

✅ **Shopping Cart** - Fully implemented
- Cart icon in header
- Add to cart buttons on all items
- Cart modal with items and total
- Persistent storage using localStorage

✅ **Image System** - Ready for Figma images
- Automatic path detection (local vs GitHub Pages)
- Fallback to placeholder images
- Error handling for missing images

## Next Steps

1. **Add Images**: Once you have access to Figma or can download images manually:
   - Export images from Figma
   - Save to `images/` folder
   - Images will automatically load

2. **Verify**: Check that all images display correctly on:
   - Home page carousels
   - Paintings page grid
   - Art detail modals

3. **Test**: Ensure all functionality works:
   - Like/unlike items
   - Add to cart
   - View wishlist
   - Search and filters

## Image Specifications

- **Format**: JPG or PNG
- **Recommended Size**: 
  - Thumbnails: 400x500px
  - Full images: 1200x1500px
  - Background: 1920x1080px
- **Optimization**: Compress images for web to improve loading speed

