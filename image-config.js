/* 
 * Image Configuration for Art Gallery
 * Update this file with actual image paths from Figma designs
 * 
 * GitHub Pages Support:
 * - Uses relative paths that work with GitHub Pages
 * - Supports both local development and GitHub Pages hosting
 * - Can use GitHub raw content URLs if needed
 */

// Detect if running on GitHub Pages
function getBasePath() {
    // Check if we're on GitHub Pages
    if (window.location.hostname.includes('github.io')) {
        // For GitHub Pages, use relative paths
        // If repo name is in path, adjust accordingly
        const path = window.location.pathname;
        const repoMatch = path.match(/\/([^\/]+)\//);
        if (repoMatch && repoMatch[1] !== '') {
            // Repository name is in path
            return `/${repoMatch[1]}/images/`;
        }
        return 'images/';
    }
    // Local development
    return 'images/';
}

// Base path for images - works with both local and GitHub Pages
const IMAGE_BASE_PATH = getBasePath();

// Image configuration - Update these paths with actual Figma images
const IMAGE_CONFIG = {
    // Home page - Welcome section background
    welcomeBackground: IMAGE_BASE_PATH + 'welcome-background.jpg',
    
    // Curator's Picks images (update with actual Figma images)
    curatorsPicks: [
        { id: 1, image: IMAGE_BASE_PATH + 'curator-pick-1.jpg' },
        { id: 2, image: IMAGE_BASE_PATH + 'curator-pick-2.jpg' },
        { id: 3, image: IMAGE_BASE_PATH + 'curator-pick-3.jpg' },
        { id: 4, image: IMAGE_BASE_PATH + 'curator-pick-4.jpg' },
        { id: 5, image: IMAGE_BASE_PATH + 'curator-pick-5.jpg' },
        { id: 6, image: IMAGE_BASE_PATH + 'curator-pick-6.jpg' }
    ],
    
    // Trending Art images (update with actual Figma images)
    trendingArt: [
        { id: 7, image: IMAGE_BASE_PATH + 'trending-1.jpg' },
        { id: 8, image: IMAGE_BASE_PATH + 'trending-2.jpg' },
        { id: 9, image: IMAGE_BASE_PATH + 'trending-3.jpg' },
        { id: 10, image: IMAGE_BASE_PATH + 'trending-4.jpg' },
        { id: 11, image: IMAGE_BASE_PATH + 'trending-5.jpg' },
        { id: 12, image: IMAGE_BASE_PATH + 'trending-6.jpg' }
    ],
    
    // Featured Artist images (update with actual Figma images)
    featuredArtist: [
        { id: 13, image: IMAGE_BASE_PATH + 'featured-1.jpg' },
        { id: 14, image: IMAGE_BASE_PATH + 'featured-2.jpg' },
        { id: 15, image: IMAGE_BASE_PATH + 'featured-3.jpg' },
        { id: 16, image: IMAGE_BASE_PATH + 'featured-4.jpg' },
        { id: 17, image: IMAGE_BASE_PATH + 'featured-5.jpg' },
        { id: 18, image: IMAGE_BASE_PATH + 'featured-6.jpg' }
    ],
    
    // Paintings page grid images (update with actual Figma images)
    paintingsGrid: [
        { id: 1, image: IMAGE_BASE_PATH + 'painting-1.jpg' },
        { id: 2, image: IMAGE_BASE_PATH + 'painting-2.jpg' },
        { id: 3, image: IMAGE_BASE_PATH + 'painting-3.jpg' },
        { id: 4, image: IMAGE_BASE_PATH + 'painting-4.jpg' },
        { id: 5, image: IMAGE_BASE_PATH + 'painting-5.jpg' },
        { id: 6, image: IMAGE_BASE_PATH + 'painting-6.jpg' },
        { id: 7, image: IMAGE_BASE_PATH + 'painting-7.jpg' },
        { id: 8, image: IMAGE_BASE_PATH + 'painting-8.jpg' },
        { id: 9, image: IMAGE_BASE_PATH + 'painting-9.jpg' },
        { id: 10, image: IMAGE_BASE_PATH + 'painting-10.jpg' },
        { id: 11, image: IMAGE_BASE_PATH + 'painting-11.jpg' },
        { id: 12, image: IMAGE_BASE_PATH + 'painting-12.jpg' }
    ],
    
    // Social icons
    socialIcons: {
        email: IMAGE_BASE_PATH + 'email-icon.svg',
        other: IMAGE_BASE_PATH + 'social-icon.svg'
    }
};

// Function to get image path by ID and category
function getImagePath(id, category = 'all') {
    if (category === 'curatorsPicks') {
        const item = IMAGE_CONFIG.curatorsPicks.find(img => img.id === id);
        return item ? item.image : null;
    }
    if (category === 'trendingArt') {
        const item = IMAGE_CONFIG.trendingArt.find(img => img.id === id);
        return item ? item.image : null;
    }
    if (category === 'featuredArtist') {
        const item = IMAGE_CONFIG.featuredArtist.find(img => img.id === id);
        return item ? item.image : null;
    }
    if (category === 'paintingsGrid' || category === 'all') {
        const item = IMAGE_CONFIG.paintingsGrid.find(img => img.id === id);
        return item ? item.image : null;
    }
    return null;
}

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.IMAGE_CONFIG = IMAGE_CONFIG;
    window.getImagePath = getImagePath;
}

