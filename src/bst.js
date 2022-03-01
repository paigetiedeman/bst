export default class BST {
  constructor() {
    this.root = null;
  }

  insertNode(node) {
    this.root = node;
  }

  insert(node) {
    if (this.root === null) {
      this.root = node;
    } else if (this.root.data > node.data) {
      this.root.left = node;
    }  else if (this.root.data < node.data) {
      this.root.right = node;
    }
  }
}
