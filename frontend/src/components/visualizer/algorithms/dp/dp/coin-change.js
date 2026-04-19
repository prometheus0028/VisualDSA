export function generateCoinChangeSteps(coins, amount) {
  const steps = [];

  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);

      steps.push({
        action: 'update',
        index: i,
        coin,
        dp: [...dp],
        highlightLine: 1,
      });
    }
  }

  steps.push({
    action: 'result',
    value: dp[amount] === Infinity ? -1 : dp[amount],
    highlightLine: 2,
  });

  return steps;
}
