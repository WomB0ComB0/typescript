// Set is a collection of unique values, no duplicates allowed. Update data while still providing the same interface
// Opposite of get, set is used to set a value
export class Song {
    set isLiked(value) {
        if (value === true) {
            this.whenLiked = new Date(); //◀️ Set the date when the song was liked
            console.log('You liked the song');
        }
        else {
            console.log('You disliked the song');
        }
        this._isLiked = value;
    }
    get isLiked() {
        return this._isLiked;
    }
    constructor(title, lyric, length, isLiked = false) {
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        }); //◀️ Property to store the title of the song
        Object.defineProperty(this, "lyric", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        }); //◀️ Property to store the lyric of the song
        Object.defineProperty(this, "length", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        }); //◀️ Property to store the length of the song
        Object.defineProperty(this, "whenLiked", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        }); //◀️ Property to store the date when the song was liked 🚩
        Object.defineProperty(this, "_isLiked", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        }); // private property to store the value of isLiked property
        this.title = title;
        this.lyric = lyric;
        this.length = +length.toFixed(2);
        this.isLiked = isLiked; // default value
    }
    get titleStatus() {
        const songLiked = (this.isLiked == true) ? 'liked' : 'not liked';
        return `The song ${this.title} is ${songLiked}`;
    }
    previewLyric() {
        return `${this.lyric.slice(0, 10)}...`;
    }
}
const lyric = new Song('Two fictitious stories', 'Another win on a page, I make it through these hardships like i\'m Phineas Gage. My biggest hater most likely a hideous face.', 7.21, true);
lyric.isLiked = true;
lyric.titleStatus;
lyric.previewLyric();
