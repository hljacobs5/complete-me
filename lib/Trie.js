import fs from 'fs';
const text = "/usr/share/dict/words"
const dictionary = fs.readFileSync(text).toString().trim().split('\n')

const Node = require('../lib/Node');

class Trie {
  constructor(data) {
    this.count = 0;
    this.root = new Node;
  }

  count() {
    return this.count;
  }

  insert(data) {
    let currentNode = this.root;
    let letters = data.split('');
    this.count++;
    while (letters.length) {
      let letter = letters.shift();
      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new Node(letter);
      }
      currentNode = currentNode.children[letter];
    }
     currentNode.completed = data;
  }

//   suggest(prefix) {
//     this.suggestions = [];
//     let sanitizedPrefix = [...prefix.toLowerCase()] //populate with the prefixes that pass
//     let preFix = 
//     if (currentNode.children[letter])
//   }
// }

  populate(words) {
    while (words.length) {
      let string = words.shift();
      this.insert(string);
    }
  }

}






module.exports = Trie;