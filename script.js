document.addEventListener('DOMContentLoaded', () => {
    // Select all the sections we want to animate
    const sections = document.querySelectorAll('.education-section, .skills-section, .projects-section, .contact-section');

    // Set up the Intersection Observer to watch for when elements come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is intersecting (i.e., visible on screen)
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the CSS animation
                entry.target.classList.add('visible');
                // Stop observing the element once it's visible so the animation only happens once
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger the animation when 10% of the section is visible
    });

    // Tell the observer to watch each of the sections
    sections.forEach(section => {
        observer.observe(section);
    });
});

