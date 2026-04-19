/* =========================================
   FILE: src/algorithms/graph/graph-builder.js
========================================= */

export function buildGraph(input = '', directed = false) {
  if (!input.trim()) {
    return { nodes: [], edges: [], adj: {} };
  }

  const edgesRaw = input.split(',');
  const adj = {};
  const edges = [];
  const nodesSet = new Set();

  edgesRaw.forEach((e, index) => {
    const parts = e.trim().split('-');

    if (parts.length < 2) return;

    const from = parts[0].trim();
    const to = parts[1].trim();
    const weight = parts[2] ? Number(parts[2]) : 1;

    if (!from || !to || isNaN(weight)) return;

    nodesSet.add(from);
    nodesSet.add(to);

    if (!adj[from]) adj[from] = [];
    if (!adj[to]) adj[to] = [];

    adj[from].push({ node: to, weight });

    if (!directed) {
      adj[to].push({ node: from, weight });
    }

    edges.push({
      id: `${from}-${to}-${index}`,
      from,
      to,
      weight,
    });
  });

  const nodes = Array.from(nodesSet).map((id, i) => ({
    id,
    x: 300 + 180 * Math.cos((2 * Math.PI * i) / nodesSet.size),
    y: 200 + 180 * Math.sin((2 * Math.PI * i) / nodesSet.size),
  }));

  return { nodes, edges, adj };
}
