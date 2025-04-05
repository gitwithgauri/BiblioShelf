/// Ensure cart count updates on load
document.addEventListener("DOMContentLoaded", updateCartCount);

function addToCart(bookTitle) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Retrieve cart
    cart.push(bookTitle); // Add new book
    localStorage.setItem("cart", JSON.stringify(cart)); // Store updated cart
    updateCartCount(); // Update cart counter
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.length;
}
