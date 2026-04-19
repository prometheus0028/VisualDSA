// algorithms/tree/bst-delete.js

export function generateBSTDeleteSteps(root, value) {
  const steps = [];

  function findMin(node) {
    while (node.left) node = node.left;
    return node;
  }

  function deleteNode(node, value) {
    if (!node) return null;

    steps.push({
      action: 'compare',
      node: node.value,
      value,
      highlightLine: 3,
    });

    if (value < node.value) {
      steps.push({
        action: 'go-left',
        node: node.value,
        highlightLine: 4,
      });
      node.left = deleteNode(node.left, value);
    } else if (value > node.value) {
      steps.push({
        action: 'go-right',
        node: node.value,
        highlightLine: 6,
      });
      node.right = deleteNode(node.right, value);
    } else {
      steps.push({
        action: 'delete',
        node: node.value,
        highlightLine: 8,
      });

      // case 1: no child
      if (!node.left && !node.right) return null;

      // case 2: one child
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // case 3: two children
      const minNode = findMin(node.right);

      steps.push({
        action: 'replace',
        node: node.value,
        with: minNode.value,
        highlightLine: 13,
      });

      node.value = minNode.value;
      node.right = deleteNode(node.right, minNode.value);
    }

    return node;
  }

  const newRoot = deleteNode(root, value);

  return { steps, root: newRoot };
}
