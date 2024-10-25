class TrieNode {
  children: Map<string, TrieNode>;
  isEnd: boolean;

  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

class Trie {
  private root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }
  
  public insert(word: string): void {
    let node = this.root;
    for (let char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.isEnd = true;
  }

  public search(word: string): boolean {
    let node = this.root;
    for (let char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }
    return node.isEnd;
  }

  public delete(word: string): void {
    this.deleteHelper(word, 0);
  }

  private deleteHelper(word: string, index: number): boolean {
    if (index === word.length) {
      if (!this.root.isEnd) {
        return false;
      }
      this.root.isEnd = false;
      return this.root.children.size === 0;
    }

    let char = word[index];
    if (!this.root.children.has(char)) {
      return false;
    }

    let shouldDeleteCurrentNode = this.deleteHelper(word, index + 1);

    if (shouldDeleteCurrentNode) {
      this.root.children.delete(char);
      return this.root.children.size === 0;
    }

    return false;
  }

  public startsWith(prefix: string): boolean {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }
    return true;
  }

  public traverse(node, prefix): void {
    if (node.isEnd) {
      console.log(prefix);
    }
    for (let [char, child] of node.children) {
      this.traverse(child, prefix + char);
    }
  }

  public get_all_words() {
    this.traverse(this, '');
  }
}