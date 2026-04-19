const fractionalKnapsack = {
  id: 'fractional-knapsack',
  title: 'Fractional Knapsack (Greedy)',
  difficulty: 'Intermediate',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n log n)',
  best: 'O(n log n)',
  average: 'O(n log n)',
  worst: 'O(n log n)',
  space: 'O(1)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
We sort items based on value/weight ratio.

Sorting dominates the complexity.

Time Complexity: O(n log n)
Space Complexity: O(1)

Practical Scenario:
Efficient for large datasets.
      `,
    },
    average: {
      description: `
After sorting, we iterate once through items.

Greedy selection ensures optimal solution.

Time Complexity: O(n log n)
Space Complexity: O(1)

Practical Scenario:
Resource allocation problems.
      `,
    },
    worst: {
      description: `
Sorting always required regardless of input.

Time Complexity: O(n log n)
Space Complexity: O(1)

Practical Scenario:
Large number of items.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'In Fractional Knapsack, items can be divided. We pick items based on highest value-to-weight ratio to maximize total value.',

  intuition:
    'Always take the item with highest value per unit weight first. If space is left, take a fraction of the next item.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description:
      'weights = [10, 20, 30], values = [60, 100, 120], capacity = 50',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Compute ratios:', '60/10 = 6', '100/20 = 5', '120/30 = 4'],
      },
      {
        pass: 'Step 2',
        steps: [
          'Pick highest ratio → item1 (10 weight)',
          'Remaining capacity = 40',
        ],
      },
      {
        pass: 'Step 3',
        steps: ['Pick next → item2 (20 weight)', 'Remaining capacity = 20'],
      },
      {
        pass: 'Step 4',
        steps: ['Take fraction of item3 → 20/30', 'Value added = 80'],
      },
      {
        pass: 'Final Result',
        steps: ['Total value = 60 + 100 + 80 = 240'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Calculate value/weight ratio for each item.',
    'Sort items in descending order of ratio.',
    'Initialize total value = 0.',
    'For each item:',
    '  If capacity allows → take full item.',
    '  Else → take fraction of item.',
    'Return total value.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION fractionalKnapsack(weights, values, W):',
    '  for each item:',
    '    ratio = value / weight',
    '',
    '  sort items by ratio descending',
    '',
    '  total = 0',
    '',
    '  for item in sorted list:',
    '    if weight <= W:',
    '      take full item',
    '      W -= weight',
    '      total += value',
    '    else:',
    '      take fraction',
    '      total += ratio * W',
    '      break',
    '',
    '  return total',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used when items can be divided, such as resource allocation, profit maximization, and continuous optimization problems.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Optimal solution using greedy',
    'Simple and fast',
    'Works well for large datasets',
    'No need for DP table',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Not applicable when items cannot be divided',
    'Greedy fails for 0/1 version',
    'Requires sorting step',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Technique used?',
      options: ['DP', 'Greedy', 'Backtracking', 'DFS'],
      answer: 1,
    },
    {
      question: 'Key decision factor?',
      options: ['Weight', 'Value', 'Value/Weight ratio', 'Index'],
      answer: 2,
    },
    {
      question: 'Can items be split?',
      options: ['Yes', 'No', 'Sometimes', 'Never'],
      answer: 0,
    },
    {
      question: 'Time complexity?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(W)'],
      answer: 1,
    },
    {
      question: 'Why greedy works?',
      options: ['Optimal substructure', 'Sorting', 'Brute force', 'Recursion'],
      answer: 0,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>
#include <stdlib.h>

struct Item {
    int value, weight;
};

int cmp(const void* a, const void* b) {
    double r1 = (double)((struct Item*)a)->value / ((struct Item*)a)->weight;
    double r2 = (double)((struct Item*)b)->value / ((struct Item*)b)->weight;
    return r2 > r1 ? 1 : -1;
}

double fractionalKnapsack(int W, struct Item arr[], int n) {
    qsort(arr, n, sizeof(arr[0]), cmp);

    double total = 0.0;

    for(int i=0;i<n;i++){
        if(arr[i].weight <= W){
            W -= arr[i].weight;
            total += arr[i].value;
        } else {
            total += arr[i].value * ((double)W / arr[i].weight);
            break;
        }
    }
    return total;
}
`,

    cpp: `
double fractionalKnapsack(int W, vector<int>& wt, vector<int>& val) {
    int n = wt.size();
    vector<pair<double, int>> items;

    for(int i=0;i<n;i++){
        items.push_back({(double)val[i]/wt[i], i});
    }

    sort(items.rbegin(), items.rend());

    double total = 0;

    for(auto &it : items){
        int i = it.second;

        if(wt[i] <= W){
            W -= wt[i];
            total += val[i];
        } else {
            total += it.first * W;
            break;
        }
    }
    return total;
}
`,

    java: `
class Item {
    int value, weight;
}

double fractionalKnapsack(int W, Item[] items) {
    Arrays.sort(items, (a, b) ->
        Double.compare((double)b.value/b.weight, (double)a.value/a.weight)
    );

    double total = 0;

    for(Item item : items){
        if(item.weight <= W){
            W -= item.weight;
            total += item.value;
        } else {
            total += item.value * ((double)W / item.weight);
            break;
        }
    }
    return total;
}
`,

    python: `
def fractional_knapsack(W, wt, val):
    items = sorted(
        [(val[i]/wt[i], wt[i], val[i]) for i in range(len(wt))],
        reverse=True
    )

    total = 0

    for ratio, weight, value in items:
        if weight <= W:
            W -= weight
            total += value
        else:
            total += ratio * W
            break

    return total
`,

    js: `
function fractionalKnapsack(W, wt, val) {
  const items = wt.map((w, i) => ({
    ratio: val[i] / w,
    weight: w,
    value: val[i],
  }));

  items.sort((a, b) => b.ratio - a.ratio);

  let total = 0;

  for (let item of items) {
    if (item.weight <= W) {
      W -= item.weight;
      total += item.value;
    } else {
      total += item.ratio * W;
      break;
    }
  }

  return total;
}
`,
  },
};

export default fractionalKnapsack;
