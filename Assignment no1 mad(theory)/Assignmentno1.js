// Shopping Cart Implementation

const cart = [];

//  Add Items to the Cart
const addItemToCart = (productId, productName, quantity, price) => {
    const product = { productId, productName, quantity, price };
    cart.push(product);
};

// Remove and Update Items
const removeItemFromCart = (productId) => {
    const index = cart.findIndex(item => item.productId === productId);
    if (index !== -1) {
        cart.splice(index, 1);
    }
};

const updateItemQuantity = (productId, newQuantity) => {
    cart.map(item => {
        if (item.productId === productId) {
            item.quantity = newQuantity;
        }
        return item;
    });
};

//  Calculate Total Cost
const calculateTotalCost = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

//  Display Cart Summary
const displayCartSummary = () => {
    const summary = cart.map(item => ({
        name: item.productName,
        quantity: item.quantity,
        totalPrice: item.quantity * item.price
    }));
    console.log("Cart Summary:", summary);
};

const filterZeroQuantity = () => {
    return cart.filter(item => item.quantity > 0);
};

//  Apply Discount Code (Bonus)
const applyDiscount = (discountPercentage) => {
    const total = calculateTotalCost();
    const discountAmount = total * (discountPercentage / 100);
    const finalPrice = total - discountAmount;
    return finalPrice;
};

// Example Usage
addItemToCart(1, "Laptop", 1, 1500);
addItemToCart(2, "Phone", 2, 800);
removeItemFromCart(1);
updateItemQuantity(2, 3);
displayCartSummary();
console.log(`Total Cost: $${calculateTotalCost()}`);
console.log("Filtered Cart (No Zero Quantity):", filterZeroQuantity());
console.log(`Total after Discount: $${applyDiscount(10)}`);
