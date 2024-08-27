// index.ts
// Simulating a simple shopping cart application. We need to handle products and calculate the total price of items in the cart.
// TypeScript can infer the types of variables based on the values assigned to them, simplifying your code and ensuring type safety.

import { Product } from "./product";

// TypeScript infers the type of `product1` based on the assigned object
const product1 = {
  id: 1,
  name: "Laptop",
  price: 999.99,
};

// TypeScript infers the type of `product2` based on the assigned object
const product2 = {
  id: 2,
  name: "Mouse",
  price: 25.99,
};

// TypeScript infers the type of `cart` as an array of `Product`
const cart: Product[] = [product1, product2];

// Function to calculate the total price of items in the cart
function calculateTotal(cart: Product[]): number {
  // TypeScript infers `total` as a number because it's initialized with a numeric value
  let total = 0;

  for (const product of cart) {
    // `product` is inferred as `Product` within this loop
    total += product.price;
  }

  return total;
}

// Calculate and display the total price
const totalPrice = calculateTotal(cart);
console.log(`Total Price: $${totalPrice.toFixed(2)}`); // Total Price: $1025.98
