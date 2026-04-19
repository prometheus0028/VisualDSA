const bst = {
  id: 'binary-search-tree',
  title: 'Binary Search Tree',
  difficulty: 'Intermediate',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(log n)',
  best: 'O(log n)',
  average: 'O(log n)',
  worst: 'O(n)',
  space: 'O(n)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
In a balanced BST, operations like search, insert, and delete take logarithmic time.

Tree height = log n

Time Complexity: O(log n)
Space Complexity: O(n)
      `,
    },
    average: {
      description: `
For randomly distributed data, BST remains approximately balanced.

Time Complexity: O(log n)
Space Complexity: O(n)
      `,
    },
    worst: {
      description: `
In worst case (skewed tree), BST becomes like a linked list.

Example: inserting sorted data.

Time Complexity: O(n)
Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'A Binary Search Tree (BST) is a binary tree where left subtree contains values smaller than the root and right subtree contains values greater than the root. This property enables efficient searching and ordered traversal.',

  intuition:
    'Think of BST as a sorted structure — smaller values go left, larger values go right. This allows faster searching compared to linear structures.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Insert values: 10, 5, 15, 2, 7',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Insert 10 as root'],
      },
      {
        pass: 'Step 2',
        steps: ['Insert 5 → left of 10'],
      },
      {
        pass: 'Step 3',
        steps: ['Insert 15 → right of 10'],
      },
      {
        pass: 'Step 4',
        steps: ['Insert 2 → left of 5', 'Insert 7 → right of 5'],
      },
      {
        pass: 'Final Tree',
        steps: ['Maintains BST property'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Start at root',
    'Compare value with current node',
    'Go left if smaller',
    'Go right if larger',
    'Insert or search accordingly',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'BST_INSERT(root, x):',
    '  if root == NULL:',
    '    return new node',
    '  if x < root.data:',
    '    root.left = BST_INSERT(root.left, x)',
    '  else:',
    '    root.right = BST_INSERT(root.right, x)',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'BST is used when fast searching, insertion, and deletion are required. It is useful when data needs to be maintained in sorted order dynamically without re-sorting.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Efficient searching (O(log n))',
    'Maintains sorted order',
    'Supports dynamic insertion and deletion',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Can become unbalanced',
    'Worst case O(n)',
    'Requires extra memory for pointers',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'BST property?',
      options: ['Left > Root', 'Left < Root < Right', 'Random', 'None'],
      answer: 1,
    },
    {
      question: 'Best case complexity?',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      answer: 1,
    },
    {
      question: 'Worst case?',
      options: ['Balanced tree', 'Skewed tree', 'Heap', 'Graph'],
      answer: 1,
    },
    {
      question: 'Inorder traversal gives?',
      options: ['Random', 'Sorted', 'Reverse', 'None'],
      answer: 1,
    },
    {
      question: 'BST is?',
      options: ['Linear', 'Hierarchical', 'Graph', 'Array'],
      answer: 1,
    },
  ],
  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

struct Node* insert(struct Node* root, int x) {
    if (!root) {
        struct Node* node = malloc(sizeof(struct Node));
        node->data = x;
        node->left = node->right = NULL;
        return node;
    }

    if (x < root->data)
        root->left = insert(root->left, x);
    else
        root->right = insert(root->right, x);

    return root;
}
`,

    cpp: `
Node* insert(Node* root, int x) {
    if (!root) return new Node(x);

    if (x < root->data)
        root->left = insert(root->left, x);
    else
        root->right = insert(root->right, x);

    return root;
}
`,

    java: `
Node insert(Node root, int x) {
    if (root == null) return new Node(x);

    if (x < root.data)
        root.left = insert(root.left, x);
    else
        root.right = insert(root.right, x);

    return root;
}
`,

    python: `
def insert(root, x):
    if not root:
        return Node(x)

    if x < root.data:
        root.left = insert(root.left, x)
    else:
        root.right = insert(root.right, x)

    return root
`,

    js: `
function insert(root, x) {
  if (!root) return { data: x, left: null, right: null };

  if (x < root.data) {
    root.left = insert(root.left, x);
  } else {
    root.right = insert(root.right, x);
  }

  return root;
}
`,
  },
};

export default bst;
