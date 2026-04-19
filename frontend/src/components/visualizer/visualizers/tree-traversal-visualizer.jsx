/* ===============================
   FILE: src/visualizers/tree-traversal-visualizer.jsx
================================ */

export default function TreeVisualizer({
  tree,
  visited = [],
  activeNode = null,
}) {
  if (!tree) return <div className="text-center mt-6">Tree is empty</div>;

  const nodes = [];
  const edges = [];
  let idCounter = 0;

  const traverse = (node, x, y, offset) => {
    if (!node) return;

    if (!node.id) node.id = idCounter++;

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
          const isVisited = visited.includes(n.node.id);
          const isActive = activeNode === n.node.id;

          return (
            <g key={n.node.id}>
              <circle
                cx={n.x}
                cy={n.y}
                r="22"
                fill={
                  isVisited
                    ? '#22c55e' // green
                    : isActive
                      ? '#f59e0b' // yellow/orange
                      : '#3b82f6' // blue
                }
              />
              <text
                x={n.x}
                y={n.y + 5}
                textAnchor="middle"
                fill="white"
                fontSize="14"
              >
                {n.node.value}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
