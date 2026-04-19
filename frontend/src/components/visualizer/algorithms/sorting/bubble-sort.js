// visualizer/algorithms/sorting/bubble-sort.js

export function generateBubbleSortSteps(inputArray = []) {
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
    let swapped = false;
    recordStep([], 1);

    for (let j = 0; j < n - i - 1; j++) {
      comparisons++;
      recordStep([j, j + 1], 3);

      if (arr[j] > arr[j + 1]) {
        recordStep([j, j + 1], 4);

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swaps++;

        swapped = true;
        recordStep([j, j + 1], 5);
      }
    }

    if (!swapped) {
      recordStep([], 7);
      break;
    }
  }

  recordStep([], null);

  return steps;
}
