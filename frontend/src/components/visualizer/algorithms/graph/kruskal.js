/* =========================================
   FILE: src/algorithms/graph/kruskal.js
========================================= */

export function generateKruskalSteps(graph) {
  if (!graph || !graph.edges) return [];

  const steps = [];

  // sort edges by weight
  const edges = [...graph.edges].sort((a, b) => a.weight - b.weight);

  const parent = {};

  graph.nodes.forEach((n) => (parent[n.id] = n.id));

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(a, b) {
    parent[find(a)] = find(b);
  }

  for (let edge of edges) {
    const { from, to } = edge;

    steps.push({
      action: 'check edge',
      edge,
      highlightLine: 4,
    });

    if (find(from) !== find(to)) {
      union(from, to);

      steps.push({
        action: 'select edge',
        edge,
        highlightLine: 6,
      });
    } else {
      steps.push({
        action: 'discard edge (cycle)',
        edge,
        highlightLine: 8,
      });
    }
  }

  return steps;
}
