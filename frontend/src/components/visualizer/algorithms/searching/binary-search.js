// visualizer/algorithms/searching/binary-search.js

export function generateBinarySearchSteps(inputArray = [], target) {
  const arr = [...inputArray].sort((a, b) => a - b);
  const steps = [];

  let comparisons = 0;

  let low = 0;
  let high = arr.length - 1;

  const record = (active = [], line = null, found = null) => {
    steps.push({
      array: [...arr],
      active,
      comparisons,
      swaps: 0,
      highlightLine: line,
      found,
      low,
      high,
    });
  };

  record([], 0);

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    comparisons++;
    record([mid], 3);

    if (arr[mid] === target) {
      record([mid], 4, true);
      return steps;
    }

    if (arr[mid] < target) {
      low = mid + 1;
      record([mid], 5);
    } else {
      high = mid - 1;
      record([mid], 6);
    }
  }

  record([], 7, false);

  return steps;
}
