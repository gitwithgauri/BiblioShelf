document.addEventListener("DOMContentLoaded", () => {
  const bookCards = document.querySelectorAll(".book-card");

  // Show books on page load with delay
  bookCards.forEach((card, index) => {
      setTimeout(() => {
          card.classList.add("show");
      }, index * 100); // Staggered animation
  });
});

document.addEventListener("DOMContentLoaded", function () {
const titles = document.querySelectorAll(".section-title");

function revealTitles() {
  titles.forEach(title => {
      const rect = title.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
          title.classList.add("show");
      }
  });
}

revealTitles(); // In case some titles are already in view
window.addEventListener("scroll", revealTitles);
});

document.addEventListener("DOMContentLoaded", function () {
document.getElementById("sortAscending").addEventListener("click", function () {
  sortBooks("asc");
});

document.getElementById("sortDescending").addEventListener("click", function () {
  sortBooks("desc");
});

function sortBooks(order) {
  let bookGrids = document.querySelectorAll(".book-grid"); // Select all book sections

  bookGrids.forEach(bookGrid => {
      let books = Array.from(bookGrid.querySelectorAll(".book-card"));

      if (books.length === 0) {
          console.warn("No books found in:", bookGrid);
          return; // Skip empty sections
      }

      books.sort((a, b) => {
          let priceA = parseFloat(a.querySelector("p strong").innerText.replace("₹", ""));
          let priceB = parseFloat(b.querySelector("p strong").innerText.replace("₹", ""));
          return order === "asc" ? priceA - priceB : priceB - priceA;
      });

      books.forEach(book => bookGrid.appendChild(book)); // Append sorted books back
  });
}
});

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

document.addEventListener("DOMContentLoaded", function () {
document.querySelectorAll(".fade-in").forEach(el => {
  el.classList.add("active");
});
});

