const zeroOneKnapsack = {
  id: 'zero-one-knapsack',
  title: '0/1 Knapsack',
  difficulty: 'Intermediate',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(nW)',
  best: 'O(nW)',
  average: 'O(nW)',
  worst: 'O(nW)',
  space: 'O(W)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Each item is processed once with DP.

We use space optimization (1D DP array).

Time Complexity: O(nW)
Space Complexity: O(W)

Practical Scenario:
Efficient when capacity is moderate.
      `,
    },
    average: {
      description: `
Each item can be taken or skipped (0/1 choice).

DP ensures all combinations are explored efficiently.

Time Complexity: O(nW)
Space Complexity: O(W)

Practical Scenario:
Classic resource selection problems.
      `,
    },
    worst: {
      description: `
Worst case evaluates all capacities for all items.

Still polynomial due to DP.

Time Complexity: O(nW)
Space Complexity: O(W)

Practical Scenario:
Large capacity values increase computation.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'In 0/1 Knapsack, each item can either be taken once or not taken at all. The goal is to maximize total value without exceeding capacity.',

  intuition:
    'For every item, decide: include it OR exclude it. Choose whichever gives maximum value.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'weights = [1, 2, 3], values = [6, 10, 12], capacity = 5',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Try including item 1 → weight 1, value 6'],
      },
      {
        pass: 'Step 2',
        steps: [
          'Try combinations:',
          '1+2 = weight 3, value 16',
          '2+3 = weight 5, value 22',
        ],
      },
      {
        pass: 'Final Result',
        steps: ['Best = items 2 and 3 → value = 22'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Initialize dp array of size W+1.',
    'Set all values to 0.',
    'For each item:',
    '  Iterate capacity from W → weight.',
    '  Update dp[w] = max(include, exclude).',
    'Return dp[W].',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION knapsack(weights, values, W):',
    '  dp[0...W] = 0',
    '',
    '  for i = 0 to n-1:',
    '    for w = W down to weights[i]:',
    '      dp[w] = max(',
    '        dp[w],',
    '        values[i] + dp[w - weights[i]]',
    '      )',
    '',
    '  return dp[W]',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used when items cannot be reused. Common in budgeting, project selection, and constraint-based optimization.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Space optimized DP',
    'Clear decision making',
    'Widely used in interviews',
    'Efficient for moderate inputs',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Cannot reuse items',
    'Depends on capacity size',
    'May be slow for large W',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'What does 0/1 mean?',
      options: [
        '0 items',
        'Take once or not at all',
        'Infinite usage',
        'Sorting',
      ],
      answer: 1,
    },
    {
      question: 'Traversal direction?',
      options: ['Left to right', 'Right to left', 'Random', 'Sorted'],
      answer: 1,
    },
    {
      question: 'Why reverse loop?',
      options: [
        'Optimization',
        'Prevent reuse of item',
        'Sorting',
        'Faster execution',
      ],
      answer: 1,
    },
    {
      question: 'Space complexity?',
      options: ['O(n)', 'O(W)', 'O(nW)', 'O(log n)'],
      answer: 1,
    },
    {
      question: 'Goal?',
      options: ['Min weight', 'Max value', 'Sort array', 'Find sum'],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
int knapsack(int W, int wt[], int val[], int n) {
    int dp[W+1];
    for(int i=0;i<=W;i++) dp[i]=0;

    for(int i=0;i<n;i++){
        for(int w=W; w>=wt[i]; w--){
            if(dp[w] < val[i] + dp[w - wt[i]])
                dp[w] = val[i] + dp[w - wt[i]];
        }
    }
    return dp[W];
}
`,

    cpp: `
int knapsack(int W, vector<int>& wt, vector<int>& val) {
    vector<int> dp(W+1, 0);

    for(int i=0;i<wt.size();i++){
        for(int w=W; w>=wt[i]; w--){
            dp[w] = max(dp[w], val[i] + dp[w - wt[i]]);
        }
    }
    return dp[W];
}
`,

    java: `
int knapsack(int W, int[] wt, int[] val) {
    int[] dp = new int[W+1];

    for(int i=0;i<wt.length;i++){
        for(int w=W; w>=wt[i]; w--){
            dp[w] = Math.max(dp[w], val[i] + dp[w - wt[i]]);
        }
    }
    return dp[W];
}
`,

    python: `
def knapsack(W, wt, val):
    dp = [0]*(W+1)

    for i in range(len(wt)):
        for w in range(W, wt[i]-1, -1):
            dp[w] = max(dp[w], val[i] + dp[w - wt[i]])

    return dp[W]
`,

    js: `
function knapsack(W, wt, val) {
  const dp = Array(W + 1).fill(0);

  for (let i = 0; i < wt.length; i++) {
    for (let w = W; w >= wt[i]; w--) {
      dp[w] = Math.max(dp[w], val[i] + dp[w - wt[i]]);
    }
  }

  return dp[W];
}
`,
  },
};

export default zeroOneKnapsack;
