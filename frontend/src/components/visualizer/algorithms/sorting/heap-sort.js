export function generateHeapSortSteps(inputArray = []) {
  const arr = [...inputArray];
  const steps = [];

  let comparisons = 0;
  let swaps = 0;

  const record = (active = [], line = null) => {
    steps.push({
      array: [...arr],
      active,
      comparisons,
      swaps,
      highlightLine: line,
    });
  };

  const heapify = (n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n) {
      comparisons++;
      if (arr[left] > arr[largest]) largest = left;
    }

    if (right < n) {
      comparisons++;
      if (arr[right] > arr[largest]) largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      swaps++;
      record([i, largest], 4);
      heapify(n, largest);
    }
  };

  const n = arr.length;

  record([], 0);

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    swaps++;
    record([0, i], 6);

    heapify(i, 0);
  }

  record([], null);
  return steps;
}
