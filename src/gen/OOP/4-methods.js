// methods are functions that are members of an object or class.
export class Song {
    constructor(title, lyric, length, isLiked = false) {
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lyric", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "length", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isLiked", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.title = title;
        this.lyric = lyric;
        this.length = +length.toFixed(2);
        this.isLiked = isLiked; // default value
    }
    // Method
    previewLyric() {
        return `${this.lyric.slice(0, 10)}...`;
    }
}
const lyric = new Song('Two fictitious stories', 'Another win on a page, I make it through these hardships like i\'m Phineas Gage. My biggest hater most likely a hideous face.', 7.21, true);
lyric.previewLyric();
