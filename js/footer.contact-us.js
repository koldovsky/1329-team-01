class Carousel {
    constructor() {
      this.container = document.querySelector('.carousel');
      this.track = document.querySelector('.carousel-track');
      this.slides = Array.from(document.querySelectorAll('.carousel-slide'));
      this.prevButton = document.querySelector('.carousel-button.prev');
      this.nextButton = document.querySelector('.carousel-button.next');
      
      this.currentIndex = 0;
      this.slidesPerView = this.getSlidesPerView();
      
      // Clone slides for infinite scroll
      this.setupInfiniteScroll();
      
      // Event listeners
      this.prevButton.addEventListener('click', () => this.slide('prev'));
      this.nextButton.addEventListener('click', () => this.slide('next'));
      window.addEventListener('resize', () => {
        this.slidesPerView = this.getSlidesPerView();
        this.updateSlidePositions();
      });
  
      // Initial position
      this.updateSlidePositions();
    }
  
    getSlidesPerView() {
      if (window.innerWidth >= 1024) return 4; // Desktop
      if (window.innerWidth >= 768) return 2;  // Tablet
      return 1; // Mobile
    }
  
    setupInfiniteScroll() {
      // Clone slides and add to beginning and end
      const firstSlideClones = this.slides.slice(0, this.getSlidesPerView()).map(slide => slide.cloneNode(true));
      const lastSlideClones = this.slides.slice(-this.getSlidesPerView()).map(slide => slide.cloneNode(true));
      
      firstSlideClones.forEach(clone => this.track.appendChild(clone));
      lastSlideClones.reverse().forEach(clone => this.track.insertBefore(clone, this.track.firstChild));
      
      // Update slides array with clones
      this.slides = Array.from(document.querySelectorAll('.carousel-slide'));
      this.currentIndex = this.getSlidesPerView();
    }
  
    updateSlidePositions() {
      const slideWidth = 100 / this.slidesPerView;
      this.slides.forEach(slide => {
        slide.style.width = `${slideWidth}%`;
      });
      
      const offset = -this.currentIndex * (100 / this.slidesPerView);
      this.track.style.transform = `translateX(${offset}%)`;
    }
  
    slide(direction) {
      if (direction === 'next') {
        this.currentIndex++;
      } else {
        this.currentIndex--;
      }
  
      this.track.style.transition = 'transform 0.5s ease-in-out';
      this.updateSlidePositions();
  
      // Handle infinite scroll
      setTimeout(() => {
        if (this.currentIndex >= this.slides.length - this.slidesPerView) {
          this.currentIndex = this.getSlidesPerView();
          this.track.style.transition = 'none';
          this.updateSlidePositions();
        } else if (this.currentIndex < this.getSlidesPerView()) {
          this.currentIndex = this.slides.length - this.slidesPerView * 2;
          this.track.style.transition = 'none';
          this.updateSlidePositions();
        }
      }, 500);
    }
  }
  
  // Initialize carousel
  window.addEventListener('load', () => {
    new Carousel();
  });
  

// window.addEventListener('load', () => {
//     console.log('Contact us form loaded');
//   });
