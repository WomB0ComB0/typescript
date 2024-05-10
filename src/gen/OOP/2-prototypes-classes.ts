// prototypes in typescript are classes in javascript (ES6)
export class Message {  // class declaration
  public title: string;
  public message: string;
  public id: number;
  constructor(
      title: string, 
      message: string, 
      id: number
    ){
    this.title = title;
    this.message = message;
    this.id = id;
  }

  static createMessage(title: string, message: string, id: number) {
    return new Message(title, message, id);
  }
}

const message = Message.createMessage('title', 'message', 1);
console.log(message)