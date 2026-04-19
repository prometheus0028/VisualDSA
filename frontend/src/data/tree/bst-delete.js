const bstDelete = {
  id: 'bst-deletion',
  title: 'BST Deletion',
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
In a balanced BST, deletion takes logarithmic time.

We traverse from root to node and adjust pointers.

Time Complexity: O(log n)
Space Complexity: O(n)
      `,
    },
    average: {
      description: `
For average cases, BST behaves close to balanced.

Deletion requires finding node and restructuring.

Time Complexity: O(log n)
Space Complexity: O(n)
      `,
    },
    worst: {
      description: `
In skewed BST, deletion requires full traversal.

Time Complexity: O(n)
Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'BST deletion removes a node while maintaining the binary search property. Depending on the node, we may simply remove it or replace it with a suitable successor.',

  intuition:
    'Three cases exist: delete a leaf, delete a node with one child, or replace a node with two children using its inorder successor.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Delete node 10 from BST',
    walkthrough: [
      {
        pass: 'Case 1 (Leaf)',
        steps: ['If node has no children → remove directly'],
      },
      {
        pass: 'Case 2 (One Child)',
        steps: ['Replace node with its child'],
      },
      {
        pass: 'Case 3 (Two Children)',
        steps: [
          'Find inorder successor (smallest in right subtree)',
          'Replace node with successor',
          'Delete successor node',
        ],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Search for node to delete',
    'If node is leaf → remove it',
    'If node has one child → replace with child',
    'If node has two children:',
    '  Find inorder successor',
    '  Replace value',
    '  Delete successor node',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'DELETE(root, x):',
    '  if root == NULL:',
    '    return NULL',
    '  if x < root.data:',
    '    root.left = DELETE(root.left, x)',
    '  else if x > root.data:',
    '    root.right = DELETE(root.right, x)',
    '  else:',
    '    if root.left == NULL:',
    '      return root.right',
    '    if root.right == NULL:',
    '      return root.left',
    '    successor = min(root.right)',
    '    root.data = successor.data',
    '    root.right = DELETE(root.right, successor.data)',
    '  return root',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use BST deletion when dynamically managing sorted datasets where elements must be removed efficiently without rebuilding the structure.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Maintains sorted structure after deletion',
    'Efficient in balanced trees',
    'Handles multiple cases flexibly',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Complex compared to insertion',
    'Performance drops in skewed trees',
    'Requires careful handling of cases',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Deletion has how many cases?',
      options: ['1', '2', '3', '4'],
      answer: 2,
    },
    {
      question: 'Successor is?',
      options: ['Left max', 'Right min', 'Root', 'Leaf'],
      answer: 1,
    },
    {
      question: 'Leaf deletion is?',
      options: ['Complex', 'Simple remove', 'Replace', 'Skip'],
      answer: 1,
    },
    {
      question: 'Worst case time?',
      options: ['O(log n)', 'O(n)', 'O(1)', 'O(n²)'],
      answer: 1,
    },
    {
      question: 'BST property maintained?',
      options: ['Yes', 'No'],
      answer: 0,
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

struct Node* findMin(struct Node* root) {
    while (root->left != NULL)
        root = root->left;
    return root;
}

struct Node* deleteNode(struct Node* root, int x) {
    if (root == NULL) return NULL;

    if (x < root->data)
        root->left = deleteNode(root->left, x);
    else if (x > root->data)
        root->right = deleteNode(root->right, x);
    else {
        if (root->left == NULL) return root->right;
        if (root->right == NULL) return root->left;

        struct Node* temp = findMin(root->right);
        root->data = temp->data;
        root->right = deleteNode(root->right, temp->data);
    }

    return root;
}
`,

    cpp: `
Node* findMin(Node* root) {
    while (root->left)
        root = root->left;
    return root;
}

Node* deleteNode(Node* root, int x) {
    if (!root) return NULL;

    if (x < root->data)
        root->left = deleteNode(root->left, x);
    else if (x > root->data)
        root->right = deleteNode(root->right, x);
    else {
        if (!root->left) return root->right;
        if (!root->right) return root->left;

        Node* temp = findMin(root->right);
        root->data = temp->data;
        root->right = deleteNode(root->right, temp->data);
    }

    return root;
}
`,

    java: `
Node findMin(Node root) {
    while (root.left != null)
        root = root.left;
    return root;
}

Node delete(Node root, int x) {
    if (root == null) return null;

    if (x < root.data)
        root.left = delete(root.left, x);
    else if (x > root.data)
        root.right = delete(root.right, x);
    else {
        if (root.left == null) return root.right;
        if (root.right == null) return root.left;

        Node temp = findMin(root.right);
        root.data = temp.data;
        root.right = delete(root.right, temp.data);
    }

    return root;
}
`,

    python: `
def find_min(root):
    while root.left:
        root = root.left
    return root

def delete(root, x):
    if not root:
        return None

    if x < root.data:
        root.left = delete(root.left, x)
    elif x > root.data:
        root.right = delete(root.right, x)
    else:
        if not root.left:
            return root.right
        if not root.right:
            return root.left

        temp = find_min(root.right)
        root.data = temp.data
        root.right = delete(root.right, temp.data)

    return root
`,

    js: `
function findMin(root) {
  while (root.left) root = root.left;
  return root;
}

function deleteNode(root, x) {
  if (!root) return null;

  if (x < root.data) {
    root.left = deleteNode(root.left, x);
  } else if (x > root.data) {
    root.right = deleteNode(root.right, x);
  } else {
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    const temp = findMin(root.right);
    root.data = temp.data;
    root.right = deleteNode(root.right, temp.data);
  }

  return root;
}
`,
  },
};

export default bstDelete;
