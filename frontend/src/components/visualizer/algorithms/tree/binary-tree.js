// algorithms/tree/binary-tree.js

let idCounter = 0;

export function buildBinaryTree(arr) {
  if (!arr.length) return null;

  const nodes = arr.map((val) =>
    val === null
      ? null
      : {
          value: val,
          left: null,
          right: null,
          id: idCounter++, // ✅ UNIQUE ID
        },
  );

  let j = 1;

  for (let i = 0; i < nodes.length && j < nodes.length; i++) {
    if (nodes[i] !== null) {
      nodes[i].left = nodes[j++] || null;
      if (j < nodes.length) {
        nodes[i].right = nodes[j++] || null;
      }
    }
  }

  return nodes[0];
}
