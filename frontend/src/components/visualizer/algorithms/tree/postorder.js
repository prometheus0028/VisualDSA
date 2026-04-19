// FILE: src/algorithms/tree/postorder.js

export function generatePostorderSteps(root) {
  const steps = [];

  function postorder(node) {
    // line 1
    steps.push({ action: 'check-null', node, highlightLine: 1 });

    if (!node) {
      // line 2
      steps.push({ action: 'return', node, highlightLine: 2 });
      return;
    }

    // line 3: left
    steps.push({ action: 'go-left', node, highlightLine: 3 });
    postorder(node.left);

    // line 4: right
    steps.push({ action: 'go-right', node, highlightLine: 4 });
    postorder(node.right);

    // line 5: visit
    steps.push({ action: 'visit', node, highlightLine: 5 });
  }

  postorder(root);
  return steps;
}
