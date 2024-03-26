class User {
    firstName: string;
    lastName: string;
    email: string;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value: string) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
    doesEmailMatch(email: string): boolean {
        return this.email === email;
    }
}

const user = new User();
user.fullName = 'John Doe';
user.email = 'mikeodnis3242004@gmail.com'
