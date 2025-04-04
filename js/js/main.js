
document.addEventListener('DOMContentLoaded', function() {
    // Initialize current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Navbar scroll behavior
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    let mobileMenuOpen = false;
    
    mobileMenuButton.addEventListener('click', function() {
      mobileMenuOpen = !mobileMenuOpen;
      
      if (mobileMenuOpen) {
        mobileMenu.classList.add('active');
        mobileMenuButton.innerHTML = '<i class="fas fa-times"></i>';
      } else {
        mobileMenu.classList.remove('active');
        mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
    
    // Load the hero content
    function loadHeroContent() {
      const featuredProject = getFeaturedProject();
      const heroMedia = document.querySelector('.hero-media');
      
      if (featuredProject.videoUrl) {
        // Create and load video
        const video = document.createElement('video');
        video.src = featuredProject.videoUrl;
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        
        // Add loading placeholder
        const placeholder = document.createElement('div');
        placeholder.className = 'loading-placeholder';
        heroMedia.appendChild(placeholder);
        
        // When video loaded, show it and hide placeholder
        video.addEventListener('loadeddata', function() {
          video.classList.add('loaded');
          setTimeout(() => {
            placeholder.remove();
          }, 500);
        });
        
        heroMedia.appendChild(video);
      } else {
        // Create and load image
        const img = document.createElement('img');
        img.src = featuredProject.fullImage || featuredProject.thumbnail;
        img.alt = featuredProject.title;
        
        // Add loading placeholder
        const placeholder = document.createElement('div');
        placeholder.className = 'loading-placeholder';
        heroMedia.appendChild(placeholder);
        
        // When image loaded, show it and hide placeholder
        img.onload = function() {
          img.classList.add('loaded');
          setTimeout(() => {
            placeholder.remove();
          }, 500);
        };
        
        heroMedia.appendChild(img);
      }
      
      // Update hero text content
      document.querySelector('.category-pill').textContent = featuredProject.category;
      document.querySelector('.hero-title').textContent = featuredProject.title;
      document.querySelector('.hero-description').textContent = featuredProject.description;
      
      // Update hero buttons
      const viewProjectBtn = document.querySelector('.btn-primary');
      const moreInfoBtn = document.querySelector('.btn-secondary');
      
      viewProjectBtn.href = `project.html?id=${featuredProject.id}`;
      moreInfoBtn.href = `project.html?id=${featuredProject.id}`;
    }
    
    // Create content rows
    function createContentRows() {
      const contentRowsContainer = document.querySelector('.content-rows');
      
      // Clear existing content
      contentRowsContainer.innerHTML = '';
      
      // Generate row for each category
      categories.forEach(category => {
        const categoryProjects = getProjectsByCategory(category);
        
        if (categoryProjects.length === 0) return;
        
        // Create row container
        const rowElement = document.createElement('div');
        rowElement.className = 'row';
        
        // Create row header
        const rowHeader = document.createElement('div');
        rowHeader.className = 'row-header';
        rowHeader.innerHTML = `<h2 class="row-title">${category}</h2>`;
        
        // Create slider container
        const sliderContainer = document.createElement('div');
        sliderContainer.className = 'slider-container';
        
        // Create slider
        const slider = document.createElement('div');
        slider.className = 'slider';
        slider.setAttribute('data-category', category);
        
        // Add projects to slider
        categoryProjects.forEach(project => {
          const projectCard = createProjectCard(project);
          slider.appendChild(projectCard);
        });
        
        // Create slider controls
        const sliderControls = document.createElement('div');
        sliderControls.className = 'slider-controls';
        
        const leftArrow = document.createElement('div');
        leftArrow.className = 'slider-arrow left-arrow';
        leftArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
        leftArrow.addEventListener('click', () => slideRow(slider, 'left'));
        
        const rightArrow = document.createElement('div');
        rightArrow.className = 'slider-arrow right-arrow';
        rightArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
        rightArrow.addEventListener('click', () => slideRow(slider, 'right'));
        
        sliderControls.appendChild(leftArrow);
        sliderControls.appendChild(rightArrow);
        
        // Assemble slider container
        sliderContainer.appendChild(slider);
        sliderContainer.appendChild(sliderControls);
        
        // Assemble row
        rowElement.appendChild(rowHeader);
        rowElement.appendChild(sliderContainer);
        
        // Add row to container
        contentRowsContainer.appendChild(rowElement);
      });
    }
    
    // Create a project card element
    function createProjectCard(project) {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-id', project.id);
      
      // Create card HTML
      card.innerHTML = `
        <div class="card-image-container">
          <div class="loading-placeholder"></div>
          <img class="card-image" src="${project.thumbnail}" alt="${project.title}" loading="lazy">
          <div class="card-overlay">
            <h3 class="card-title">${project.title}</h3>
            <div class="card-meta">
              <span class="card-year">${project.year}</span>
              <div class="play-button">
                <i class="fas fa-play"></i>
              </div>
            </div>
          </div>
        </div>
      `;
      
      // Handle card image loading
      const cardImage = card.querySelector('.card-image');
      const placeholder = card.querySelector('.loading-placeholder');
      
      cardImage.onload = function() {
        setTimeout(() => {
          placeholder.style.opacity = 0;
          setTimeout(() => placeholder.remove(), 300);
        }, 300);
      };
      
      // Add click event
      card.addEventListener('click', () => {
        window.location.href = `project.html?id=${project.id}`;
      });
      
      return card;
    }
    
    // Handle slider navigation
    function slideRow(slider, direction) {
      const cardWidth = 296; // card width + gap
      const visibleWidth = slider.parentElement.offsetWidth;
      const scrollAmount = Math.floor(visibleWidth / cardWidth) * cardWidth;
      
      if (direction === 'left') {
        slider.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
      } else {
        slider.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }
    
    // Initialize the page
    function initializePage() {
      // Check if we're on the home page
      const isHomePage = window.location.pathname.endsWith('index.html') || 
                         window.location.pathname.endsWith('/') ||
                         window.location.pathname === '';
      
      if (isHomePage) {
        loadHeroContent();
        createContentRows();
      }
    }
    
    // Start initialization
    initializePage();
  });