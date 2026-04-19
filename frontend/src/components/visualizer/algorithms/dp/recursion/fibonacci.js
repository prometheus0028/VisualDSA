/* =========================================
   FIBONACCI (SEQUENCE BASED)
========================================= */

export function generateFibonacciSteps(n) {
  const steps = [];

  if (n <= 0) return steps;

  const sequence = [];

  // base cases
  if (n >= 1) sequence.push(1);
  if (n >= 2) sequence.push(1);

  steps.push({
    action: 'initialize',
    sequence: [...sequence],
    highlightLine: 1,
  });

  for (let i = 2; i < n; i++) {
    const next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);

    steps.push({
      action: `compute term ${i + 1}`,
      sequence: [...sequence],
      highlightLine: 2,
    });
  }

  steps.push({
    action: 'final',
    sequence: [...sequence],
    highlightLine: 3,
  });

  return steps;
}
