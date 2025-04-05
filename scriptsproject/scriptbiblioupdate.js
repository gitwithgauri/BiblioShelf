const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

document.addEventListener("DOMContentLoaded", function() {
            const bookCards = document.querySelectorAll(".book-card");
            const bestsellersTitle = document.querySelector(".bestsellers-title");
            function revealBooks() {
                const triggerBottom = window.innerHeight * 0.85;
                bookCards.forEach(book => {
                    const bookTop = book.getBoundingClientRect().top;
                    if (bookTop < triggerBottom) {
                        book.classList.add("show");
                    }
                });
                const titleTop = bestsellersTitle.getBoundingClientRect().top;
                if (titleTop < triggerBottom) {
                    bestsellersTitle.classList.add("show");
                }
            }
            window.addEventListener("scroll", revealBooks);
            revealBooks();
        });

// Check user preference from localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀ Light Mode";
} 

// Toggle theme on button click
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "☀ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "🌙 Dark Mode";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".fade-in").forEach(el => {
        el.classList.add("active");
    });
});

document.addEventListener("DOMContentLoaded", function() {
            const bookCards = document.querySelectorAll(".book-card");
            function revealBooks() {
                const triggerBottom = window.innerHeight * 0.85;
                bookCards.forEach(book => {
                    const bookTop = book.getBoundingClientRect().top;
                    if (bookTop < triggerBottom) {
                        book.classList.add("show");
                    }
                });
            }
            window.addEventListener("scroll", revealBooks);
            revealBooks();

            // Logo Fade-in and Zoom effect
            const logoContainer = document.querySelector(".logo-container");
            setTimeout(() => {
                logoContainer.classList.add("show");
            }, 500);
        });

       

