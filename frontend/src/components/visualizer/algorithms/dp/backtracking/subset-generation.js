export function generateSubsetSteps(nums) {
  const steps = [];

  function backtrack(index, path, depth = 0) {
    // ✅ RECORD SUBSET AS RESULT
    steps.push({
      action: 'subset',
      path: [...path],
      result: [...path], // 🔥 FIX
      depth,
      highlightLine: 1,
    });

    for (let i = index; i < nums.length; i++) {
      path.push(nums[i]);

      steps.push({
        action: 'include',
        value: nums[i],
        path: [...path],
        depth,
        highlightLine: 2,
      });

      backtrack(i + 1, path, depth + 1);

      path.pop();

      steps.push({
        action: 'exclude',
        path: [...path],
        depth,
        highlightLine: 3,
      });
    }
  }

  backtrack(0, []);
  return steps;
}
