export function generatePowerSteps(base, exp) {
  const steps = [];

  function helper(b, e, depth = 0) {
    steps.push({
      action: 'call',
      value: `${b}^${e}`,
      depth,
      highlightLine: 1,
    });

    if (e === 0) {
      steps.push({
        action: 'return',
        value: 1,
        depth,
        highlightLine: 2,
      });
      return 1;
    }

    const result = b * helper(b, e - 1, depth + 1);

    steps.push({
      action: 'return',
      value: result,
      depth,
      highlightLine: 3,
    });

    return result;
  }

  helper(base, exp);
  return steps;
}
