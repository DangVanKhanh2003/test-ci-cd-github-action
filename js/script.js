document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');
    mobileLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                mobileMenu.classList.remove('active');
            }
        });
    });

    // Form validation and submission
    const downloadForm = document.getElementById('downloadForm');
    const urlInput = document.getElementById('urlInput');
    const errorMessage = document.getElementById('errorMessage');
    const successAlert = document.getElementById('successAlert');
    const errorAlert = document.getElementById('errorAlert');
    
    downloadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('button[type="submit"]');
        const url = urlInput.value.trim();
        
        // Hide all alerts
        successAlert.classList.remove('show');
        errorAlert.classList.remove('show');
        errorMessage.classList.remove('show');
        errorMessage.textContent = '';
        urlInput.classList.remove('error');
        
        // Validate URL
        if (!url) {
            errorMessage.textContent = 'Vui lòng nhập URL video';
            errorMessage.classList.add('show');
            urlInput.classList.add('error');
            return;
        }
        
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            errorMessage.textContent = 'URL phải bắt đầu với http:// hoặc https://';
            errorMessage.classList.add('show');
            urlInput.classList.add('error');
            return;
        }
        
        // Check if URL is from supported platforms
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
        
        const isSupported = supportedPlatforms.some(function(platform) {
            return url.includes(platform);
        });
        
        if (!isSupported) {
            errorMessage.textContent = 'Nền tảng này chưa được hỗ trợ';
            errorMessage.classList.add('show');
            urlInput.classList.add('error');
            return;
        }
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Đang xử lý...';
        
        // Simulate processing
        setTimeout(function() {
            successAlert.classList.add('show');
            submitButton.disabled = false;
            submitButton.textContent = 'Tải Video';
            urlInput.value = '';
            
            // Hide success message after 5 seconds
            setTimeout(function() {
                successAlert.classList.remove('show');
            }, 5000);
        }, 2000);
    });

    // Remove error state on input
    urlInput.addEventListener('input', function() {
        this.classList.remove('error');
        errorMessage.classList.remove('show');
    });
});