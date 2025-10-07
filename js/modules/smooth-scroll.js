/* Smooth Scroll Module */

const SmoothScroll = {
  init: function() {
    this.links = DOM.getAll('a[href^="#"]');
    this.offset = 80; // Navbar height
    
    if (!this.links.length) return;
    
    this.bindEvents();
  },
  
  bindEvents: function() {
    this.links.forEach((link) => {
      DOM.on(link, 'click', this.handleClick.bind(this));
    });
  },
  
  handleClick: function(e) {
    const href = e.currentTarget.getAttribute('href');
    
    // Skip if just "#"
    if (href === '#') return;
    
    const targetElement = DOM.get(href);
    
    if (targetElement) {
      e.preventDefault();
      this.scrollToElement(targetElement);
      
      // Close mobile menu if open
      const mobileMenu = DOM.get('#mobileMenu');
      if (mobileMenu) {
        DOM.removeClass(mobileMenu, 'active');
      }
    }
  },
  
  scrollToElement: function(element) {
    const offsetTop = element.offsetTop - this.offset;
    
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};