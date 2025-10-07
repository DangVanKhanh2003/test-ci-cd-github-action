/**
 * SnackLoader - Main JavaScript
 * Modern & Clean Implementation
 */

// DOM Elements
const downloadForm = document.getElementById('downloadForm');
const urlInput = document.getElementById('urlInput');
const errorMessage = document.getElementById('errorMessage');

// Form Submit Handler
if (downloadForm) {
    downloadForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const url = urlInput.value.trim();

        // Basic URL validation
        if (!url) {
            showError('Vui lòng nhập URL video');
            return;
        }

        if (!isValidUrl(url)) {
            showError('URL không hợp lệ. Vui lòng kiểm tra lại');
            return;
        }

        // Clear error
        clearError();

        // Show format selector
        const formatSelector = document.getElementById('formatSelector');
        if (formatSelector) {
            formatSelector.style.display = 'block';

            // Scroll to format selector
            setTimeout(() => {
                formatSelector.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        }

        // Simulate processing (replace with actual API call)
        setTimeout(() => {
            console.log('Processing URL:', url);
        }, 1000);
    });
}

// Format Tab Switching
const formatTabs = document.querySelectorAll('.format-tab');
const videoFormats = document.getElementById('videoFormats');
const audioFormats = document.getElementById('audioFormats');

formatTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        formatTabs.forEach(t => t.classList.remove('active'));

        // Add active class to clicked tab
        this.classList.add('active');

        // Show/hide format lists
        const tabType = this.getAttribute('data-tab');
        if (tabType === 'video') {
            if (videoFormats) videoFormats.style.display = 'flex';
            if (audioFormats) audioFormats.style.display = 'none';
        } else if (tabType === 'audio') {
            if (videoFormats) videoFormats.style.display = 'none';
            if (audioFormats) audioFormats.style.display = 'flex';
        }
    });
});

// URL Validation
function isValidUrl(string) {
    try {
        const url = new URL(string);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (_) {
        return false;
    }
}

// Error Message
function showError(message) {
    if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.classList.add('d-block');
        urlInput.classList.add('is-invalid');
    }
}

// Clear Error
function clearError() {
    if (errorMessage) {
        errorMessage.textContent = '';
        errorMessage.classList.remove('d-block');
        urlInput.classList.remove('is-invalid');
    }
}

// Success Message
function showSuccess(message) {
    // You can use Bootstrap toast or alert here
    console.log('Success:', message);
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Don't prevent default for data-bs-toggle links
        if (this.getAttribute('data-bs-toggle')) {
            return;
        }

        if (href && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        }
    });
});

// Add fade-in animation to cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.card, .stat-card').forEach(card => {
    observer.observe(card);
});

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(start));
        }
    }, 16);
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace('.0', '') + 'M+';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K+';
    }
    return num.toString() + '%';
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target;
            const target = parseInt(number.getAttribute('data-target'));
            if (target) {
                animateCounter(number, target);
                statsObserver.unobserve(number);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number[data-target]').forEach(stat => {
    statsObserver.observe(stat);
});

// Loading state for download button
const downloadBtn = document.querySelector('.new-download-btn');
if (downloadBtn && downloadForm) {
    const originalText = downloadBtn.innerHTML;

    const originalSubmit = downloadForm.onsubmit;
    downloadForm.addEventListener('submit', function(e) {
        const url = urlInput.value.trim();

        if (url && isValidUrl(url)) {
            downloadBtn.disabled = true;
            downloadBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Đang xử lý...';

            setTimeout(() => {
                downloadBtn.disabled = false;
                downloadBtn.innerHTML = originalText;
            }, 3000);
        }
    });
}

console.log('🎬 SnackLoader loaded successfully!');
