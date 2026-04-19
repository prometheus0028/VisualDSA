const longestCommonSubsequence = {
  id: 'longest-common-subsequence',
  title: 'Longest Common Subsequence',
  difficulty: 'Intermediate',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(nm)',
  best: 'O(nm)',
  average: 'O(nm)',
  worst: 'O(nm)',
  space: 'O(nm)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
We fill a DP table of size n × m.

Each cell is computed once.

Time Complexity: O(nm)
Space Complexity: O(nm)

Practical Scenario:
Efficient for moderate string sizes.
      `,
    },
    average: {
      description: `
Each character pair is compared once.

DP avoids exponential recursion.

Time Complexity: O(nm)
Space Complexity: O(nm)

Practical Scenario:
String comparison problems.
      `,
    },
    worst: {
      description: `
Worst case still processes entire DP table.

Time Complexity: O(nm)
Space Complexity: O(nm)

Practical Scenario:
Completely different strings.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Longest Common Subsequence finds the longest sequence that appears in the same relative order in both strings (not necessarily contiguous).',

  intuition:
    'If characters match → extend subsequence. If not → take max of ignoring one character.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'text1 = "abcde", text2 = "ace"',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Compare characters one by one'],
      },
      {
        pass: 'Step 2',
        steps: ['Matching characters → a, c, e'],
      },
      {
        pass: 'Final Result',
        steps: ['LCS = "ace"', 'Length = 3'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Create dp table of size (n+1) × (m+1).',
    'Initialize first row and column to 0.',
    'For each i and j:',
    '  If characters match:',
    '    dp[i][j] = 1 + dp[i-1][j-1]',
    '  Else:',
    '    dp[i][j] = max(dp[i-1][j], dp[i][j-1])',
    'Return dp[n][m]',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION LCS(text1, text2):',
    '  create dp[n+1][m+1]',
    '',
    '  for i = 1 to n:',
    '    for j = 1 to m:',
    '      if text1[i-1] == text2[j-1]:',
    '        dp[i][j] = 1 + dp[i-1][j-1]',
    '      else:',
    '        dp[i][j] = max(',
    '          dp[i-1][j],',
    '          dp[i][j-1]',
    '        )',
    '',
    '  return dp[n][m]',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used in diff tools, version control systems, DNA sequence matching, and text comparison.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Efficient DP solution',
    'Widely applicable',
    'Handles large strings',
    'Clear recurrence relation',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'High space usage',
    'Not contiguous substring',
    'Requires 2D DP table',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'What is subsequence?',
      options: [
        'Continuous substring',
        'Ordered but not necessarily contiguous',
        'Sorted string',
        'Random',
      ],
      answer: 1,
    },
    {
      question: 'If characters match?',
      options: ['Ignore', 'Add 1 + diagonal', 'Take max', 'Reset'],
      answer: 1,
    },
    {
      question: 'If not match?',
      options: ['Add', 'Multiply', 'Take max of top and left', 'Reset'],
      answer: 2,
    },
    {
      question: 'Time complexity?',
      options: ['O(n)', 'O(nm)', 'O(n²)', 'O(log n)'],
      answer: 1,
    },
    {
      question: 'LCS of "abc" and "ac"?',
      options: ['a', 'ac', 'bc', 'abc'],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
int lcs(char* X, char* Y, int m, int n) {
    int dp[m+1][n+1];

    for(int i=0;i<=m;i++){
        for(int j=0;j<=n;j++){
            if(i==0 || j==0)
                dp[i][j]=0;
            else if(X[i-1] == Y[j-1])
                dp[i][j]=1 + dp[i-1][j-1];
            else
                dp[i][j]= dp[i-1][j] > dp[i][j-1] ?
                          dp[i-1][j] : dp[i][j-1];
        }
    }
    return dp[m][n];
}
`,

    cpp: `
int lcs(string X, string Y) {
    int m = X.size(), n = Y.size();
    vector<vector<int>> dp(m+1, vector<int>(n+1, 0));

    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(X[i-1] == Y[j-1])
                dp[i][j] = 1 + dp[i-1][j-1];
            else
                dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[m][n];
}
`,

    java: `
int lcs(String X, String Y) {
    int m = X.length(), n = Y.length();
    int[][] dp = new int[m+1][n+1];

    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(X.charAt(i-1) == Y.charAt(j-1))
                dp[i][j] = 1 + dp[i-1][j-1];
            else
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[m][n];
}
`,

    python: `
def lcs(X, Y):
    m, n = len(X), len(Y)
    dp = [[0]*(n+1) for _ in range(m+1)]

    for i in range(1, m+1):
        for j in range(1, n+1):
            if X[i-1] == Y[j-1]:
                dp[i][j] = 1 + dp[i-1][j-1]
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    return dp[m][n]
`,

    js: `
function lcs(X, Y) {
  const m = X.length;
  const n = Y.length;

  const dp = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (X[i - 1] === Y[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}
`,
  },
};

export default longestCommonSubsequence;
