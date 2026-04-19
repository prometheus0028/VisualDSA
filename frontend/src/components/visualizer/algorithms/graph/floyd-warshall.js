/* =========================================
   FILE: src/algorithms/graph/floyd-warshall.js
========================================= */

export function generateFloydWarshallSteps(graph) {
  if (!graph || !graph.nodes?.length) return [];

  const nodes = graph.nodes.map((n) => n.id);
  const n = nodes.length;

  const indexMap = {};
  nodes.forEach((node, i) => (indexMap[node] = i));

  const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));

  // ===============================
  // INITIALIZE
  // ===============================
  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }

  for (let edge of graph.edges) {
    const u = indexMap[edge.from];
    const v = indexMap[edge.to];
    dist[u][v] = edge.weight;
    dist[v][u] = edge.weight;
  }

  const steps = [];

  // ===============================
  // MAIN ALGO
  // ===============================
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        steps.push({
          action: 'check',
          i,
          j,
          k,
          matrix: dist.map((row) => [...row]),
          highlightLine: 6,
        });

        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];

          steps.push({
            action: 'update',
            i,
            j,
            k,
            matrix: dist.map((row) => [...row]),
            highlightLine: 7,
          });
        }
      }
    }
  }

  return {
    steps,
    nodes,
  };
}
