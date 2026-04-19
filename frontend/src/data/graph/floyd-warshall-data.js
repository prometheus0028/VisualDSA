const floydWarshall = {
  id: 'floyd-warshall',
  title: 'Floyd Warshall Algorithm',
  difficulty: 'Advanced',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(V³)',
  best: 'O(V³)',
  average: 'O(V³)',
  worst: 'O(V³)',
  space: 'O(V²)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Floyd Warshall always runs 3 nested loops.

Even if graph is simple, all pairs are processed.

Time Complexity: O(V³)  
Space Complexity: O(V²)

Practical Scenario:
Small graphs where all-pairs shortest path is required.
      `,
    },
    average: {
      description: `
The algorithm updates distances using every vertex as an intermediate node.

Each pair (i, j) is checked via every vertex k.

Time Complexity: O(V³)  
Space Complexity: O(V²)

Practical Scenario:
Dense graphs like routing tables.
      `,
    },
    worst: {
      description: `
Worst case remains same since algorithm does not depend on edge structure.

All computations are always performed.

Time Complexity: O(V³)  
Space Complexity: O(V²)

Practical Scenario:
Large dense graphs where full distance matrix is needed.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Floyd Warshall is a dynamic programming algorithm that finds shortest paths between all pairs of vertices by progressively improving distances using intermediate nodes.',

  intuition:
    'Think of checking whether going through another node k gives a shorter path between i and j. If yes, update it. Repeat for all nodes.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description:
      'Consider a graph with vertices A, B, C. We update shortest paths step by step.',
    walkthrough: [
      {
        pass: 'Step 1 (Initial Matrix)',
        steps: [
          'Distance matrix initialized with direct edges',
          'No intermediate nodes considered',
        ],
      },
      {
        pass: 'Step 2 (Using node A)',
        steps: ['Check if paths improve via A'],
      },
      {
        pass: 'Step 3 (Using node B)',
        steps: ['Update paths using B as intermediate'],
      },
      {
        pass: 'Step 4 (Using node C)',
        steps: ['Final shortest paths computed'],
      },
      {
        pass: 'Final Result',
        steps: ['All-pairs shortest path matrix obtained'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Initialize distance matrix.',
    'Set diagonal elements to 0.',
    'Use each vertex as an intermediate node.',
    'Update distance[i][j] = min(distance[i][j], distance[i][k] + distance[k][j]).',
    'Repeat for all vertices.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'for k = 0 to V-1:',
    '  for i = 0 to V-1:',
    '    for j = 0 to V-1:',
    '      if dist[i][j] > dist[i][k] + dist[k][j]:',
    '        dist[i][j] = dist[i][k] + dist[k][j]',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use Floyd Warshall when you need shortest paths between all pairs of nodes, especially in dense graphs or when negative weights are present.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Computes all-pairs shortest paths',
    'Handles negative edge weights',
    'Simple and elegant implementation',
    'Useful for dense graphs',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Very slow for large graphs (O(V³))',
    'High memory usage (O(V²))',
    'Not suitable for sparse graphs',
    'Less efficient than Dijkstra for single source',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Floyd Warshall is based on:',
      options: [
        'Greedy',
        'Dynamic Programming',
        'Divide and Conquer',
        'Backtracking',
      ],
      answer: 1,
    },
    {
      question: 'Time complexity is:',
      options: ['O(V²)', 'O(V log V)', 'O(V³)', 'O(E log V)'],
      answer: 2,
    },
    {
      question: 'It computes:',
      options: [
        'Single source shortest path',
        'All pairs shortest path',
        'Minimum spanning tree',
        'Traversal',
      ],
      answer: 1,
    },
    {
      question: 'Can it handle negative weights?',
      options: ['Yes', 'No'],
      answer: 0,
    },
    {
      question: 'Space complexity is:',
      options: ['O(V)', 'O(E)', 'O(V²)', 'O(1)'],
      answer: 2,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>
#define V 4
#define INF 99999

void floydWarshall(int dist[V][V]) {
    for(int k = 0; k < V; k++) {
        for(int i = 0; i < V; i++) {
            for(int j = 0; j < V; j++) {
                if(dist[i][j] > dist[i][k] + dist[k][j])
                    dist[i][j] = dist[i][k] + dist[k][j];
            }
        }
    }
}
`,

    cpp: `
#include <iostream>
using namespace std;
#define V 4
#define INF 99999

void floydWarshall(int dist[V][V]) {
    for(int k = 0; k < V; k++)
        for(int i = 0; i < V; i++)
            for(int j = 0; j < V; j++)
                if(dist[i][j] > dist[i][k] + dist[k][j])
                    dist[i][j] = dist[i][k] + dist[k][j];
}
`,

    java: `
class FloydWarshall {
    final static int INF = 99999;

    void floydWarshall(int[][] dist) {
        int V = dist.length;

        for(int k = 0; k < V; k++) {
            for(int i = 0; i < V; i++) {
                for(int j = 0; j < V; j++) {
                    if(dist[i][j] > dist[i][k] + dist[k][j])
                        dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
}
`,

    python: `
def floyd_warshall(dist):
    V = len(dist)

    for k in range(V):
        for i in range(V):
            for j in range(V):
                if dist[i][j] > dist[i][k] + dist[k][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
`,

    js: `
function floydWarshall(dist) {
  const V = dist.length;

  for (let k = 0; k < V; k++) {
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}
`,
  },
};

export default floydWarshall;
