/* ===============================
   FILE: src/visualizers/avl-visualizer.jsx
================================ */

export default function AVLVisualizer({ tree }) {
  if (!tree) return <div className="text-center mt-6">Tree is empty</div>;

  const nodes = [];
  const edges = [];

  const traverse = (node, x, y, offset) => {
    if (!node) return;

    nodes.push({ node, x, y });

    if (node.left) {
      edges.push({ from: { x, y }, to: { x: x - offset, y: y + 80 } });
      traverse(node.left, x - offset, y + 80, offset / 1.8);
    }

    if (node.right) {
      edges.push({ from: { x, y }, to: { x: x + offset, y: y + 80 } });
      traverse(node.right, x + offset, y + 80, offset / 1.8);
    }
  };

  traverse(tree, 300, 40, 120);

  return (
    <div className="flex justify-center mt-10">
      <svg width="600" height="400">
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

        {nodes.map((n) => (
          <g key={n.node.id}>
            <circle cx={n.x} cy={n.y} r="22" fill="#22c55e" />
            <text x={n.x} y={n.y + 5} textAnchor="middle" fill="white">
              {n.node.value}
            </text>

            {/* HEIGHT */}
            <text
              x={n.x}
              y={n.y + 30}
              textAnchor="middle"
              fontSize="10"
              fill="#aaa"
            >
              h={n.node.height}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
