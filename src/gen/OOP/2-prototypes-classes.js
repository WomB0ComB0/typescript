// prototypes in typescript are classes in javascript (ES6)
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
const message = Message.createMessage('title', 'message', 1);
console.log(message);
