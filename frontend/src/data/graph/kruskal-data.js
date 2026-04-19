const kruskal = {
  id: 'kruskal',
  title: 'Kruskal’s Algorithm',
  difficulty: 'Intermediate',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(E log E)',
  best: 'O(E log E)',
  average: 'O(E log E)',
  worst: 'O(E log E)',
  space: 'O(V)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Kruskal’s algorithm sorts all edges first.

Sorting dominates the time complexity.

Time Complexity: O(E log E)  
Space Complexity: O(V)

Practical Scenario:
Efficient when edges are already sorted or few unions occur.
      `,
    },
    average: {
      description: `
Edges are sorted and processed one by one.

Union-Find operations are nearly constant.

Time Complexity: O(E log E)  
Space Complexity: O(V)

Practical Scenario:
Sparse graphs like road networks.
      `,
    },
    worst: {
      description: `
All edges are processed and sorted.

Union-Find is used for cycle detection.

Time Complexity: O(E log E)  
Space Complexity: O(V)

Practical Scenario:
Large graphs with many edges.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Kruskal’s Algorithm is a greedy algorithm that constructs a Minimum Spanning Tree by sorting all edges and adding them one by one while avoiding cycles using Union-Find.',

  intuition:
    'Imagine picking the smallest edge available. Keep adding edges as long as they do not form a cycle, gradually building the MST.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Given a graph, we sort edges and add them carefully.',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Sort all edges in ascending order of weight'],
      },
      {
        pass: 'Step 2',
        steps: ['Pick the smallest edge', 'Check if it forms a cycle'],
      },
      {
        pass: 'Step 3',
        steps: ['If no cycle → add edge to MST', 'If cycle → discard edge'],
      },
      {
        pass: 'Final Result',
        steps: ['MST formed with minimum total weight'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Sort all edges by weight.',
    'Initialize disjoint sets (Union-Find).',
    'Pick smallest edge.',
    'Check if it forms a cycle.',
    'If not, add it to MST.',
    'Repeat until MST is complete.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'KRUSKAL(graph):',
    '  sort edges by weight',
    '  initialize parent array',
    '  for each edge:',
    '    if find(u) != find(v):',
    '      add edge to MST',
    '      union(u, v)',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use Kruskal’s Algorithm when working with sparse graphs and when edge sorting is efficient, such as network design and clustering problems.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Efficient for sparse graphs',
    'Simple to implement with Union-Find',
    'Works well with edge list representation',
    'Guaranteed minimum spanning tree',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Requires sorting of edges',
    'Union-Find implementation needed',
    'Not ideal for dense graphs',
    'Slightly more complex than Prim in some cases',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Kruskal’s Algorithm is used for:',
      options: ['Shortest path', 'MST', 'Traversal', 'Cycle detection'],
      answer: 1,
    },
    {
      question: 'Kruskal’s uses:',
      options: ['Greedy', 'DP', 'Backtracking', 'Divide and Conquer'],
      answer: 0,
    },
    {
      question: 'Time complexity is:',
      options: ['O(V²)', 'O(E log E)', 'O(V log V)', 'O(E)'],
      answer: 1,
    },
    {
      question: 'Cycle detection is done using:',
      options: ['DFS', 'BFS', 'Union-Find', 'Stack'],
      answer: 2,
    },
    {
      question: 'Space complexity is:',
      options: ['O(1)', 'O(V)', 'O(E)', 'O(V²)'],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>
#include <stdlib.h>

struct Edge {
    int u, v, w;
};

int parent[100];

int find(int i) {
    if (parent[i] == i) return i;
    return parent[i] = find(parent[i]);
}

void unionSet(int a, int b) {
    int pa = find(a);
    int pb = find(b);
    parent[pa] = pb;
}

int compare(const void* a, const void* b) {
    return ((struct Edge*)a)->w - ((struct Edge*)b)->w;
}

void kruskal(struct Edge edges[], int n, int V) {
    for (int i = 0; i < V; i++)
        parent[i] = i;

    qsort(edges, n, sizeof(struct Edge), compare);

    for (int i = 0; i < n; i++) {
        int u = edges[i].u;
        int v = edges[i].v;

        if (find(u) != find(v)) {
            printf("%d - %d\\n", u, v);
            unionSet(u, v);
        }
    }
}
`,

    cpp: `
#include <bits/stdc++.h>
using namespace std;

struct Edge {
    int u, v, w;
};

bool cmp(Edge a, Edge b) {
    return a.w < b.w;
}

vector<int> parent;

int find(int x) {
    if (parent[x] == x) return x;
    return parent[x] = find(parent[x]);
}

void unionSet(int a, int b) {
    parent[find(a)] = find(b);
}

void kruskal(vector<Edge>& edges, int V) {
    sort(edges.begin(), edges.end(), cmp);

    parent.resize(V);
    for (int i = 0; i < V; i++) parent[i] = i;

    for (auto &e : edges) {
        if (find(e.u) != find(e.v)) {
            cout << e.u << " - " << e.v << endl;
            unionSet(e.u, e.v);
        }
    }
}
`,

    java: `
import java.util.*;

class Edge {
    int u, v, w;
}

class Kruskal {
    int[] parent;

    int find(int x) {
        if (parent[x] == x) return x;
        return parent[x] = find(parent[x]);
    }

    void union(int a, int b) {
        parent[find(a)] = find(b);
    }

    void kruskal(List<Edge> edges, int V) {
        Collections.sort(edges, Comparator.comparingInt(e -> e.w));

        parent = new int[V];
        for (int i = 0; i < V; i++) parent[i] = i;

        for (Edge e : edges) {
            if (find(e.u) != find(e.v)) {
                System.out.println(e.u + " - " + e.v);
                union(e.u, e.v);
            }
        }
    }
}
`,

    python: `
def find(parent, x):
    if parent[x] != x:
        parent[x] = find(parent, parent[x])
    return parent[x]

def union(parent, a, b):
    parent[find(parent, a)] = find(parent, b)

def kruskal(edges, V):
    edges.sort(key=lambda x: x[2])
    parent = list(range(V))

    for u, v, w in edges:
        if find(parent, u) != find(parent, v):
            print(u, "-", v)
            union(parent, u, v)
`,

    js: `
function kruskal(edges, V) {
  edges.sort((a, b) => a[2] - b[2]);

  const parent = Array.from({ length: V }, (_, i) => i);

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(a, b) {
    parent[find(a)] = find(b);
  }

  const mst = [];

  for (let [u, v, w] of edges) {
    if (find(u) !== find(v)) {
      mst.push([u, v, w]);
      union(u, v);
    }
  }

  return mst;
}
`,
  },
};

export default kruskal;
