document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
            title: "Commercial Development",
            description: "Cost management for multi-story office complex"
        },
        {
            url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80",
            title: "Residential Project",
            description: "Quantity surveying for luxury apartment development"
        },
        {
            url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
            title: "Infrastructure Development",
            description: "Cost planning for major infrastructure project"
        },
        {
            url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
            title: "Healthcare Facility",
            description: "Contract administration for hospital construction"
        },
        {
            url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
            title: "Retail Development",
            description: "Project management for shopping center"
        },
        {
            url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
            title: "Educational Institution",
            description: "Cost consulting for university campus"
        }
    ];

    const projectsGrid = document.querySelector('.projects-grid');

    // Create and append project cards with staggered animation delay
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <img src="${project.url}" alt="${project.title}">
            <div class="overlay">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;

        projectsGrid.appendChild(card);
    });

    // Optional: Intersection Observer for scroll-based animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.project-card').forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
}); 