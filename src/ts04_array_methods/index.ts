// index.ts
// Simulating a simple task management system where we keep track of tasks, and each task has an ID, a title,
// and a status indicating whether it is completed.
// Array methods demonstrated:
// push, pop, shift, unshift modify the array by adding or removing elements,
// find, filter, some, every, map, reduce, sort, join, concat, flatMap, reverse, slice, and splice are used to query, modify, or
// transform the array in different ways,
// destructuring of an array

// Array with specific types
let tasks: { id: number; title: string; completed: boolean }[] = [];

// Adding tasks to the array using push
tasks.push(
  { id: 1, title: "Learn TypeScript", completed: false },
  { id: 2, title: "Write blog post", completed: false },
  { id: 3, title: "Go for a run", completed: true }
);

// Accessing elements in the array
console.log("First task:", tasks[0]);

// Finding a task by ID using find
let task = tasks.find((task) => task.id === 2);
console.log("Found task:", task);

// Filtering tasks that are completed using filter
let completedTasks = tasks.filter((task) => task.completed);
console.log("Completed tasks:", completedTasks);

// Checking if all tasks are completed using every
let allCompleted = tasks.every((task) => task.completed);
console.log("Are all tasks completed?", allCompleted);

// Checking if there is at least one completed task using some
let hasCompleted = tasks.some((task) => task.completed);
console.log("Is there any completed task?", hasCompleted);

// Mapping over the tasks to get an array of task titles using map
let taskTitles = tasks.map((task) => task.title);
console.log("Task titles:", taskTitles);

// Updating a task's status using map
tasks = tasks.map((task) =>
  task.id === 2 ? { ...task, completed: true } : task
);
console.log("Updated tasks:", tasks);

// Reducing tasks to count how many are completed using reduce
let completedCount = tasks.reduce(
  (count, task) => count + (task.completed ? 1 : 0),
  0
);
console.log("Number of completed tasks:", completedCount);

// Sorting tasks by title using sort
tasks.sort((a, b) => a.title.localeCompare(b.title));
console.log("Sorted tasks:", tasks);

// Removing the last task using pop
let lastTask = tasks.pop();
console.log("Removed last task:", lastTask);
console.log("Remaining tasks:", tasks);

// Adding a new task at the beginning using unshift
tasks.unshift({ id: 4, title: "Prepare dinner", completed: false });
console.log("Tasks after unshift:", tasks);

// Removing the first task using shift
let firstTask = tasks.shift();
console.log("Removed first task:", firstTask);
console.log("Remaining tasks after shift:", tasks);

// Joining all task titles into a single string using join
let taskTitlesString = tasks.map((task) => task.title).join(", ");
console.log("All task titles as a string:", taskTitlesString);

// Concatenating two arrays of tasks using concat
let moreTasks = [
  { id: 5, title: "Read a book", completed: false },
  { id: 6, title: "Do laundry", completed: true },
];
let allTasks = tasks.concat(moreTasks);
console.log("All tasks after concatenation:", allTasks);

// Flattening an array of arrays using flatMap
let tasksWithSubtasks = [
  {
    id: 7,
    title: "Plan trip",
    completed: false,
    subtasks: ["Book flight", "Reserve hotel"],
  },
  {
    id: 8,
    title: "Learn cooking",
    completed: true,
    subtasks: ["Buy ingredients", "Cook dinner"],
  },
];

let flattenedTasks = tasksWithSubtasks.flatMap((task) => [
  task.title,
  ...task.subtasks,
]);
console.log("Flattened tasks:", flattenedTasks);

// Reversing the order of tasks using reverse
tasks.reverse();
console.log("Reversed tasks:", tasks);

// Slicing the first two tasks using slice
let firstTwoTasks = tasks.slice(0, 2);
console.log("First two tasks:", firstTwoTasks);

// Splicing to remove and replace tasks using splice
tasks.splice(1, 1, { id: 9, title: "Fix bugs", completed: false });
console.log("Tasks after splicing:", tasks);

// Destructuring the array to extract individual tasks
const [task1, task2] = tasksWithSubtasks;

// Accessing properties of the first task using destructuring
console.log("Demonstrating array destructuring");
const {
  id: id1,
  title: title1,
  completed: completed1,
  subtasks: subtasks1,
} = task1;

