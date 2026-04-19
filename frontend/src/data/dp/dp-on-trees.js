const dpOnTrees = {
  id: 'dp-on-trees',
  title: 'Dynamic Programming on Trees',
  difficulty: 'Advanced',

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
Each node is processed exactly once.

We perform DFS traversal and compute results.

Time Complexity: O(n)
Space Complexity: O(n)

Practical Scenario:
Efficient for all tree structures.
      `,
    },
    average: {
      description: `
We traverse all nodes and combine child results.

DP ensures no recomputation.

Time Complexity: O(n)
Space Complexity: O(n)

Practical Scenario:
Typical tree DP problems.
      `,
    },
    worst: {
      description: `
Worst case still processes each node once.

Recursive stack depth may reach n.

Time Complexity: O(n)
Space Complexity: O(n)

Practical Scenario:
Skewed trees (like linked list).
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'DP on Trees applies dynamic programming on tree structures by solving subproblems at each node and combining results from its children.',

  intuition:
    'Solve the problem for each subtree, then combine child results to compute the answer for the current node.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Example: Maximum sum of non-adjacent nodes in a tree',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: [
          'At each node, consider two cases:',
          'Include node → skip children',
          'Exclude node → take children',
        ],
      },
      {
        pass: 'Step 2',
        steps: ['Compute values bottom-up'],
      },
      {
        pass: 'Final Result',
        steps: ['Choose max(include, exclude)'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Perform DFS traversal.',
    'For each node:',
    '  Compute two values:',
    '    Include node value.',
    '    Exclude node value.',
    '  Combine results from children.',
    'Return final result at root.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION dfs(node):',
    '  if node == NULL:',
    '    return (0, 0)',
    '',
    '  left = dfs(node.left)',
    '  right = dfs(node.right)',
    '',
    '  include = node.value + left.exclude + right.exclude',
    '  exclude = max(left.include, left.exclude) +',
    '            max(right.include, right.exclude)',
    '',
    '  return (include, exclude)',
    '',
    'FUNCTION solve(root):',
    '  result = dfs(root)',
    '  return max(result.include, result.exclude)',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used in tree optimization problems such as maximum independent set, tree coloring, subtree calculations, and hierarchical decision problems.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Efficient linear time',
    'Avoids recomputation',
    'Handles hierarchical structures well',
    'Powerful for complex problems',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Hard to understand initially',
    'Requires careful state definition',
    'Recursive stack usage',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Traversal used?',
      options: ['BFS', 'DFS', 'Binary search', 'Sorting'],
      answer: 1,
    },
    {
      question: 'DP is applied on?',
      options: ['Array', 'Graph', 'Tree nodes', 'Stack'],
      answer: 2,
    },
    {
      question: 'Typical states?',
      options: ['Sum', 'Include / Exclude', 'Index', 'Sorting'],
      answer: 1,
    },
    {
      question: 'Time complexity?',
      options: ['O(n²)', 'O(n)', 'O(log n)', 'O(n log n)'],
      answer: 1,
    },
    {
      question: 'Key idea?',
      options: ['Sorting', 'Combine child results', 'Binary search', 'Greedy'],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
struct Pair {
    int include, exclude;
};

struct Pair dfs(struct Node* root) {
    if(!root) return (struct Pair){0,0};

    struct Pair left = dfs(root->left);
    struct Pair right = dfs(root->right);

    struct Pair res;

    res.include = root->data + left.exclude + right.exclude;
    res.exclude = (left.include > left.exclude ? left.include : left.exclude)
                + (right.include > right.exclude ? right.include : right.exclude);

    return res;
}
`,

    cpp: `
pair<int,int> dfs(TreeNode* root) {
    if(!root) return {0,0};

    auto left = dfs(root->left);
    auto right = dfs(root->right);

    int include = root->val + left.second + right.second;
    int exclude = max(left.first, left.second)
                + max(right.first, right.second);

    return {include, exclude};
}
`,

    java: `
int[] dfs(TreeNode root) {
    if(root == null) return new int[]{0,0};

    int[] left = dfs(root.left);
    int[] right = dfs(root.right);

    int include = root.val + left[1] + right[1];
    int exclude = Math.max(left[0], left[1]) +
                  Math.max(right[0], right[1]);

    return new int[]{include, exclude};
}
`,

    python: `
def dfs(root):
    if not root:
        return (0,0)

    left = dfs(root.left)
    right = dfs(root.right)

    include = root.val + left[1] + right[1]
    exclude = max(left) + max(right)

    return (include, exclude)
`,

    js: `
function dfs(node) {
  if (!node) return [0, 0];

  const left = dfs(node.left);
  const right = dfs(node.right);

  const include = node.value + left[1] + right[1];
  const exclude =
    Math.max(left[0], left[1]) +
    Math.max(right[0], right[1]);

  return [include, exclude];
}
`,
  },
};

export default dpOnTrees;
