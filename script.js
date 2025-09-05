document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a, header .button").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Accordion functionality for content cards (Lectures, Practical Works)
    document.querySelectorAll(".content-card").forEach(card => {
        card.addEventListener("click", function() {
            // Toggle the 'active' class on the clicked card
            this.classList.toggle("active");

            // The CSS will handle the max-height transition based on the 'active' class
            // No direct style manipulation needed here for display property
        });
    });
});


