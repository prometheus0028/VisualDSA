const combinations = {
  id: 'combinations',
  title: 'Combinations',
  difficulty: 'Intermediate',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(2^n)',
  best: 'O(2^n)',
  average: 'O(2^n)',
  worst: 'O(2^n)',
  space: 'O(n)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Even in the best case, all subsets must be explored.

Each element has 2 choices: include or exclude.

Time Complexity: O(2^n)
Space Complexity: O(n) recursion stack.

Practical Scenario:
Generating all subsets for small input sizes.
      `,
    },
    average: {
      description: `
Each element branches into two choices, forming a binary recursion tree.

Total subsets generated = 2^n.

Time Complexity: O(2^n)
Space Complexity: O(n)

Practical Scenario:
Subset generation, combinations in problems like knapsack or decision making.
      `,
    },
    worst: {
      description: `
Worst case is same as best and average.

All possible subsets are generated.

Time Complexity: O(2^n)
Space Complexity: O(n)

Practical Scenario:
Large datasets become computationally expensive due to exponential growth.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Combinations generate all possible selections of elements where order does not matter. It uses backtracking by deciding for each element whether to include it or exclude it.',

  intuition:
    'For each element, you have two choices: pick it or skip it. This forms a binary tree of possibilities, generating all subsets.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Generate combinations (subsets) of [1, 2, 3].',
    walkthrough: [
      {
        pass: 'Include/Exclude Decisions',
        steps: ['Start with []', 'Include 1 → [1]', 'Exclude 1 → []'],
      },
      {
        pass: 'Build Tree',
        steps: [
          '[1,2,3]',
          '[1,2]',
          '[1,3]',
          '[1]',
          '[2,3]',
          '[2]',
          '[3]',
          '[]',
        ],
      },
      {
        pass: 'Final Result',
        steps: ['Total subsets = 8 = 2^3'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Start with an empty subset.',
    'For each element, choose to include or exclude it.',
    'Recursively explore both choices.',
    'Add subset to result when reaching end.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION combine(arr, index, current):',
    '  if index == length:',
    '    print current',
    '    return',
    '  include arr[index]',
    '  combine(arr, index+1, current)',
    '  exclude arr[index]',
    '  combine(arr, index+1, current)',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used in subset generation, decision-making problems, and scenarios where order does not matter such as combinations and selections.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Generates all subsets',
    'Simple include/exclude logic',
    'Good for understanding recursion trees',
    'Useful in DP and backtracking problems',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Exponential time complexity',
    'Not scalable for large inputs',
    'Generates many redundant subsets if not filtered',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'How many subsets for 3 elements?',
      options: ['3', '6', '8', '9'],
      answer: 2,
    },
    {
      question: 'Time complexity?',
      options: ['O(n)', 'O(n log n)', 'O(2^n)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'Key idea?',
      options: ['Sorting', 'Include/Exclude', 'Greedy', 'Divide'],
      answer: 1,
    },
    {
      question: 'Order matters?',
      options: ['Yes', 'No'],
      answer: 1,
    },
    {
      question: 'Total subsets formula?',
      options: ['n!', '2^n', 'n²', 'log n'],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>

void combine(int arr[], int n, int index, int subset[], int size) {
    if (index == n) {
        // print subset
        return;
    }

    subset[size] = arr[index];
    combine(arr, n, index + 1, subset, size + 1);

    combine(arr, n, index + 1, subset, size);
}
`,

    cpp: `
void combine(vector<int>& arr, int index, vector<int>& current){
    if(index == arr.size()){
        // print current
        return;
    }

    current.push_back(arr[index]);
    combine(arr, index+1, current);

    current.pop_back();
    combine(arr, index+1, current);
}
`,

    java: `
void combine(int[] arr, int index, List<Integer> current){
    if(index == arr.length){
        return;
    }

    current.add(arr[index]);
    combine(arr, index+1, current);

    current.remove(current.size()-1);
    combine(arr, index+1, current);
}
`,

    python: `
def combine(arr, index, current):
    if index == len(arr):
        print(current)
        return

    combine(arr, index+1, current + [arr[index]])
    combine(arr, index+1, current)
`,

    js: `
function combine(arr, index, current) {
  if (index === arr.length) {
    console.log(current);
    return;
  }

  combine(arr, index + 1, [...current, arr[index]]);
  combine(arr, index + 1, current);
}
`,
  },
};

export default combinations;
