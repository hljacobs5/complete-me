import { assert } from 'chai';
import Trie from '../lib/Trie';
import Node from '../lib/Node';


describe('Trie', function() {
  let trie = new Trie();
  it ('should increase count') 
    assert.equal(trie.count, 0);
    trie.insert('word');
    assert.equal(trie.count, 1);
    console.log(JSON.stringify(trie,null, 4))

})

  it('should start with a word count of zero', function(){
    expect(trie.count).to.equal(0);
  })

describe('Insert', function () {
  let trie = new Trie();
  trie.insert('doggo');
  trie.insert('cat');
  trie.insert('dog');
  console.log(JSON.stringify(trie,null, 4))
  expect(trie.count).to.equal(1);

})


