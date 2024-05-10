// Adding Readonly Property:
// Problem: In scenarios where certain class properties should not be modified after initialization, ensuring immutability becomes crucial to prevent unintended data alterations.
// Solution: Declaring properties as readonly (id in User) restricts modifications post-initialization, enhancing code robustness by preventing accidental changes and maintaining data integrity.

export class User {
  public readonly id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  protected password: string;
  protected DateOfBirth: Date;

  constructor(id: number, firstName: string, lastName: string, email: string, password: string, DateOfBirth: Date) {
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.password = password;
	this.DateOfBirth = DateOfBirth;
  }

  public get fullName(): string {
	return `${this.firstName} ${this.lastName}`;
  }
  public doesEmailMatch(email: string): boolean {
	return this.email === email;
  }
  public getAge(): number {
	return new Date().getFullYear() - this.DateOfBirth.getFullYear();
  }
  public validatePassword(password: string): boolean {
	return this.password === password;
  }
}
export class Admin extends User {
  public readonly yearBorn: number;
  constructor(firstName:string, lastName:string, email:string, password:string){
	super(
  	Math.floor(Math.random() * 1000),
  	firstName,
  	lastName,
  	email,
  	password,
  	new Date('2004-03-24')
	);
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.password = password;
	this.yearBorn = this.getYear();
  }
  private getYear(): number {
	return this.DateOfBirth.getFullYear();
  }
}
