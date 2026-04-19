/* =========================================
   FILE: src/algorithms/graph/a-star.js
========================================= */

export function generateAStarSteps(graph, start) {
  if (!graph || !graph.adj || !start) return [];

  const steps = [];
  const dist = {};
  const visited = new Set();

  // simple heuristic (0 → behaves like Dijkstra)
  const h = {};
  Object.keys(graph.adj).forEach((n) => {
    dist[n] = Infinity;
    h[n] = 0;
  });

  dist[start] = 0;

  while (true) {
    let u = null;

    for (let node in dist) {
      if (!visited.has(node)) {
        if (u === null || dist[node] + h[node] < dist[u] + h[u]) {
          u = node;
        }
      }
    }

    if (!u) break;

    visited.add(u);

    steps.push({
      action: 'visit',
      node: { id: u },
      distances: { ...dist },
      highlightLine: 6,
    });

    for (let n of graph.adj[u]) {
      const v = n.node;
      const w = n.weight;

      steps.push({
        action: 'relax edge',
        edge: { from: u, to: v },
        highlightLine: 10,
      });

      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;

        steps.push({
          action: 'update distance',
          node: { id: v },
          distances: { ...dist },
          highlightLine: 11,
        });
      }
    }
  }

  return steps;
}
