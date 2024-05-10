type Point = {
    x: number;
    y: number;
};

let position: Point = { x: 10, y: 20 };
// _______________________________________________________
/**
 * - Complex Types: TypeScript offers complex data types for more structured data representation:
Arrays: Ordered collections of elements of a specified type, facilitating storage and manipulation of multiple values.
Tuples: Fixed-length arrays with predefined types for each element, enabling storage of heterogeneous data.
Enums: Enumerated types with a set of named constants, enhancing code readability and maintainability.
Objects: Key-value pairs representing structured data entities, allowing for modeling real-world entities and relationships.
*/
let numbers: number[] = [1, 2, 3];
let tuple: [string, number] = ["one", 1];
enum Direction {
    Up,
    Down,
    Left,
    Right,
}
let go: Direction = Direction.Up;
let obj: { x: number; y: number } = { x: 10, y: 20 };

// _______________________________________________________

/**
 * - Custom Types: TypeScript allows developers to define custom types to suit specific application requirements:
Type Aliases: Provide alternative names for existing types, improving code readability and expressiveness.
Interfaces: Declare contracts for object shapes, specifying required and optional properties and methods.
Type Assertions: Assert the type of a value to a more specific type, enabling type compatibility checks and preventing type-related errors.
These custom types enhance code maintainability, facilitate code reuse, and promote type safety in TypeScript projects.
*/

type Point = {
    x: number;
    y: number;
};

interface Shape {
    color: string;
}

let position: Point = { x: 10, y: 20 };
let circle: Shape = { color: "red" };

let value: any = "Hello, TypeScript!";
let length: number = (value as string).length;

