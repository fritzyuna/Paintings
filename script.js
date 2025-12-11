/* ============================================
   Art of the Century - Main JavaScript
   ============================================ */

// Load image configuration if available
let imageConfig = {};
if (typeof window !== 'undefined' && window.IMAGE_CONFIG) {
    imageConfig = window.IMAGE_CONFIG;
}

// Helper function to get image path - tries local images first, falls back to placeholder
// Works with GitHub Pages and local development
function getArtImage(id, category = 'all', fallbackUrl = null) {
    // Try to get from image config first
    if (window.getImagePath) {
        const localPath = window.getImagePath(id, category);
        if (localPath) {
            // Return the path - it will work with GitHub Pages relative paths
            return localPath;
        }
    }
    // Fallback to provided URL or placeholder
    return fallbackUrl || `https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop`;
}

// Function to preload images and handle errors (for GitHub Pages)
function preloadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
        img.src = src;
    });
}

// Function to handle image loading errors (fallback for GitHub)
function handleImageError(img, fallbackUrl) {
    img.onerror = null; // Prevent infinite loop
    if (fallbackUrl && img.src !== fallbackUrl) {
        img.src = fallbackUrl;
    }
}

// Sample art data - Replace with actual data from your API/database
// Images will be updated from Figma designs
const artData = {
    curatorsPicks: [
        {
            id: 1,
            title: "Starry Night",
            artist: "Vincent van Gogh",
            price: "$120,000",
            image: getArtImage(1, 'curatorsPicks', "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop")
        },
        {
            id: 2,
            title: "The Persistence of Memory",
            artist: "Salvador Dalí",
            price: "$95,000",
            image: getArtImage(2, 'curatorsPicks', "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=500&fit=crop")
        },
        {
            id: 3,
            title: "Water Lilies",
            artist: "Claude Monet",
            price: "$150,000",
            image: getArtImage(3, 'curatorsPicks', "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=400&h=500&fit=crop")
        },
        {
            id: 4,
            title: "The Scream",
            artist: "Edvard Munch",
            price: "$200,000",
            image: getArtImage(4, 'curatorsPicks', "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop")
        },
        {
            id: 5,
            title: "Guernica",
            artist: "Pablo Picasso",
            price: "$180,000",
            image: getArtImage(5, 'curatorsPicks', "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=500&fit=crop")
        },
        {
            id: 6,
            title: "The Birth of Venus",
            artist: "Sandro Botticelli",
            price: "$250,000",
            image: getArtImage(6, 'curatorsPicks', "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop")
        }
    ],
    trendingArt: [
        {
            id: 7,
            title: "Sunflowers",
            artist: "Vincent van Gogh",
            price: "$110,000",
            image: getArtImage(7, 'trendingArt', "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=400&h=500&fit=crop")
        },
        {
            id: 8,
            title: "The Great Wave",
            artist: "Hokusai",
            price: "$85,000",
            image: getArtImage(8, 'trendingArt', "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop")
        },
        {
            id: 9,
            title: "Girl with a Pearl Earring",
            artist: "Johannes Vermeer",
            price: "$140,000",
            image: getArtImage(9, 'trendingArt', "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop")
        },
        {
            id: 10,
            title: "The Kiss",
            artist: "Gustav Klimt",
            price: "$160,000",
            image: getArtImage(10, 'trendingArt', "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=500&fit=crop")
        },
        {
            id: 11,
            title: "Nighthawks",
            artist: "Edward Hopper",
            price: "$130,000",
            image: getArtImage(11, 'trendingArt', "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=400&h=500&fit=crop")
        },
        {
            id: 12,
            title: "Campbell's Soup Cans",
            artist: "Andy Warhol",
            price: "$170,000",
            image: getArtImage(12, 'trendingArt', "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop")
        }
    ],
    featuredArtist: [
        {
            id: 13,
            title: "Abstract Composition",
            artist: "Wassily Kandinsky",
            price: "$90,000",
            image: getArtImage(13, 'featuredArtist', "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop")
        },
        {
            id: 14,
            title: "Composition with Red, Blue and Yellow",
            artist: "Piet Mondrian",
            price: "$100,000",
            image: getArtImage(14, 'featuredArtist', "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=500&fit=crop")
        },
        {
            id: 15,
            title: "No. 5",
            artist: "Jackson Pollock",
            price: "$220,000",
            image: getArtImage(15, 'featuredArtist', "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=400&h=500&fit=crop")
        },
        {
            id: 16,
            title: "Blue Poles",
            artist: "Jackson Pollock",
            price: "$200,000",
            image: getArtImage(16, 'featuredArtist', "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop")
        },
        {
            id: 17,
            title: "Woman I",
            artist: "Willem de Kooning",
            price: "$180,000",
            image: getArtImage(17, 'featuredArtist', "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop")
        },
        {
            id: 18,
            title: "Orange, Red, Yellow",
            artist: "Mark Rothko",
            price: "$190,000",
            image: getArtImage(18, 'featuredArtist', "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=500&fit=crop")
        }
    ],
    allPaintings: [
        {
            id: 1,
            title: "Starry Night",
            artist: "Vincent van Gogh",
            price: "$120,000",
            image: getArtImage(1, 'paintingsGrid', "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop"),
            size: "Large",
            medium: "Oil",
            year: 1889
        },
        {
            id: 2,
            title: "The Persistence of Memory",
            artist: "Salvador Dalí",
            price: "$95,000",
            image: getArtImage(2, 'paintingsGrid', "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=500&fit=crop"),
            size: "Medium",
            medium: "Oil",
            year: 1931
        },
        {
            id: 3,
            title: "Water Lilies",
            artist: "Claude Monet",
            price: "$150,000",
            image: getArtImage(3, 'paintingsGrid', "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=400&h=500&fit=crop"),
            size: "Large",
            medium: "Oil",
            year: 1919
        },
        {
            id: 4,
            title: "The Scream",
            artist: "Edvard Munch",
            price: "$200,000",
            image: getArtImage(4, 'paintingsGrid', "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop"),
            size: "Medium",
            medium: "Tempera",
            year: 1893
        },
        {
            id: 5,
            title: "Guernica",
            artist: "Pablo Picasso",
            price: "$180,000",
            image: getArtImage(5, 'paintingsGrid', "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=500&fit=crop"),
            size: "Large",
            medium: "Oil",
            year: 1937
        },
        {
            id: 6,
            title: "The Birth of Venus",
            artist: "Sandro Botticelli",
            price: "$250,000",
            image: getArtImage(6, 'paintingsGrid', "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop"),
            size: "Large",
            medium: "Tempera",
            year: 1486
        },
        {
            id: 7,
            title: "Sunflowers",
            artist: "Vincent van Gogh",
            price: "$110,000",
            image: getArtImage(7, 'paintingsGrid', "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=400&h=500&fit=crop"),
            size: "Medium",
            medium: "Oil",
            year: 1888
        },
        {
            id: 8,
            title: "The Great Wave",
            artist: "Hokusai",
            price: "$85,000",
            image: getArtImage(8, 'paintingsGrid', "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop"),
            size: "Small",
            medium: "Woodblock",
            year: 1831
        },
        {
            id: 9,
            title: "Girl with a Pearl Earring",
            artist: "Johannes Vermeer",
            price: "$140,000",
            image: getArtImage(9, 'paintingsGrid', "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop"),
            size: "Small",
            medium: "Oil",
            year: 1665
        },
        {
            id: 10,
            title: "The Kiss",
            artist: "Gustav Klimt",
            price: "$160,000",
            image: getArtImage(10, 'paintingsGrid', "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=500&fit=crop"),
            size: "Large",
            medium: "Oil",
            year: 1908
        },
        {
            id: 11,
            title: "Nighthawks",
            artist: "Edward Hopper",
            price: "$130,000",
            image: getArtImage(11, 'paintingsGrid', "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=400&h=500&fit=crop"),
            size: "Medium",
            medium: "Oil",
            year: 1942
        },
        {
            id: 12,
            title: "Campbell's Soup Cans",
            artist: "Andy Warhol",
            price: "$170,000",
            image: getArtImage(12, 'paintingsGrid', "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop"),
            size: "Large",
            medium: "Acrylic",
            year: 1962
        }
    ]
};

