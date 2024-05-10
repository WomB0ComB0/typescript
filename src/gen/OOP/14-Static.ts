// Static method  in tpescript class is a method which can be invoked without creating an instance of the class.
export class Message {
  title: string;
  message: string;
  isSent: boolean;

  constructor(title: string, message: string, isSent: boolean) {
    this.title = title;
    this.message = message;
    this.isSent = isSent;
  }
}
export class Messages extends Array<Message>{
  // Will need instantiation to be invoked
  public getValidMessages(): Message[] {
    return this.filter((value) => value.message.trim().length > 0);
  }
  // static method is by default public
  static getValidMessage (messages: Message[]): Message[] {
    return messages.filter((value) => value.message.trim().length > 0);
  }
}

const messages: Message[] = [];
for (let i = 0; i < 30; i++) {
  const title = 'title' + i;
  const message = i % 2 === 0 ? 'message' + i : '';
  const isValid = true;
  messages.push(new Message(title, message, isValid));
}


Messages.getValidMessage(messages);