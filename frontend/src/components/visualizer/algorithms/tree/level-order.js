// FILE: src/algorithms/tree/level-order.js

export function generateLevelOrderSteps(root) {
  const steps = [];

  // line 1
  steps.push({ action: 'check-null', node: root, highlightLine: 1 });

  if (!root) {
    // line 2
    steps.push({ action: 'return', node: root, highlightLine: 2 });
    return steps;
  }

  const queue = [];

  // line 3
  steps.push({ action: 'init-queue', node: root, highlightLine: 3 });

  // line 4
  queue.push(root);
  steps.push({ action: 'enqueue', node: root, highlightLine: 4 });

  // line 5
  while (queue.length > 0) {
    steps.push({ action: 'while-check', node: queue[0], highlightLine: 5 });

    // line 6
    const node = queue.shift();
    steps.push({ action: 'dequeue', node, highlightLine: 6 });

    // line 7
    steps.push({ action: 'visit', node, highlightLine: 7 });

    // line 8–9
    if (node.left) {
      steps.push({ action: 'check-left', node, highlightLine: 8 });
      queue.push(node.left);
      steps.push({ action: 'enqueue-left', node: node.left, highlightLine: 9 });
    }

    // line 10–11
    if (node.right) {
      steps.push({ action: 'check-right', node, highlightLine: 10 });
      queue.push(node.right);
      steps.push({
        action: 'enqueue-right',
        node: node.right,
        highlightLine: 11,
      });
    }
  }

  return steps;
}
