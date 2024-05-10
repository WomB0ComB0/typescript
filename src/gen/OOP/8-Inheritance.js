// Base / Parent Class
export class Owner {
    constructor(firstName, lastName, age) {
        Object.defineProperty(this, "firstName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lastName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "age", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getAge() {
        return this.age;
    }
    introduce() {
        return `Hello, my name is ${this.getFullName()} and I am ${this.getAge()} years old.`;
    }
}
export class Animal {
    constructor(name, species, age, status) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "species", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "age", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "status", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
        this.species = species;
        this.age = age;
        this.status = status;
    }
}
export class Dog extends Animal {
    constructor(name, species, age, status) {
        super(name, species, age, status);
    }
    bark() {
        return 'Woof woof!';
    }
}
export class Cat extends Animal {
    constructor(name, species, age, status) {
        super(name, species, age, status);
    }
    meow() {
        return 'Meow meow!';
    }
}
export default function main() {
    const owner = new Owner('John', 'Doe', 30);
    const dog = new Dog('Bingo', 'Dog', 5, 'Alive');
    const cat = new Cat('Tom', 'Cat', 5, 'Alive');
    function Introduction(owner, animal) {
        return `${owner.introduce()} This is my ${animal.species}, ${animal.name}, and they're ${animal.age} years old.`;
        // Also something where if it's a certain species it will make a unique sound (conditon).
    }
    return (Introduction(owner, dog), Introduction(owner, cat));
}
