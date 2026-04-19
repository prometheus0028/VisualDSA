const editDistance = {
  id: 'edit-distance',
  title: 'Edit Distance',
  difficulty: 'Advanced',

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
We fill a 2D DP table of size n × m.

Each cell is computed once using constant operations.

Time Complexity: O(nm)
Space Complexity: O(nm)

Practical Scenario:
Efficient for comparing strings of moderate length.
      `,
    },
    average: {
      description: `
For each pair of characters, we compute minimum operations.

Operations include insert, delete, and replace.

Time Complexity: O(nm)
Space Complexity: O(nm)

Practical Scenario:
Used in spell checking and text comparison systems.
      `,
    },
    worst: {
      description: `
Worst case occurs when strings have no matching characters.

Every cell requires full computation.

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
    'Edit Distance calculates the minimum number of operations required to convert one string into another. The allowed operations are insert, delete, and replace.',

  intuition:
    'Compare characters one by one. If they match, move diagonally. If not, choose the minimum among insert, delete, or replace.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Convert "horse" → "ros"',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['horse → rorse (replace h with r)'],
      },
      {
        pass: 'Step 2',
        steps: ['rorse → rose (remove r)'],
      },
      {
        pass: 'Step 3',
        steps: ['rose → ros (remove e)'],
      },
      {
        pass: 'Final Result',
        steps: ['Minimum operations = 3'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Create dp table of size (n+1) × (m+1).',
    'Initialize first row and column.',
    'For each character pair:',
    '  If same → copy diagonal value.',
    '  Else → 1 + min(insert, delete, replace).',
    'Return dp[n][m].',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION editDistance(s1, s2):',
    '  create dp[n+1][m+1]',
    '  for i = 0 to n:',
    '    dp[i][0] = i',
    '  for j = 0 to m:',
    '    dp[0][j] = j',
    '',
    '  for i = 1 to n:',
    '    for j = 1 to m:',
    '      if s1[i-1] == s2[j-1]:',
    '        dp[i][j] = dp[i-1][j-1]',
    '      else:',
    '        dp[i][j] = 1 + min(',
    '          dp[i-1][j],    // delete',
    '          dp[i][j-1],    // insert',
    '          dp[i-1][j-1]   // replace',
    '        )',
    '',
    '  return dp[n][m]',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used in spell checkers, DNA sequence matching, text comparison, plagiarism detection, and NLP applications.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Accurate string similarity measurement',
    'Handles multiple operations',
    'Widely used in real-world systems',
    'Clear DP structure',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'High space complexity',
    'Slower for very large strings',
    'Requires full DP table computation',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Allowed operations?',
      options: ['Insert, Delete, Replace', 'Swap only', 'Sort', 'Search'],
      answer: 0,
    },
    {
      question: 'Time complexity?',
      options: ['O(n)', 'O(n log n)', 'O(nm)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'DP table dimension?',
      options: ['1D', '2D', '3D', 'None'],
      answer: 1,
    },
    {
      question: 'When characters match?',
      options: ['Add 1', 'Take max', 'Copy diagonal', 'Ignore'],
      answer: 2,
    },
    {
      question: 'Use case?',
      options: ['Sorting', 'Spell checking', 'Searching', 'Graphs'],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
int min(int a, int b, int c) {
    int m = a < b ? a : b;
    return m < c ? m : c;
}

int editDistance(char* s1, char* s2, int n, int m) {
    int dp[n+1][m+1];

    for(int i=0;i<=n;i++) dp[i][0]=i;
    for(int j=0;j<=m;j++) dp[0][j]=j;

    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            if(s1[i-1]==s2[j-1])
                dp[i][j]=dp[i-1][j-1];
            else
                dp[i][j]=1+min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
        }
    }
    return dp[n][m];
}
`,

    cpp: `
int editDistance(string s1, string s2) {
    int n = s1.size(), m = s2.size();
    vector<vector<int>> dp(n+1, vector<int>(m+1));

    for(int i=0;i<=n;i++) dp[i][0]=i;
    for(int j=0;j<=m;j++) dp[0][j]=j;

    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            if(s1[i-1]==s2[j-1])
                dp[i][j]=dp[i-1][j-1];
            else
                dp[i][j]=1+min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]});
        }
    }
    return dp[n][m];
}
`,

    java: `
int editDistance(String s1, String s2) {
    int n = s1.length(), m = s2.length();
    int[][] dp = new int[n+1][m+1];

    for(int i=0;i<=n;i++) dp[i][0]=i;
    for(int j=0;j<=m;j++) dp[0][j]=j;

    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            if(s1.charAt(i-1)==s2.charAt(j-1))
                dp[i][j]=dp[i-1][j-1];
            else
                dp[i][j]=1+Math.min(
                    dp[i-1][j],
                    Math.min(dp[i][j-1], dp[i-1][j-1])
                );
        }
    }
    return dp[n][m];
}
`,

    python: `
def edit_distance(s1, s2):
    n, m = len(s1), len(s2)
    dp = [[0]*(m+1) for _ in range(n+1)]

    for i in range(n+1):
        dp[i][0] = i
    for j in range(m+1):
        dp[0][j] = j

    for i in range(1,n+1):
        for j in range(1,m+1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(
                    dp[i-1][j],
                    dp[i][j-1],
                    dp[i-1][j-1]
                )
    return dp[n][m]
`,

    js: `
function editDistance(s1, s2) {
  const n = s1.length, m = s2.length;
  const dp = Array.from({ length: n + 1 }, () =>
    Array(m + 1).fill(0)
  );

  for (let i = 0; i <= n; i++) dp[i][0] = i;
  for (let j = 0; j <= m; j++) dp[0][j] = j;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s1[i - 1] === s2[j - 1])
        dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j],
          dp[i][j - 1],
          dp[i - 1][j - 1]
        );
    }
  }

  return dp[n][m];
}
`,
  },
};

export default editDistance;
