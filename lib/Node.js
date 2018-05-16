class Node {
  constructor(data) {
    this.data = data;
    this.children = {};
    this.completed = null;
  }
}

module.exports = Node;