console.log("Page loaded successfully")

// Get the current year
const currentYear = new Date().getFullYear();

// Display the current year in the footer
document.getElementById("currentYear").innerHTML = currentYear;

// Instance of Notyf of library
const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top',
  }
});


const priceRange = document.querySelector("#price-range");
const priceDisplay = document.querySelector("#price-display");

if(priceRange)
  priceRange.addEventListener("input", function() {
    if(priceRange){
      const price = this.value;
      priceDisplay.textContent = "Price: $" + price;
    }
  });


document.addEventListener('DOMContentLoaded', function(){
  // Sets the price on load
  if(priceRange){
    const price = priceRange.value;
    priceDisplay.textContent = "Price: $" + price;
  }


  const savedCurrency = localStorage.getItem('selectedCurrency');
    if (savedCurrency) {
      document.getElementById('selectedCurrency').textContent = savedCurrency; // Set the saved currency
    }
});


// Function to set the selected currency
function setCurrency(currency) {
  localStorage.setItem('selectedCurrency', currency); // Save the currency choice to localStorage
  document.getElementById('selectedCurrency').textContent = currency; // Update the displayed currency
}

// Check if the currency choice is stored in localStorage
const savedCurrency = localStorage.getItem('selectedCurrency');
if (savedCurrency) {
  document.getElementById('selectedCurrency').textContent = savedCurrency; // Set the saved currency
}


const shippingDetails = document.getElementById('shippingDetails');
const sameAddress = document.getElementById('sameAddress');

if(sameAddress){
  sameAddress.addEventListener('change', function() {
    if (this.checked) {
      shippingDetails.style.display = 'block';
    } else {
      shippingDetails.style.display = 'none';
    }
  });
}


const btnBuyNow = document.getElementById("btnBuyNow");
if (btnBuyNow) {
  btnBuyNow.addEventListener("click", () => {
    notyf.success('Item bought');
  });
}

const btnWishlist = document.getElementById("btnWishlist");
if (btnWishlist) {
  btnWishlist.addEventListener("click", () => {
    notyf.success('Added to wishlist');
  });
}

const btnAddToCart = document.getElementById("btnAddToCart");
if (btnAddToCart) {
  btnAddToCart.addEventListener("click", () => {
    notyf.success('Added to cart');
  });
}

const btnPayNow = document.getElementById("btnPayNow");
if (btnPayNow) {
  btnPayNow.addEventListener("click", () => {
    notyf.success('Your order will be processed and delivered');
    setTimeout(() => {
      window.location.href = '/'; 
    }, 2000); 
    
  });
}


class ProductQuantityInput {
  constructor(quantityInputElement, increaseButtonElement, decreaseButtonElement) {
    this.quantityInputElement = quantityInputElement;
    this.increaseButtonElement = increaseButtonElement;
    this.decreaseButtonElement = decreaseButtonElement;

    this.increaseButtonElement.addEventListener('click', () => {
      this.increaseQuantity();
    });

    this.decreaseButtonElement.addEventListener('click', () => {
      this.decreaseQuantity();
    });
  }

  increaseQuantity() {
    // Get the current quantity value
    const currentQuantity = parseInt(this.quantityInputElement.value);

    // Increment the quantity by 1
    const newQuantity = currentQuantity + 1;

    // Set the new quantity value to the input element
    this.quantityInputElement.value = newQuantity;
  }

  decreaseQuantity() {
    // Get the current quantity value
    const currentQuantity = parseInt(this.quantityInputElement.value);

    // Decrement the quantity by 1
    const newQuantity = currentQuantity - 1;

    // Check if the new quantity is less than 1
    if (newQuantity < 1) {
      // Set the new quantity to 1
      newQuantity = 1;
    }

    // Set the new quantity value to the input element
    this.quantityInputElement.value = newQuantity;
  }
}

// Get the quantity input element
const quantityInputElement = document.querySelector('#quantity');
// Get the increase button element
const increaseButtonElement = document.querySelector('#btnAdd');
// Get the decrease button element
const decreaseButtonElement = document.querySelector('#btnMinus');

// If all of the elements are found, create a new QuantityInput instance
if (quantityInputElement && increaseButtonElement && decreaseButtonElement) {
  const quantityInput = new ProductQuantityInput(quantityInputElement, increaseButtonElement, decreaseButtonElement);
}