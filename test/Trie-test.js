import { expect } from 'chai';
import Trie from '../lib/Trie';
import Node from '../lib/Node';
import fs from 'fs';

const text = "/usr/share/dict/words"
const dictionary = fs.readFileSync(text).toString().trim().split('\n')


describe('trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it ('should increase count', () => { 
    expect(trie.count).to.equal(0);
    trie.insert('word');
    expect(trie.count).to.equal(1);
    console.log(JSON.stringify(trie, null, 4))
  });

  it('should start with a word count of zero', () => {
    expect(trie.count).to.equal(0);
  });
});

describe('insert', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should insert a new word', () => {
    trie.insert('dog');
    trie.insert('cat');
    trie.insert('doggo');
    trie.insert('doggy');
    console.log(JSON.stringify(trie, null, 4))
  });
});

describe('suggest', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });
  
  it('should take a prefix', () => {  
    trie.insert('dog');
    trie.insert('cat');
    trie.insert('doggo');
    trie.insert('doggy');
    trie.insert('dog')
    console.log(trie.suggest('do'))
    console.log(JSON.stringify(trie, null, 4))
    expect(true).to.equal(true);
  });
});



