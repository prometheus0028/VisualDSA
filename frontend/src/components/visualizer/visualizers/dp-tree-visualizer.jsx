/* =========================================
   FILE: src/visualizers/dp-tree-visualizer.jsx
   (SVG BASED PROPER TREE)
========================================= */

export default function DPTreeVisualizer({ tree, activeNode, values }) {
  if (!tree) return null;

  const nodes = [];
  const edges = [];

  // ===============================
  // BUILD TREE LAYOUT (IN-ORDER X POSITIONING)
  // ===============================
  let xCounter = 0;

  function layout(node, depth = 0) {
    if (!node) return null;

    const left = layout(node.left, depth + 1);

    const x = xCounter++;
    const y = depth;

    const current = { value: node.value, x, y };
    nodes.push(current);

    if (left) {
      edges.push({ from: left, to: current });
    }

    const right = layout(node.right, depth + 1);

    if (right) {
      edges.push({ from: current, to: right });
    }

    return current;
  }

  layout(tree);

  // ===============================
  // SCALE POSITIONS
  // ===============================
  const width = 600;
  const levelHeight = 100;

  const maxX = Math.max(...nodes.map((n) => n.x), 1);

  const scaleX = (x) => ((x + 1) / (maxX + 2)) * width;
  const scaleY = (y) => 60 + y * levelHeight;

  // ===============================
  // RENDER
  // ===============================
  return (
    <div className="flex flex-col items-center mt-10 gap-4">
      {/* LABEL */}
      <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">
        Tree DP Visualization
      </div>

      <svg width={width} height={350}>
        {/* EDGES */}
        {edges.map((edge, i) => (
          <line
            key={i}
            x1={scaleX(edge.from.x)}
            y1={scaleY(edge.from.y)}
            x2={scaleX(edge.to.x)}
            y2={scaleY(edge.to.y)}
            stroke="#888"
            strokeWidth="2"
          />
        ))}

        {/* NODES */}
        {nodes.map((node, i) => {
          const isActive = node.value === activeNode;
          const val = values[node.value];

          return (
            <g key={i}>
              {/* CIRCLE */}
              <circle
                cx={scaleX(node.x)}
                cy={scaleY(node.y)}
                r="22"
                fill={isActive ? '#facc15' : '#3b82f6'}
              />

              {/* VALUE */}
              <text
                x={scaleX(node.x)}
                y={scaleY(node.y) + 5}
                textAnchor="middle"
                fill={isActive ? 'black' : 'white'}
                fontSize="14"
                fontWeight="bold"
              >
                {node.value}
              </text>

              {/* DP VALUES */}
              {val && (
                <text
                  x={scaleX(node.x)}
                  y={scaleY(node.y) + 38}
                  textAnchor="middle"
                  fill="#ccc"
                  fontSize="11"
                >
                  I:{val.include} E:{val.exclude}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
