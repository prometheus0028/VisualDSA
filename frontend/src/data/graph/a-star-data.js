const aStar = {
  id: 'a-star',
  title: 'A* Algorithm',
  difficulty: 'Advanced',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(E)',
  best: 'O(E)',
  average: 'O(E)',
  worst: 'O(E)',
  space: 'O(V)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
In the best case, A* directly follows the optimal path using a good heuristic.

Very few nodes are explored.

Time Complexity: O(E)  
Space Complexity: O(V)

Practical Scenario:
When heuristic perfectly estimates distance to goal.
      `,
    },
    average: {
      description: `
A* explores nodes guided by both actual distance (g) and heuristic (h).

Efficiently reduces unnecessary exploration.

Time Complexity: O(E)  
Space Complexity: O(V)

Practical Scenario:
Pathfinding in games and navigation systems.
      `,
    },
    worst: {
      description: `
If heuristic is poor (like 0), A* behaves like Dijkstra.

Explores most of the graph.

Time Complexity: O(E)  
Space Complexity: O(V)

Practical Scenario:
When heuristic provides no useful guidance.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'A* (A-Star) is a shortest path algorithm that uses both actual distance (g) and a heuristic estimate (h) to find the most efficient path to a goal node.',

  intuition:
    'Instead of blindly exploring, A* uses a “smart guess” (heuristic) to prioritize nodes that are closer to the goal, making it faster than Dijkstra in many cases.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description:
      'Suppose we want to go from node A to node D using heuristic distances.',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Start at node A', 'f(A) = g(A) + h(A)'],
      },
      {
        pass: 'Step 2',
        steps: ['Explore neighbors B and C', 'Calculate f = g + h for both'],
      },
      {
        pass: 'Step 3',
        steps: [
          'Pick node with smallest f value',
          'Continue expanding toward goal',
        ],
      },
      {
        pass: 'Final Result',
        steps: ['Shortest path found efficiently using heuristic'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Initialize open list with start node.',
    'Set g(start) = 0.',
    'Compute f(node) = g(node) + h(node).',
    'Pick node with lowest f value.',
    'If goal reached, stop.',
    'Otherwise, update neighbors and repeat.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'A_STAR(start, goal):',
    '  openSet = priority queue',
    '  add start to openSet',
    '  g[start] = 0',
    '  while openSet not empty:',
    '    current = node with lowest f',
    '    if current == goal:',
    '      return path',
    '    for each neighbor:',
    '      tentative_g = g[current] + cost',
    '      if tentative_g < g[neighbor]:',
    '        update g[neighbor]',
    '        update f[neighbor]',
    '        add to openSet',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use A* when you need the shortest path and have a good heuristic, such as in GPS navigation, robotics, and game pathfinding.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Faster than Dijkstra with good heuristic',
    'Finds optimal path',
    'Flexible and customizable',
    'Widely used in real-world systems',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Requires good heuristic function',
    'More complex to implement',
    'Memory intensive',
    'Performance depends on heuristic quality',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'A* uses:',
      options: [
        'Only distance',
        'Only heuristic',
        'Distance + heuristic',
        'Random',
      ],
      answer: 2,
    },
    {
      question: 'Heuristic function represents:',
      options: ['Exact cost', 'Estimated cost', 'Random value', 'Edge weight'],
      answer: 1,
    },
    {
      question: 'If heuristic = 0, A* becomes:',
      options: ['DFS', 'BFS', 'Dijkstra', 'Prim'],
      answer: 2,
    },
    {
      question: 'A* guarantees optimal path?',
      options: ['Yes', 'No'],
      answer: 0,
    },
    {
      question: 'Space complexity is:',
      options: ['O(1)', 'O(V)', 'O(log V)', 'O(E)'],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
/* A* implementation in C is complex and usually avoided.
   Typically implemented in higher-level languages. */
`,

    cpp: `
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct Node {
    int vertex, cost;
    bool operator<(const Node &other) const {
        return cost > other.cost;
    }
};

void aStar(int start, int goal, vector<vector<pair<int,int>>> &adj, vector<int> &h) {
    priority_queue<Node> pq;
    vector<int> g(adj.size(), INT_MAX);

    g[start] = 0;
    pq.push({start, h[start]});

    while(!pq.empty()) {
        int node = pq.top().vertex;
        pq.pop();

        if(node == goal) break;

        for(auto &[neighbor, weight] : adj[node]) {
            int temp = g[node] + weight;
            if(temp < g[neighbor]) {
                g[neighbor] = temp;
                pq.push({neighbor, g[neighbor] + h[neighbor]});
            }
        }
    }
}
`,

    java: `
import java.util.*;

class AStar {
    static class Node {
        int v, cost;
        Node(int v, int cost) {
            this.v = v;
            this.cost = cost;
        }
    }

    void aStar(int start, int goal, List<List<int[]>> adj, int[] h) {
        PriorityQueue<Node> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a.cost));
        int[] g = new int[adj.size()];
        Arrays.fill(g, Integer.MAX_VALUE);

        g[start] = 0;
        pq.add(new Node(start, h[start]));

        while(!pq.isEmpty()) {
            Node curr = pq.poll();
            int node = curr.v;

            if(node == goal) break;

            for(int[] edge : adj.get(node)) {
                int neighbor = edge[0];
                int weight = edge[1];

                int temp = g[node] + weight;

                if(temp < g[neighbor]) {
                    g[neighbor] = temp;
                    pq.add(new Node(neighbor, g[neighbor] + h[neighbor]));
                }
            }
        }
    }
}
`,

    python: `
import heapq

def a_star(start, goal, adj, h):
    g = {node: float('inf') for node in adj}
    g[start] = 0

    pq = [(h[start], start)]

    while pq:
        f, node = heapq.heappop(pq)

        if node == goal:
            break

        for neighbor, weight in adj[node]:
            temp = g[node] + weight
            if temp < g[neighbor]:
                g[neighbor] = temp
                heapq.heappush(pq, (g[neighbor] + h[neighbor], neighbor))
`,

    js: `
function aStar(start, goal, adj, h) {
  const g = {};
  const pq = [];

  for (let node in adj) g[node] = Infinity;
  g[start] = 0;

  pq.push([h[start], start]);

  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [f, node] = pq.shift();

    if (node === goal) break;

    for (let [neighbor, weight] of adj[node]) {
      const temp = g[node] + weight;

      if (temp < g[neighbor]) {
        g[neighbor] = temp;
        pq.push([g[neighbor] + h[neighbor], neighbor]);
      }
    }
  }

  return g;
}
`,
  },
};

export default aStar;
