/* =========================================
   FILE: src/algorithms/graph/dfs.js
========================================= */

export function generateDFSSteps(graph, start) {
  if (!graph || !graph.adj || !start) return [];

  const steps = [];
  const visited = new Set();

  function dfs(node) {
    if (!node) return;

    // ===============================
    // VISIT
    // ===============================
    steps.push({
      action: 'visit',
      node: { id: node },
      highlightLine: 3,
    });

    visited.add(node);

    const neighbors = graph.adj[node] || [];

    for (let n of neighbors) {
      const neighbor = n.node;

      steps.push({
        action: 'check neighbor',
        node: { id: neighbor },
        highlightLine: 4,
      });

      if (!visited.has(neighbor)) {
        steps.push({
          action: 'go deeper',
          node: { id: neighbor },
          highlightLine: 5,
        });

        dfs(neighbor);
      }
    }
  }

  dfs(start);

  return steps;
}
