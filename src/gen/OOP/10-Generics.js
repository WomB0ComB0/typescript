// Generics are a way to make components work with any data type and not restrict to one data type.
export class User {
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
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
        Object.defineProperty(this, "classicUserdata", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.classicUserdata = {}; // Add definite assignment assertion
    }
    mergeUserdata(params) {
        const { firstName, lastName, email } = this;
        this.classicUserdata = { firstName, lastName, email, ...params };
    }
}
const user1 = new User();
user1.mergeUserdata({ name: { first: 'John', last: 'Doe' } });
user1.classicUserdata.name.first;
const user2 = new User();
user2.mergeUserdata({ name: { first: 'Jane', middle: 'Penelope', last: 'Doe' } });
user2.classicUserdata.name.middle;
