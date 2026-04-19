// visualizer/algorithms/dp/backtracking/tower-of-hanoi.js

export function generateHanoiSteps(n) {
  const steps = [];

  const move = (n, source, auxiliary, destination) => {
    if (n === 1) {
      steps.push({
        from: source,
        to: destination,
        highlightLine: 2,
      });
      return;
    }

    move(n - 1, source, destination, auxiliary);

    steps.push({
      from: source,
      to: destination,
      highlightLine: 6,
    });

    move(n - 1, auxiliary, source, destination);
  };

  move(n, 'A', 'B', 'C');

  return steps;
}
