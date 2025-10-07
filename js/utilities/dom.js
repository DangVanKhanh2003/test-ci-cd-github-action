/* DOM Utility Functions */

const DOM = {
  // Get element by selector
  get: function(selector) {
    return document.querySelector(selector);
  },
  
  // Get all elements by selector
  getAll: function(selector) {
    return document.querySelectorAll(selector);
  },
  
  // Add class to element
  addClass: function(element, className) {
    if (element) {
      element.classList.add(className);
    }
  },
  
  // Remove class from element
  removeClass: function(element, className) {
    if (element) {
      element.classList.remove(className);
    }
  },
  
  // Toggle class on element
  toggleClass: function(element, className) {
    if (element) {
      element.classList.toggle(className);
    }
  },
  
  // Check if element has class
  hasClass: function(element, className) {
    return element ? element.classList.contains(className) : false;
  },
  
  // Add event listener
  on: function(element, event, handler) {
    if (element) {
      element.addEventListener(event, handler);
    }
  },
  
  // Remove event listener
  off: function(element, event, handler) {
    if (element) {
      element.removeEventListener(event, handler);
    }
  },
  
  // Show element
  show: function(element) {
    if (element) {
      element.style.display = 'block';
    }
  },
  
  // Hide element
  hide: function(element) {
    if (element) {
      element.style.display = 'none';
    }
  },
  
  // Get/Set text content
  text: function(element, text) {
    if (!element) return '';
    if (text !== undefined) {
      element.textContent = text;
      return element;
    }
    return element.textContent;
  },
  
  // Get/Set value
  value: function(element, value) {
    if (!element) return '';
    if (value !== undefined) {
      element.value = value;
      return element;
    }
    return element.value;
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DOM;
}