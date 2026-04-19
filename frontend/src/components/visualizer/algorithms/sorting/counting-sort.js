export function generateCountingSortSteps(inputArray = []) {
  const arr = [...inputArray];
  const steps = [];

  const record = (line = null) => {
    steps.push({
      array: [...arr],
      active: [],
      comparisons: 0,
      swaps: 0,
      highlightLine: line,
    });
  };

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  const range = max - min + 1;
  const count = new Array(range).fill(0);

  record(0);

  for (let num of arr) {
    count[num - min]++;
  }

  let index = 0;

  for (let i = 0; i < range; i++) {
    while (count[i] > 0) {
      arr[index++] = i + min;
      count[i]--;
      record(3);
    }
  }

  record(null);
  return steps;
}
