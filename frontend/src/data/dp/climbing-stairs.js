const climbingStairs = {
  id: 'climbing-stairs',
  title: 'Climbing Stairs',
  difficulty: 'Beginner',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n)',
  best: 'O(n)',
  average: 'O(n)',
  worst: 'O(n)',
  space: 'O(n)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Using dynamic programming, each step is computed once.

We store results to avoid recomputation.

Time Complexity: O(n)
Space Complexity: O(n)

Practical Scenario:
Efficient for all input sizes.
      `,
    },
    average: {
      description: `
Each step depends on previous two steps.

We build solution iteratively.

Time Complexity: O(n)
Space Complexity: O(n)

Practical Scenario:
Standard DP problem similar to Fibonacci.
      `,
    },
    worst: {
      description: `
Worst case remains linear since we compute each state once.

Time Complexity: O(n)
Space Complexity: O(n)

Practical Scenario:
Handles large inputs efficiently.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Climbing Stairs is a classic dynamic programming problem where you can climb either 1 or 2 steps at a time. The goal is to find how many distinct ways you can reach the top.',

  intuition:
    'To reach step n, you must come from either step n-1 or step n-2. This creates a recurrence similar to Fibonacci.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Find number of ways to climb 5 steps.',
    walkthrough: [
      {
        pass: 'Base Cases',
        steps: ['ways(1) = 1', 'ways(2) = 2'],
      },
      {
        pass: 'Build DP',
        steps: [
          'ways(3) = ways(2) + ways(1) = 3',
          'ways(4) = ways(3) + ways(2) = 5',
          'ways(5) = ways(4) + ways(3) = 8',
        ],
      },
      {
        pass: 'Final Result',
        steps: ['Total ways = 8'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Initialize base cases: dp[1] = 1, dp[2] = 2.',
    'For each step i from 3 to n:',
    '  dp[i] = dp[i-1] + dp[i-2]',
    'Return dp[n]',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION climb(n):',
    '  if n <= 2:',
    '    return n',
    '  dp[1] = 1, dp[2] = 2',
    '  for i = 3 to n:',
    '    dp[i] = dp[i-1] + dp[i-2]',
    '  return dp[n]',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used when a problem can be broken into overlapping subproblems with optimal substructure. It is a basic introduction to dynamic programming.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Simple introduction to DP',
    'Efficient compared to recursion',
    'Linear time solution',
    'Foundation for many DP problems',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Uses extra space (can be optimized)',
    'Not suitable for problems without overlapping subproblems',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Relation of this problem?',
      options: ['Sorting', 'Fibonacci', 'Greedy', 'Graph'],
      answer: 1,
    },
    {
      question: 'Time complexity with DP?',
      options: ['O(n)', 'O(n²)', 'O(log n)', 'O(2^n)'],
      answer: 0,
    },
    {
      question: 'How many choices per step?',
      options: ['1', '2', '3', 'n'],
      answer: 1,
    },
    {
      question: 'Technique used?',
      options: ['Greedy', 'DP', 'Backtracking', 'Divide'],
      answer: 1,
    },
    {
      question: 'Base case for n=2?',
      options: ['1', '2', '3', '0'],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
int climb(int n) {
    if(n <= 2) return n;

    int dp[n+1];
    dp[1] = 1;
    dp[2] = 2;

    for(int i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
}
`,

    cpp: `
int climb(int n) {
    if(n <= 2) return n;

    vector<int> dp(n+1);
    dp[1] = 1;
    dp[2] = 2;

    for(int i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
}
`,

    java: `
int climb(int n) {
    if(n <= 2) return n;

    int[] dp = new int[n+1];
    dp[1] = 1;
    dp[2] = 2;

    for(int i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
}
`,

    python: `
def climb(n):
    if n <= 2:
        return n

    dp = [0]*(n+1)
    dp[1], dp[2] = 1, 2

    for i in range(3, n+1):
        dp[i] = dp[i-1] + dp[i-2]

    return dp[n]
`,

    js: `
function climb(n) {
  if (n <= 2) return n;

  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
`,
  },
};

export default climbingStairs;
