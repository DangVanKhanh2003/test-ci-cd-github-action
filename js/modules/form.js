/* Form Module */

const Form = {
  init: function() {
    this.form = DOM.get('#downloadForm');
    this.urlInput = DOM.get('#urlInput');
    this.errorMessage = DOM.get('#errorMessage');
    this.successAlert = DOM.get('#successAlert');
    this.errorAlert = DOM.get('#errorAlert');
    
    if (!this.form) return;
    
    this.bindEvents();
  },
  
  bindEvents: function() {
    // Form submission
    DOM.on(this.form, 'submit', this.handleSubmit.bind(this));
    
    // Clear error on input
    if (this.urlInput) {
      DOM.on(this.urlInput, 'input', this.clearError.bind(this));
    }
  },
  
  handleSubmit: function(e) {
    e.preventDefault();
    
    const url = DOM.value(this.urlInput).trim();
    const submitButton = this.form.querySelector('button[type="submit"]');
    
    // Hide all messages
    this.hideMessages();
    
    // Validate URL
    const validation = this.validateURL(url);
    if (!validation.valid) {
      this.showError(validation.message);
      return;
    }
    
    // Show loading state
    this.setLoadingState(submitButton, true);
    
    // Simulate processing
    setTimeout(() => {
      this.handleSuccess();
      this.setLoadingState(submitButton, false);
    }, 2000);
  },
  
  validateURL: function(url) {
    if (!url) {
      return { valid: false, message: 'Vui lòng nhập URL video' };
    }
    
    if (!Validation.isValidURL(url)) {
      return { valid: false, message: 'URL phải bắt đầu với http:// hoặc https://' };
    }
    
    if (!Validation.isSupportedPlatform(url)) {
      return { valid: false, message: 'Nền tảng này chưa được hỗ trợ' };
    }
    
    return { valid: true };
  },
  
  showError: function(message) {
    DOM.text(this.errorMessage, message);
    DOM.addClass(this.errorMessage, 'show');
    DOM.addClass(this.urlInput, 'error');
  },
  
  clearError: function() {
    DOM.removeClass(this.urlInput, 'error');
    DOM.removeClass(this.errorMessage, 'show');
  },
  
  hideMessages: function() {
    DOM.removeClass(this.successAlert, 'show');
    DOM.removeClass(this.errorAlert, 'show');
    DOM.removeClass(this.errorMessage, 'show');
    DOM.text(this.errorMessage, '');
    DOM.removeClass(this.urlInput, 'error');
  },
  
  handleSuccess: function() {
    DOM.addClass(this.successAlert, 'show');
    DOM.value(this.urlInput, '');
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      DOM.removeClass(this.successAlert, 'show');
    }, 5000);
  },
  
  setLoadingState: function(button, loading) {
    if (!button) return;
    
    if (loading) {
      button.disabled = true;
      DOM.text(button, 'Đang xử lý...');
      DOM.addClass(button, 'loading');
    } else {
      button.disabled = false;
      DOM.text(button, 'Tải Video');
      DOM.removeClass(button, 'loading');
    }
  }
};