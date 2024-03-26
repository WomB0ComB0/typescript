/*
1. Add an appropriate readonly property to the User class.
*/
export class User {
    constructor(id, firstName, lastName, email, password, DateOfBirth) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
        Object.defineProperty(this, "password", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "DateOfBirth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.DateOfBirth = DateOfBirth;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    doesEmailMatch(email) {
        return this.email === email;
    }
    getAge() {
        return new Date().getFullYear() - this.DateOfBirth.getFullYear();
    }
    validatePassword(password) {
        return this.password === password;
    }
}
export class Admin extends User {
    constructor(firstName, lastName, email, password) {
        super(Math.floor(Math.random() * 1000), firstName, lastName, email, password, new Date('2004-03-24'));
        Object.defineProperty(this, "yearBorn", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.yearBorn = this.getYear();
    }
    getYear() {
        return this.DateOfBirth.getFullYear();
    }
}
