// Number type: price of a product
let productPrice: number = 29.99; // type number

// String type: name of the store
let storeName: string = "Tech Gadget Store"; // type string

// Boolean type: if store is open
let isStoreOpen: boolean = true; // type boolean

// Null and Undefined types
let discountCode: string | null = null; // type string or null
let user: { name: string; age?: number } = { name: "Alice" }; // user.age is optional and thus undefined

// Any type: variable that can hold any value
let randomValue: any = "Could be anything";
randomValue = 42; // Changing to a number
randomValue = true; // Changing to a boolean

// Unknown type: variable whose type is not known until runtime
let unknownValue: unknown = "Initial string";

// Function to calculate total price and process order
function processOrder(
  products: { name: string; price: number }[],
  discountCode?: string
): void {
  let total: number = 0; // type number
  let hasDiscount: boolean = false; // type boolean

  // Calculate total price of products
  for (const product of products) {
    total += product.price;
  }

  // Apply discount if a discount code is provided
  if (discountCode) {
    hasDiscount = true; // Update boolean value

    // Simple discount logic: 10% off if code is 'DISCOUNT10'
    if (discountCode === "DISCOUNT10") {
      total *= 0.9; // Apply 10% discount
    } else {
      console.log(`Invalid discount code: ${discountCode}`); // Output invalid code message
    }
  }

  // Check for null or undefined values
  if (products.length === 0 || total === 0) {
    console.log("No products to process or total is zero.");
    return;
  }

  // Log the order summary
  console.log(`Order Summary:`);
  console.log(`Total Price: $${total.toFixed(2)}`);
  console.log(`Discount Applied: ${hasDiscount ? "Yes" : "No"}`);
}

// Example usage
const products: { name: string; price: number }[] = [
  { name: "Laptop", price: 999.99 },
  { name: "Mouse", price: 25.5 },
];

// Call function with valid parameters
processOrder(products, "DISCOUNT10");

// Call function with no discount code
processOrder(products);

// Call function with no products
processOrder([], "DISCOUNT10");

/*  Output
    Order Summary:
    Total Price: $922.94
    Discount Applied: Yes
    Order Summary:
    Total Price: $1025.49
    Discount Applied: No
    No products to process or total is zero.
*/
