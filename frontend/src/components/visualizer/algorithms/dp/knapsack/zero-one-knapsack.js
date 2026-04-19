/* =========================================
   0/1 KNAPSACK (DP TABLE)
========================================= */

export function generateZeroOneKnapsackSteps(weights, values, W) {
  const steps = [];

  const n = weights.length;

  const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

  steps.push({
    action: 'init',
    dp: dp.map((row) => [...row]),
    highlightLine: 1,
  });

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w], // exclude
          values[i - 1] + dp[i - 1][w - weights[i - 1]], // include
        );

        steps.push({
          action: 'choose max',
          i,
          w,
          include: values[i - 1] + dp[i - 1][w - weights[i - 1]],
          exclude: dp[i - 1][w],
          dp: dp.map((row) => [...row]),
          highlightLine: 2,
        });
      } else {
        dp[i][w] = dp[i - 1][w];

        steps.push({
          action: 'skip item',
          i,
          w,
          dp: dp.map((row) => [...row]),
          highlightLine: 3,
        });
      }
    }
  }

  steps.push({
    action: 'result',
    value: dp[n][W],
    dp: dp.map((row) => [...row]),
    highlightLine: 4,
  });

  return steps;
}
