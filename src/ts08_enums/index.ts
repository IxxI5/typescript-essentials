// index.ts
// TypeScript Example: Order Processing System

// 1. Numeric Enums
// Numeric enums are used when you want to define a set of named numeric constants.
// The first value is auto-assigned to 0 (or any number you provide), and the rest increment by 1.

enum OrderStatus {
  Pending, // 0
  Shipped, // 1
  Delivered, // 2
  Cancelled, // 3
}

console.log("Numeric Enum: OrderStatus defined with values -", OrderStatus);

// Let's create a sample order using the numeric enum
const orderStatus: OrderStatus = OrderStatus.Shipped;

console.log("Order status set using numeric enum:", OrderStatus[orderStatus]);

// 2. String Enums
// String enums allow you to define a set of named constants with string values.

enum ProductCategory {
  Electronics = "Electronics",
  Clothing = "Clothing",
  Books = "Books",
  Furniture = "Furniture",
}

console.log(
  "String Enum: ProductCategory defined with values -",
  ProductCategory
);

// Let's create a sample product using the string enum
type Product = {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
};

const product: Product = {
  id: "prod001",
  name: "Smartphone",
  price: 699.99,
  category: ProductCategory.Electronics,
};

console.log("Product created using string enum:", product);

// 3. Using Enums in a Function
// Enums can be very useful in functions for validating or processing specific values.

function isOrderDelivered(status: OrderStatus): boolean {
  return status === OrderStatus.Delivered;
}

console.log("Is the order delivered?", isOrderDelivered(orderStatus));

// 4. Enum Reverse Mapping
// Numeric enums support reverse mapping, meaning you can get the name of the enum by its value.

console.log("Reverse mapping example: OrderStatus[2] =", OrderStatus[2]);

/** Output
 *  Numeric Enum: OrderStatus defined with values - {
  '0': 'Pending',
  '1': 'Shipped',
  '2': 'Delivered',
  '3': 'Cancelled',
  Pending: 0,
  Shipped: 1,
  Delivered: 2,
  Cancelled: 3
}
Order status set using numeric enum: Shipped
String Enum: ProductCategory defined with values - {
  Electronics: 'Electronics',
  Clothing: 'Clothing',
  Books: 'Books',
  Furniture: 'Furniture'
}
Product created using string enum: {
  id: 'prod001',
  name: 'Smartphone',
  price: 699.99,
  category: 'Electronics'
}
Is the order delivered? false
Reverse mapping example: OrderStatus[2] = Delivered
 */

/**
 * - **Numeric Enums**: We created a numeric enum `OrderStatus` where each status is automatically assigned a numeric value
 *   starting from 0. This is useful when the underlying values are integers or when you don't care about the actual values.
 *
 * - **String Enums**: We created a string enum `ProductCategory` where each category is explicitly assigned a string value.
 *   This is useful when you need meaningful and readable string values for your enum members.
 *
 * - **Using Enums in a Function**: The `isOrderDelivered` function checks whether an order is delivered by comparing the
 *   status to `OrderStatus.Delivered`. Enums provide a clear and type-safe way to work with a predefined set of constants.
 *
 * - **Enum Reverse Mapping**: Numeric enums in TypeScript support reverse mapping, meaning you can retrieve the name of
 *   the enum by its numeric value (e.g., `OrderStatus[2]` returns `'Delivered'`).
 *
 * - **Output**: The `console.log` statements throughout the file demonstrate how enums are defined and used in a real-world
 *   scenario, making the code easier to understand and maintain.
 *
 */
