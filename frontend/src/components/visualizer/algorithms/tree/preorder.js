// FILE: src/algorithms/tree/preorder.js

export function generatePreorderSteps(root) {
  const steps = [];

  function preorder(node) {
    // line 1
    steps.push({ action: 'check-null', node, highlightLine: 1 });

    if (!node) {
      // line 2
      steps.push({ action: 'return', node, highlightLine: 2 });
      return;
    }

    // line 3: visit
    steps.push({ action: 'visit', node, highlightLine: 3 });

    // line 4: left
    steps.push({ action: 'go-left', node, highlightLine: 4 });
    preorder(node.left);

    // line 5: right
    steps.push({ action: 'go-right', node, highlightLine: 5 });
    preorder(node.right);
  }

  preorder(root);
  return steps;
}
