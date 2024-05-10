// Extending Classes and Implementing Interfaces:
// Problem: Developers often need to create specialized versions of existing classes or ensure that classes adhere to specific contracts or structures.
// Solution: Extending classes (Admin) allows for inheritance of properties and methods, facilitating code reuse and hierarchical organization. Implementing interfaces (Guest) ensures that classes conform to a predefined structure, promoting consistency and interoperability.

export class User {
	firstName: string;
	lastName: string;
	email: string;
	get fullName(): string {
    	return `${this.firstName} ${this.lastName}`;
	}
	constructor(firstName: string, lastName: string, email: string) {
    	this.firstName = firstName;
    	this.lastName = lastName;
    	this.email = email;
	}
	doesEmailMatch = (email: string): boolean => {
    	return this.email === email;
	}
}

export class Admin extends User {
	role: string;
	constructor(firstName: string, lastName: string, email: string) {
    	super(firstName, lastName, email);
    	this.role = 'admin';
	}
}
export class Guest implements User {
	firstName: string;
	lastName: string;
	email: string;
	get fullName(): string {
    	return `${this.firstName} ${this.lastName}`;
	}
	constructor(firstName: string, lastName: string, email: string) {
    	this.firstName = firstName;
    	this.lastName = lastName;
    	this.email = email;
	}
	doesEmailMatch = (email: string): boolean => {
    	return this.email === email;
	}
}