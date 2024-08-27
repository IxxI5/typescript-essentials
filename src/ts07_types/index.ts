// index.ts

// TypeScript Example: E-commerce Platform

// 1. Type Aliases
// Type aliases provide a way to name a type, making the code more readable and maintainable.
type UserID = string;
type ProductID = string;
type Currency = "USD" | "EUR" | "GBP";

console.log("Type Aliases: UserID, ProductID, and Currency defined.");

// 2. Union Types (|)
// Union types allow variables to be one of several types.
type PaymentMethod = "CreditCard" | "PayPal" | "BankTransfer";
type ProductCategory = "Electronics" | "Clothing" | "Books";

console.log("Union Types: PaymentMethod and ProductCategory defined.");

// A product can belong to any of the above categories
type Product = {
  id: ProductID;
  name: string;
  price: number;
  currency: Currency;
  category: ProductCategory;
};

console.log("Product type defined using type aliases and union types.");

// 3. Intersection Types (&)
// Intersection types combine multiple types into one.
type Address = {
  street: string;
  city: string;
  postalCode: string;
  country: string;
};

type User = {
  id: UserID;
  name: string;
  email: string;
};

type Customer = User & {
  address: Address;
  paymentMethod: PaymentMethod;
};

console.log(
  "Intersection Types: Customer type created by combining User and Address."
);

// Let's create a sample customer
const customer: Customer = {
  id: "user123",
  name: "John Doe",
  email: "john.doe@example.com",
  address: {
    street: "123 Main St",
    city: "New York",
    postalCode: "10001",
    country: "USA",
  },
  paymentMethod: "CreditCard",
};

console.log("Customer created:", customer);

// 4. Difference Between Interface and Type
// Interface example
interface Order {
  orderId: string;
  customer: Customer;
  products: Product[];
  totalAmount: number;
  status: "Pending" | "Shipped" | "Delivered";
}

// Type alias example
type Invoice = {
  invoiceId: string;
  customer: Customer;
  order: Order;
  issuedDate: Date;
};

console.log("Interface Order and Type Alias Invoice defined.");

// Create a sample order
const order: Order = {
  orderId: "order456",
  customer: customer,
  products: [
    {
      id: "prod789",
      name: "Laptop",
      price: 999.99,
      currency: "USD",
      category: "Electronics",
    },
  ],
  totalAmount: 999.99,
  status: "Pending",
};

console.log("Order created:", order);

// Create a sample invoice
const invoice: Invoice = {
  invoiceId: "inv001",
  customer: customer,
  order: order,
  issuedDate: new Date(),
};

console.log("Invoice created:", invoice);

// 5. Extending Interface
// Interfaces can be extended using the 'extends' keyword.
interface ShippableOrder extends Order {
  shippingDate: Date;
}

const shippableOrder: ShippableOrder = {
  ...order,
  shippingDate: new Date(),
};

console.log(
  "ShippableOrder created by extending Order interface:",
  shippableOrder
);

/** Output
 *  Type Aliases: UserID, ProductID, and Currency defined.
Union Types: PaymentMethod and ProductCategory defined.
Product type defined using type aliases and union types.
Intersection Types: Customer type created by combining User and Address.
Customer created: {
  id: 'user123',
  name: 'John Doe',
  email: 'john.doe@example.com',
  address: {
    street: '123 Main St',
    city: 'New York',
    postalCode: '10001',
    country: 'USA'
  },
  paymentMethod: 'CreditCard'
}
Interface Order and Type Alias Invoice defined.
Order created: {
  orderId: 'order456',
  customer: {
    id: 'user123',
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: {
      street: '123 Main St',
      city: 'New York',
      postalCode: '10001',
      country: 'USA'
    },
    paymentMethod: 'CreditCard'
  },
  products: [
    {
      id: 'prod789',
      name: 'Laptop',
      price: 999.99,
      currency: 'USD',
      category: 'Electronics'
    }
  ],
  totalAmount: 999.99,
  status: 'Pending'
}
Invoice created: {
  invoiceId: 'inv001',
  customer: {
    id: 'user123',
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: {
      street: '123 Main St',
      city: 'New York',
      postalCode: '10001',
      country: 'USA'
    },
    paymentMethod: 'CreditCard'
  },
  order: {
    orderId: 'order456',
    customer: {
      id: 'user123',
      name: 'John Doe',
      email: 'john.doe@example.com',
      address: [Object],
      paymentMethod: 'CreditCard'
    },
    products: [ [Object] ],
    totalAmount: 999.99,
    status: 'Pending'
  },
  issuedDate: 2024-08-26T12:37:49.021Z
}
ShippableOrder created by extending Order interface: {
  orderId: 'order456',
  customer: {
    id: 'user123',
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: {
      street: '123 Main St',
      city: 'New York',
      postalCode: '10001',
      country: 'USA'
    },
    paymentMethod: 'CreditCard'
  },
  products: [
    {
      id: 'prod789',
      name: 'Laptop',
      price: 999.99,
      currency: 'USD',
      category: 'Electronics'
    }
  ],
  totalAmount: 999.99,
  status: 'Pending',
  shippingDate: 2024-08-26T12:37:49.028Z
}
 */

/**
 *
 * - **Type Aliases**: We created type aliases for `UserID`, `ProductID`, and `Currency`. These help make the code
 *   more readable by using specific names for primitive types like `string`.
 *
 * - **Union Types (`|`)**: We used union types to define that `PaymentMethod` can be one of 'CreditCard', 'PayPal',
 *   or 'BankTransfer', and `ProductCategory` can be 'Electronics', 'Clothing', or 'Books'.
 *
 * - **Intersection Types (`&`)**: The `Customer` type is an intersection of the `User` and `Address` types,
 *   meaning it contains all the properties of both. We added a `paymentMethod` as well.
 *
 * - **Difference Between Interface and Type**: We demonstrated the difference between interfaces and type aliases.
 *   Interfaces can be extended (e.g., `ShippableOrder extends Order`), whereas type aliases are more flexible and
 *   can represent union and intersection types directly.
 *
 * - **Output**: We used `console.log` to output the created objects at each step so that you can see how they are
 *   constructed and used. This helps in understanding how these concepts are applied in a real-world scenario.
 *
 */
