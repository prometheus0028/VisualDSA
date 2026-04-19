const linearSearch = {
  id: 'linear-search',
  title: 'Linear Search',
  difficulty: 'Beginner',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n)',
  best: 'O(1)',
  average: 'O(n)',
  worst: 'O(n)',
  space: 'O(1)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Best case occurs when the target element is found at the first position.

Only one comparison is required.

Time Complexity: O(1)

Practical Scenario:
Searching in small datasets where item is likely at the beginning.
      `,
    },
    average: {
      description: `
On average, the element is somewhere in the middle.

Approximately n/2 comparisons are required.

Time Complexity: O(n)

Practical Scenario:
Unordered user input or unsorted arrays.
      `,
    },
    worst: {
      description: `
Worst case occurs when the element is at the last position
or not present in the array.

All n elements must be checked.

Time Complexity: O(n)

Practical Scenario:
Searching for a missing element.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Linear Search is the simplest searching algorithm. It checks each element one by one until the target element is found or the list ends.',

  intuition:
    'Imagine looking for a name in a list without sorting. You read each name sequentially until you find the match.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Let us search for 8 in the array: [5, 3, 8, 1, 2]',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Compare 5 with 8 → Not equal'],
      },
      {
        pass: 'Step 2',
        steps: ['Compare 3 with 8 → Not equal'],
      },
      {
        pass: 'Step 3',
        steps: ['Compare 8 with 8 → Found at index 2'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Start from the first element.',
    'Compare current element with target.',
    'If equal, return index.',
    'Else move to next element.',
    'If end is reached, return not found.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'for i = 0 to n-1:',
    '  if arr[i] == target:',
    '    return i',
    'return -1',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Linear Search is useful when the dataset is small or unsorted and simplicity is preferred over efficiency.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Very simple to implement',
    'Works on unsorted arrays',
    'No preprocessing required',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Slow for large datasets',
    'Inefficient compared to Binary Search',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Linear Search requires sorted array?',
      options: ['Yes', 'No'],
      answer: 1,
    },
    {
      question: 'Worst case time complexity?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      answer: 2,
    },
    {
      question: 'Best case occurs when element is:',
      options: ['Last', 'Middle', 'First', 'Not present'],
      answer: 2,
    },
    {
      question: 'Space complexity is:',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'Linear Search is best for:',
      options: [
        'Huge sorted arrays',
        'Small unsorted arrays',
        'Binary trees',
        'Graphs',
      ],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
int linearSearch(int arr[], int n, int target) {
    for(int i = 0; i < n; i++) {
        if(arr[i] == target)
            return i;
    }
    return -1;
}
`,
    cpp: `
int linearSearch(vector<int>& arr, int target) {
    for(int i = 0; i < arr.size(); i++) {
        if(arr[i] == target)
            return i;
    }
    return -1;
}
`,
    java: `
static int linearSearch(int[] arr, int target) {
    for(int i = 0; i < arr.length; i++) {
        if(arr[i] == target)
            return i;
    }
    return -1;
}
`,
    python: `
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
`,
    js: `
function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target)
            return i;
    }
    return -1;
}
`,
  },
};

export default linearSearch;
