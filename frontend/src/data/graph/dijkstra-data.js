const dijkstra = {
  id: 'dijkstra',
  title: 'Dijkstra Algorithm',
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
Dijkstra always processes nodes using a priority queue.

Even if the shortest path is found early, the algorithm continues processing remaining nodes.

Time Complexity: O(E log V)  
Space Complexity: O(V)

Practical Scenario:
Small graphs or when the destination node is close to the source.
      `,
    },
    average: {
      description: `
Dijkstra processes each edge and updates distances using a min-priority queue.

Each extraction and update takes logarithmic time.

Time Complexity: O(E log V)  
Space Complexity: O(V)

Practical Scenario:
Road networks, routing systems, and GPS navigation.
      `,
    },
    worst: {
      description: `
All vertices and edges are processed with multiple relaxations.

Priority queue operations dominate runtime.

Time Complexity: O(E log V)  
Space Complexity: O(V)

Practical Scenario:
Dense graphs or graphs with many edges.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Dijkstra’s Algorithm finds the shortest path from a source node to all other nodes in a weighted graph with non-negative weights. It uses a greedy approach by always selecting the node with the smallest current distance.',

  intuition:
    'Think of expanding outward from the source node, always choosing the closest unexplored node. Each step ensures that the shortest distance to that node is finalized.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description:
      'Consider a graph with edges: 1→2 (4), 1→3 (2), 2→4 (5), 3→4 (1).',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Start at node 1', 'Distance[1] = 0, others = ∞'],
      },
      {
        pass: 'Step 2',
        steps: [
          'Visit node 1 → update neighbors',
          'Distance[2] = 4, Distance[3] = 2',
        ],
      },
      {
        pass: 'Step 3',
        steps: [
          'Pick node 3 (smallest distance = 2)',
          'Update Distance[4] = 3',
        ],
      },
      {
        pass: 'Step 4',
        steps: ['Pick node 4 → no further updates'],
      },
      {
        pass: 'Final Distances',
        steps: ['1:0, 2:4, 3:2, 4:3'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Initialize distances to all nodes as infinity.',
    'Set distance of source node to 0.',
    'Use a priority queue to select the smallest distance node.',
    'For each neighbor, update distance if shorter path is found.',
    'Repeat until all nodes are processed.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'DIJKSTRA(source):',
    '  initialize distance array with ∞',
    '  distance[source] = 0',
    '  create min-priority queue',
    '  push source into queue',
    '  while queue not empty:',
    '    node = extract min',
    '    for each neighbor:',
    '      if distance[node] + weight < distance[neighbor]:',
    '        update distance',
    '        push neighbor into queue',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use Dijkstra when finding shortest paths in weighted graphs with non-negative weights such as maps, routing protocols, and navigation systems.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Efficient for shortest path problems',
    'Works well with priority queues',
    'Deterministic and reliable',
    'Widely used in real-world systems',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Does not work with negative weights',
    'Requires priority queue for efficiency',
    'More complex than BFS/DFS',
    'Can be slower for dense graphs',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Dijkstra works on:',
      options: [
        'Unweighted graph',
        'Weighted graph with negative weights',
        'Weighted graph with non-negative weights',
        'Tree only',
      ],
      answer: 2,
    },
    {
      question: 'Which data structure is used?',
      options: ['Stack', 'Queue', 'Priority Queue', 'Array'],
      answer: 2,
    },
    {
      question: 'Time complexity is:',
      options: ['O(V)', 'O(E log V)', 'O(n²)', 'O(log n)'],
      answer: 1,
    },
    {
      question: 'Dijkstra guarantees:',
      options: [
        'Longest path',
        'Shortest path',
        'Random path',
        'Cycle detection',
      ],
      answer: 1,
    },
    {
      question: 'Negative weights are:',
      options: ['Allowed', 'Not allowed'],
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

int minDistance(int dist[], int visited[]) {
    int min = INT_MAX, min_index;

    for(int v = 0; v < V; v++) {
        if(!visited[v] && dist[v] <= min) {
            min = dist[v];
            min_index = v;
        }
    }
    return min_index;
}

void dijkstra(int graph[V][V], int src) {
    int dist[V];
    int visited[V];

    for(int i = 0; i < V; i++) {
        dist[i] = INT_MAX;
        visited[i] = 0;
    }

    dist[src] = 0;

    for(int count = 0; count < V - 1; count++) {
        int u = minDistance(dist, visited);
        visited[u] = 1;

        for(int v = 0; v < V; v++) {
            if(!visited[v] && graph[u][v] && dist[u] != INT_MAX &&
               dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
}
`,

    cpp: `
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

void dijkstra(int src, vector<vector<pair<int,int>>> &adj) {
    vector<int> dist(adj.size(), INT_MAX);
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;

    dist[src] = 0;
    pq.push({0, src});

    while(!pq.empty()) {
        auto [d, node] = pq.top();
        pq.pop();

        for(auto &[neighbor, weight] : adj[node]) {
            if(dist[node] + weight < dist[neighbor]) {
                dist[neighbor] = dist[node] + weight;
                pq.push({dist[neighbor], neighbor});
            }
        }
    }
}
`,

    java: `
import java.util.*;

class Dijkstra {
    void dijkstra(int src, List<List<int[]>> adj) {
        int[] dist = new int[adj.size()];
        Arrays.fill(dist, Integer.MAX_VALUE);

        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));

        dist[src] = 0;
        pq.add(new int[]{0, src});

        while(!pq.isEmpty()) {
            int[] curr = pq.poll();
            int node = curr[1];

            for(int[] edge : adj.get(node)) {
                int neighbor = edge[0];
                int weight = edge[1];

                if(dist[node] + weight < dist[neighbor]) {
                    dist[neighbor] = dist[node] + weight;
                    pq.add(new int[]{dist[neighbor], neighbor});
                }
            }
        }
    }
}
`,

    python: `
import heapq

def dijkstra(src, adj):
    dist = [float('inf')] * len(adj)
    dist[src] = 0

    pq = [(0, src)]

    while pq:
        d, node = heapq.heappop(pq)

        for neighbor, weight in adj[node]:
            if dist[node] + weight < dist[neighbor]:
                dist[neighbor] = dist[node] + weight
                heapq.heappush(pq, (dist[neighbor], neighbor))

    return dist
`,

    js: `
function dijkstra(src, adj) {
  const dist = new Array(adj.length).fill(Infinity);
  dist[src] = 0;

  const pq = [[0, src]];

  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [d, node] = pq.shift();

    for (let [neighbor, weight] of adj[node]) {
      if (dist[node] + weight < dist[neighbor]) {
        dist[neighbor] = dist[node] + weight;
        pq.push([dist[neighbor], neighbor]);
      }
    }
  }

  return dist;
}
`,
  },
};

export default dijkstra;
