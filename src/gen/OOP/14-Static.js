// Static method  in tpescript class is a method which can be invoked without creating an instance of the class.
export class Message {
    constructor(title, message, isSent) {
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
        Object.defineProperty(this, "isSent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.title = title;
        this.message = message;
        this.isSent = isSent;
    }
}
export class Messages extends Array {
    // Will need instantiation to be invoked
    getValidMessages() {
        return this.filter((value) => value.message.trim().length > 0);
    }
    // static method is by default public
    static getValidMessage(messages) {
        return messages.filter((value) => value.message.trim().length > 0);
    }
}
const messages = [];
for (let i = 0; i < 30; i++) {
    const title = 'title' + i;
    const message = i % 2 === 0 ? 'message' + i : '';
    const isValid = true;
    messages.push(new Message(title, message, isValid));
}
Messages.getValidMessage(messages);
