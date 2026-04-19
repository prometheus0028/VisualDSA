export function generateQuickSortSteps(inputArray = []) {
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

  const partition = (low, high) => {
    const pivot = arr[high];
    let i = low - 1;

    record([high], 2);

    for (let j = low; j < high; j++) {
      comparisons++;
      record([j, high], 4);

      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swaps++;
        record([i, j], 5);
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    swaps++;
    record([i + 1, high], 6);

    return i + 1;
  };

  const quickSort = (low, high) => {
    if (low < high) {
      const pi = partition(low, high);

      quickSort(low, pi - 1);
      quickSort(pi + 1, high);
    }
  };

  record([], 0);
  quickSort(0, arr.length - 1);
  record([], null);

  return steps;
}
