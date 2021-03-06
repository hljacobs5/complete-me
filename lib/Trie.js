import fs from 'fs';
const text = "/usr/share/dict/words"
const dictionary = fs.readFileSync(text).toString().trim().split('\n')

const Node = require('../lib/Node');

class Trie {
    constructor(data) {
        this.count = 0;
        this.root = new Node;
    }


    insert(data) {
        let currentNode = this.root;
        let letters = data.toLowerCase().split('');
        while (letters.length) {
            let letter = letters.shift();
            if (!currentNode.children[letter]) {
                currentNode.children[letter] = new Node(letter);
            }
            currentNode = currentNode.children[letter];
        }
        currentNode.completed = data;
        this.count++;
    }

    suggest(data) {
        let suggestions = [];
        let currentNode = this.root;
        let prefix = [...data.toLowerCase()];

        prefix.forEach(letter => {
            currentNode = currentNode.children[letter];
        })

        const search = node => {
            if (node.completed) {
                suggestions.push(node.completed)
            }

            let nodeKeys = Object.keys(node.children)

            nodeKeys.forEach(key => {
                search(node.children[key]);
            })
        }
        search(currentNode);
        return suggestions;
    }

    count() {
        return this.count;
    }
    
    populate(dictionary) {
        dictionary.forEach(word => {
            this.insert(word)
        });
    }
}

module.exports = Trie;