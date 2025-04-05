document.addEventListener("DOMContentLoaded", loadCart);

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartSection = document.getElementById("cart-items");

    if (cart.length > 0) {
        cartSection.innerHTML = cart.map((book, index) => 
            `<p>${book} <button onclick="removeItem(${index})">Remove</button></p>`
        ).join("");
    } else {
        cartSection.innerHTML = "<p>Your cart is empty.</p>";
    }
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}

