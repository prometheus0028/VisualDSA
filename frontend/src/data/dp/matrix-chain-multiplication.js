const matrixChainMultiplication = {
  id: 'matrix-chain-multiplication',
  title: 'Matrix Chain Multiplication',
  difficulty: 'Advanced',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n³)',
  best: 'O(n³)',
  average: 'O(n³)',
  worst: 'O(n³)',
  space: 'O(n²)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
We fill a DP table using increasing chain lengths.

For each pair (i, j), we try all possible splits.

Time Complexity: O(n³)
Space Complexity: O(n²)

Practical Scenario:
Small number of matrices.
      `,
    },
    average: {
      description: `
We evaluate all partitions for each subproblem.

Nested loops for i, j, and k.

Time Complexity: O(n³)
Space Complexity: O(n²)

Practical Scenario:
Optimization problems involving grouping.
      `,
    },
    worst: {
      description: `
All possible partitions must be evaluated.

Time Complexity: O(n³)
Space Complexity: O(n²)

Practical Scenario:
Large number of matrices increases computation heavily.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Matrix Chain Multiplication finds the most efficient way to multiply a sequence of matrices by minimizing the total number of scalar multiplications.',

  intuition:
    'Different ways of parenthesizing matrices give different costs. Try all possible splits and choose the minimum.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Matrices: A(10×20), B(20×30), C(30×40)',
    walkthrough: [
      {
        pass: 'Option 1',
        steps: [
          '(A × B) × C',
          'Cost = (10×20×30) + (10×30×40) = 6000 + 12000 = 18000',
        ],
      },
      {
        pass: 'Option 2',
        steps: [
          'A × (B × C)',
          'Cost = (20×30×40) + (10×20×40) = 24000 + 8000 = 32000',
        ],
      },
      {
        pass: 'Final Result',
        steps: ['Minimum cost = 18000'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Create dp table of size n × n.',
    'Initialize dp[i][i] = 0.',
    'For chain length from 2 to n:',
    '  For i from 0 to n-length:',
    '    j = i + length - 1',
    '    dp[i][j] = min over k:',
    '      dp[i][k] + dp[k+1][j] + cost',
    'Return dp[0][n-1]',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION MCM(arr):',
    '  n = length(arr)',
    '  create dp[n][n]',
    '',
    '  for i = 0 to n-1:',
    '    dp[i][i] = 0',
    '',
    '  for len = 2 to n:',
    '    for i = 0 to n-len:',
    '      j = i + len - 1',
    '      dp[i][j] = INF',
    '',
    '      for k = i to j-1:',
    '        cost = dp[i][k] + dp[k+1][j] + arr[i]*arr[k+1]*arr[j+1]',
    '        dp[i][j] = min(dp[i][j], cost)',
    '',
    '  return dp[0][n-1]',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used in optimizing chained operations, expression evaluation, and compiler optimizations.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Optimal solution guaranteed',
    'Avoids exponential recursion',
    'Powerful partition DP technique',
    'Widely applicable in optimization problems',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'High time complexity',
    'Complex to understand',
    'Requires 2D DP table',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Goal of MCM?',
      options: [
        'Multiply matrices',
        'Minimize cost',
        'Sort matrices',
        'Add matrices',
      ],
      answer: 1,
    },
    {
      question: 'Technique used?',
      options: ['Greedy', 'DP', 'Sorting', 'DFS'],
      answer: 1,
    },
    {
      question: 'Key idea?',
      options: [
        'Divide array',
        'Try all splits',
        'Sort values',
        'Binary search',
      ],
      answer: 1,
    },
    {
      question: 'Time complexity?',
      options: ['O(n²)', 'O(n³)', 'O(n log n)', 'O(n)'],
      answer: 1,
    },
    {
      question: 'dp[i][j] represents?',
      options: ['Sum', 'Min cost from i to j', 'Index', 'Value'],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
int MCM(int arr[], int n) {
    int dp[n][n];

    for(int i=0;i<n;i++)
        dp[i][i]=0;

    for(int len=2; len<n; len++){
        for(int i=0;i<n-len;i++){
            int j=i+len;
            dp[i][j]=INT_MAX;

            for(int k=i;k<j;k++){
                int cost = dp[i][k] + dp[k+1][j]
                           + arr[i]*arr[k+1]*arr[j+1];

                if(cost < dp[i][j])
                    dp[i][j]=cost;
            }
        }
    }
    return dp[0][n-1];
}
`,

    cpp: `
int MCM(vector<int>& arr) {
    int n = arr.size();
    vector<vector<int>> dp(n, vector<int>(n, 0));

    for(int len=2; len<n; len++){
        for(int i=0;i<n-len;i++){
            int j=i+len;
            dp[i][j]=INT_MAX;

            for(int k=i;k<j;k++){
                dp[i][j] = min(
                    dp[i][j],
                    dp[i][k] + dp[k+1][j]
                    + arr[i]*arr[k+1]*arr[j+1]
                );
            }
        }
    }
    return dp[0][n-1];
}
`,

    java: `
int MCM(int[] arr) {
    int n = arr.length;
    int[][] dp = new int[n][n];

    for(int len=2; len<n; len++){
        for(int i=0;i<n-len;i++){
            int j=i+len;
            dp[i][j]=Integer.MAX_VALUE;

            for(int k=i;k<j;k++){
                dp[i][j] = Math.min(
                    dp[i][j],
                    dp[i][k] + dp[k+1][j]
                    + arr[i]*arr[k+1]*arr[j+1]
                );
            }
        }
    }
    return dp[0][n-1];
}
`,

    python: `
def MCM(arr):
    n = len(arr)
    dp = [[0]*n for _ in range(n)]

    for length in range(2, n):
        for i in range(n-length):
            j = i + length
            dp[i][j] = float('inf')

            for k in range(i, j):
                cost = dp[i][k] + dp[k+1][j] + arr[i]*arr[k+1]*arr[j+1]
                dp[i][j] = min(dp[i][j], cost)

    return dp[0][n-1]
`,

    js: `
function MCM(arr) {
  const n = arr.length;
  const dp = Array.from({ length: n }, () =>
    Array(n).fill(0)
  );

  for (let len = 2; len < n; len++) {
    for (let i = 0; i < n - len; i++) {
      let j = i + len;
      dp[i][j] = Infinity;

      for (let k = i; k < j; k++) {
        const cost =
          dp[i][k] +
          dp[k + 1][j] +
          arr[i] * arr[k + 1] * arr[j + 1];

        dp[i][j] = Math.min(dp[i][j], cost);
      }
    }
  }

  return dp[0][n - 1];
}
`,
  },
};

export default matrixChainMultiplication;
