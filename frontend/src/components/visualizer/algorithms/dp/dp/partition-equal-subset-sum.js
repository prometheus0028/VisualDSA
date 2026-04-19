export function generatePartitionSteps(nums) {
  const steps = [];

  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) {
    steps.push({
      dp: [[false]],
      action: 'Sum is odd → not possible',
      target: null,
    });
    return steps;
  }

  const target = sum / 2;
  const n = nums.length;

  const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(false));

  for (let i = 0; i <= n; i++) dp[i][0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      if (nums[i - 1] <= j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }

      steps.push({
        dp: dp.map((row) => [...row]),
        i,
        j,
        target,
        action: `Checking ${nums[i - 1]} for sum ${j}`,
      });
    }
  }

  return steps;
}
