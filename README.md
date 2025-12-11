# Art of the Century - Art Gallery Website

A beautiful, responsive art gallery website built with HTML, CSS, and JavaScript.

## Features

- 🎨 Modern, clean design
- 📱 Fully responsive layout
- 🖼️ Image carousels for featured art
- 🔍 Search functionality
- 🛒 Shopping cart system
- 👤 User authentication (Login/Signup)
- 🎯 Filter system for paintings
- ⚡ Fast and lightweight

## GitHub Pages Setup

This website is configured to work with GitHub Pages. Follow these steps to deploy:

### 1. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select your branch (main or master)
4. Select the root folder
5. Click "Save"

### 2. Repository Structure

Make sure your repository has this structure:

```
Paintings/
├── index.html
├── paintings.html
├── styles.css
├── script.js
├── image-config.js
├── images/
│   ├── welcome-background.jpg
│   ├── curator-pick-1.jpg
│   ├── curator-pick-2.jpg
│   └── ... (other images)
└── README.md
```

### 3. Image Setup

1. Add your images to the `images/` folder
2. Images will automatically load using relative paths
3. The system includes fallback images if local images are missing

### 4. Access Your Site

Once GitHub Pages is enabled, your site will be available at:
- `https://[your-username].github.io/[repository-name]/`

## Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

## File Structure

- `index.html` - Home page
- `paintings.html` - Paintings gallery page
- `styles.css` - All styling
- `script.js` - Interactive functionality
- `image-config.js` - Image configuration
- `images/` - Image assets folder

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for use.

## Contributing

Feel free to submit issues or pull requests!

