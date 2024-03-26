export class User {
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
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    doesEmailMatch(email) {
        return this.email === email;
    }
}
// Same as constructor above
function UserLegacy(firstName, lastName, email) {
    const user = {
        firstName,
        lastName,
        email,
    };
    function doesEmailMatch(email) {
        return user.email === email;
    }
    return { ...user, doesEmailMatch };
}
const user = UserLegacy('John', 'Doe', 'JohnDoe2001@gmail.com');
user.firstName;
