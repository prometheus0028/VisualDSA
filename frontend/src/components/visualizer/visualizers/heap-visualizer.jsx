/* ===============================
   FILE: src/visualizers/heap-visualizer.jsx
================================ */

export default function HeapVisualizer({ heap, active = [], swapPair = null }) {
  if (!heap.length) {
    return <div className="text-center mt-6">Heap is empty</div>;
  }

  // ===============================
  // BUILD TREE STRUCTURE FROM ARRAY
  // ===============================
  const buildTree = (index = 0) => {
    if (index >= heap.length) return null;

    return {
      id: index,
      value: heap[index],
      left: buildTree(2 * index + 1),
      right: buildTree(2 * index + 2),
    };
  };

  const tree = buildTree();

  // ===============================
  // GENERATE POSITIONS (SAME AS AVL)
  // ===============================
  const nodes = [];
  const edges = [];

  const traverse = (node, x, y, offset) => {
    if (!node) return;

    nodes.push({ node, x, y });

    if (node.left) {
      edges.push({
        from: { x, y },
        to: { x: x - offset, y: y + 80 },
      });
      traverse(node.left, x - offset, y + 80, offset / 1.8);
    }

    if (node.right) {
      edges.push({
        from: { x, y },
        to: { x: x + offset, y: y + 80 },
      });
      traverse(node.right, x + offset, y + 80, offset / 1.8);
    }
  };

  traverse(tree, 300, 40, 120);

  // ===============================
  // RENDER
  // ===============================
  return (
    <div className="flex justify-center mt-10">
      <svg width="600" height="400">
        {/* EDGES */}
        {edges.map((e, i) => (
          <line
            key={i}
            x1={e.from.x}
            y1={e.from.y}
            x2={e.to.x}
            y2={e.to.y}
            stroke="#aaa"
            strokeWidth="2"
          />
        ))}

        {/* NODES */}
        {nodes.map((n) => {
          const idx = n.node.id;
          const isActive = active.includes(idx);
          const isSwap =
            swapPair && (swapPair[0] === idx || swapPair[1] === idx);

          return (
            <g key={idx}>
              {/* NODE */}
              <circle
                cx={n.x}
                cy={n.y}
                r="22"
                fill={
                  isSwap
                    ? '#ef4444' // 🔴 swap
                    : isActive
                      ? '#3b82f6' // 🔵 active
                      : '#22c55e' // 🟢 normal
                }
              />

              {/* VALUE */}
              <text
                x={n.x}
                y={n.y + 5}
                textAnchor="middle"
                fill="white"
                fontSize="14"
              >
                {n.node.value}
              </text>

              {/* SWAP INDICATOR */}
              {isSwap && (
                <text
                  x={n.x}
                  y={n.y - 28}
                  textAnchor="middle"
                  fill="#ef4444"
                  fontSize="16"
                >
                  ↕
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
