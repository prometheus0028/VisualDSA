/* =========================================
   FILE: src/algorithms/graph/bfs.js
========================================= */

export function generateBFSSteps(graph, start) {
  if (!graph || !graph.adj || !start) return [];

  const steps = [];
  const visited = new Set();
  const queue = [];

  // ===============================
  // START
  // ===============================
  queue.push(start);
  visited.add(start);

  steps.push({
    action: 'enqueue start',
    node: { id: start },
    highlightLine: 2,
  });

  while (queue.length) {
    const node = queue.shift();

    steps.push({
      action: 'dequeue',
      node: { id: node },
      highlightLine: 6,
    });

    // visit node
    steps.push({
      action: 'visit',
      node: { id: node },
      highlightLine: 7,
    });

    const neighbors = graph.adj[node] || [];

    for (let n of neighbors) {
      const neighbor = n.node;

      steps.push({
        action: 'check neighbor',
        node: { id: neighbor },
        highlightLine: 8,
      });

      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);

        steps.push({
          action: 'enqueue',
          node: { id: neighbor },
          highlightLine: 10,
        });
      }
    }
  }

  return steps;
}
