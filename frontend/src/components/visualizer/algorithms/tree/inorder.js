// FILE: src/algorithms/tree/inorder.js

export function generateInorderSteps(root) {
  const steps = [];

  function inorder(node) {
    // line 1: if node == NULL
    steps.push({ action: 'check-null', node, highlightLine: 1 });

    if (!node) {
      // line 2: return
      steps.push({ action: 'return', node, highlightLine: 2 });
      return;
    }

    // line 3: INORDER(node.left)
    steps.push({ action: 'go-left', node, highlightLine: 3 });
    inorder(node.left);

    // line 4: visit node
    steps.push({ action: 'visit', node, highlightLine: 4 });

    // line 5: INORDER(node.right)
    steps.push({ action: 'go-right', node, highlightLine: 5 });
    inorder(node.right);
  }

  inorder(root);
  return steps;
}
