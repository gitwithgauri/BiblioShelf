

document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  updateCartCount(); 
});

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartSection = document.getElementById("cart-items");

  if (cart.length > 0) {
      let total = 0;
      cartSection.innerHTML = cart.map((book, index) => {
          const subtotal = book.price * book.quantity;
          total += subtotal;
          return `
              <div class="cart-item">
                  <p><strong>${book.title}</strong></p>
                  <p>Price: ₹${book.price}</p>
                  <p>Quantity: ${book.quantity}</p>
                  <p>Subtotal: ₹${subtotal}</p>
                  <button onclick="removeItem(${index})">Remove</button>
                  <hr>
              </div>
          `;
      }).join("") + `<h3>Total: ₹${total}</h3>`;
  } else {
      cartSection.innerHTML = "<p>Your cart is empty.</p>";
  }
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
  updateCartCount();
}

function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
  updateCartCount();
}


function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let count = cart.reduce((total, item) => total + item.quantity, 0);
  const countElement = document.getElementById("cart-count");
  if (countElement) countElement.innerText = count;
}

