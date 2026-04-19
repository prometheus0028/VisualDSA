// visualizer/algorithms/searching/ternary-search.js

export function generateTernarySearchSteps(inputArray = [], target) {
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
    const mid1 = low + Math.floor((high - low) / 3);
    const mid2 = high - Math.floor((high - low) / 3);

    comparisons++;
    record([mid1, mid2], 3);

    if (arr[mid1] === target) {
      record([mid1], 4, true);
      return steps;
    }

    if (arr[mid2] === target) {
      record([mid2], 5, true);
      return steps;
    }

    if (target < arr[mid1]) {
      high = mid1 - 1;
      record([mid1], 6);
    } else if (target > arr[mid2]) {
      low = mid2 + 1;
      record([mid2], 7);
    } else {
      low = mid1 + 1;
      high = mid2 - 1;
      record([mid1, mid2], 8);
    }
  }

  record([], 9, false);

  return steps;
}
