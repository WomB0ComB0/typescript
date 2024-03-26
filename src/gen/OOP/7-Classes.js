"use strict";
class User {
    constructor() {
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
        this.firstName = '';
        this.lastName = '';
        this.email = '';
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
    doesEmailMatch(email) {
        return this.email === email;
    }
}
const user = new User();
user.fullName = 'John Doe';
user.email = 'mikeodnis3242004@gmail.com';
