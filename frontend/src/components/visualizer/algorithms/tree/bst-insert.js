// algorithms/tree/bst-insert.js

export function generateBSTInsertSteps(root, value) {
  const steps = [];

  function insert(node, value) {
    if (!node) {
      steps.push({
        action: 'insert',
        value,
        highlightLine: 2,
      });
      return { value, left: null, right: null };
    }

    steps.push({
      action: 'compare',
      node: node.value,
      value,
      highlightLine: 4,
    });

    if (value < node.value) {
      steps.push({
        action: 'go-left',
        node: node.value,
        highlightLine: 5,
      });
      node.left = insert(node.left, value);
    } else {
      steps.push({
        action: 'go-right',
        node: node.value,
        highlightLine: 7,
      });
      node.right = insert(node.right, value);
    }

    return node;
  }

  const newRoot = insert(root, value);

  return { steps, root: newRoot };
}
