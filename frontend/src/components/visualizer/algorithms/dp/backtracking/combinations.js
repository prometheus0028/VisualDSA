export function generateCombinationSteps(nums) {
  const steps = [];

  function backtrack(start, path, depth = 0) {
    // ✅ RECORD COMBINATION
    steps.push({
      action: 'record',
      path: [...path],
      result: [...path], // 🔥 FIX
      depth,
      highlightLine: 1,
    });

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);

      steps.push({
        action: 'choose',
        value: nums[i],
        path: [...path],
        depth,
        highlightLine: 2,
      });

      backtrack(i + 1, path, depth + 1);

      path.pop();

      steps.push({
        action: 'backtrack',
        path: [...path],
        depth,
        highlightLine: 3,
      });
    }
  }

  backtrack(0, []);
  return steps;
}
