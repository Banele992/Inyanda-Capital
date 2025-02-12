document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    
    // Check if CountUp exists
    if (typeof CountUp === 'undefined') {
        console.error('CountUp is not defined! Check if the library is loaded correctly.');
        return;
    }

    // Check if elements exist
    const experienceElement = document.getElementById('experienceCount');
    const projectElement = document.getElementById('projectCount');
    const satisfactionElement = document.getElementById('satisfactionCount');
    
    if (!experienceElement || !projectElement || !satisfactionElement) {
        console.error('One or more counter elements not found!');
        return;
    }

    console.log('Creating CountUp instances');
    
    // Initialize CountUp instances
    const experienceCount = new CountUp('experienceCount', 15, {
        duration: 2.5,
        enableScrollSpy: true
    });
    
    const projectCount = new CountUp('projectCount', 100, {
        duration: 2.5,
        enableScrollSpy: true
    });
    
    const satisfactionCount = new CountUp('satisfactionCount', 99, {
        duration: 2.5,
        enableScrollSpy: true
    });

    // Start counters immediately if they're in view
    if (!experienceCount.error) {
        experienceCount.start();
    } else {
        console.error('Error with experience counter:', experienceCount.error);
    }

    if (!projectCount.error) {
        projectCount.start();
    } else {
        console.error('Error with project counter:', projectCount.error);
    }

    if (!satisfactionCount.error) {
        satisfactionCount.start();
    } else {
        console.error('Error with satisfaction counter:', satisfactionCount.error);
    }

    // Create Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Stats container is visible');
                entry.target.classList.add('visible');
                // Restart counters when visible
                experienceCount.reset();
                projectCount.reset();
                satisfactionCount.reset();
                experienceCount.start();
                projectCount.start();
                satisfactionCount.start();
                // Unobserve after starting
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe the stats container
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        console.log('Observing stats container');
        observer.observe(statsContainer);
    } else {
        console.error('Stats container not found!');
    }

    // Counter Animation
    function animateCounter(element, target) {
        let current = 0;
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // Update every 16ms (roughly 60fps)
        
        function update() {
            current += step;
            if (current > target) {
                current = target;
            }
            element.textContent = Math.floor(current);
            
            if (current < target) {
                requestAnimationFrame(update);
            }
        }
        
        update();
    }

    // Start animation when element is in view
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                });
                observer.unobserve(entry.target);
            }
        });
    }

    // Set up the Intersection Observer
    const counterObserver = new IntersectionObserver(handleIntersection, {
        threshold: 0.1
    });

    // Observe the counter container
    const counterContainer = document.querySelector('.counter-container');
    if (counterContainer) {
        console.log('Observing counter container');
        counterObserver.observe(counterContainer);
    } else {
        console.error('Counter container not found!');
    }
}); 