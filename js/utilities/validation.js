/* Validation Utility Functions */

const Validation = {
  // Validate URL format
  isValidURL: function(url) {
    if (!url || typeof url !== 'string') {
      return false;
    }
    
    // Check if URL starts with http:// or https://
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return false;
    }
    
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  },
  
  // Check if URL is from supported platforms
  isSupportedPlatform: function(url) {
    const supportedPlatforms = [
      'youtube.com', 'youtu.be',
      'facebook.com', 'fb.watch',
      'instagram.com',
      'tiktok.com',
      'twitter.com', 'x.com',
      'threads.net',
      'pinterest.com',
      'reddit.com'
    ];
    
    return supportedPlatforms.some(function(platform) {
      return url.includes(platform);
    });
  },
  
  // Validate email format
  isValidEmail: function(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  
  // Validate required field
  isRequired: function(value) {
    return value !== null && value !== undefined && value.toString().trim() !== '';
  },
  
  // Validate minimum length
  minLength: function(value, min) {
    return value && value.length >= min;
  },
  
  // Validate maximum length
  maxLength: function(value, max) {
    return !value || value.length <= max;
  },
  
  // Validate number range
  inRange: function(value, min, max) {
    const num = parseFloat(value);
    return !isNaN(num) && num >= min && num <= max;
  },
  
  // Sanitize input
  sanitize: function(input) {
    if (typeof input !== 'string') return input;
    
    // Remove HTML tags
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Validation;
}