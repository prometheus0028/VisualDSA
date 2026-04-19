/* ===============================
   FILE: src/algorithms/tree/avl-tree.js
================================ */

export default function avlTree() {
  let root = null;
  let idCounter = 0;

  const createNode = (value) => ({
    id: idCounter++,
    value,
    left: null,
    right: null,
    height: 1,
  });

  const getHeight = (node) => (node ? node.height : 0);

  const updateHeight = (node) => {
    node.height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
  };

  const getBalance = (node) =>
    node ? getHeight(node.left) - getHeight(node.right) : 0;

  // ===============================
  // ROTATIONS
  // ===============================
  const rotateRight = (y) => {
    const x = y.left;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    updateHeight(y);
    updateHeight(x);

    return x;
  };

  const rotateLeft = (x) => {
    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    updateHeight(x);
    updateHeight(y);

    return y;
  };

  // ===============================
  // INSERT
  // ===============================
  const insertNode = (node, value, steps) => {
    if (!node) {
      const newNode = createNode(value);
      steps.push({
        tree: structuredClone(root),
        action: `Insert ${value}`,
        highlightLine: 2,
      });
      return newNode;
    }

    steps.push({
      tree: structuredClone(root),
      action: `Compare with ${node.value}`,
      highlightLine: 3,
    });

    if (value < node.value) {
      node.left = insertNode(node.left, value, steps);
    } else {
      node.right = insertNode(node.right, value, steps);
    }

    updateHeight(node);

    const balance = getBalance(node);

    // LL
    if (balance > 1 && value < node.left.value) {
      steps.push({ action: 'Right Rotation', highlightLine: 6 });
      return rotateRight(node);
    }

    // RR
    if (balance < -1 && value > node.right.value) {
      steps.push({ action: 'Left Rotation', highlightLine: 7 });
      return rotateLeft(node);
    }

    // LR
    if (balance > 1 && value > node.left.value) {
      node.left = rotateLeft(node.left);
      steps.push({ action: 'Left-Right Rotation', highlightLine: 8 });
      return rotateRight(node);
    }

    // RL
    if (balance < -1 && value < node.right.value) {
      node.right = rotateRight(node.right);
      steps.push({ action: 'Right-Left Rotation', highlightLine: 9 });
      return rotateLeft(node);
    }

    return node;
  };

  // ===============================
  // DELETE (basic)
  // ===============================
  const deleteNode = (node, value, steps) => {
    if (!node) return null;

    if (value < node.value) node.left = deleteNode(node.left, value, steps);
    else if (value > node.value)
      node.right = deleteNode(node.right, value, steps);
    else {
      if (!node.left || !node.right) {
        node = node.left || node.right;
      } else {
        let temp = node.right;
        while (temp.left) temp = temp.left;

        node.value = temp.value;
        node.right = deleteNode(node.right, temp.value, steps);
      }
    }

    if (!node) return node;

    updateHeight(node);
    const balance = getBalance(node);

    if (balance > 1 && getBalance(node.left) >= 0) return rotateRight(node);
    if (balance > 1 && getBalance(node.left) < 0) {
      node.left = rotateLeft(node.left);
      return rotateRight(node);
    }

    if (balance < -1 && getBalance(node.right) <= 0) return rotateLeft(node);

    if (balance < -1 && getBalance(node.right) > 0) {
      node.right = rotateRight(node.right);
      return rotateLeft(node);
    }

    return node;
  };

  return {
    insert(value) {
      const steps = [];
      root = insertNode(root, value, steps);
      return { tree: root, steps };
    },

    delete(value) {
      const steps = [];
      root = deleteNode(root, value, steps);
      return { tree: root, steps };
    },

    getTree() {
      return root;
    },
  };
}
