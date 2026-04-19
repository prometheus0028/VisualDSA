export function generateClimbingStairsSteps(n) {
  const steps = [];

  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  steps.push({
    action: 'init',
    dp: [...dp],
    highlightLine: 1,
  });

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];

    steps.push({
      action: 'update',
      index: i,
      dp: [...dp],
      highlightLine: 2,
    });
  }

  steps.push({
    action: 'result',
    value: dp[n],
    highlightLine: 3,
  });

  return steps;
}
