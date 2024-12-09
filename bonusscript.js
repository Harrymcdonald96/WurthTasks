// Bonus Task: Shopping Cart Functionality

// Elements
const cartItems = document.querySelectorAll('.cart-item');
const totalDisplay = document.getElementById('cart-total');

// Function to update total price
function updateCartTotal() {
  let total = 0;

  cartItems.forEach((item) => {
    const quantity = item.querySelector('.item-quantity').value;
    const price = item.querySelector('.item-price').textContent;
    total += quantity * parseFloat(price);
  });

  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

// Add event listeners to quantity inputs
cartItems.forEach((item) => {
  const quantityInput = item.querySelector('.item-quantity');
  quantityInput.addEventListener('input', updateCartTotal);
});

// Initial total calculation
updateCartTotal();
