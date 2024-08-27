// index.ts
// This is a TypeScript example that demonstrates various aspects of interfaces, including:
// basic syntax, optional and read - only properties, nesting interfaces, using interfaces in arrays,
// applying interfaces to variables, functions, classes, and objects.

// 1. Basic Interface Syntax
interface User {
  id: number;
  username: string;
  email: string;
}

// Applying the interface to a variable
const user1: User = {
  id: 1,
  username: "john_doe",
  email: "john.doe@example.com",
};

console.log("User 1:", user1);

// 2. Optional Properties
interface Post {
  id: number;
  title: string;
  content: string;
  published?: boolean; // This property is optional
}

// Applying the interface with optional property
const post1: Post = {
  id: 1,
  title: "Introduction to TypeScript",
  content: "This is an introductory post about TypeScript.",
  // published is not required here
};

const post2: Post = {
  id: 2,
  title: "Advanced TypeScript",
  content: "This post dives deeper into TypeScript features.",
  published: true,
};

console.log("Post 1:", post1);
console.log("Post 2:", post2);

// 3. Read-only Properties
interface UserComment {
  readonly id: number; // This property is read-only
  author: string;
  message: string;
}

const comment1: UserComment = {
  id: 101,
  author: "JaneDoe",
  message: "Great post!",
};

// comment1.id = 102; // Error: Cannot assign to 'id' because it is a read-only property
// If instead of UserComment we write Comment, this is a built-in type thus one has to formulate comment1 as follows:
/* 
const comment1 = {
  id: 101,
  author: "JaneDoe",
  message: "Great post!",
} as Comment; // // Assuming 'Comment' is your custom interface
*/

console.log("Comment 1:", comment1);

// 4. Interface Inside Another Interface
interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: User; // Nested interface
  comments: UserComment[]; // Array of another interface
}

// Applying the interface to an object
const blogPost: BlogPost = {
  id: 1,
  title: "Exploring TypeScript Interfaces",
  content:
    "In this blog post, we explore various aspects of TypeScript interfaces.",
  author: user1, // Reusing the user1 object
  comments: [comment1], // Array of comments
};

console.log("Blog Post:", blogPost);

// 5. Using Interfaces in Arrays
const posts: Post[] = [post1, post2]; // Array of Post interfaces

console.log("All Posts:", posts);

// 6. Applying Interfaces to Functions
interface Author {
  id: number;
  name: string;
}

interface AuthorInfo {
  (author: Author): string; // Function interface
}

// Implementing the function interface
const getAuthorInfo: AuthorInfo = (author: Author): string => {
  return `Author: ${author.name} (ID: ${author.id})`;
};

const author1: Author = { id: 1, name: "John Doe" };
console.log(getAuthorInfo(author1)); // Output: Author: John Doe (ID: 1)

// 7. Applying Interfaces in Classes
interface Drawable {
  draw(): void; // Method signature
}

class Circle implements Drawable {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  draw(): void {
    console.log(`Drawing a circle with radius: ${this.radius}`);
  }
}

const circle = new Circle(5);
circle.draw(); // Output: Drawing a circle with radius: 5

// 8. Applying Interfaces in Objects
interface Rectangle {
  width: number;
  height: number;
  calculateArea(): number;
}

const rectangle: Rectangle = {
  width: 10,
  height: 20,
  calculateArea(): number {
    return this.width * this.height;
  },
};

console.log("Rectangle Area:", rectangle.calculateArea()); // Output: Rectangle Area: 200

/*  Output
    User 1: { id: 1, username: 'john_doe', email: 'john.doe@example.com' }
    Post 1: {
    id: 1,
    title: 'Introduction to TypeScript',
    content: 'This is an introductory post about TypeScript.'
    }
    Post 2: {
    id: 2,
    title: 'Advanced TypeScript',
    content: 'This post dives deeper into TypeScript features.',
    published: true
    }
    Comment 1: { id: 101, author: 'JaneDoe', message: 'Great post!' }
    Blog Post: {
    id: 1,
    title: 'Exploring TypeScript Interfaces',
    content: 'In this blog post, we explore various aspects of TypeScript interfaces.',
    author: { id: 1, username: 'john_doe', email: 'john.doe@example.com' },
    comments: [ { id: 101, author: 'JaneDoe', message: 'Great post!' } ]
    }
    All Posts: [
    {
        id: 1,
        title: 'Introduction to TypeScript',
        content: 'This is an introductory post about TypeScript.'
    },
    {
        id: 2,
        title: 'Advanced TypeScript',
        content: 'This post dives deeper into TypeScript features.',
        published: true
    }
    ]
    Author: John Doe (ID: 1)
    Drawing a circle with radius: 5
    Rectangle Area: 200
*/

// 1. Basic Interface Syntax:
//    User interface defines the structure of a user object with id, username, and email.
//    user1 is a variable adhering to the User interface.
// 2. Optional Properties:
//    Post interface includes an optional published property.
//    post1 and post2 demonstrate how you can create objects with and without this optional property.
// 3. Read-only Properties:
//    UserComment interface has a readonly property id, ensuring it cannot be changed after initialization.
//    Trying to modify id in comment1 would result in an error.
// 4. Interface Inside Another Interface:
//    BlogPost interface includes another interface (User) and an array of Comment.
//    blogPost object demonstrates how to nest interfaces within other interfaces.
// 5. Using Interfaces in Arrays:
//    posts is an array of objects that conform to the Post interface.
// 6. Applying Interfaces to Functions:
//    AuthorInfo interface defines a function that takes an Author object and returns a string.
//    getAuthorInfo function implements this interface.
// 7. Applying Interfaces in Classes:
//    Drawable interface defines a draw method that any class implementing it must define.
//    Circle class implements the Drawable interface.
// 8. Applying Interfaces in Objects:
//    Rectangle interface defines an object structure with properties and a method.
//    rectangle object implements this interface and includes a calculateArea method.
