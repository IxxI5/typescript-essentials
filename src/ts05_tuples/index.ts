// index.ts
// The following code covers various aspects of tuples in TypeScript, including basic usage, destructuring, optional and rest elements, and working with
// tuples containing different types. It demonstrates how tuples can be used to group and manage related data efficiently in TypeScript.

// A simple 2D point represented as a tuple with two elements: x and y
let point: [number, number] = [10, 20];

// Accessing the elements of the tuple
console.log("X coordinate:", point[0]); // Output: X coordinate: 10
console.log("Y coordinate:", point[1]); // Output: Y coordinate: 20

// Updating the tuple
point[0] = 15; // Update X coordinate
point[1] = 25; // Update Y coordinate

console.log("Updated point:", point); // Output: Updated point: [15, 25]

// Function to calculate the distance between two points
function calculateDistance(
  point1: [number, number],
  point2: [number, number]
): number {
  const xDiff = point2[0] - point1[0];
  const yDiff = point2[1] - point1[1];
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

// Example usage of calculateDistance function
let pointA: [number, number] = [3, 4];
let pointB: [number, number] = [7, 1];

let distance = calculateDistance(pointA, pointB);
console.log("Distance between points A and B:", distance); // Output: Distance between points A and B: 5

// Array of points represented as tuples
let points: [number, number][] = [
  [0, 0],
  [3, 4],
  [6, 8],
  [9, 12],
];

// Loop through the array and print each point
for (let point of points) {
  console.log(`Point: (${point[0]}, ${point[1]})`);
}

// Output:
// Point: (0, 0)
// Point: (3, 4)
// Point: (6, 8)
// Point: (9, 12)

// Destructuring tuples
let [x, y] = pointA;
console.log(`Destructured Point A: X=${x}, Y=${y}`); // Output: Destructured Point A: X=3, Y=4

// Optional elements in tuples
let pointC: [number, number, number?] = [5, 10]; // Z coordinate is optional
console.log("Point C with optional Z:", pointC); // Output: Point C with optional Z: [5, 10]

// Adding the optional Z coordinate
pointC[2] = 15;
console.log("Point C with Z set:", pointC); // Output: Point C with Z set: [5, 10, 15]

// Tuples with rest elements
let pointD: [number, ...number[]] = [1, 2, 3, 4];
console.log("Point D with rest elements:", pointD); // Output: Point D with rest elements: [1, 2, 3, 4]

// Destructuring with rest elements
let [first, ...rest] = pointD;
console.log("First element of Point D:", first); // Output: First element of Point D: 1
console.log("Rest of the elements in Point D:", rest); // Output: Rest of the elements in Point D: [2, 3, 4]

// A tuple representing different data types
let mixedTuple: [string, number, boolean] = ["OpenAI", 2024, true];
console.log("Mixed tuple:", mixedTuple); // Output: Mixed tuple: ["OpenAI", 2024, true]
