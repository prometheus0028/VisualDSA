/* =========================================
   FILE: src/algorithms/dp/sequence/matrix-chain-multiplication.js
========================================= */

export function generateMCMSteps(arr) {
  const steps = [];

  if (!arr || arr.length < 2) return [];

  const n = arr.length;

  // DP matrix (n x n)
  const dp = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0),
  );

  // ===============================
  // INIT (dp[i][i] = 0)
  // ===============================
  for (let i = 1; i < n; i++) {
    dp[i][i] = 0;

    steps.push({
      dp: dp.map((row) => [...row]),
      i,
      j: i,
      action: `Base case: single matrix → cost = 0`,
    });
  }

  // ===============================
  // MAIN DP
  // ===============================
  for (let len = 2; len < n; len++) {
    for (let i = 1; i < n - len + 1; i++) {
      const j = i + len - 1;

      dp[i][j] = Infinity;

      steps.push({
        dp: dp.map((row) => [...row]),
        i,
        j,
        action: `Evaluating chain from i=${i} to j=${j}`,
      });

      for (let k = i; k < j; k++) {
        const cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];

        steps.push({
          dp: dp.map((row) => [...row]),
          i,
          j,
          k,
          action: `Try split at k=${k} → cost = ${cost}`,
        });

        if (cost < dp[i][j]) {
          dp[i][j] = cost;

          steps.push({
            dp: dp.map((row) => [...row]),
            i,
            j,
            k,
            action: `Update dp[${i}][${j}] = ${cost}`,
          });
        }
      }
    }
  }

  // ===============================
  // FINAL RESULT
  // ===============================
  steps.push({
    dp: dp.map((row) => [...row]),
    action: `Minimum multiplications = ${dp[1][n - 1]}`,
  });

  return steps;
}
