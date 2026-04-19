/* =========================================
   FILE: src/algorithms/graph/bellman-ford.js
========================================= */

export function generateBellmanFordSteps(graph, start) {
  if (!graph || !graph.edges || !start) return [];

  const steps = [];
  const dist = {};

  graph.nodes.forEach((n) => (dist[n.id] = Infinity));
  dist[start] = 0;

  for (let i = 0; i < graph.nodes.length - 1; i++) {
    for (let edge of graph.edges) {
      const { from, to, weight } = edge;

      steps.push({
        action: 'relax edge',
        edge,
        highlightLine: 4,
      });

      if (dist[from] + weight < dist[to]) {
        dist[to] = dist[from] + weight;

        steps.push({
          action: 'update distance',
          node: { id: to },
          distances: { ...dist },
          highlightLine: 5,
        });
      }
    }
  }

  return steps;
}