// Accessing properties of the second task using destructuring
const {
  id: id2,
  title: title2,
  completed: completed2,
  subtasks: subtasks2,
} = task2;

// Logging the results
console.log(`Task 1: ${title1}`);
console.log(`  ID: ${id1}`);
console.log(`  Completed: ${completed1}`);
console.log(`  Subtasks: ${subtasks1.join(", ")}`);

console.log(`Task 2: ${title2}`);
console.log(`  ID: ${id2}`);
console.log(`  Completed: ${completed2}`);
console.log(`  Subtasks: ${subtasks2.join(", ")}`);

// Destructuring objects
console.log("Destructuring an object example");
const person = {
  id: 234,
  name: {
    firstName: "Enayetur",
    lastName: "Rahman",
  },
  mobile: "01730197620",
  address: "Sylhet",
};

const {
  mobile,
  name: { lastName },
} = person;

console.log(`Mobile:${mobile}`);
console.log(`Name:${lastName}`);

// Destructuring arrays
console.log("Destructuring an array example");
const names = ["enayet", "abdullah", "mariyam", "alisha", "arham"];

const [a, b, ...c] = names;

console.log(`names[0]:${a}, names[1]:${b}, names[...]:${c}`);

/*  Output
    First task: { id: 1, title: 'Learn TypeScript', completed: false }
    Found task: { id: 2, title: 'Write blog post', completed: false }
    Completed tasks: [ { id: 3, title: 'Go for a run', completed: true } ]
    Are all tasks completed? false
    Is there any completed task? true
    Task titles: [ 'Learn TypeScript', 'Write blog post', 'Go for a run' ]
    Updated tasks: [
      { id: 1, title: 'Learn TypeScript', completed: false },
      { id: 2, title: 'Write blog post', completed: true },
      { id: 3, title: 'Go for a run', completed: true }
    ]
    Number of completed tasks: 2
    Sorted tasks: [
      { id: 3, title: 'Go for a run', completed: true },
      { id: 1, title: 'Learn TypeScript', completed: false },
      { id: 2, title: 'Write blog post', completed: true }
    ]
    Removed last task: { id: 2, title: 'Write blog post', completed: true }
    Remaining tasks: [
      { id: 3, title: 'Go for a run', completed: true },
      { id: 1, title: 'Learn TypeScript', completed: false }
    ]
    Tasks after unshift: [
      { id: 4, title: 'Prepare dinner', completed: false },
      { id: 3, title: 'Go for a run', completed: true },
      { id: 1, title: 'Learn TypeScript', completed: false }
    ]
    Removed first task: { id: 4, title: 'Prepare dinner', completed: false }
    Remaining tasks after shift: [
      { id: 3, title: 'Go for a run', completed: true },
      { id: 1, title: 'Learn TypeScript', completed: false }
    ]
    All task titles as a string: Go for a run, Learn TypeScript
    All tasks after concatenation: [
      { id: 3, title: 'Go for a run', completed: true },
      { id: 1, title: 'Learn TypeScript', completed: false },
      { id: 5, title: 'Read a book', completed: false },
      { id: 6, title: 'Do laundry', completed: true }
    ]
    Flattened tasks: [
      'Plan trip',
      'Book flight',
      'Reserve hotel',
      'Learn cooking',
      'Buy ingredients',
      'Cook dinner'
    ]
    Reversed tasks: [
      { id: 1, title: 'Learn TypeScript', completed: false },
      { id: 3, title: 'Go for a run', completed: true }
    ]
    First two tasks: [
      { id: 1, title: 'Learn TypeScript', completed: false },
      { id: 3, title: 'Go for a run', completed: true }
    ]
    Tasks after splicing: [
      { id: 1, title: 'Learn TypeScript', completed: false },
      { id: 9, title: 'Fix bugs', completed: false }
    ]
    Demonstrating array destructuring
    Task 1: Plan trip
      ID: 7
      Completed: false
      Subtasks: Book flight, Reserve hotel
    Task 2: Learn cooking
      ID: 8
      Completed: true
      Subtasks: Buy ingredients, Cook dinner
  Destructuring an object example
  Mobile:01730197620
  Name:Rahman
  Destructuring an array example
  names[0]:enayet, names[1]:abdullah, names[...]:mariyam,alisha,arham
*/
