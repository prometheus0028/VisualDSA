export function generateLCSSteps(a, b) {
  const steps = [];

  const m = a.length;
  const n = b.length;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }

      steps.push({
        action: 'update',
        i,
        j,
        dp: dp.map((r) => [...r]),
        highlightLine: 1,
      });
    }
  }

  return steps;
}
