const ternarySearch = {
  id: 'ternary-search',
  title: 'Ternary Search',
  difficulty: 'Intermediate',

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
Best case occurs when the target element is found at one of the two mid points in the first iteration.

Only one comparison round is needed.

Time Complexity: O(1)

Practical Scenario:
When the searched value lies near the center of a sorted dataset.
      `,
    },
    average: {
      description: `
Ternary Search divides the array into three parts instead of two.

At every step, the search space reduces to 2/3 of its previous size.

Total divisions required ≈ log₃(n).

Time Complexity: O(log n)

Practical Scenario:
Searching in unimodal functions or certain optimization problems.
      `,
    },
    worst: {
      description: `
Worst case occurs when the element lies at extreme ends
or is not present in the array.

Maximum log₃(n) comparisons are required.

Although it divides into three parts,
it does more comparisons per iteration than Binary Search.

Time Complexity: O(log n)

Practical Scenario:
Searching in sorted data where Binary Search is generally preferred.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Ternary Search is a divide-and-conquer searching algorithm that works on sorted arrays. It divides the search range into three parts using two midpoints and determines which segment may contain the target.',

  intuition:
    'Instead of splitting into two halves like Binary Search, we split the array into three sections and eliminate two-thirds of the search space in each iteration.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description:
      'Let us search for 8 in the sorted array: [1, 2, 3, 5, 8, 10, 12]',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: [
          'mid1 = 3, mid2 = 5',
          'Compare arr[3] = 5 and arr[5] = 10',
          '8 lies between 5 and 10 → search middle segment',
        ],
      },
      {
        pass: 'Step 2',
        steps: ['New mid1 and mid2 calculated', 'arr[mid1] = 8 → Found target'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Ensure the array is sorted.',
    'Initialize low = 0 and high = n-1.',
    'Find mid1 and mid2 dividing range into three parts.',
    'If target equals arr[mid1] or arr[mid2], return index.',
    'If target < arr[mid1], search left segment.',
    'If target > arr[mid2], search right segment.',
    'Else search middle segment.',
    'Repeat until found or range becomes empty.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'low = 0',
    'high = n - 1',
    'while low <= high:',
    '  mid1 = low + (high - low) / 3',
    '  mid2 = high - (high - low) / 3',
    '  if arr[mid1] == target:',
    '    return mid1',
    '  if arr[mid2] == target:',
    '    return mid2',
    '  if target < arr[mid1]:',
    '    high = mid1 - 1',
    '  else if target > arr[mid2]:',
    '    low = mid2 + 1',
    '  else:',
    '    low = mid1 + 1',
    '    high = mid2 - 1',
    'return -1',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Ternary Search is mainly used in mathematical optimization problems and unimodal function search. For general searching in sorted arrays, Binary Search is usually more efficient due to fewer comparisons.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Efficient logarithmic time complexity',
    'Useful in unimodal function optimization',
    'Reduces search space significantly each iteration',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'More comparisons per iteration than Binary Search',
    'Requires sorted array',
    'Rarely preferred over Binary Search for simple searching',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Ternary Search works on:',
      options: ['Unsorted arrays', 'Sorted arrays'],
      answer: 1,
    },
    {
      question: 'Ternary Search divides array into:',
      options: ['Two parts', 'Three parts', 'Four parts', 'Five parts'],
      answer: 1,
    },
    {
      question: 'Time complexity of Ternary Search?',
      options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
      answer: 1,
    },
    {
      question: 'Compared to Binary Search, Ternary Search:',
      options: [
        'Always faster',
        'Uses fewer comparisons',
        'Uses more comparisons per iteration',
        'Is unstable',
      ],
      answer: 2,
    },
    {
      question: 'Ternary Search is commonly used in:',
      options: [
        'Database indexing',
        'Sorting arrays',
        'Unimodal optimization problems',
        'Stack implementation',
      ],
      answer: 2,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
int ternarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1;

    while(low <= high) {
        int mid1 = low + (high - low) / 3;
        int mid2 = high - (high - low) / 3;

        if(arr[mid1] == target)
            return mid1;
        if(arr[mid2] == target)
            return mid2;

        if(target < arr[mid1])
            high = mid1 - 1;
        else if(target > arr[mid2])
            low = mid2 + 1;
        else {
            low = mid1 + 1;
            high = mid2 - 1;
        }
    }

    return -1;
}
`,
    cpp: `
int ternarySearch(vector<int>& arr, int target) {
    int low = 0, high = arr.size() - 1;

    while(low <= high) {
        int mid1 = low + (high - low) / 3;
        int mid2 = high - (high - low) / 3;

        if(arr[mid1] == target)
            return mid1;
        if(arr[mid2] == target)
            return mid2;

        if(target < arr[mid1])
            high = mid1 - 1;
        else if(target > arr[mid2])
            low = mid2 + 1;
        else {
            low = mid1 + 1;
            high = mid2 - 1;
        }
    }

    return -1;
}
`,
    java: `
static int ternarySearch(int[] arr, int target) {
    int low = 0, high = arr.length - 1;

    while(low <= high) {
        int mid1 = low + (high - low) / 3;
        int mid2 = high - (high - low) / 3;

        if(arr[mid1] == target)
            return mid1;
        if(arr[mid2] == target)
            return mid2;

        if(target < arr[mid1])
            high = mid1 - 1;
        else if(target > arr[mid2])
            low = mid2 + 1;
        else {
            low = mid1 + 1;
            high = mid2 - 1;
        }
    }

    return -1;
}
`,
    python: `
def ternary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid1 = low + (high - low) // 3
        mid2 = high - (high - low) // 3

        if arr[mid1] == target:
            return mid1
        if arr[mid2] == target:
            return mid2

        if target < arr[mid1]:
            high = mid1 - 1
        elif target > arr[mid2]:
            low = mid2 + 1
        else:
            low = mid1 + 1
            high = mid2 - 1

    return -1
`,
    js: `
function ternarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while(low <= high) {
        let mid1 = low + Math.floor((high - low) / 3);
        let mid2 = high - Math.floor((high - low) / 3);

        if(arr[mid1] === target) return mid1;
        if(arr[mid2] === target) return mid2;

        if(target < arr[mid1])
            high = mid1 - 1;
        else if(target > arr[mid2])
            low = mid2 + 1;
        else {
            low = mid1 + 1;
            high = mid2 - 1;
        }
    }

    return -1;
}
`,
  },
};

export default ternarySearch;
