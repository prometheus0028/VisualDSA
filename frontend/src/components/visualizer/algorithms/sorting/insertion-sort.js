export function generateInsertionSortSteps(inputArray = []) {
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

  const n = arr.length;

  record([], 0);

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    record([i], 1);

    while (j >= 0) {
      comparisons++;
      record([j, j + 1], 3);

      if (arr[j] > key) {
        arr[j + 1] = arr[j];
        swaps++;
        record([j, j + 1], 4);
        j--;
      } else {
        break;
      }
    }

    arr[j + 1] = key;
    record([j + 1], 5);
  }

  record([], null);
  return steps;
}
