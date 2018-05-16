const Node = require('../lib/Node');

class Trie {
  constructor(data) {
    this.count = 0;
    this.root = new Node;
  }

  insert(data) {
    let currentNode = this.root;
    let word = data.toLowerCase;
    let 

    if (!currentNode) {
      this.root = new Node;
      return currentNode.data;
    }

    if (currentNode.children) {
      currentNode = currentNode.children;
    } else {
      currentNode = new Node;
    }

    
  }

  }
}