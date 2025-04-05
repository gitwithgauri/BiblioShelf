const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
// Check user preference from localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀️ Light Mode";
} 

// Toggle theme on button click
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "🌙 Dark Mode";
    }
});



            // Logo Fade-in and Zoom effect
            const logoContainer = document.querySelector(".logo-container");
            setTimeout(() => {
                logoContainer.classList.add("show");
            }, 500);
       

            document.addEventListener("DOMContentLoaded", () => {
        const bookCards = document.querySelectorAll(".contact-container");

        // Show books on page load with delay
        bookCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("show");
            }, index * 100); // Staggered animation
        });
    });