// _______________________________________________________
class Person {
    constructor(public name: string, public age: number) {}
    greet(): void {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

let person = new Person("Alice", 30);
person.greet();
// _______________________________________________________
/**
 * - Variable Declaration: TypeScript offers multiple ways to declare variables, including:
let: Declares block-scoped variables that can be reassigned.
const: Declares block-scoped variables that cannot be reassigned, providing immutability.
var: Declares variables with function scope or global scope, often avoided due to its lack of block scope.
These variable declaration keywords enable developers to manage variable scope and mutability effectively.
*/

let name: string = "Alice";
const age: number = 30;
var isStudent: boolean = false;

// _______________________________________________________

/**
 * - Functions: TypeScript supports various function declaration styles, including:
Function Declarations: Traditional function definitions with explicit return types and parameter types.
Arrow Functions: Concise syntax for defining functions with implicit return types and lexical this binding.
Function Overloading: Declaring multiple function signatures with different parameter types or return types.
Optional Parameters: Declaring function parameters as optional using ? syntax, enhancing function flexibility.
These function declaration features provide flexibility, expressiveness, and type safety in TypeScript codebases.
*/

function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

const add = (x: number, y: number): number => x + y;

function sum(a: number, b: number): number;

function sum(a: string, b: string): string;

function sum(a: any, b: any): any {
    return a + b;
}

function greet(name?: string): void {
    if (name) {
        console.log(`Hello, ${name}!`);
    } else {
        console.log("Hello!");
    }
}

// _______________________________________________________

/**
 * - Control Flow Statements: TypeScript offers control flow statements for conditional execution and loop iteration:
Conditional Statements: Including if, else, and switch statements for branching based on logical conditions.
Loop Statements: Including for, while, and do-while loops for iterative execution of code blocks.
Exception Handling: Using try, catch, and finally blocks for handling runtime errors and exceptions.
TypeScript's robust control flow statements enable developers to handle diverse execution scenarios and ensure code reliability.
*/

let num: number = 10;

if (num > 0) {
    console.log("Positive number");
}

let i: number = 0;
while (i < 5) {
    console.log(i);
    i++;
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

try {
  throw new Error("Error occurred");
} catch (error) {
  console.error(error);
} finally {
  console.log("Finally block executed");
}

// _______________________________________________________

/**
 * - Object-Oriented Programming: TypeScript provides robust support for object-oriented programming (OOP) concepts:
Classes: Blueprint for creating objects with properties and methods, supporting encapsulation and inheritance.
Inheritance: Mechanism for creating hierarchical relationships between classes, enabling code reuse and specialization.
Interfaces: Contracts specifying the structure of objects, facilitating code interoperability and type checking.
Access Modifiers: Keywords such as public, private, and protected for controlling access to class members, enhancing encapsulation and data hiding.
These OOP features empower developers to write modular, scalable, and maintainable code in TypeScript projects.

*/

class Person {
    constructor(public name: string, public age: number) {}
    greet(): void {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name: string, age: number, public studentId: string) {
        super(name, age);
    }
    study(): void {
        console.log(`${this.name} with student ID ${this.studentId} is studying.`);
    }
}

let student = new Student("Alice", 20, "12345");
student.greet();
student.study();


// _______________________________________________________
function log(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(`Calling ${key} with arguments: ${args}`);
    return descriptor;
}

class Example {
    @log
    greet(name: string): void {
        console.log(`Hello, ${name}!`);
    }
}
// _______________________________________________________

/**
 * - Introduction to Decorators: Decorators are a TypeScript feature used to:
Add metadata and behavior to classes, methods, properties, and accessors.
Enable cross-cutting concerns such as logging, caching, authentication, and validation.
Decorators enhance code readability, maintainability, and reusability by separating concerns and promoting modular design.
*/

function log(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(`Calling ${key} with arguments: ${args}`);
    return descriptor;
}

class Example {
    @log
    greet(name: string): void {
        console.log(`Hello, ${name}!`);
    }
}

// _______________________________________________________

/**
 * - Creating Decorators: Developers can create custom decorators using TypeScript's decorator syntax:
Decorator Factory: A function that returns a decorator function, enabling parameterized decorators.
Decorator Function: A function that receives target, key, and descriptor arguments, allowing manipulation of class members.
Decorators can be applied to class declarations, method definitions, property declarations, and accessor declarations.

*/

function log(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(`Calling ${key} with arguments: ${args}`);
    return descriptor;
}

class Example {
    @log
    greet(name: string): void {
        console.log(`Hello, ${name}!`);
    }
}

// _______________________________________________________

/**
 * - Common Use Cases: Decorators find application in various scenarios across TypeScript projects:
Logging: Adding logging functionality to class methods or functions to track method invocations and parameter values.
Caching: Implementing caching mechanisms to improve performance by storing and retrieving computed results.
Authentication: Enforcing authentication requirements by restricting access to methods or routes based on user authentication status.
Validation: Validating input parameters or object properties to ensure data integrity and compliance with business rules.
*/

function log(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(`Calling ${key} with arguments: ${args}`);
    return descriptor;
}

class Example {
    @log
    greet(name: string): void {
        console.log(`Hello, ${name}!`);
    }
}

// _______________________________________________________

/**
 * - Understanding ES6 Features: ECMAScript 6 (ES6) introduced several key features to JavaScript, including:
Arrow Functions: Concise syntax for defining functions with implicit return values and lexical this binding.
Template Literals: Enhanced string interpolation syntax with support for multi-line strings and expression interpolation.
Destructuring Assignments: Efficient syntax for extracting values from arrays and objects into individual variables.
Spread/Rest Operators: Versatile operators for spreading array elements or object properties and collecting function arguments.
These ES6 features enhance code expressiveness, readability, and maintainability in modern JavaScript development.

*/

const add = (x: number, y: number): number => x + y;
const message = `The sum of 2 and 3 is ${add(2, 3)}`;
const [first, second] = [1, 2];

// _______________________________________________________

/**
 * - TypeScript and ES6: TypeScript extends ECMAScript 6 capabilities while ensuring compatibility with older JavaScript environments:
Compatibility: TypeScript is designed to support ES6 syntax and features, allowing developers to write modern JavaScript code.
Transpilation: TypeScript code is transpiled to ES5 or lower versions to ensure compatibility with older browsers and environments.
Polyfills: TypeScript projects can include polyfills to provide ES6 features in environments that lack native support.
TypeScript enables developers to leverage the latest JavaScript innovations while maintaining backward compatibility and cross-browser support.

*/

const add = (x: number, y: number): number => x + y;
const message = `The sum of 2 and 3 is ${add(2, 3)}`;
const [first, second] = [1, 2];

// _______________________________________________________

import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

async function readData(filePath: string): Promise<string> {
    const data = await readFile(filePath, 'utf-8');
    return data;
}


// _______________________________________________________

const add = (x: number, y: number): number => x + y;
const message = `The sum of 2 and 3 is ${add(2, 3)}`;
const [first, second] = [1, 2];
export { first, second };


// Union Types: Example: 
let value: string | number;

// Intersection Types: Example:
interface A { x: number; }
interface B { y: string; }
let obj: A & B = { x: 1, y: 'hello' };

// Conditional Types: Example:

type NonNullable<T> = T extends null | undefined ? never : T;
type T0 = NonNullable<string | null>;  // string
type T1 = NonNullable<string | undefined>;  // string

//  Mapped Types: Example:

type Flags = {
  option1: boolean;
  option2: boolean;
};
type NullableFlags = { [K in keyof Flags]: Flags[K] | null };

//  Type Guards: Example:

function isNumber(x: any): x is number {
  return typeof x === 'number';
}
let value: number | string = 10;
if (isNumber(value)) {
  console.log('Value is a number:', value);
}