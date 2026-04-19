const unboundedKnapsack = {
  id: 'unbounded-knapsack',
  title: 'Unbounded Knapsack',
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
Dynamic programming ensures each state is computed once.

Since items can be reused, we iterate forward.

Time Complexity: O(nW)
Space Complexity: O(W)

Practical Scenario:
Efficient for repeated-use items.
      `,
    },
    average: {
      description: `
We evaluate all capacities for all items.

Unlike 0/1 knapsack, items can be taken multiple times.

Time Complexity: O(nW)
Space Complexity: O(W)

Practical Scenario:
Problems like coin change and rod cutting.
      `,
    },
    worst: {
      description: `
All states must be evaluated.

Forward iteration allows reuse of items.

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
    'In Unbounded Knapsack, each item can be chosen multiple times. The goal is to maximize value without exceeding capacity.',

  intuition:
    'At each capacity, try all items. Since reuse is allowed, we can build solutions incrementally.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'weights = [2, 3, 4], values = [5, 10, 15], capacity = 6',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Try item 1 repeatedly → 2+2+2 = 6 → value = 15'],
      },
      {
        pass: 'Step 2',
        steps: ['Try item 2 twice → 3+3 = 6 → value = 20'],
      },
      {
        pass: 'Final Result',
        steps: ['Best = value 20'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Initialize dp array of size W+1.',
    'Set dp[0] = 0.',
    'For capacity from 1 to W:',
    '  For each item:',
    '    If weight <= capacity:',
    '      dp[w] = max(dp[w], value + dp[w - weight])',
    'Return dp[W]',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION unboundedKnapsack(weights, values, W):',
    '  dp[0...W] = 0',
    '',
    '  for w = 1 to W:',
    '    for i = 0 to n-1:',
    '      if weights[i] <= w:',
    '        dp[w] = max(',
    '          dp[w],',
    '          values[i] + dp[w - weights[i]]',
    '        )',
    '',
    '  return dp[W]',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used when items can be reused infinitely, such as coin change, rod cutting, and resource allocation problems.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Allows reuse of items',
    'Efficient DP solution',
    'Simple implementation',
    'Widely applicable',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Not suitable when reuse is not allowed',
    'Depends on capacity size',
    'May be slow for large W',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'What does unbounded mean?',
      options: ['No limit on items', 'Sorted array', 'Single use', 'Graph'],
      answer: 0,
    },
    {
      question: 'Loop direction?',
      options: ['Backward', 'Forward', 'Random', 'Sorted'],
      answer: 1,
    },
    {
      question: 'Can items repeat?',
      options: ['Yes', 'No', 'Sometimes', 'Never'],
      answer: 0,
    },
    {
      question: 'Space complexity?',
      options: ['O(n)', 'O(W)', 'O(nW)', 'O(log n)'],
      answer: 1,
    },
    {
      question: 'Related problem?',
      options: ['Binary search', 'Coin change', 'Sorting', 'DFS'],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
int unboundedKnapsack(int W, int wt[], int val[], int n) {
    int dp[W+1];
    for(int i=0;i<=W;i++) dp[i]=0;

    for(int w=1; w<=W; w++){
        for(int i=0;i<n;i++){
            if(wt[i] <= w){
                if(dp[w] < val[i] + dp[w - wt[i]])
                    dp[w] = val[i] + dp[w - wt[i]];
            }
        }
    }
    return dp[W];
}
`,

    cpp: `
int unboundedKnapsack(int W, vector<int>& wt, vector<int>& val) {
    vector<int> dp(W+1, 0);

    for(int w=1; w<=W; w++){
        for(int i=0;i<wt.size();i++){
            if(wt[i] <= w){
                dp[w] = max(dp[w], val[i] + dp[w - wt[i]]);
            }
        }
    }
    return dp[W];
}
`,

    java: `
int unboundedKnapsack(int W, int[] wt, int[] val) {
    int[] dp = new int[W+1];

    for(int w=1; w<=W; w++){
        for(int i=0;i<wt.length;i++){
            if(wt[i] <= w){
                dp[w] = Math.max(dp[w], val[i] + dp[w - wt[i]]);
            }
        }
    }
    return dp[W];
}
`,

    python: `
def unboundedKnapsack(W, wt, val):
    dp = [0]*(W+1)

    for w in range(1, W+1):
        for i in range(len(wt)):
            if wt[i] <= w:
                dp[w] = max(dp[w], val[i] + dp[w - wt[i]])

    return dp[W]
`,

    js: `
function unboundedKnapsack(W, wt, val) {
  const dp = Array(W + 1).fill(0);

  for (let w = 1; w <= W; w++) {
    for (let i = 0; i < wt.length; i++) {
      if (wt[i] <= w) {
        dp[w] = Math.max(dp[w], val[i] + dp[w - wt[i]]);
      }
    }
  }

  return dp[W];
}
`,
  },
};

export default unboundedKnapsack;
