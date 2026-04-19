const prim = {
  id: 'prim',
  title: 'Prim’s Algorithm',
  difficulty: 'Intermediate',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(E log V)',
  best: 'O(E log V)',
  average: 'O(E log V)',
  worst: 'O(E log V)',
  space: 'O(V)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Prim’s algorithm always processes edges using a priority queue.

Even in best case, all edges are considered.

Time Complexity: O(E log V)  
Space Complexity: O(V)

Practical Scenario:
Efficient for dense graphs where MST is required.
      `,
    },
    average: {
      description: `
Edges are processed using a min-heap.

Each edge insertion/extraction takes log V time.

Time Complexity: O(E log V)  
Space Complexity: O(V)

Practical Scenario:
Network design problems like cable connections.
      `,
    },
    worst: {
      description: `
All edges are processed and heap operations dominate.

Time Complexity: O(E log V)  
Space Complexity: O(V)

Practical Scenario:
Large dense graphs with many edges.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Prim’s Algorithm is a greedy algorithm that builds a Minimum Spanning Tree by starting from any node and repeatedly adding the smallest edge connecting the tree to a new vertex.',

  intuition:
    'Imagine growing a tree step by step. At each step, pick the cheapest edge that connects a new node to the existing tree.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Given a graph, we build MST starting from node A.',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Start from node A', 'Mark it as visited'],
      },
      {
        pass: 'Step 2',
        steps: ['Pick smallest edge connected to A', 'Add that node to MST'],
      },
      {
        pass: 'Step 3',
        steps: ['Repeat by picking smallest edge from visited nodes'],
      },
      {
        pass: 'Final Result',
        steps: ['All vertices connected with minimum total weight'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Start from any vertex.',
    'Add it to MST.',
    'Pick smallest edge connecting visited and unvisited node.',
    'Add that edge and node to MST.',
    'Repeat until all vertices are included.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'PRIM(graph):',
    '  initialize visited array',
    '  pick starting node',
    '  push edges to priority queue',
    '  while queue not empty:',
    '    pick smallest edge',
    '    if node not visited:',
    '      add to MST',
    '      push its edges',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use Prim’s Algorithm when you need to construct a Minimum Spanning Tree efficiently in dense graphs, such as network design and clustering problems.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Efficient for dense graphs',
    'Simple greedy approach',
    'Works well with adjacency matrix',
    'Guaranteed minimum spanning tree',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Requires priority queue for efficiency',
    'Less efficient for sparse graphs than Kruskal',
    'Cannot handle disconnected graphs',
    'More complex implementation than BFS/DFS',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Prim’s Algorithm finds:',
      options: ['Shortest path', 'MST', 'Traversal', 'Cycle'],
      answer: 1,
    },
    {
      question: 'Prim’s is based on:',
      options: ['Greedy', 'DP', 'Backtracking', 'Divide and Conquer'],
      answer: 0,
    },
    {
      question: 'Time complexity is:',
      options: ['O(V²)', 'O(E log V)', 'O(V log V)', 'O(E)'],
      answer: 1,
    },
    {
      question: 'Prim’s works best for:',
      options: ['Sparse graphs', 'Dense graphs', 'Trees', 'DAG'],
      answer: 1,
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
#include <limits.h>
#define V 5

int minKey(int key[], int mstSet[]) {
    int min = INT_MAX, min_index;
    for (int v = 0; v < V; v++)
        if (mstSet[v] == 0 && key[v] < min)
            min = key[v], min_index = v;
    return min_index;
}

void primMST(int graph[V][V]) {
    int parent[V], key[V], mstSet[V];

    for (int i = 0; i < V; i++)
        key[i] = INT_MAX, mstSet[i] = 0;

    key[0] = 0;
    parent[0] = -1;

    for (int count = 0; count < V - 1; count++) {
        int u = minKey(key, mstSet);
        mstSet[u] = 1;

        for (int v = 0; v < V; v++)
            if (graph[u][v] && mstSet[v] == 0 && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
    }
}
`,

    cpp: `
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

void prim(int V, vector<vector<pair<int,int>>> &adj) {
    vector<bool> visited(V, false);
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;

    pq.push({0, 0});

    while(!pq.empty()) {
        auto [weight, u] = pq.top();
        pq.pop();

        if(visited[u]) continue;
        visited[u] = true;

        for(auto &[v, w] : adj[u]) {
            if(!visited[v])
                pq.push({w, v});
        }
    }
}
`,

    java: `
import java.util.*;

class Prim {
    void prim(int V, List<List<int[]>> adj) {
        boolean[] visited = new boolean[V];
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));

        pq.add(new int[]{0, 0});

        while(!pq.isEmpty()) {
            int[] curr = pq.poll();
            int u = curr[0];

            if(visited[u]) continue;
            visited[u] = true;

            for(int[] edge : adj.get(u)) {
                if(!visited[edge[0]]) {
                    pq.add(edge);
                }
            }
        }
    }
}
`,

    python: `
import heapq

def prim(adj, V):
    visited = [False]*V
    pq = [(0, 0)]

    while pq:
        w, u = heapq.heappop(pq)

        if visited[u]:
            continue

        visited[u] = True

        for v, weight in adj[u]:
            if not visited[v]:
                heapq.heappush(pq, (weight, v))
`,

    js: `
function prim(adj, V) {
  const visited = new Array(V).fill(false);
  const pq = [[0, 0]];

  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [weight, u] = pq.shift();

    if (visited[u]) continue;

    visited[u] = true;

    for (let [v, w] of adj[u]) {
      if (!visited[v]) {
        pq.push([w, v]);
      }
    }
  }
}
`,
  },
};

export default prim;
