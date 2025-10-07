/* Navbar Module */

const Navbar = {
  init: function() {
    this.navbar = DOM.get('#navbar');
    this.menuToggle = DOM.get('#menuToggle');
    this.mobileMenu = DOM.get('#mobileMenu');
    this.mobileLinks = DOM.getAll('.mobile-menu .nav-link');
    
    if (!this.navbar) return;
    
    this.bindEvents();
  },
  
  bindEvents: function() {
    // Scroll effect
    window.addEventListener('scroll', this.handleScroll.bind(this));
    
    // Mobile menu toggle
    if (this.menuToggle) {
      DOM.on(this.menuToggle, 'click', this.toggleMobileMenu.bind(this));
    }
    
    // Close mobile menu on link click
    this.mobileLinks.forEach((link) => {
      DOM.on(link, 'click', this.closeMobileMenu.bind(this));
    });
  },
  
  handleScroll: function() {
    if (window.scrollY > 50) {
      DOM.addClass(this.navbar, 'scrolled');
    } else {
      DOM.removeClass(this.navbar, 'scrolled');
    }
  },
  
  toggleMobileMenu: function() {
    DOM.toggleClass(this.mobileMenu, 'active');
  },
  
  closeMobileMenu: function() {
    DOM.removeClass(this.mobileMenu, 'active');
  }
};