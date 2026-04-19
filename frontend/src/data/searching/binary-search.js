const binarySearch = {
  id: 'binary-search',
  title: 'Binary Search',
  difficulty: 'Beginner',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(log n)',
  best: 'O(1)',
  average: 'O(log n)',
  worst: 'O(log n)',
  space: 'O(1)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Best case occurs when the target element is exactly at the middle position.

Only one comparison is required.

Time Complexity: O(1)

Practical Scenario:
Searching for the median value in a sorted dataset.
      `,
    },
    average: {
      description: `
Binary Search repeatedly divides the array into two halves.

Each division reduces search space by half.

Total divisions required ≈ log₂(n).

Time Complexity: O(log n)

Practical Scenario:
Large sorted datasets like database indexes.
      `,
    },
    worst: {
      description: `
Worst case occurs when the element is at the extreme end
or not present in the array.

Maximum log₂(n) comparisons are required.

Time Complexity: O(log n)

Practical Scenario:
Searching for a missing element in a large sorted dataset.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Binary Search is an efficient searching algorithm that works on sorted arrays. It repeatedly divides the search interval in half until the target is found.',

  intuition:
    'Imagine searching for a word in a dictionary. You open the middle page and decide whether to go left or right based on alphabetical order.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Let us search for 8 in the sorted array: [1, 2, 3, 5, 8]',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Middle element = 3 → 3 < 8 → Search right half'],
      },
      {
        pass: 'Step 2',
        steps: ['New middle = 5 → 5 < 8 → Search right half'],
      },
      {
        pass: 'Step 3',
        steps: ['New middle = 8 → Found at index 4'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Ensure the array is sorted.',
    'Find the middle index.',
    'If middle equals target, return index.',
    'If target is smaller, search left half.',
    'If target is larger, search right half.',
    'Repeat until found or interval is empty.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'low = 0',
    'high = n - 1',
    'while low <= high:',
    '  mid = (low + high) / 2',
    '  if arr[mid] == target:',
    '    return mid',
    '  else if arr[mid] < target:',
    '    low = mid + 1',
    '  else:',
    '    high = mid - 1',
    'return -1',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Binary Search is ideal for large sorted datasets where fast searching is required. It is widely used in search engines, databases, and libraries.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Very efficient for large datasets',
    'Much faster than Linear Search',
    'Logarithmic time complexity',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Requires sorted data',
    'Slightly more complex implementation',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Binary Search works only on:',
      options: ['Unsorted arrays', 'Sorted arrays'],
      answer: 1,
    },
    {
      question: 'Time complexity of Binary Search?',
      options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
      answer: 1,
    },
    {
      question: 'Binary Search reduces search space by:',
      options: ['One element', 'Half each time', 'Two elements', 'None'],
      answer: 1,
    },
    {
      question: 'Worst case comparisons are approximately:',
      options: ['n', 'n/2', 'log n', '1'],
      answer: 2,
    },
    {
      question: 'Binary Search space complexity (iterative)?',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      answer: 2,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1;
    while(low <= high) {
        int mid = (low + high) / 2;
        if(arr[mid] == target)
            return mid;
        else if(arr[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}
`,
    cpp: `
int binarySearch(vector<int>& arr, int target) {
    int low = 0, high = arr.size() - 1;
    while(low <= high) {
        int mid = (low + high) / 2;
        if(arr[mid] == target)
            return mid;
        else if(arr[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}
`,
    java: `
static int binarySearch(int[] arr, int target) {
    int low = 0, high = arr.length - 1;
    while(low <= high) {
        int mid = (low + high) / 2;
        if(arr[mid] == target)
            return mid;
        else if(arr[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}
`,
    python: `
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return -1
`,
    js: `
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(arr[mid] === target)
            return mid;
        else if(arr[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }

    return -1;
}
`,
  },
};

export default binarySearch;
