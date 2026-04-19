const bfs = {
  id: 'bfs',
  title: 'Breadth First Search',
  difficulty: 'Beginner',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(V + E)',
  best: 'O(V + E)',
  average: 'O(V + E)',
  worst: 'O(V + E)',
  space: 'O(V)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
In the best case, BFS still needs to visit all reachable nodes from the starting node.

Even if the target node is found early, BFS explores level by level.

Time Complexity: O(V + E)  
Space Complexity: O(V)

Practical Scenario:
Searching for a node located very close to the source.
      `,
    },
    average: {
      description: `
On average, BFS explores most of the graph depending on connectivity.

Each node is visited once and each edge is processed once.

Time Complexity: O(V + E)  
Space Complexity: O(V)

Practical Scenario:
Typical traversal in social networks or web crawling.
      `,
    },
    worst: {
      description: `
In the worst case, BFS traverses the entire graph.

All vertices and edges are processed.

Time Complexity: O(V + E)  
Space Complexity: O(V)

Practical Scenario:
Fully connected graphs or when target is the last node.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Breadth First Search (BFS) is a graph traversal algorithm that explores nodes level by level. It starts from a source node and visits all its neighbors before moving to the next level. BFS uses a queue to keep track of nodes to visit.',

  intuition:
    'Imagine spreading out in waves from a starting point. You first visit all immediate neighbors, then neighbors of neighbors, ensuring the shortest path (in unweighted graphs) is found first.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description:
      'Consider the graph: 1 connected to 2 and 3, 2 connected to 4 and 5.',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Start at node 1', 'Queue = [1]'],
      },
      {
        pass: 'Step 2',
        steps: ['Visit 1 → enqueue neighbors 2, 3', 'Queue = [2, 3]'],
      },
      {
        pass: 'Step 3',
        steps: ['Visit 2 → enqueue 4, 5', 'Queue = [3, 4, 5]'],
      },
      {
        pass: 'Step 4',
        steps: ['Visit 3', 'Queue = [4, 5]'],
      },
      {
        pass: 'Final Order',
        steps: ['1 → 2 → 3 → 4 → 5'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Start from the source node.',
    'Mark it as visited.',
    'Insert it into a queue.',
    'While queue is not empty:',
    '  Remove node from queue.',
    '  Visit it.',
    '  Add all unvisited neighbors to queue.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'BFS(start):',
    '  create empty queue',
    '  mark start as visited',
    '  enqueue(start)',
    '  while queue not empty:',
    '    node = dequeue()',
    '    visit node',
    '    for each neighbor of node:',
    '      if not visited:',
    '        mark visited',
    '        enqueue(neighbor)',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use BFS when you need the shortest path in an unweighted graph or when exploring neighbors level by level such as in networking, GPS navigation, and social graphs.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Finds shortest path in unweighted graphs',
    'Simple to implement using queue',
    'Works well for level-order traversal',
    'Guarantees minimum steps solution',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'High memory usage due to queue',
    'Not efficient for deep graphs',
    'Slower than DFS for some cases',
    'Requires storing all nodes in memory',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Which data structure is used in BFS?',
      options: ['Stack', 'Queue', 'Heap', 'Tree'],
      answer: 1,
    },
    {
      question: 'BFS guarantees shortest path in:',
      options: [
        'Weighted graph',
        'Unweighted graph',
        'Tree only',
        'Directed graph only',
      ],
      answer: 1,
    },
    {
      question: 'Time complexity of BFS is:',
      options: ['O(n)', 'O(log n)', 'O(V + E)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'Traversal order in BFS is:',
      options: ['Depth first', 'Level by level', 'Random', 'Reverse'],
      answer: 1,
    },
    {
      question: 'Space complexity of BFS is:',
      options: ['O(1)', 'O(log n)', 'O(V)', 'O(E)'],
      answer: 2,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>
#include <stdlib.h>

void bfs(int graph[5][5], int start) {
    int visited[5] = {0};
    int queue[5], front = 0, rear = 0;

    visited[start] = 1;
    queue[rear++] = start;

    while(front < rear) {
        int node = queue[front++];
        printf("%d ", node);

        for(int i = 0; i < 5; i++) {
            if(graph[node][i] && !visited[i]) {
                visited[i] = 1;
                queue[rear++] = i;
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

void bfs(int start, vector<vector<int>> &adj) {
    vector<bool> visited(adj.size(), false);
    queue<int> q;

    visited[start] = true;
    q.push(start);

    while(!q.empty()) {
        int node = q.front();
        q.pop();
        cout << node << " ";

        for(int neighbor : adj[node]) {
            if(!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
}
`,

    java: `
import java.util.*;

class BFS {
    void bfs(int start, List<List<Integer>> adj) {
        boolean[] visited = new boolean[adj.size()];
        Queue<Integer> q = new LinkedList<>();

        visited[start] = true;
        q.add(start);

        while(!q.isEmpty()) {
            int node = q.poll();
            System.out.print(node + " ");

            for(int neighbor : adj.get(node)) {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.add(neighbor);
                }
            }
        }
    }
}
`,

    python: `
from collections import deque

def bfs(start, adj):
    visited = set()
    queue = deque([start])

    visited.add(start)

    while queue:
        node = queue.popleft()
        print(node, end=" ")

        for neighbor in adj[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
`,

    js: `
function bfs(start, adj) {
  const visited = new Set();
  const queue = [];

  visited.add(start);
  queue.push(start);

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);

    for (let neighbor of adj[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
`,
  },
};

export default bfs;
