const longestIncreasingSubsequence = {
  id: 'longest-increasing-subsequence',
  title: 'Longest Increasing Subsequence',
  difficulty: 'Intermediate',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n log n)',
  best: 'O(n log n)',
  average: 'O(n log n)',
  worst: 'O(n log n)',
  space: 'O(n)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
We maintain a helper array using binary search.

Each element is processed once.

Time Complexity: O(n log n)
Space Complexity: O(n)

Practical Scenario:
Efficient for large arrays.
      `,
    },
    average: {
      description: `
Binary search is used to place elements correctly.

We maintain the smallest possible tail.

Time Complexity: O(n log n)
Space Complexity: O(n)

Practical Scenario:
Typical sequence optimization problems.
      `,
    },
    worst: {
      description: `
Binary search still dominates.

Time Complexity: O(n log n)
Space Complexity: O(n)

Practical Scenario:
Reverse sorted arrays.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept: 'LIS finds the longest strictly increasing subsequence in an array.',

  intuition:
    'Keep a list of smallest possible ending elements. Replace elements using binary search to maintain optimal subsequences.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'nums = [10, 9, 2, 5, 3, 7, 101, 18]',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Start with [10]'],
      },
      {
        pass: 'Step 2',
        steps: ['Replace 10 with 9 → [9]', 'Replace 9 with 2 → [2]'],
      },
      {
        pass: 'Step 3',
        steps: ['Add 5 → [2, 5]', 'Replace 5 with 3 → [2, 3]'],
      },
      {
        pass: 'Step 4',
        steps: ['Add 7 → [2, 3, 7]', 'Add 101 → [2, 3, 7, 101]'],
      },
      {
        pass: 'Final Result',
        steps: ['Length = 4'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Initialize empty array tail.',
    'For each number:',
    '  Use binary search to find position.',
    '  Replace or append element.',
    'Return length of tail.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION LIS(nums):',
    '  tail = []',
    '',
    '  for num in nums:',
    '    pos = lower_bound(tail, num)',
    '',
    '    if pos == length:',
    '      append num',
    '    else:',
    '      replace tail[pos] = num',
    '',
    '  return length(tail)',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used in sequence analysis, stock trends, scheduling, and optimization problems.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Efficient O(n log n) solution',
    'Uses binary search',
    'Works for large inputs',
    'Elegant approach',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Hard to understand initially',
    'Does not directly give subsequence',
    'Requires additional logic for reconstruction',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Technique used?',
      options: ['DP', 'Greedy + Binary Search', 'Sorting', 'Graph'],
      answer: 1,
    },
    {
      question: 'Tail array stores?',
      options: [
        'Final answer',
        'Smallest ending elements',
        'Sorted array',
        'Indices',
      ],
      answer: 1,
    },
    {
      question: 'Time complexity?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
      answer: 1,
    },
    {
      question: 'Binary search used for?',
      options: ['Sorting', 'Finding position', 'Searching', 'Deleting'],
      answer: 1,
    },
    {
      question: 'Output?',
      options: ['Sorted array', 'Length of LIS', 'Sum', 'Index'],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
int lis(int arr[], int n) {
    int tail[n];
    int size = 0;

    for(int i=0;i<n;i++){
        int l=0, r=size;
        while(l<r){
            int mid=(l+r)/2;
            if(tail[mid]<arr[i]) l=mid+1;
            else r=mid;
        }
        tail[l]=arr[i];
        if(l==size) size++;
    }
    return size;
}
`,

    cpp: `
int lis(vector<int>& nums) {
    vector<int> tail;

    for(int num : nums){
        auto it = lower_bound(tail.begin(), tail.end(), num);

        if(it == tail.end())
            tail.push_back(num);
        else
            *it = num;
    }
    return tail.size();
}
`,

    java: `
int lis(int[] nums) {
    ArrayList<Integer> tail = new ArrayList<>();

    for(int num : nums){
        int i = Collections.binarySearch(tail, num);
        if(i < 0) i = -(i + 1);

        if(i == tail.size())
            tail.add(num);
        else
            tail.set(i, num);
    }
    return tail.size();
}
`,

    python: `
import bisect

def lis(nums):
    tail = []

    for num in nums:
        i = bisect.bisect_left(tail, num)

        if i == len(tail):
            tail.append(num)
        else:
            tail[i] = num

    return len(tail)
`,

    js: `
function lis(nums) {
  const tail = [];

  for (let num of nums) {
    let l = 0, r = tail.length;

    while (l < r) {
      let mid = Math.floor((l + r) / 2);
      if (tail[mid] < num) l = mid + 1;
      else r = mid;
    }

    tail[l] = num;
  }

  return tail.length;
}
`,
  },
};

export default longestIncreasingSubsequence;
