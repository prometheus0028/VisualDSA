// algorithms/tree/bst.js

export function createBST() {
  let root = null;

  const insertNode = (node, value) => {
    if (!node) {
      return { value, left: null, right: null };
    }

    if (value < node.value) {
      node.left = insertNode(node.left, value);
    } else {
      node.right = insertNode(node.right, value);
    }

    return node;
  };

  const insert = (value) => {
    root = insertNode(root, value);
  };

  const getRoot = () => root;

  return { insert, getRoot };
}
