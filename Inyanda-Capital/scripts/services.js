document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for service sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing after animation
                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation classes to service sections
    document.querySelectorAll('.service-section').forEach((section, index) => {
        // Alternate between left and right animations
        if (index % 2 === 0) {
            section.classList.add('slide-from-left');
        } else {
            section.classList.add('slide-from-right');
        }
        sectionObserver.observe(section);
    });

    // Optional: Add scroll-to-section functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 