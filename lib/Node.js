class Node {
  constructor(data = null) {
    this.data = data;
    this.children = {};
    this.root = null;
    this.completed = false;
  }
}