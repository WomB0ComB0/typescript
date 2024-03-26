function ChatMessage(
  chatMessages: {
    title: string,
    messages: string[],
    id: number,
  }[]
) {
  chatMessages.forEach((chatMessage) => {
    console.log(
      JSON.stringify(
        {
          title: chatMessage.title,
          message: chatMessage.messages.join(', '),
          id: chatMessage.id,
        },
        null,
        2
      )
    );
  });
}

const message1 = {
  title: 'title1',
  messages: [
    'message1',
    'message2',
    'message3',
  ],
  id: 1,
};

const message2 = {
  title: 'title2',
  messages: [
    'message1',
    'message2',
    'message3'
  ],
  id: 2,
};

const message3 = {
  title: 'title3',
  messages: [
    'message1',
    'message2',
    'message3'
  ],
  id: 3,
};

ChatMessage([message1, message2, message3]);

export class Message {
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

  public static createMessage(title: string, message: string, id: number) {
    return new Message(title, message, id);
  }

}
const message4 = Message.createMessage('title', 'message', 1);
const message5 = Message.createMessage('title', 'message', 1);

for (const message of [message4, message5]) {
  console.log(message);
}
