document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    
    // Intersection Observer for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.animate-slide, .animate-slide-left, .animate-slide-right, .animate-slide-up, .animate-fade').forEach(element => {
        observer.observe(element);
    });
});