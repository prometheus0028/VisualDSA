const coinChange = {
  id: 'coin-change',
  title: 'Coin Change',
  difficulty: 'Intermediate',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n * amount)',
  best: 'O(n * amount)',
  average: 'O(n * amount)',
  worst: 'O(n * amount)',
  space: 'O(amount)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Dynamic Programming ensures each amount is computed once.

We iterate through all coins for each amount.

Time Complexity: O(n * amount)
Space Complexity: O(amount)

Practical Scenario:
Efficient even for large amounts with small coin sets.
      `,
    },
    average: {
      description: `
For every value from 1 to amount, we try all coins.

We choose the minimum number of coins required.

Time Complexity: O(n * amount)
Space Complexity: O(amount)

Practical Scenario:
Common in financial systems and optimization problems.
      `,
    },
    worst: {
      description: `
Worst case occurs when many combinations must be checked.

Still remains polynomial due to DP optimization.

Time Complexity: O(n * amount)
Space Complexity: O(amount)

Practical Scenario:
Large target amount with many denominations.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Coin Change finds the minimum number of coins needed to make a given amount using a set of coin denominations. It uses dynamic programming to avoid recomputation and efficiently determine the optimal solution.',

  intuition:
    'To make amount X, try every coin and reduce the problem to amount (X - coin). Choose the minimum among all possibilities.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Coins = [1, 2, 5], Amount = 11',
    walkthrough: [
      {
        pass: 'Initialize',
        steps: ['dp[0] = 0', 'All others = ∞'],
      },
      {
        pass: 'Build DP',
        steps: [
          'dp[1] = 1 (1)',
          'dp[2] = 1 (2)',
          'dp[3] = 2 (1+2)',
          'dp[5] = 1 (5)',
          'dp[11] = 3 (5+5+1)',
        ],
      },
      {
        pass: 'Final Result',
        steps: ['Minimum coins = 3'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Initialize dp array with size amount+1.',
    'Set dp[0] = 0 and others = infinity.',
    'For each amount from 1 to target:',
    '  For each coin:',
    '    if coin <= amount:',
    '      dp[i] = min(dp[i], dp[i - coin] + 1)',
    'Return dp[amount]',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION coinChange(coins, amount):',
    '  dp[0] = 0',
    '  for i = 1 to amount:',
    '    dp[i] = ∞',
    '    for each coin in coins:',
    '      if coin <= i:',
    '        dp[i] = min(dp[i], dp[i - coin] + 1)',
    '  return dp[amount]',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used in optimization problems where minimum cost or minimum steps are required. Common in finance, resource allocation, and combinatorial optimization.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Efficient polynomial solution',
    'Avoids recomputation',
    'Works for large inputs',
    'Clear DP formulation',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Requires extra memory',
    'Not intuitive without DP knowledge',
    'Fails for negative coin values',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Goal of problem?',
      options: ['Max coins', 'Min coins', 'Sort coins', 'Find sum'],
      answer: 1,
    },
    {
      question: 'Technique used?',
      options: ['Greedy', 'DP', 'Backtracking', 'Divide'],
      answer: 1,
    },
    {
      question: 'dp[i] represents?',
      options: ['Max coins', 'Min coins for amount i', 'Coin value', 'Index'],
      answer: 1,
    },
    {
      question: 'Time complexity?',
      options: ['O(n)', 'O(n log n)', 'O(n * amount)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'Base case?',
      options: ['dp[1]=1', 'dp[0]=0', 'dp[n]=0', 'dp[2]=2'],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
int coinChange(int coins[], int n, int amount) {
    int dp[amount + 1];
    dp[0] = 0;

    for(int i = 1; i <= amount; i++) {
        dp[i] = 100000;
        for(int j = 0; j < n; j++) {
            if(coins[j] <= i) {
                dp[i] = dp[i] < dp[i - coins[j]] + 1 ? dp[i] : dp[i - coins[j]] + 1;
            }
        }
    }
    return dp[amount];
}
`,

    cpp: `
int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, INT_MAX);
    dp[0] = 0;

    for(int i = 1; i <= amount; i++) {
        for(int coin : coins) {
            if(coin <= i && dp[i - coin] != INT_MAX) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount];
}
`,

    java: `
int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, Integer.MAX_VALUE);
    dp[0] = 0;

    for(int i = 1; i <= amount; i++) {
        for(int coin : coins) {
            if(coin <= i && dp[i - coin] != Integer.MAX_VALUE) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount];
}
`,

    python: `
def coinChange(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0

    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)

    return dp[amount]
`,

    js: `
function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount];
}
`,
  },
};

export default coinChange;
