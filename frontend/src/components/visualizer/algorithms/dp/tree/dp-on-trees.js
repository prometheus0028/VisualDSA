export function generateTreeDPSteps(root) {
  const steps = [];

  function dfs(node) {
    if (!node) return [0, 0];

    const left = dfs(node.left);
    const right = dfs(node.right);

    const include = node.value + left[1] + right[1];
    const exclude = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

    steps.push({
      action: 'process',
      node: node.value,
      include,
      exclude,
      highlightLine: 1,
    });

    return [include, exclude];
  }

  dfs(root);
  return steps;
}
