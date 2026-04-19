/* =========================================
   FRACTIONAL KNAPSACK (GREEDY)
========================================= */

export function generateFractionalKnapsackSteps(weights, values, W) {
  const steps = [];

  const items = weights.map((w, i) => ({
    weight: w,
    value: values[i],
    ratio: values[i] / w,
    index: i,
  }));

  // sort by value/weight ratio descending
  items.sort((a, b) => b.ratio - a.ratio);

  let totalValue = 0;
  let remaining = W;

  steps.push({
    action: 'sort items',
    items: [...items],
    highlightLine: 1,
  });

  for (let item of items) {
    if (remaining === 0) break;

    if (item.weight <= remaining) {
      remaining -= item.weight;
      totalValue += item.value;

      steps.push({
        action: 'take full',
        item,
        remaining,
        totalValue,
        highlightLine: 2,
      });
    } else {
      const fraction = remaining / item.weight;
      totalValue += item.value * fraction;

      steps.push({
        action: 'take fraction',
        item,
        fraction,
        totalValue,
        highlightLine: 3,
      });

      remaining = 0;
    }
  }

  steps.push({
    action: 'result',
    totalValue,
    highlightLine: 4,
  });

  return steps;
}
