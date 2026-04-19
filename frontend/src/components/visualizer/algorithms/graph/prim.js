/* =========================================
   FILE: src/algorithms/graph/prim.js
========================================= */

export function generatePrimSteps(graph, start) {
  if (!graph || !graph.adj || !start) return [];

  const steps = [];
  const visited = new Set();
  const edges = [];

  visited.add(start);

  while (true) {
    let minEdge = null;

    // find minimum edge from visited → unvisited
    for (let u of visited) {
      for (let n of graph.adj[u]) {
        const v = n.node;
        const w = n.weight;

        steps.push({
          action: 'check edge',
          edge: { from: u, to: v },
          highlightLine: 5,
        });

        if (!visited.has(v)) {
          if (!minEdge || w < minEdge.weight) {
            minEdge = { from: u, to: v, weight: w };
          }
        }
      }
    }

    if (!minEdge) break;

    visited.add(minEdge.to);
    edges.push(minEdge);

    steps.push({
      action: 'select edge',
      edge: minEdge,
      highlightLine: 7,
    });
  }

  return steps;
}
