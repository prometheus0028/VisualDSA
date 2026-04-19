// visualizer/algorithms/searching/linear-search.js

export function generateLinearSearchSteps(inputArray = [], target) {
  const arr = [...inputArray];
  const steps = [];

  let comparisons = 0;

  const record = (active = [], line = null, found = null) => {
    steps.push({
      array: [...arr],
      active,
      comparisons,
      swaps: 0,
      highlightLine: line,
      found,
      low: 0,
      high: arr.length - 1,
    });
  };

  record([], 0);

  for (let i = 0; i < arr.length; i++) {
    comparisons++;
    record([i], 2);

    if (arr[i] === target) {
      record([i], 3, true);
      return steps;
    }
  }

  record([], 4, false);

  return steps;
}
