// Polymorphism in TypeScript is the ability of a programming language to present the same interface for several different underlying data types.
/*
1. Method / param overriding -> child overrides parent method
2. method overloading -> same name methods with different params ( not supported in Js nor TS)
3. Interface / abstract classes implements / extends -> child implements / extends parent interface / abstract class
*/
export class User {
    constructor(firstName, lastName, email, age) {
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
        Object.defineProperty(this, "email", {
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
        Object.defineProperty(this, "getFullName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return `${this.firstName} ${this.lastName}`;
            }
        });
        Object.defineProperty(this, "canSendMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return true;
            }
        });
        Object.defineProperty(this, "introduce", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return `Hello, my name is ${this.getFullName()}.`;
            }
        });
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
}
class BaseUser extends User {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "role", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hasAllAccess", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return this.role === 'admin';
            }
        });
    }
}
export class SuperAdmin extends BaseUser {
    constructor(firstName, lastName, email, age) {
        super(firstName, lastName, email, age);
        Object.defineProperty(this, "hasAllAccess", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return true;
            }
        });
        this.role = 'admin';
    }
    canAccess(user) {
        return user.age > 18 && this.role === 'admin';
    }
}
export class Guest {
    constructor(firstName, lastName, email, age) {
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
        Object.defineProperty(this, "email", {
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
        Object.defineProperty(this, "middleName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "getFullName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return `${this.firstName} ${this.middleName} ${this.lastName}`;
            }
        });
        Object.defineProperty(this, "canSendMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return false;
            }
        });
        Object.defineProperty(this, "introduce", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return `Hello, my name is ${this.getFullName()}.`;
            }
        });
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
}
