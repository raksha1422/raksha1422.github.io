function orderWhatsApp() {
    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }

    let message = "Hello, I want to order:\n";

    cart.forEach(item => {
        message += item.product + " - ₹" + item.price + "\n";
    });

    let phoneNumber = "7899411200"; // your WhatsApp number
    let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}

let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    displayCart();
}

function displayCart() {
    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.product + " - ₹" + item.price;
        cartItems.appendChild(li);
    });
}
