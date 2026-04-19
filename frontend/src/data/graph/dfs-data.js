const dfs = {
  id: 'dfs',
  title: 'Depth First Search',
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
In the best case, DFS may find the target node early depending on traversal path.

However, DFS still explores nodes deeply before backtracking.

Time Complexity: O(V + E)  
Space Complexity: O(V)

Practical Scenario:
Target node is located along the first explored branch.
      `,
    },
    average: {
      description: `
DFS explores paths deeply and backtracks when needed.

Each vertex and edge is visited once.

Time Complexity: O(V + E)  
Space Complexity: O(V)

Practical Scenario:
General graph traversal like maze solving or dependency resolution.
      `,
    },
    worst: {
      description: `
DFS traverses the entire graph when target is far or absent.

Deep recursion stack may be required.

Time Complexity: O(V + E)  
Space Complexity: O(V)

Practical Scenario:
Large graphs with long paths or tree-like structures.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Depth First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It uses recursion or a stack to keep track of nodes.',

  intuition:
    'Imagine exploring a maze — you go as deep as possible in one direction. If you hit a dead end, you backtrack and try another path.',

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
        steps: ['Start at node 1', 'Go to 2'],
      },
      {
        pass: 'Step 2',
        steps: ['From 2 → go to 4', '4 has no children → backtrack'],
      },
      {
        pass: 'Step 3',
        steps: ['From 2 → go to 5', 'Backtrack to 1'],
      },
      {
        pass: 'Step 4',
        steps: ['From 1 → go to 3'],
      },
      {
        pass: 'Final Order',
        steps: ['1 → 2 → 4 → 5 → 3'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Start from the source node.',
    'Mark it as visited.',
    'Visit the node.',
    'Recursively visit all unvisited neighbors.',
    'Backtrack when no unvisited neighbors remain.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'DFS(node):',
    '  if node is visited:',
    '    return',
    '  mark node as visited',
    '  visit node',
    '  for each neighbor of node:',
    '    DFS(neighbor)',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'DFS is useful when exploring all paths, solving puzzles, detecting cycles, or working with recursion-based problems like topological sorting and backtracking.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Uses less memory compared to BFS in some cases',
    'Easy to implement using recursion',
    'Useful for pathfinding and backtracking problems',
    'Good for detecting cycles and connectivity',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Does not guarantee shortest path',
    'Can get stuck in deep paths',
    'Recursive implementation may cause stack overflow',
    'Not suitable for shortest path problems',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Which data structure is used in DFS?',
      options: ['Queue', 'Stack', 'Heap', 'Array'],
      answer: 1,
    },
    {
      question: 'DFS explores nodes:',
      options: ['Level by level', 'Randomly', 'Depth first', 'Breadth first'],
      answer: 2,
    },
    {
      question: 'DFS guarantees shortest path:',
      options: ['Yes', 'No'],
      answer: 1,
    },
    {
      question: 'Time complexity of DFS is:',
      options: ['O(n)', 'O(log n)', 'O(V + E)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'DFS is commonly used in:',
      options: [
        'Shortest path',
        'Sorting arrays',
        'Backtracking problems',
        'Hashing',
      ],
      answer: 2,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>

int visited[10];

void dfs(int graph[10][10], int node, int n) {
    visited[node] = 1;
    printf("%d ", node);

    for(int i = 0; i < n; i++) {
        if(graph[node][i] && !visited[i]) {
            dfs(graph, i, n);
        }
    }
}
`,

    cpp: `
#include <iostream>
#include <vector>
using namespace std;

void dfs(int node, vector<vector<int>> &adj, vector<bool> &visited) {
    visited[node] = true;
    cout << node << " ";

    for(int neighbor : adj[node]) {
        if(!visited[neighbor]) {
            dfs(neighbor, adj, visited);
        }
    }
}
`,

    java: `
import java.util.*;

class DFS {
    void dfs(int node, List<List<Integer>> adj, boolean[] visited) {
        visited[node] = true;
        System.out.print(node + " ");

        for(int neighbor : adj.get(node)) {
            if(!visited[neighbor]) {
                dfs(neighbor, adj, visited);
            }
        }
    }
}
`,

    python: `
def dfs(node, adj, visited):
    visited.add(node)
    print(node, end=" ")

    for neighbor in adj[node]:
        if neighbor not in visited:
            dfs(neighbor, adj, visited)
`,

    js: `
function dfs(node, adj, visited = new Set()) {
  visited.add(node);
  console.log(node);

  for (let neighbor of adj[node]) {
    if (!visited.has(neighbor)) {
      dfs(neighbor, adj, visited);
    }
  }
}
`,
  },
};

export default dfs;
