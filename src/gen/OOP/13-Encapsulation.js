// Private, Public, Protected
// Public: Accessible from anywhere
// Private: Accessible only from within the class
// Protected: Accessible from within the class and from classes derived from that class
export class Animal {
    constructor(species, name, age) {
        Object.defineProperty(this, "species", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
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
        this.age = age;
        this.name = name;
        this.species = species;
    }
}
// Child
export class Cat extends Animal {
    constructor(data) {
        super(data.species, data.name, data.age);
        Object.defineProperty(this, "meow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return 'Meow!';
            }
        });
    }
    get catAge() {
        return this.age * 7;
    }
    get birthday() {
        return this.age + 1;
    }
}
// Shape
export class Dog {
    constructor(species, name, age) {
        Object.defineProperty(this, "species", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
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
        Object.defineProperty(this, "bark", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return 'Woof!';
            }
        });
        this.age = age;
        this.name = name;
        this.species = species;
    }
    get dogAge() {
        return this.age * 7;
    }
}
