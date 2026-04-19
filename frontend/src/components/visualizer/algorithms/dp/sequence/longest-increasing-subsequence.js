export function generateLISSteps(nums) {
  const steps = [];

  const tail = [];

  for (let num of nums) {
    let l = 0,
      r = tail.length;

    while (l < r) {
      let mid = Math.floor((l + r) / 2);
      if (tail[mid] < num) l = mid + 1;
      else r = mid;
    }

    tail[l] = num;

    steps.push({
      action: 'update',
      tail: [...tail],
      highlightLine: 1,
    });
  }

  return steps;
}
