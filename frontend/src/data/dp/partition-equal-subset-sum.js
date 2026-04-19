const partitionEqualSubsetSum = {
  id: 'partition-equal-subset-sum',
  title: 'Partition Equal Subset Sum',
  difficulty: 'Advanced',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n * sum)',
  best: 'O(n * sum)',
  average: 'O(n * sum)',
  worst: 'O(n * sum)',
  space: 'O(sum)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
We calculate total sum and check if it is even.

Then we use DP to check if subset with sum/2 exists.

Time Complexity: O(n * sum)
Space Complexity: O(sum)

Practical Scenario:
Efficient for moderate input sizes.
      `,
    },
    average: {
      description: `
We build a boolean DP array where dp[i] indicates if sum i is achievable.

We iterate through each number and update possible sums.

Time Complexity: O(n * sum)
Space Complexity: O(sum)

Practical Scenario:
Subset partitioning problems in scheduling and resource division.
      `,
    },
    worst: {
      description: `
Worst case occurs when all combinations must be checked.

DP still ensures polynomial time.

Time Complexity: O(n * sum)
Space Complexity: O(sum)

Practical Scenario:
Large arrays with large sum values.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'This problem determines whether an array can be divided into two subsets with equal sum. It reduces to finding a subset with sum equal to totalSum/2.',

  intuition:
    'If total sum is odd → impossible. Otherwise, check if a subset exists with sum = total/2 using DP.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'nums = [1, 5, 11, 5]',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Total sum = 22', 'Target = 11'],
      },
      {
        pass: 'Step 2',
        steps: ['Check if subset with sum 11 exists', 'Possible subset: [11]'],
      },
      {
        pass: 'Final Result',
        steps: ['Partition possible → TRUE'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Calculate total sum.',
    'If sum is odd → return false.',
    'Set target = sum / 2.',
    'Initialize dp array of size target+1.',
    'dp[0] = true.',
    'For each number:',
    '  Update dp from target → num.',
    'Return dp[target].',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION canPartition(nums):',
    '  sum = total(nums)',
    '  if sum % 2 != 0:',
    '    return false',
    '',
    '  target = sum / 2',
    '  dp[0] = true',
    '',
    '  for num in nums:',
    '    for i = target down to num:',
    '      dp[i] = dp[i] OR dp[i - num]',
    '',
    '  return dp[target]',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used in subset partitioning, load balancing, equal resource distribution, and subset sum problems.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Efficient DP solution',
    'Avoids exponential backtracking',
    'Works well for moderate inputs',
    'Clear boolean DP structure',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Dependent on sum value',
    'Not efficient for very large sums',
    'Requires careful reverse iteration',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Condition to proceed?',
      options: ['Sum even', 'Sum odd', 'Array sorted', 'Array reversed'],
      answer: 0,
    },
    {
      question: 'Target value?',
      options: ['sum', 'sum/2', 'n', 'max'],
      answer: 1,
    },
    {
      question: 'dp[i] represents?',
      options: ['Max value', 'Subset possible for sum i', 'Index', 'Count'],
      answer: 1,
    },
    {
      question: 'Technique used?',
      options: ['Greedy', 'DP', 'Divide', 'Sorting'],
      answer: 1,
    },
    {
      question: 'Time complexity?',
      options: ['O(n)', 'O(n²)', 'O(n * sum)', 'O(log n)'],
      answer: 2,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
bool canPartition(int nums[], int n) {
    int sum = 0;
    for(int i=0;i<n;i++) sum += nums[i];

    if(sum % 2 != 0) return false;

    int target = sum / 2;
    bool dp[target + 1];
    memset(dp, false, sizeof(dp));
    dp[0] = true;

    for(int i=0;i<n;i++){
        for(int j=target;j>=nums[i];j--){
            dp[j] = dp[j] || dp[j - nums[i]];
        }
    }
    return dp[target];
}
`,

    cpp: `
bool canPartition(vector<int>& nums) {
    int sum = accumulate(nums.begin(), nums.end(), 0);
    if(sum % 2 != 0) return false;

    int target = sum / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;

    for(int num : nums){
        for(int i = target; i >= num; i--){
            dp[i] = dp[i] || dp[i - num];
        }
    }
    return dp[target];
}
`,

    java: `
boolean canPartition(int[] nums) {
    int sum = 0;
    for(int num : nums) sum += num;

    if(sum % 2 != 0) return false;

    int target = sum / 2;
    boolean[] dp = new boolean[target + 1];
    dp[0] = true;

    for(int num : nums){
        for(int i = target; i >= num; i--){
            dp[i] = dp[i] || dp[i - num];
        }
    }
    return dp[target];
}
`,

    python: `
def canPartition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False

    target = total // 2
    dp = [False]*(target+1)
    dp[0] = True

    for num in nums:
        for i in range(target, num-1, -1):
            dp[i] = dp[i] or dp[i-num]

    return dp[target]
`,

    js: `
function canPartition(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;

  const target = sum / 2;
  const dp = Array(target + 1).fill(false);
  dp[0] = true;

  for (let num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }

  return dp[target];
}
`,
  },
};

export default partitionEqualSubsetSum;