// ============================================
// Carousel Functionality
// ============================================

class ArtCarousel {
    constructor(containerId, data, itemsPerView = 4) {
        this.container = document.getElementById(containerId);
        this.data = data;
        this.itemsPerView = itemsPerView;
        this.currentIndex = 0;
        this.grid = null;
        this.prevBtn = null;
        this.nextBtn = null;
        
        this.init();
    }
    
    init() {
        if (!this.container) return;
        
        this.grid = this.container.querySelector('.art-grid');
        this.prevBtn = this.container.querySelector('.carousel-prev');
        this.nextBtn = this.container.querySelector('.carousel-next');
        
        this.render();
        this.attachEventListeners();
        this.updateButtons();
    }
    
    render() {
        if (!this.grid) return;
        
        this.grid.innerHTML = '';
        const visibleItems = this.data.slice(
            this.currentIndex,
            this.currentIndex + this.itemsPerView
        );
        
        visibleItems.forEach(item => {
            const artItem = this.createArtItem(item);
            this.grid.appendChild(artItem);
        });
    }
    
    createArtItem(item) {
        const div = document.createElement('div');
        div.className = 'art-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="art-item-image" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop';">
            <div class="art-item-info">
                <h3 class="art-item-title">${item.title}</h3>
                <p class="art-item-artist">${item.artist}</p>
                <p class="art-item-price">${item.price}</p>
                <button class="add-to-cart-btn" data-id="${item.id}" style="width: 100%; margin-top: 0.75rem; padding: 0.5rem; background-color: var(--text-dark); color: white; border: none; border-radius: 4px; font-weight: 700; cursor: pointer; font-size: 0.875rem; transition: background-color 0.2s;">Add to Cart</button>
            </div>
        `;
        
        // Add click event for art item image/title (view details)
        const image = div.querySelector('.art-item-image');
        const title = div.querySelector('.art-item-title');
        [image, title].forEach(el => {
            if (el) {
                el.style.cursor = 'pointer';
                el.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.handleArtItemClick(item);
                });
            }
        });
        
        // Add error handling for GitHub Pages
        if (image) {
            image.addEventListener('error', function() {
                handleImageError(this, item.image.includes('unsplash') ? item.image : 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop');
            });
        }
        
        // Add to cart button handler
        const addToCartBtn = div.querySelector('.add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(item);
            });
            addToCartBtn.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'var(--accent-color)';
            });
            addToCartBtn.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'var(--text-dark)';
            });
        }
        
        return div;
    }
    
    handleArtItemClick(item) {
        // Navigate to art detail page or show detail modal
        showArtDetail(item);
    }
    
    attachEventListeners() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex -= this.itemsPerView;
            if (this.currentIndex < 0) this.currentIndex = 0;
            this.render();
            this.updateButtons();
        }
    }
    
    next() {
        if (this.currentIndex + this.itemsPerView < this.data.length) {
            this.currentIndex += this.itemsPerView;
            this.render();
            this.updateButtons();
        }
    }
    
    updateButtons() {
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentIndex === 0;
        }
        
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentIndex + this.itemsPerView >= this.data.length;
        }
    }
}

// ============================================
// Paintings Grid Functionality
// ============================================

class PaintingsGrid {
    constructor(containerId, data) {
        this.container = document.getElementById(containerId);
        this.data = data;
        this.filteredData = [...data];
        this.filters = {
            size: null,
            medium: null,
            price: null
        };
        
        this.init();
    }
    
    init() {
        if (!this.container) return;
        
        this.render();
        this.attachFilterListeners();
    }
    
    render() {
        if (!this.container) return;
        
        this.container.innerHTML = '';
        
        if (this.filteredData.length === 0) {
            this.container.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                    <p style="font-size: 1.25rem; color: #666;">No paintings found matching your filters.</p>
                </div>
            `;
            return;
        }
        
