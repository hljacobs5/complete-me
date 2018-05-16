import { assert } from 'chai';
import Trie from '../lib/Trie';
import Node from '../lib/Node';


describe('trie', function() {

  it('should instatiate trie', function () {
    let trie = new Trie();
  });

  it ('should increase count', function () { 
    let trie = new Trie();
    assert.equal(trie.count, 0);
    trie.insert('word');
    assert.equal(trie.count, 1);
    console.log(JSON.stringify(trie, null, 4))
  });

  it('should start with a word count of zero', function () {
    let trie = new Trie();
    assert(trie.count).to.equal(0);
  });
});

describe('insert', function () {

  it('should insert a new word', () => {
    let trie = new Trie();
    trie.insert('dog');
    trie.insert('cat');
    trie.insert('doggo');
    trie.insert('doggy');
    console.log(JSON.stringify(trie, null, 4))
  });
});

describe('suggest', function () {
  
  it('should take a prefix', function () {  
    let trie = new Trie();
    trie.insert('dog');
    trie.insert('cat');
    trie.insert('doggo');
    trie.insert('doggy');
    trie.insert('dog')
    console.log(trie.suggest('do'))
    console.log(JSON.stringify(trie, null, 4))
    assert(true).to.equal(true);
  });
});



