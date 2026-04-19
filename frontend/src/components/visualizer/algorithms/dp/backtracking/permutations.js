export function generatePermutationSteps(nums) {
  const steps = [];
  const used = Array(nums.length).fill(false);

  function backtrack(path, depth = 0) {
    steps.push({
      action: 'state',
      path: [...path],
      depth,
      highlightLine: 1,
    });

    if (path.length === nums.length) {
      steps.push({
        action: 'solution',
        path: [...path],
        result: [...path], // 🔥 FIX
        depth,
        highlightLine: 2,
      });
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(nums[i]);

      steps.push({
        action: 'choose',
        value: nums[i],
        path: [...path],
        depth,
        highlightLine: 3,
      });

      backtrack(path, depth + 1);

      path.pop();
      used[i] = false;

      steps.push({
        action: 'backtrack',
        path: [...path],
        depth,
        highlightLine: 4,
      });
    }
  }

  backtrack([]);
  return steps;
}
