const permutations = {
  id: 'permutations',
  title: 'Permutations',
  difficulty: 'Intermediate',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n!)',
  best: 'O(n!)',
  average: 'O(n!)',
  worst: 'O(n!)',
  space: 'O(n)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Even in the best case, all permutations must be generated.

For n elements, total permutations = n!

Time Complexity: O(n!)
Space Complexity: O(n) for recursion stack.

Practical Scenario:
Small datasets where all arrangements are required.
      `,
    },
    average: {
      description: `
Each element can be placed in every position, leading to factorial growth.

Recursion builds a tree with n! leaves.

Time Complexity: O(n!)
Space Complexity: O(n)

Practical Scenario:
Generating permutations for moderate-sized inputs.
      `,
    },
    worst: {
      description: `
Worst case is same as best and average.

All permutations must be explored and stored.

Time Complexity: O(n!)
Space Complexity: O(n)

Practical Scenario:
Large inputs become infeasible due to factorial explosion.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Permutations generate all possible arrangements of elements in a set. It uses backtracking by fixing one element at a time and recursively permuting the remaining elements.',

  intuition:
    'At each position, try placing every unused element. Then recursively fill the next position. Backtrack after exploring each possibility.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Generate permutations of [1, 2, 3].',
    walkthrough: [
      {
        pass: 'Fix 1 at first position',
        steps: ['[1, 2, 3]', '[1, 3, 2]'],
      },
      {
        pass: 'Fix 2 at first position',
        steps: ['[2, 1, 3]', '[2, 3, 1]'],
      },
      {
        pass: 'Fix 3 at first position',
        steps: ['[3, 1, 2]', '[3, 2, 1]'],
      },
      {
        pass: 'Final Result',
        steps: ['Total permutations = 6 = 3!'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Fix an element at current position.',
    'Swap it with all possible elements.',
    'Recursively generate permutations for remaining positions.',
    'Backtrack by swapping back.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION permute(arr, index):',
    '  if index == length:',
    '    print arr',
    '    return',
    '  for i = index to length:',
    '    swap(arr[index], arr[i])',
    '    permute(arr, index + 1)',
    '    swap(arr[index], arr[i]) // backtrack',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used when all possible arrangements of elements are required, such as scheduling, puzzles, and combinatorial problems.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Generates all possible arrangements',
    'Clear demonstration of backtracking',
    'Useful in many combinatorial problems',
    'Good for recursion tree visualization',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Factorial time complexity',
    'Not feasible for large n',
    'High computational cost',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'How many permutations for 3 elements?',
      options: ['3', '6', '9', '12'],
      answer: 1,
    },
    {
      question: 'Time complexity?',
      options: ['O(n)', 'O(n log n)', 'O(n!)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'Which technique is used?',
      options: ['Greedy', 'Backtracking', 'DP', 'Sorting'],
      answer: 1,
    },
    {
      question: 'Why is it expensive?',
      options: [
        'Too many loops',
        'Factorial growth',
        'Memory leak',
        'Sorting cost',
      ],
      answer: 1,
    },
    {
      question: 'Key operation?',
      options: ['Swap', 'Sort', 'Search', 'Divide'],
      answer: 0,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
`,

    cpp: `
void permute(vector<int>& arr, int index){
    if(index == arr.size()){
        // print
        return;
    }
    for(int i=index;i<arr.size();i++){
        swap(arr[index], arr[i]);
        permute(arr, index+1);
        swap(arr[index], arr[i]);
    }
}
`,

    java: `
void permute(int[] arr, int index){
    if(index == arr.length){
        return;
    }
    for(int i=index;i<arr.length;i++){
        int temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;

        permute(arr, index+1);

        temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;
    }
}
`,

    python: `
def permute(arr, index):
    if index == len(arr):
        print(arr)
        return
    for i in range(index, len(arr)):
        arr[index], arr[i] = arr[i], arr[index]
        permute(arr, index+1)
        arr[index], arr[i] = arr[i], arr[index]
`,

    js: `
function permute(arr, index) {
  if (index === arr.length) {
    console.log(arr);
    return;
  }
  for (let i = index; i < arr.length; i++) {
    [arr[index], arr[i]] = [arr[i], arr[index]];
    permute(arr, index + 1);
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }
}
`,
  },
};

export default permutations;