        this.filteredData.forEach(item => {
            const artItem = this.createArtItem(item);
            this.container.appendChild(artItem);
        });
    }
    
    createArtItem(item) {
        const div = document.createElement('div');
        div.className = 'art-item';
        const isItemLiked = isLiked(item.id);
        div.innerHTML = `
            <div style="position: relative;">
                <img src="${item.image}" alt="${item.title}" class="art-item-image" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop';">
                <button class="like-btn ${isItemLiked ? 'liked' : ''}" data-id="${item.id}" title="${isItemLiked ? 'Remove from wishlist' : 'Add to wishlist'}" style="position: absolute; top: 0.75rem; right: 0.75rem; background: rgba(255, 255, 255, 0.9); border: none; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; z-index: 10; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 21L4.5 13.5C1.5 10.5 1.5 5.5 4.5 2.5C6 1 8.5 0.5 11 0.5C13.5 0.5 16 1 17.5 2.5L12 8L6.5 2.5C5 1 2.5 0.5 0 0.5C-2.5 0.5 -5 1 -6.5 2.5C-9.5 5.5 -9.5 10.5 -6.5 13.5L1 21L12 21Z" stroke="currentColor" stroke-width="1.5" fill="none" class="heart-outline" style="${isItemLiked ? 'display: none;' : 'display: block;'}"/>
                        <path d="M12 21L4.5 13.5C1.5 10.5 1.5 5.5 4.5 2.5C6 1 8.5 0.5 11 0.5C13.5 0.5 16 1 17.5 2.5L12 8L6.5 2.5C5 1 2.5 0.5 0 0.5C-2.5 0.5 -5 1 -6.5 2.5C-9.5 5.5 -9.5 10.5 -6.5 13.5L1 21L12 21Z" stroke="currentColor" stroke-width="1.5" fill="currentColor" class="heart-filled" style="${isItemLiked ? 'display: block; color: #ff4444;' : 'display: none;'}"/>
                    </svg>
                </button>
            </div>
            <div class="art-item-info">
                <h3 class="art-item-title">${item.title}</h3>
                <p class="art-item-artist">${item.artist}</p>
                <p class="art-item-price">${item.price}</p>
                <button class="add-to-cart-btn" data-id="${item.id}" style="width: 100%; margin-top: 0.75rem; padding: 0.5rem; background-color: var(--text-dark); color: white; border: none; border-radius: 4px; font-weight: 700; cursor: pointer; font-size: 0.875rem; transition: background-color 0.2s;">Add to Cart</button>
            </div>
        `;
        
        // Add click event for art item image/title (view details)
        const image = div.querySelector('.art-item-image');
        const title = div.querySelector('.art-item-title');
        [image, title].forEach(el => {
            if (el) {
                el.style.cursor = 'pointer';
                el.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.handleArtItemClick(item);
                });
            }
        });
        
        // Add error handling for GitHub Pages
        if (image) {
            image.addEventListener('error', function() {
                handleImageError(this, item.image.includes('unsplash') ? item.image : 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop');
            });
        }
        
        // Like button handler
        const likeBtn = div.querySelector('.like-btn');
        if (likeBtn) {
            likeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const wasAdded = toggleLike(item);
                likeBtn.classList.toggle('liked');
                const heartOutline = likeBtn.querySelector('.heart-outline');
                const heartFilled = likeBtn.querySelector('.heart-filled');
                if (wasAdded) {
                    heartOutline.style.display = 'none';
                    heartFilled.style.display = 'block';
                    heartFilled.style.color = '#ff4444';
                    likeBtn.title = 'Remove from wishlist';
                } else {
                    heartOutline.style.display = 'block';
                    heartFilled.style.display = 'none';
                    likeBtn.title = 'Add to wishlist';
                }
            });
            likeBtn.addEventListener('mouseenter', function() {
                this.style.background = 'rgba(255, 255, 255, 1)';
                this.style.transform = 'scale(1.1)';
            });
            likeBtn.addEventListener('mouseleave', function() {
                this.style.background = 'rgba(255, 255, 255, 0.9)';
                this.style.transform = 'scale(1)';
            });
        }
        
        // Add to cart button handler
        const addToCartBtn = div.querySelector('.add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(item);
            });
            addToCartBtn.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'var(--accent-color)';
            });
            addToCartBtn.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'var(--text-dark)';
            });
        }
        
        return div;
    }
    
    handleArtItemClick(item) {
        // Navigate to art detail page or show detail modal
        showArtDetail(item);
    }
    
    attachFilterListeners() {
        // Filter dropdowns
        const filterDropdowns = document.querySelectorAll('.filter-dropdown');
        filterDropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', (e) => {
                e.stopPropagation();
                this.showFilterMenu(dropdown);
            });
        });
        
        // Clear all button
        const clearAllBtn = document.querySelector('.clear-all-btn');
        if (clearAllBtn) {
            clearAllBtn.addEventListener('click', () => {
                this.clearFilters();
            });
        }
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            this.closeAllDropdowns();
        });
    }
    
    showFilterMenu(dropdown) {
        // Close other dropdowns first
        this.closeAllDropdowns();
        
        const filterType = dropdown.querySelector('.filter-label').textContent.trim().toLowerCase();
        let options = [];
        
        if (filterType === 'size') {
            options = ['Small', 'Medium', 'Large'];
        } else if (filterType === 'medium') {
            options = ['Oil', 'Acrylic', 'Watercolor', 'Tempera', 'Woodblock'];
        } else if (filterType === 'price') {
            options = ['Under $50,000', '$50,000 - $100,000', '$100,000 - $200,000', 'Over $200,000'];
        }
        
        // Create dropdown menu
        const menu = document.createElement('div');
        menu.className = 'filter-dropdown-menu';
        menu.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            background-color: white;
            border: 2px solid var(--border-color);
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            min-width: 200px;
            z-index: 1000;
            margin-top: 0.5rem;
            animation: fadeIn 0.2s ease;
        `;
        
        let menuHTML = '<div style="padding: 0.5rem;">';
        options.forEach(option => {
            const isSelected = this.filters[filterType] === option;
            menuHTML += `
                <div class="filter-option" 
                     data-value="${option}"
                     data-type="${filterType}"
                     style="padding: 0.75rem; cursor: pointer; border-radius: 4px; transition: background-color 0.2s; ${isSelected ? 'background-color: #F5F5F5; font-weight: 700;' : ''}"
                     onmouseover="if(!this.style.backgroundColor || this.style.backgroundColor === 'transparent') this.style.backgroundColor='#F5F5F5'"
                     onmouseout="if(!this.classList.contains('selected')) this.style.backgroundColor='transparent'">
                    ${option} ${isSelected ? '✓' : ''}
                </div>
            `;
        });
        menuHTML += '</div>';
        menu.innerHTML = menuHTML;
        
        // Position menu
        dropdown.style.position = 'relative';
        dropdown.appendChild(menu);
        
        // Handle option clicks
        const optionElements = menu.querySelectorAll('.filter-option');
        optionElements.forEach(optionEl => {
            optionEl.addEventListener('click', (e) => {
                e.stopPropagation();
                const value = optionEl.dataset.value;
                const type = optionEl.dataset.type;
                
                // Toggle filter
                if (this.filters[type] === value) {
                    this.filters[type] = null;
                } else {
                    this.filters[type] = value;
                }
                
                this.applyFilters();
                this.closeAllDropdowns();
            });
        });
    }
    
    closeAllDropdowns() {
        const menus = document.querySelectorAll('.filter-dropdown-menu');
        menus.forEach(menu => {
            if (menu.parentElement) {
                menu.parentElement.removeChild(menu);
            }
        });
    }
    
    applyFilters() {
        this.filteredData = this.data.filter(item => {
            // Size filter
            if (this.filters.size && item.size !== this.filters.size) return false;
            
            // Medium filter
            if (this.filters.medium && item.medium !== this.filters.medium) return false;
            
            // Price filter
            if (this.filters.price) {
                const itemPrice = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
                const priceFilter = this.filters.price;
                
                if (priceFilter === 'Under $50,000' && itemPrice >= 50000) return false;
                if (priceFilter === '$50,000 - $100,000' && (itemPrice < 50000 || itemPrice > 100000)) return false;
                if (priceFilter === '$100,000 - $200,000' && (itemPrice < 100000 || itemPrice > 200000)) return false;
                if (priceFilter === 'Over $200,000' && itemPrice <= 200000) return false;
            }
            
            return true;
        });
        
        this.render();
        this.updateFilterDisplay();
    }
    
    updateFilterDisplay() {
        // Update filter dropdown labels to show selected filters
        const filterDropdowns = document.querySelectorAll('.filter-dropdown');
        filterDropdowns.forEach(dropdown => {
            const label = dropdown.querySelector('.filter-label');
            const filterType = label.textContent.trim().toLowerCase();
            const selectedValue = this.filters[filterType];
            
            if (selectedValue) {
                // Show selected value (you can style this differently)
                label.textContent = selectedValue;
                dropdown.style.borderColor = 'var(--accent-color)';
            } else {
                // Reset to original label
                const originalLabels = {
                    'size': 'Size',
                    'medium': 'Medium',
                    'price': 'Price'
                };
                label.textContent = originalLabels[filterType] || label.textContent;
                dropdown.style.borderColor = 'var(--border-color)';
            }
        });
    }
    
    clearFilters() {
        this.filters = {
            size: null,
            medium: null,
            price: null
        };
        this.filteredData = [...this.data];
        this.render();
        this.updateFilterDisplay();
        this.closeAllDropdowns();
    }
}

// ============================================
// Search Functionality
// ============================================

function performSearch(query) {
    if (!query || query.trim() === '') {
        return { results: [], type: 'all' };
    }
    
    const searchTerm = query.trim().toLowerCase();
    const allArt = [
        ...artData.curatorsPicks,
        ...artData.trendingArt,
        ...artData.featuredArtist,
        ...artData.allPaintings
    ];
    
    // Remove duplicates by ID
    const uniqueArt = Array.from(new Map(allArt.map(item => [item.id, item])).values());
    
    const results = uniqueArt.filter(item => {
        return item.title.toLowerCase().includes(searchTerm) ||
               item.artist.toLowerCase().includes(searchTerm) ||
               (item.medium && item.medium.toLowerCase().includes(searchTerm));
    });
    
    return { results, type: 'search' };
}

function navigateToSearchResults(query) {
    const searchResults = performSearch(query);
    // Store search results in sessionStorage
    sessionStorage.setItem('searchQuery', query);
    sessionStorage.setItem('searchResults', JSON.stringify(searchResults.results));
    // Navigate to paintings page with search results
    window.location.href = `paintings.html?search=${encodeURIComponent(query)}`;
}

function initSearch() {
    const searchInputs = document.querySelectorAll('.search-input, .search-input-inline');
    const searchButtons = document.querySelectorAll('.search-btn, .search-btn-inline');
    const searchIcons = document.querySelectorAll('.search-icon');
    
    // Handle search inputs
    searchInputs.forEach((input, index) => {
        const searchBtn = searchButtons[index];
        
        const handleSearch = () => {
            const query = input.value.trim();
            if (query) {
                navigateToSearchResults(query);
            }
        };
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
        
        if (searchBtn) {
            searchBtn.addEventListener('click', handleSearch);
        }
    });
    
    // Handle search icon clicks (open search modal or focus input)
    searchIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const searchInput = document.querySelector('.search-input, .search-input-inline');
            if (searchInput) {
                searchInput.focus();
            } else {
                // If on paintings page, scroll to search
                const inlineSearch = document.querySelector('.search-input-inline');
                if (inlineSearch) {
                    inlineSearch.focus();
                }
            }
        });
    });
}

// ============================================
// Wishlist/Like Functionality
// ============================================

let wishlist = JSON.parse(localStorage.getItem('artWishlist')) || [];

function updateLikeBadge() {
    const likeBadges = document.querySelectorAll('.like-badge');
    const totalLikes = wishlist.length;
    
    likeBadges.forEach(badge => {
        badge.textContent = totalLikes;
        badge.style.display = totalLikes > 0 ? 'block' : 'none';
    });
}

function toggleLike(item) {
    const existingIndex = wishlist.findIndex(wishItem => wishItem.id === item.id);
    
    if (existingIndex >= 0) {
        // Remove from wishlist
        wishlist.splice(existingIndex, 1);
        showNotification(`${item.title} removed from wishlist`);
    } else {
        // Add to wishlist
        wishlist.push(item);
        showNotification(`${item.title} added to wishlist`);
    }
    
    localStorage.setItem('artWishlist', JSON.stringify(wishlist));
    updateLikeBadge();
    updateLikeButtons();
    return existingIndex < 0; // Returns true if item was added
}

function isLiked(itemId) {
    return wishlist.some(item => item.id === itemId);
}

function updateLikeButtons() {
    // Update all like buttons on the page
    document.querySelectorAll('.like-btn').forEach(btn => {
        const itemId = parseInt(btn.dataset.id);
        if (isLiked(itemId)) {
            btn.classList.add('liked');
            btn.querySelector('.heart-filled')?.style.setProperty('display', 'block');
            btn.querySelector('.heart-outline')?.style.setProperty('display', 'none');
        } else {
            btn.classList.remove('liked');
            btn.querySelector('.heart-filled')?.style.setProperty('display', 'none');
            btn.querySelector('.heart-outline')?.style.setProperty('display', 'block');
        }
    });
}

function initLikeIcon() {
    const likeIcons = document.querySelectorAll('.like-icon');
    likeIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Navigate to wishlist page
            window.location.href = 'wishlist.html';
        });
    });
}

// ============================================
// Cart Functionality
// ============================================

let cart = JSON.parse(localStorage.getItem('artCart')) || [];

function updateCartBadge() {
    const cartBadges = document.querySelectorAll('.cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartBadges.forEach(badge => {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'block' : 'none';
    });
}

function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    localStorage.setItem('artCart', JSON.stringify(cart));
    updateCartBadge();
    
    // Show notification
    showNotification(`${item.title} added to cart!`);
}

function initCartIcon() {
    const cartIcons = document.querySelectorAll('.cart-icon');
    cartIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Navigate to cart page or show cart modal
            showCartModal();
        });
    });
}

function showCartModal() {
    // Create cart modal
    const modal = document.createElement('div');
    modal.className = 'cart-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background-color: white;
        padding: 2rem;
        border-radius: 8px;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
    `;
    
    let cartHTML = '<h2 style="margin-bottom: 1.5rem; font-family: var(--font-primary);">Shopping Cart</h2>';
    
    if (cart.length === 0) {
        cartHTML += '<p style="text-align: center; padding: 2rem; color: #666;">Your cart is empty</p>';
    } else {
        cartHTML += '<div class="cart-items">';
        let total = 0;
        cart.forEach(item => {
            const itemPrice = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
            const itemTotal = itemPrice * item.quantity;
            total += itemTotal;
            
            cartHTML += `
                <div class="cart-item" style="display: flex; gap: 1rem; padding: 1rem; border-bottom: 1px solid #E0E0E0; margin-bottom: 1rem;">
                    <img src="${item.image}" alt="${item.title}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px;">
                    <div style="flex: 1;">
                        <h3 style="margin: 0 0 0.5rem 0; font-size: 1rem;">${item.title}</h3>
                        <p style="margin: 0 0 0.5rem 0; color: #666; font-size: 0.875rem;">${item.artist}</p>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <span style="font-weight: 700; color: var(--accent-color);">${item.price}</span>
                                <span style="margin-left: 0.5rem; color: #666;">x ${item.quantity}</span>
                            </div>
                            <button class="remove-item-btn" data-id="${item.id}" style="background: none; border: none; color: #ff4444; cursor: pointer; font-size: 0.875rem;">Remove</button>
                        </div>
                    </div>
                </div>
            `;
        });
        cartHTML += '</div>';
        cartHTML += `<div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 2px solid #E0E0E0;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                <span style="font-weight: 700; font-size: 1.25rem;">Total:</span>
                <span style="font-weight: 700; font-size: 1.25rem; color: var(--accent-color);">$${total.toLocaleString()}</span>
            </div>
            <button class="checkout-btn" style="width: 100%; padding: 1rem; background-color: var(--text-dark); color: white; border: none; border-radius: 4px; font-weight: 700; cursor: pointer; font-size: 1rem;">Checkout</button>
        </div>`;
    }
    
    cartHTML += '<button class="close-cart-btn" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #666;">&times;</button>';
    
    modalContent.innerHTML = cartHTML;
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close modal handlers
    const closeBtn = modalContent.querySelector('.close-cart-btn');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Remove item handlers
    const removeBtns = modalContent.querySelectorAll('.remove-item-btn');
    removeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = parseInt(btn.dataset.id);
            cart = cart.filter(item => item.id !== itemId);
            localStorage.setItem('artCart', JSON.stringify(cart));
            updateCartBadge();
            showCartModal(); // Refresh modal
        });
    });
    
    // Checkout handler
    const checkoutBtn = modalContent.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            alert('Checkout functionality would be implemented here. Redirecting to checkout page...');
            // window.location.href = 'checkout.html';
        });
    }
}

