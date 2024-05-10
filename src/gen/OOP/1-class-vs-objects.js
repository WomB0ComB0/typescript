function ChatMessage(chatMessages) {
    chatMessages.forEach((chatMessage) => {
        console.log(JSON.stringify({
            title: chatMessage.title,
            message: chatMessage.messages.join(', '),
            id: chatMessage.id,
        }, null, 2));
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
    constructor(title, message, id) {
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.title = title;
        this.message = message;
        this.id = id;
    }
    static createMessage(title, message, id) {
        return new Message(title, message, id);
    }
}
const message4 = Message.createMessage('title', 'message', 1);
const message5 = Message.createMessage('title', 'message', 1);
for (const message of [message4, message5]) {
    console.log(message);
}
