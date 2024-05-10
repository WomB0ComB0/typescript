export class User {
  public firstName: string;
  public lastName: string;
  public email: string;
  constructor(
    firstName: string,
    lastName: string,
    email: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  doesEmailMatch(email: string): boolean {
    return this.email === email;
  }
}

// Same as constructor above
function UserLegacy(firstName: string, lastName: string, email: string){
  const user = {
    firstName,
    lastName,
    email,
  };
  function doesEmailMatch(email: string): boolean {
    return user.email === email;
  }
  return { ...user, doesEmailMatch };
}
const user = UserLegacy('John', 'Doe', 'JohnDoe2001@gmail.com');
user.firstName;