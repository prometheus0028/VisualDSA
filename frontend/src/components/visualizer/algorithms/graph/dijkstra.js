/* =========================================
   FILE: src/algorithms/graph/dijkstra.js
========================================= */

export function generateDijkstraSteps(graph, start, end) {
  const steps = [];
  const dist = {};
  const prev = {};
  const visited = new Set();

  Object.keys(graph.adj).forEach((n) => {
    dist[n] = Infinity;
    prev[n] = null;
  });

  dist[start] = 0;

  while (true) {
    let u = null;

    for (let node in dist) {
      if (!visited.has(node) && (u === null || dist[node] < dist[u])) {
        u = node;
      }
    }

    if (!u) break;

    visited.add(u);

    steps.push({
      action: 'visit',
      node: { id: u },
      highlightLine: 5,
    });

    if (u === end) break;

    for (let n of graph.adj[u]) {
      const v = n.node;
      const w = n.weight;

      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        prev[v] = u;

        steps.push({
          action: 'update distance',
          edge: { from: u, to: v },
          highlightLine: 7,
        });
      }
    }
  }

  // 🔥 RECONSTRUCT PATH
  let path = [];
  let cur = end;

  while (cur) {
    path.push(cur);
    cur = prev[cur];
  }

  path.reverse();

  steps.push({
    action: 'final path',
    path,
    highlightLine: 9,
  });

  return steps;
}
