import { useState } from 'react';

export default function GraphMSTVisualizer({
  graph,
  activeEdge = null,
  mstEdges = [],
  onNodeDrag,
}) {
  const [dragging, setDragging] = useState(null);

  if (!graph?.nodes?.length) {
    return <div className="text-center mt-6">Graph is empty</div>;
  }

  const { nodes, edges } = graph;
  const RADIUS = 22;

  const handleMouseMove = (e) => {
    if (!dragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    onNodeDrag?.(dragging, x, y);
  };

  const getEdgeCoords = (x1, y1, x2, y2, index) => {
    const dx = x2 - x1;
    const dy = y2 - y1;

    const length = Math.sqrt(dx * dx + dy * dy);
    if (length === 0) return { x1, y1, x2, y2 };

    const offsetX = (dx / length) * RADIUS;
    const offsetY = (dy / length) * RADIUS;

    let sx = x1 + offsetX;
    let sy = y1 + offsetY;
    let ex = x2 - offsetX;
    let ey = y2 - offsetY;

    const spacing = 10;
    const shiftX = (-dy / length) * spacing * index;
    const shiftY = (dx / length) * spacing * index;

    return {
      x1: sx + shiftX,
      y1: sy + shiftY,
      x2: ex + shiftX,
      y2: ey + shiftY,
    };
  };

  return (
    <div className="flex justify-center mt-10 text-gray-700 dark:text-gray-200">
      <svg
        width="600"
        height="400"
        onMouseMove={handleMouseMove}
        onMouseUp={() => setDragging(null)}
      >
        {edges.map((edge, i) => {
          const from = nodes.find((n) => n.id === edge.from);
          const to = nodes.find((n) => n.id === edge.to);

          if (!from || !to) return null;

          const isMST = mstEdges.some(
            (e) =>
              (e.from === edge.from && e.to === edge.to) ||
              (e.from === edge.to && e.to === edge.from),
          );

          const isActive =
            activeEdge &&
            ((activeEdge.from === edge.from && activeEdge.to === edge.to) ||
              (activeEdge.from === edge.to && activeEdge.to === edge.from));

          const { x1, y1, x2, y2 } = getEdgeCoords(
            from.x,
            from.y,
            to.x,
            to.y,
            i % 2 === 0 ? 1 : -1,
          );

          const midX = (x1 + x2) / 2 + (y2 - y1) * 0.1;
          const midY = (y1 + y2) / 2 - (x2 - x1) * 0.1;

          return (
            <g
              key={edge.id}
              className={
                isMST ? 'text-green-500' : isActive ? 'text-yellow-500' : ''
              }
            >
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth={isMST ? 4 : 2}
              />

              <text
                x={midX}
                y={midY}
                textAnchor="middle"
                fontSize="13"
                className="font-semibold"
                fill="currentColor"
              >
                {edge.weight}
              </text>
            </g>
          );
        })}

        {nodes.map((node) => (
          <g
            key={node.id}
            onMouseDown={() => setDragging(node.id)}
            style={{ cursor: 'grab' }}
          >
            <circle cx={node.x} cy={node.y} r={RADIUS} fill="#3b82f6" />
            <text x={node.x} y={node.y + 5} textAnchor="middle" fill="white">
              {node.id}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
