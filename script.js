let cart = [];

// Add To Cart Function
function addToCart(name, price) {

    let product = cart.find(function(item) {
        return item.name === name;
    });

    if (product) {
        product.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    showCart();

    alert(name + " Added To Cart!");
}

// Show Cart Function
function showCart() {

    let cartItems = document.getElementById("cart-items");
    let total = document.getElementById("total");

    cartItems.innerHTML = "";

    let totalProducts = 0;
    let totalAmount = 0;

    cart.forEach(function(item) {

        totalProducts += item.quantity;
        totalAmount += item.price * item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>₹${item.price}</span>
                <span>Qty: ${item.quantity}</span>
            </div>
        `;
    });

    if (cart.length === 0) {
        cartItems.innerHTML = "Your cart is empty.";
    }

    total.innerText = totalAmount;
}

// Clear Cart Function
function clearCart() {

    cart = [];

    showCart();

    alert("Your Cart is Empty!");
}