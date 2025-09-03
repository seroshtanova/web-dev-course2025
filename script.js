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

    // Function to load markdown content and convert to HTML
    async function loadAndConvertMarkdown(filePath) {
        try {
            const response = await fetch(filePath);
            const markdownText = await response.text();
            // Using a simple markdown conversion for now. For more complex needs, a library might be required.
            // For this example, we'll just return the raw text, assuming it's pre-converted or simple enough.
            // In a real scenario, you'd use a markdown parser here.
            return markdownText;
        } catch (error) {
            console.error("Error loading markdown file:", error);
            return "<p>Ошибка загрузки контента.</p>";
        }
    }

    // Load Curriculum Plan
    // For simplicity, we'll assume curriculum_plan.md is already converted to HTML and directly insert it.
    // In a real app, you'd fetch and convert it.
    // For now, we'll just use a placeholder or assume it's part of the initial index.html content.
    // The Python script will handle the conversion and insertion.

    // Accordion functionality for content cards (Lectures, Practical Works)
    document.querySelectorAll(".content-card").forEach(card => {
        card.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });
});


