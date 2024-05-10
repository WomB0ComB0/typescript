/*
1. Use the User class below and create a new class called Admin that extends the User class.
2. Create a new instance of Admin and call the introduce method.
3. Create a GUest class that implements the User interface.
*/
export class User {
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    constructor(firstName, lastName, email) {
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
        Object.defineProperty(this, "doesEmailMatch", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (email) => {
                return this.email === email;
            }
        });
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}
export class Admin extends User {
    constructor(firstName, lastName, email) {
        super(firstName, lastName, email);
        Object.defineProperty(this, "role", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.role = 'admin';
    }
}
export class Guest {
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    constructor(firstName, lastName, email) {
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
        Object.defineProperty(this, "doesEmailMatch", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (email) => {
                return this.email === email;
            }
        });
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}
