/* =========================================
   UNBOUNDED KNAPSACK (1D DP)
========================================= */

export function generateUnboundedKnapsackSteps(weights, values, W) {
  const steps = [];

  const n = weights.length;

  const dp = Array(W + 1).fill(0);

  steps.push({
    action: 'init',
    dp: [...dp],
    highlightLine: 1,
  });

  for (let i = 0; i < n; i++) {
    for (let w = weights[i]; w <= W; w++) {
      const include = values[i] + dp[w - weights[i]];
      const exclude = dp[w];

      dp[w] = Math.max(include, exclude);

      steps.push({
        action: 'update',
        item: i,
        weight: w,
        include,
        exclude,
        dp: [...dp],
        highlightLine: 2,
      });
    }
  }

  steps.push({
    action: 'result',
    value: dp[W],
    dp: [...dp],
    highlightLine: 3,
  });

  return steps;
}
