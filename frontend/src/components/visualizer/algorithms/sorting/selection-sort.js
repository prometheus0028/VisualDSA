// visualizer/algorithms/sorting/selection-sort.js

export function generateSelectionSortSteps(inputArray = []) {
  const arr = [...inputArray];
  const steps = [];

  let comparisons = 0;
  let swaps = 0;

  const recordStep = (active = [], line = null) => {
    steps.push({
      array: [...arr],
      active,
      comparisons,
      swaps,
      highlightLine: line,
    });
  };

  const n = arr.length;

  recordStep([], 0);

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    recordStep([i], 1);

    for (let j = i + 1; j < n; j++) {
      comparisons++;
      recordStep([minIndex, j], 3);

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        recordStep([minIndex], 4);
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      swaps++;
      recordStep([i, minIndex], 5);
    }
  }

  recordStep([], null);

  return steps;
}
