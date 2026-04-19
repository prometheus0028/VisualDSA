export function generateReverseArraySteps(arr) {
  const steps = [];

  function helper(left, right, depth = 0) {
    steps.push({
      action: 'call',
      value: `[${arr.join(',')}]`,
      depth,
      highlightLine: 1,
    });

    if (left >= right) {
      steps.push({
        action: 'return',
        value: [...arr],
        depth,
        highlightLine: 2,
      });
      return;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];

    steps.push({
      action: 'swap',
      value: [...arr],
      depth,
      highlightLine: 3,
    });

    helper(left + 1, right - 1, depth + 1);

    steps.push({
      action: 'return',
      value: [...arr],
      depth,
      highlightLine: 4,
    });
  }

  helper(0, arr.length - 1);
  return steps;
}
