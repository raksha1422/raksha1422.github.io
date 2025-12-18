let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, price) {
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function displayCart() {
  let cartItems = document.getElementById("cartItems");
  if (!cartItems) return;

  cartItems.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.product + " - ₹" + item.price;
    cartItems.appendChild(li);
  });
}

function orderWhatsApp() {
  let message = "Order:\n";
  cart.forEach(i => message += i.product + " - ₹" + i.price + "\n");
  window.open("https://wa.me/91XXXXXXXXXX?text=" + encodeURIComponent(message));
}

displayCart();

