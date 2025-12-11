/* 
 * Script to download images from Figma designs
 * This script will help identify and download all images from the Figma file
 * 
 * Usage: Once Figma API access is available, this can be used to download images
 */

// Figma file key
const FIGMA_FILE_KEY = 'SeM2FCFopRi5aX1hZfoNJT';

// Node IDs from the provided Figma URLs
const FIGMA_NODES = [
    '9:51',      // Home page
    '320:235',   // Page section
    '141:57',    // Page section
    '320:92',    // Page section
    '320:378',   // Page section
    '384:128',   // Page section
    '96:1060',   // Page section
    '384:527',   // Page section
    '384:794',   // Page section
    '150:285',   // Page section
    '166:87',    // Page section
    '345:1028',  // Page section
    '150:1105',  // Page section
    '363:187',   // Page section
    '345:980',   // Page section
    '312:996',   // Page section
    '473:187',   // Page section
    '363:369',   // Page section
    '330:144',   // Page section
    '150:1055',  // Page section
    '312:523'    // Page section
];

// Image mapping structure
// This will be populated with actual image data from Figma
const IMAGE_MAP = {
    // Home page images
    welcomeBackground: 'images/welcome-background.jpg',
    curatorsPicks: [
        'images/curator-pick-1.jpg',
        'images/curator-pick-2.jpg',
        'images/curator-pick-3.jpg',
        'images/curator-pick-4.jpg',
        'images/curator-pick-5.jpg',
        'images/curator-pick-6.jpg'
    ],
    trendingArt: [
        'images/trending-1.jpg',
        'images/trending-2.jpg',
        'images/trending-3.jpg',
        'images/trending-4.jpg',
        'images/trending-5.jpg',
        'images/trending-6.jpg'
    ],
    featuredArtist: [
        'images/featured-1.jpg',
        'images/featured-2.jpg',
        'images/featured-3.jpg',
        'images/featured-4.jpg',
        'images/featured-5.jpg',
        'images/featured-6.jpg'
    ],
    // Paintings page images
    paintingsGrid: [
        'images/painting-1.jpg',
        'images/painting-2.jpg',
        'images/painting-3.jpg',
        'images/painting-4.jpg',
        'images/painting-5.jpg',
        'images/painting-6.jpg',
        'images/painting-7.jpg',
        'images/painting-8.jpg',
        'images/painting-9.jpg',
        'images/painting-10.jpg',
        'images/painting-11.jpg',
        'images/painting-12.jpg'
    ],
    // Social icons
    socialIcons: {
        email: 'images/email-icon.svg',
        other: 'images/social-icon.svg'
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FIGMA_FILE_KEY, FIGMA_NODES, IMAGE_MAP };
}

