export function generateRadixSortSteps(inputArray = []) {
  const arr = [...inputArray];
  const steps = [];

  const record = () => {
    steps.push({
      array: [...arr],
      active: [],
      comparisons: 0,
      swaps: 0,
      highlightLine: null,
    });
  };

  const getMax = () => Math.max(...arr);

  const countingSort = (exp) => {
    const output = new Array(arr.length);
    const count = new Array(10).fill(0);

    for (let i = 0; i < arr.length; i++) {
      count[Math.floor(arr[i] / exp) % 10]++;
    }

    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
      count[Math.floor(arr[i] / exp) % 10]--;
    }

    for (let i = 0; i < arr.length; i++) {
      arr[i] = output[i];
      record();
    }
  };

  const max = getMax();

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(exp);
  }

  record();
  return steps;
}
