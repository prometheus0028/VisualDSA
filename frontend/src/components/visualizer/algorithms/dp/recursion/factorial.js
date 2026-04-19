export function generateFactorialSteps(n) {
  const steps = [];

  function helper(x, depth = 0) {
    steps.push({
      action: 'call',
      value: x,
      depth,
      highlightLine: 1,
    });

    if (x === 0 || x === 1) {
      steps.push({
        action: 'return',
        value: 1,
        depth,
        highlightLine: 2,
      });
      return 1;
    }

    const result = x * helper(x - 1, depth + 1);

    steps.push({
      action: 'return',
      value: result,
      depth,
      highlightLine: 3,
    });

    return result;
  }

  helper(n);
  return steps;
}
