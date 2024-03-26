// constructor and class properties in Typescript are used to initialize the class properties.
// The constructor is a method that is called when an instance of the class is created.
// The constructor method is optional. If we don't define a constructor method, the class will have an empty constructor method.
// The constructor method is always called with the new keyword.
// The constructor method is a special method for creating and initializing an object created with a class.
export class Message { // class declaration
  public title: string;
  public message: string;
  public isSent: boolean;
  public id: number;

  constructor(
      title: string, 
      message: string, 
      id: number
    ){
    this.title = title;
    this.message = message;
    this.id = id;
    this.isSent = false;
  }
}
const message = new Message('title', 'message', 1);
console.log(message)