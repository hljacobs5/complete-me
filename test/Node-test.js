import { expect } from 'chai';
import Node from '../lib/Node';

describe('node', () => {

  let node;

  beforeEach(() => {
    node = new Node();
  });

  it('should exist', () => {
    expect(node).to.exist;
  });

  it('should have a children property start as an empty object', () => {
    expect(node.children).to.equal( {} );
  });  

  it('should have a completed property with default value of null', () => {
    expect(node.completed).to.equal(null);
  });
});
