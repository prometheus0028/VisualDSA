const subsetGeneration = {
  id: 'subset-generation',
  title: 'Subset Generation',
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
Subset generation always explores all possible subsets.

Each element has 2 choices: include or exclude.

Total subsets = 2^n

Time Complexity: O(2^n)
Space Complexity: O(n) recursion stack.

Practical Scenario:
Small input sizes where all subsets are needed.
      `,
    },
    average: {
      description: `
The recursion forms a binary tree.

Each level represents a decision to include or exclude an element.

Total nodes in recursion tree ≈ 2^n.

Time Complexity: O(2^n)
Space Complexity: O(n)

Practical Scenario:
Used in problems like subset sum, power set generation, and DP transitions.
      `,
    },
    worst: {
      description: `
Worst case is same as best and average.

All subsets must be generated.

Time Complexity: O(2^n)
Space Complexity: O(n)

Practical Scenario:
Large datasets lead to exponential explosion.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Subset Generation produces all possible subsets (power set) of a given set. It is a fundamental backtracking problem where each element is either included or excluded.',

  intuition:
    'Think of each element as a binary decision: take it or leave it. This naturally forms a binary tree of possibilities.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Generate all subsets of [1, 2, 3].',
    walkthrough: [
      {
        pass: 'Start',
        steps: ['Begin with empty subset []'],
      },
      {
        pass: 'Build subsets',
        steps: [
          '[1]',
          '[1,2]',
          '[1,2,3]',
          '[1,3]',
          '[2]',
          '[2,3]',
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
    'Start with empty subset.',
    'For each element, decide to include or exclude.',
    'Recursively build subsets.',
    'Store subset when reaching end.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION subsets(arr, index, current):',
    '  if index == length:',
    '    print current',
    '    return',
    '',
    '  // include element',
    '  subsets(arr, index+1, current + arr[index])',
    '',
    '  // exclude element',
    '  subsets(arr, index+1, current)',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used in generating power sets, solving subset sum problems, DP problems, and combinatorial search problems.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Simple and intuitive',
    'Direct mapping to binary decisions',
    'Foundation for many DP problems',
    'Easy to visualize recursion tree',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Exponential growth',
    'Not scalable for large inputs',
    'High memory usage if storing all subsets',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Number of subsets for n elements?',
      options: ['n!', '2^n', 'n²', 'log n'],
      answer: 1,
    },
    {
      question: 'Technique used?',
      options: ['Greedy', 'Backtracking', 'Sorting', 'Divide'],
      answer: 1,
    },
    {
      question: 'What is the empty subset?',
      options: ['Invalid', 'Required', 'Ignored', 'Sorted'],
      answer: 1,
    },
    {
      question: 'Each element has how many choices?',
      options: ['1', '2', '3', 'n'],
      answer: 1,
    },
    {
      question: 'Time complexity?',
      options: ['O(n)', 'O(2^n)', 'O(n log n)', 'O(n²)'],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>

void subsets(int arr[], int n, int index, int subset[], int size) {
    if (index == n) {
        // print subset
        return;
    }

    subset[size] = arr[index];
    subsets(arr, n, index + 1, subset, size + 1);

    subsets(arr, n, index + 1, subset, size);
}
`,

    cpp: `
void subsets(vector<int>& arr, int index, vector<int>& current){
    if(index == arr.size()){
        // print current
        return;
    }

    current.push_back(arr[index]);
    subsets(arr, index+1, current);

    current.pop_back();
    subsets(arr, index+1, current);
}
`,

    java: `
void subsets(int[] arr, int index, List<Integer> current){
    if(index == arr.length){
        return;
    }

    current.add(arr[index]);
    subsets(arr, index+1, current);

    current.remove(current.size()-1);
    subsets(arr, index+1, current);
}
`,

    python: `
def subsets(arr, index, current):
    if index == len(arr):
        print(current)
        return

    subsets(arr, index+1, current + [arr[index]])
    subsets(arr, index+1, current)
`,

    js: `
function subsets(arr, index, current) {
  if (index === arr.length) {
    console.log(current);
    return;
  }

  subsets(arr, index + 1, [...current, arr[index]]);
  subsets(arr, index + 1, current);
}
`,
  },
};

export default subsetGeneration;
