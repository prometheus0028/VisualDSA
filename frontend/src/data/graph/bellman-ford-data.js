const bellmanFord = {
  id: 'bellman-ford',
  title: 'Bellman-Ford Algorithm',
  difficulty: 'Advanced',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(VE)',
  best: 'O(VE)',
  average: 'O(VE)',
  worst: 'O(VE)',
  space: 'O(V)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Bellman-Ford runs V-1 iterations regardless of input.

Even if shortest paths stabilize early, algorithm continues.

Time Complexity: O(VE)  
Space Complexity: O(V)

Practical Scenario:
Small graphs where negative weights are present.
      `,
    },
    average: {
      description: `
Each edge is relaxed repeatedly for V-1 times.

This ensures shortest paths even with negative weights.

Time Complexity: O(VE)  
Space Complexity: O(V)

Practical Scenario:
Graphs with mixed positive and negative edges.
      `,
    },
    worst: {
      description: `
Worst case occurs when all edges must be relaxed fully.

Also includes an extra pass to detect negative cycles.

Time Complexity: O(VE)  
Space Complexity: O(V)

Practical Scenario:
Dense graphs or graphs with many negative edges.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Bellman-Ford is a shortest path algorithm that works on weighted graphs and supports negative edge weights. It relaxes all edges repeatedly to ensure the shortest path is found.',

  intuition:
    'Instead of greedily choosing the closest node, Bellman-Ford gradually improves distances by checking all edges multiple times until no better path exists.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Graph edges: 1→2 (4), 1→3 (5), 2→3 (-2)',
    walkthrough: [
      {
        pass: 'Step 1 (Initialization)',
        steps: ['Distance[1] = 0', 'Others = ∞'],
      },
      {
        pass: 'Step 2 (Relax Edges)',
        steps: ['1→2 → dist[2] = 4', '1→3 → dist[3] = 5', '2→3 → dist[3] = 2'],
      },
      {
        pass: 'Step 3 (Repeat)',
        steps: ['Further relaxations give no improvement'],
      },
      {
        pass: 'Final Result',
        steps: ['Distances: 1:0, 2:4, 3:2'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Initialize all distances to infinity.',
    'Set source distance to 0.',
    'Repeat V-1 times:',
    '  For each edge (u, v):',
    '    Relax edge if shorter path found.',
    'Check for negative weight cycles.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'BELLMAN_FORD(source):',
    '  initialize distance array with ∞',
    '  distance[source] = 0',
    '  for i = 1 to V-1:',
    '    for each edge (u, v, w):',
    '      if dist[u] + w < dist[v]:',
    '        dist[v] = dist[u] + w',
    '  for each edge (u, v, w):',
    '    if dist[u] + w < dist[v]:',
    '      report negative cycle',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use Bellman-Ford when the graph contains negative edge weights or when detecting negative weight cycles is required.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Handles negative edge weights',
    'Can detect negative cycles',
    'Simple implementation',
    'Works on all graph types',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Slower than Dijkstra',
    'High time complexity',
    'Not suitable for large graphs',
    'Repeated edge relaxation is expensive',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Bellman-Ford handles:',
      options: [
        'Positive weights only',
        'Negative weights',
        'No weights',
        'Trees only',
      ],
      answer: 1,
    },
    {
      question: 'Time complexity is:',
      options: ['O(V)', 'O(E log V)', 'O(VE)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'Bellman-Ford can detect:',
      options: ['Cycles', 'Negative cycles', 'Trees', 'Sorting'],
      answer: 1,
    },
    {
      question: 'Number of relaxations:',
      options: ['1', 'V-1', 'E', 'log V'],
      answer: 1,
    },
    {
      question: 'Compared to Dijkstra, Bellman-Ford is:',
      options: ['Faster', 'Slower', 'Same', 'Random'],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>
#include <limits.h>

struct Edge {
    int src, dest, weight;
};

void bellmanFord(struct Edge edges[], int V, int E, int src) {
    int dist[V];

    for(int i = 0; i < V; i++)
        dist[i] = INT_MAX;

    dist[src] = 0;

    for(int i = 1; i < V; i++) {
        for(int j = 0; j < E; j++) {
            int u = edges[j].src;
            int v = edges[j].dest;
            int w = edges[j].weight;

            if(dist[u] != INT_MAX && dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
            }
        }
    }
}
`,

    cpp: `
#include <iostream>
#include <vector>
using namespace std;

struct Edge {
    int u, v, w;
};

void bellmanFord(int V, vector<Edge>& edges, int src) {
    vector<int> dist(V, INT_MAX);
    dist[src] = 0;

    for(int i = 1; i < V; i++) {
        for(auto &e : edges) {
            if(dist[e.u] != INT_MAX && dist[e.u] + e.w < dist[e.v]) {
                dist[e.v] = dist[e.u] + e.w;
            }
        }
    }
}
`,

    java: `
class BellmanFord {
    static class Edge {
        int u, v, w;
        Edge(int u, int v, int w) {
            this.u = u;
            this.v = v;
            this.w = w;
        }
    }

    void bellmanFord(int V, Edge[] edges, int src) {
        int[] dist = new int[V];
        for(int i = 0; i < V; i++)
            dist[i] = Integer.MAX_VALUE;

        dist[src] = 0;

        for(int i = 1; i < V; i++) {
            for(Edge e : edges) {
                if(dist[e.u] != Integer.MAX_VALUE && dist[e.u] + e.w < dist[e.v]) {
                    dist[e.v] = dist[e.u] + e.w;
                }
            }
        }
    }
}
`,

    python: `
def bellman_ford(V, edges, src):
    dist = [float('inf')] * V
    dist[src] = 0

    for _ in range(V - 1):
        for u, v, w in edges:
            if dist[u] != float('inf') and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w

    return dist
`,

    js: `
function bellmanFord(V, edges, src) {
  const dist = new Array(V).fill(Infinity);
  dist[src] = 0;

  for (let i = 0; i < V - 1; i++) {
    for (let [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }

  return dist;
}
`,
  },
};

export default bellmanFord;