function showNotification(message) {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #1E1E1E;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ============================================
// Art Detail Modal/Page
// ============================================

function showArtDetail(item) {
    // Create detail modal
    const modal = document.createElement('div');
    modal.className = 'art-detail-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        animation: fadeIn 0.3s ease;
        overflow-y: auto;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background-color: white;
        padding: 2rem;
        border-radius: 8px;
        max-width: 900px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
    `;
    
    const detailHTML = `
        <button class="close-detail-btn" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 2rem; cursor: pointer; color: #666; z-index: 10;">&times;</button>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
            <div>
                <img src="${item.image}" alt="${item.title}" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            </div>
            <div>
                <h2 style="font-family: var(--font-primary); font-size: 2rem; margin-bottom: 1rem;">${item.title}</h2>
                <p style="font-size: 1.25rem; color: #666; margin-bottom: 1rem;">by ${item.artist}</p>
                <p style="font-size: 1.5rem; font-weight: 700; color: var(--accent-color); margin-bottom: 2rem;">${item.price}</p>
                ${item.size ? `<p style="margin-bottom: 0.5rem;"><strong>Size:</strong> ${item.size}</p>` : ''}
                ${item.medium ? `<p style="margin-bottom: 0.5rem;"><strong>Medium:</strong> ${item.medium}</p>` : ''}
                ${item.year ? `<p style="margin-bottom: 2rem;"><strong>Year:</strong> ${item.year}</p>` : ''}
                <button class="add-to-cart-detail-btn" data-id="${item.id}" style="width: 100%; padding: 1rem; background-color: var(--text-dark); color: white; border: none; border-radius: 4px; font-weight: 700; cursor: pointer; font-size: 1rem; margin-bottom: 1rem;">Add to Cart</button>
                <p style="line-height: 1.8; color: #666;">This is a beautiful piece of art that represents the artist's unique style and vision. Each artwork in our collection is carefully curated to ensure authenticity and quality.</p>
            </div>
        </div>
    `;
    
    modalContent.innerHTML = detailHTML;
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close modal handlers
    const closeBtn = modalContent.querySelector('.close-detail-btn');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Add to cart from detail
    const addToCartBtn = modalContent.querySelector('.add-to-cart-detail-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            addToCart(item);
            document.body.removeChild(modal);
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

// ============================================
// Navigation Functionality
// ============================================

function initNavigation() {
    // Handle navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#' || href === '') {
                e.preventDefault();
                // Handle section navigation
                const linkText = link.textContent.trim().toUpperCase();
                if (linkText === 'ALL ART') {
                    window.location.href = 'paintings.html';
                } else if (linkText === 'PAINTINGS') {
                    window.location.href = 'paintings.html';
                } else if (linkText === 'SCULPTURES') {
                    // Navigate to sculptures page
                    window.location.href = 'paintings.html?category=sculptures';
                } else if (linkText === 'PHOTOGRAPHY') {
                    // Navigate to photography page
                    window.location.href = 'paintings.html?category=photography';
                } else if (linkText === 'ARTISTS') {
                    // Navigate to artists page
                    window.location.href = 'paintings.html?view=artists';
                }
            }
        });
    });
    
    // Handle home link
    const homeLink = document.querySelector('.home-link');
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }
}

// ============================================
// Login/Signup Functionality
// ============================================

function initAuthButtons() {
    const loginBtns = document.querySelectorAll('.btn-login');
    const signupBtns = document.querySelectorAll('.btn-signup');
    
    loginBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            showLoginModal();
        });
    });
    
    signupBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            showSignupModal();
        });
    });
}

function showLoginModal() {
    const modal = document.createElement('div');
    modal.className = 'auth-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background-color: white;
        padding: 2.5rem;
        border-radius: 8px;
        max-width: 400px;
        width: 90%;
        position: relative;
    `;
    
    modalContent.innerHTML = `
        <button class="close-auth-btn" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #666;">&times;</button>
        <h2 style="font-family: var(--font-primary); margin-bottom: 1.5rem; text-align: center;">Login</h2>
        <form class="login-form">
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 700;">Email</label>
                <input type="email" required style="width: 100%; padding: 0.75rem; border: 2px solid #E0E0E0; border-radius: 4px; font-size: 1rem;">
            </div>
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 700;">Password</label>
                <input type="password" required style="width: 100%; padding: 0.75rem; border: 2px solid #E0E0E0; border-radius: 4px; font-size: 1rem;">
            </div>
            <button type="submit" style="width: 100%; padding: 1rem; background-color: var(--text-dark); color: white; border: none; border-radius: 4px; font-weight: 700; cursor: pointer; font-size: 1rem;">Login</button>
        </form>
        <p style="text-align: center; margin-top: 1rem; color: #666;">
            Don't have an account? 
            <a href="#" class="switch-to-signup" style="color: var(--accent-color); text-decoration: none; font-weight: 700;">Sign Up</a>
        </p>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    const closeBtn = modalContent.querySelector('.close-auth-btn');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    const form = modalContent.querySelector('.login-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login functionality would be implemented here. In a real app, this would authenticate the user.');
        document.body.removeChild(modal);
    });
    
    const switchLink = modalContent.querySelector('.switch-to-signup');
    switchLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.removeChild(modal);
        showSignupModal();
    });
}

function showSignupModal() {
    const modal = document.createElement('div');
    modal.className = 'auth-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background-color: white;
        padding: 2.5rem;
        border-radius: 8px;
        max-width: 400px;
        width: 90%;
        position: relative;
    `;
    
    modalContent.innerHTML = `
        <button class="close-auth-btn" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #666;">&times;</button>
        <h2 style="font-family: var(--font-primary); margin-bottom: 1.5rem; text-align: center;">Sign Up</h2>
        <form class="signup-form">
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 700;">Name</label>
                <input type="text" required style="width: 100%; padding: 0.75rem; border: 2px solid #E0E0E0; border-radius: 4px; font-size: 1rem;">
            </div>
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 700;">Email</label>
                <input type="email" required style="width: 100%; padding: 0.75rem; border: 2px solid #E0E0E0; border-radius: 4px; font-size: 1rem;">
            </div>
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 700;">Password</label>
                <input type="password" required style="width: 100%; padding: 0.75rem; border: 2px solid #E0E0E0; border-radius: 4px; font-size: 1rem;">
            </div>
            <button type="submit" style="width: 100%; padding: 1rem; background-color: var(--text-dark); color: white; border: none; border-radius: 4px; font-weight: 700; cursor: pointer; font-size: 1rem;">Sign Up</button>
        </form>
        <p style="text-align: center; margin-top: 1rem; color: #666;">
            Already have an account? 
            <a href="#" class="switch-to-login" style="color: var(--accent-color); text-decoration: none; font-weight: 700;">Login</a>
        </p>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    const closeBtn = modalContent.querySelector('.close-auth-btn');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    const form = modalContent.querySelector('.signup-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Sign up functionality would be implemented here. In a real app, this would create a new user account.');
        document.body.removeChild(modal);
    });
    
    const switchLink = modalContent.querySelector('.switch-to-login');
    switchLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.removeChild(modal);
        showLoginModal();
    });
}

// ============================================
// Profile Icon Functionality
// ============================================

function initProfileIcon() {
    const profileIcons = document.querySelectorAll('.profile-icon');
    profileIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Show profile menu or navigate to profile page
            showProfileMenu(icon);
        });
    });
}

function showProfileMenu(icon) {
    // Create dropdown menu
    const menu = document.createElement('div');
    menu.className = 'profile-menu';
    menu.style.cssText = `
        position: absolute;
        top: 100%;
        right: 0;
        background-color: white;
        border: 1px solid #E0E0E0;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        min-width: 200px;
        z-index: 1000;
        margin-top: 0.5rem;
        animation: fadeIn 0.2s ease;
    `;
    
    menu.innerHTML = `
        <div style="padding: 1rem;">
            <div style="padding: 0.75rem; cursor: pointer; border-radius: 4px; transition: background-color 0.2s;" 
                 onmouseover="this.style.backgroundColor='#F5F5F5'" 
                 onmouseout="this.style.backgroundColor='transparent'"
                 onclick="window.location.href='profile.html'">My Profile</div>
            <div style="padding: 0.75rem; cursor: pointer; border-radius: 4px; transition: background-color 0.2s;" 
                 onmouseover="this.style.backgroundColor='#F5F5F5'" 
                 onmouseout="this.style.backgroundColor='transparent'"
                 onclick="window.location.href='orders.html'">My Orders</div>
            <div style="padding: 0.75rem; cursor: pointer; border-radius: 4px; transition: background-color 0.2s;" 
                 onmouseover="this.style.backgroundColor='#F5F5F5'" 
                 onmouseout="this.style.backgroundColor='transparent'"
                 onclick="window.location.href='wishlist.html'">My Wishlist</div>
            <div style="padding: 0.75rem; cursor: pointer; border-radius: 4px; transition: background-color 0.2s; border-top: 1px solid #E0E0E0; margin-top: 0.5rem;" 
                 onmouseover="this.style.backgroundColor='#F5F5F5'" 
                 onmouseout="this.style.backgroundColor='transparent'"
                 onclick="alert('Logout functionality would be implemented here')">Logout</div>
        </div>
    `;
    
    // Position relative to icon
    const iconRect = icon.getBoundingClientRect();
    menu.style.position = 'fixed';
    menu.style.top = `${iconRect.bottom + 5}px`;
    menu.style.right = `${window.innerWidth - iconRect.right}px`;
    
    document.body.appendChild(menu);
    
    // Close menu when clicking outside
    const closeMenu = (e) => {
        if (!menu.contains(e.target) && e.target !== icon) {
            if (document.body.contains(menu)) {
                document.body.removeChild(menu);
            }
            document.removeEventListener('click', closeMenu);
        }
    };
    
    setTimeout(() => {
        document.addEventListener('click', closeMenu);
    }, 100);
}

// ============================================
// Smooth Scrolling
// ============================================

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// Lazy Loading Images
// ============================================

function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ============================================
// Initialize Everything
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousels on home page
    const curatorsPicksContainer = document.getElementById('curatorsPicks');
    const trendingArtContainer = document.getElementById('trendingArt');
    const featuredArtistContainer = document.getElementById('featuredArtist');
    
    if (curatorsPicksContainer) {
        new ArtCarousel('curatorsPicks', artData.curatorsPicks, 4);
    }
    
    if (trendingArtContainer) {
        new ArtCarousel('trendingArt', artData.trendingArt, 4);
    }
    
    if (featuredArtistContainer) {
        new ArtCarousel('featuredArtist', artData.featuredArtist, 4);
    }
    
    // Initialize wishlist page
    const likedArtGrid = document.getElementById('likedArtGrid');
    const emptyWishlist = document.getElementById('emptyWishlist');
    if (likedArtGrid) {
        const likedArt = JSON.parse(localStorage.getItem('artWishlist')) || [];
        if (likedArt.length === 0) {
            likedArtGrid.style.display = 'none';
            if (emptyWishlist) emptyWishlist.style.display = 'block';
        } else {
            if (emptyWishlist) emptyWishlist.style.display = 'none';
            new PaintingsGrid('likedArtGrid', likedArt);
        }
    }
    
    // Initialize paintings grid on paintings page
    const paintingsGrid = document.getElementById('paintingsGrid');
    if (paintingsGrid) {
        // Check for search query in URL
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');
        const category = urlParams.get('category');
        
        let paintingsData = artData.allPaintings;
        
        // Apply search filter if present
        if (searchQuery) {
            const searchResults = performSearch(searchQuery);
            paintingsData = searchResults.results.length > 0 ? searchResults.results : paintingsData;
            // Update search input if present
            const searchInput = document.querySelector('.search-input-inline');
            if (searchInput) {
                searchInput.value = searchQuery;
            }
        }
        
        // Apply category filter if present
        if (category) {
            paintingsData = paintingsData.filter(item => {
                // This would need to match your category system
                return true; // Placeholder
            });
        }
        
        new PaintingsGrid('paintingsGrid', paintingsData);
    }
    
    // Initialize search
    initSearch();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize wishlist/like
    updateLikeBadge();
    initLikeIcon();
    updateLikeButtons();
    
    // Initialize cart
    updateCartBadge();
    initCartIcon();
    
    // Initialize profile icon
    initProfileIcon();
    
    // Initialize auth buttons
    initAuthButtons();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize lazy loading
    initLazyLoading();
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
});

// ============================================
// Responsive Carousel Adjustments
// ============================================

window.addEventListener('resize', () => {
    // Adjust items per view based on screen size
    const carousels = document.querySelectorAll('.art-carousel');
    carousels.forEach(carousel => {
        // You can reinitialize carousels with different itemsPerView
        // based on window width if needed
    });
});

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ArtCarousel, PaintingsGrid, addToCart, cart };
}


