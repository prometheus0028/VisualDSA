const graphDataset = {
  bfs: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In Breadth First Search (BFS), which data structure is primarily used to traverse the graph level by level?',
        options: ['Stack', 'Queue', 'Heap', 'Set'],
        answer: 1,
        concept: 'bfs_queue_usage',
        difficulty: 'easy',
      },
      {
        question:
          'In BFS traversal of a graph, nodes are visited in which order?',
        options: [
          'Depth-wise',
          'Level by level',
          'Random order',
          'Sorted order',
        ],
        answer: 1,
        concept: 'bfs_traversal_order',
        difficulty: 'easy',
      },
      {
        question:
          'Time complexity of BFS on a graph with V vertices and E edges is:',
        options: ['O(V)', 'O(E)', 'O(V + E)', 'O(V * E)'],
        answer: 2,
        concept: 'bfs_complexity',
        difficulty: 'easy',
      },
      {
        question: 'In BFS, what is the purpose of a visited array?',
        options: [
          'To store edges',
          'To avoid revisiting nodes',
          'To sort nodes',
          'To track weights',
        ],
        answer: 1,
        concept: 'bfs_visited',
        difficulty: 'easy',
      },
      {
        question: 'BFS is most suitable for solving which type of problem?',
        options: [
          'Shortest path in unweighted graph',
          'Sorting array',
          'Binary search',
          'Tree balancing',
        ],
        answer: 0,
        concept: 'bfs_usecase',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
Consider BFS traversal starting from node 0:

Graph:
0 → 1, 2
1 → 3
2 → 4

What is the BFS order?
`,
        options: ['0 1 3 2 4', '0 1 2 3 4', '0 2 1 4 3', '0 2 4 1 3'],
        answer: 1,
        concept: 'bfs_order',
        difficulty: 'medium',
      },
      {
        question: `
In BFS, if queue initially contains node 0 and adjacency list is:

0 → 1, 2

What will be next node processed after 0?
`,
        options: ['2', '1', '0', 'Depends'],
        answer: 1,
        concept: 'bfs_queue_order',
        difficulty: 'easy',
      },
      {
        question: `
In BFS traversal, what happens when a node is visited twice due to missing visited check?
`,
        options: [
          'Correct traversal',
          'Infinite loop or repeated visits',
          'Sorted order',
          'Faster execution',
        ],
        answer: 1,
        concept: 'bfs_bug',
        difficulty: 'medium',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
In BFS implementation, using stack instead of queue results in:
`,
        options: [
          'Same BFS result',
          'DFS behavior',
          'Sorted traversal',
          'No traversal',
        ],
        answer: 1,
        concept: 'bfs_vs_dfs',
        difficulty: 'medium',
      },
      {
        question: `
If nodes are marked visited only after dequeuing in BFS, what issue may occur?
`,
        options: [
          'Duplicate insertions in queue',
          'Incorrect edges',
          'Sorted graph',
          'Memory optimization',
        ],
        answer: 0,
        concept: 'bfs_visited_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix BFS implementation in C++ where visited marking and queue operations are incorrect.',
        language: 'cpp',
        code: [
          'void bfs(vector<vector<int>>& adj, int start){',
          '  vector<bool> visited(adj.size(), false);',
          '  queue<int> q;',
          '  q.push(___);',
          '  visited[___] = true;',
          '',
          '  while(!q.empty()){',
          '    int node = q.front();',
          '    q.pop();',
          '',
          '    for(auto neighbor : adj[node]){',
          '      if(!visited[___]){',
          '        visited[___] = true;',
          '        q.push(___);',
          '      }',
          '    }',
          '  }',
          '}',
        ],
        blanks: [
          ['start'],
          ['start'],
          ['neighbor'],
          ['neighbor'],
          ['neighbor'],
        ],
        concept: 'bfs_cpp_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Java BFS where queue handling and visited logic is incorrect.',
        language: 'java',
        code: [
          'void bfs(List<List<Integer>> adj, int start){',
          '  boolean[] visited = new boolean[adj.size()];',
          '  Queue<Integer> q = new LinkedList<>();',
          '',
          '  q.add(___);',
          '  visited[___] = true;',
          '',
          '  while(!q.isEmpty()){',
          '    int node = q.poll();',
          '',
          '    for(int neighbor : adj.get(node)){',
          '      if(!visited[___]){',
          '        visited[___] = true;',
          '        q.add(___);',
          '      }',
          '    }',
          '  }',
          '}',
        ],
        blanks: [
          ['start'],
          ['start'],
          ['neighbor'],
          ['neighbor'],
          ['neighbor'],
        ],
        concept: 'bfs_java_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Python BFS where queue initialization and visited logic are missing.',
        language: 'python',
        code: [
          'from collections import deque',
          '',
          'def bfs(adj, start):',
          '    visited = [False] * len(adj)',
          '    q = deque()',
          '',
          '    q.append(___)',
          '    visited[___] = True',
          '',
          '    while q:',
          '        node = q.popleft()',
          '',
          '        for neighbor in adj[node]:',
          '            if not visited[___]:',
          '                visited[___] = True',
          '                q.append(___)',
        ],
        blanks: [
          ['start'],
          ['start'],
          ['neighbor'],
          ['neighbor'],
          ['neighbor'],
        ],
        concept: 'bfs_python_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix JavaScript BFS where incorrect queue operations break traversal.',
        language: 'javascript',
        code: [
          'function bfs(adj, start){',
          '  let visited = new Array(adj.length).fill(false);',
          '  let q = [];',
          '',
          '  q.push(___);',
          '  visited[___] = true;',
          '',
          '  while(q.length > 0){',
          '    let node = q.shift();',
          '',
          '    for(let neighbor of adj[node]){',
          '      if(!visited[___]){',
          '        visited[___] = true;',
          '        q.push(___);',
          '      }',
          '    }',
          '  }',
          '}',
        ],
        blanks: [
          ['start'],
          ['start'],
          ['neighbor'],
          ['neighbor'],
          ['neighbor'],
        ],
        concept: 'bfs_js_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix BFS shortest path calculation in unweighted graph where distance updates are incorrect.',
        language: 'cpp',
        code: [
          'vector<int> bfsDistance(vector<vector<int>>& adj, int start){',
          '  vector<int> dist(adj.size(), -1);',
          '  queue<int> q;',
          '',
          '  q.push(___);',
          '  dist[___] = 0;',
          '',
          '  while(!q.empty()){',
          '    int node = q.front();',
          '    q.pop();',
          '',
          '    for(auto neighbor : adj[node]){',
          '      if(dist[___] == -1){',
          '        dist[___] = dist[node] + ___;',
          '        q.push(___);',
          '      }',
          '    }',
          '  }',
          '',
          '  return dist;',
          '}',
        ],
        blanks: [
          ['start'],
          ['start'],
          ['neighbor'],
          ['neighbor'],
          ['1'],
          ['neighbor'],
        ],
        concept: 'bfs_shortest_path',
        difficulty: 'hard',
      },
    ],
  },
  dfs: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In Depth First Search (DFS), which data structure is primarily used internally (recursively)?',
        options: ['Queue', 'Stack', 'Heap', 'Array'],
        answer: 1,
        concept: 'dfs_stack_usage',
        difficulty: 'easy',
      },
      {
        question: 'DFS traversal explores nodes in which manner?',
        options: [
          'Level by level',
          'Depth-wise',
          'Random order',
          'Sorted order',
        ],
        answer: 1,
        concept: 'dfs_traversal_order',
        difficulty: 'easy',
      },
      {
        question:
          'Time complexity of DFS on a graph with V vertices and E edges is:',
        options: ['O(V)', 'O(E)', 'O(V + E)', 'O(V * E)'],
        answer: 2,
        concept: 'dfs_complexity',
        difficulty: 'easy',
      },
      {
        question: 'In DFS, recursion implicitly uses which structure?',
        options: ['Queue', 'Stack', 'Heap', 'Graph'],
        answer: 1,
        concept: 'dfs_recursion_stack',
        difficulty: 'easy',
      },
      {
        question: 'DFS is best suited for which type of problems?',
        options: [
          'Shortest path in unweighted graph',
          'Backtracking and path finding',
          'Sorting arrays',
          'Binary search',
        ],
        answer: 1,
        concept: 'dfs_usecase',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
Consider DFS traversal starting from node 0:

Graph:
0 → 1, 2
1 → 3
2 → 4

What is a possible DFS traversal?
`,
        options: ['0 1 3 2 4', '0 2 4 1 3', '0 1 2 3 4', '0 3 1 2 4'],
        answer: 0,
        concept: 'dfs_order',
        difficulty: 'medium',
      },
      {
        question: `
In DFS using stack, if neighbors are pushed in order [1, 2], which node is processed next?
`,
        options: ['1', '2', 'Depends', '0'],
        answer: 1,
        concept: 'dfs_stack_behavior',
        difficulty: 'medium',
      },
      {
        question: `
If DFS does not use a visited array, what will happen in cyclic graph?
`,
        options: [
          'Correct traversal',
          'Infinite recursion/loop',
          'Sorted order',
          'Faster execution',
        ],
        answer: 1,
        concept: 'dfs_cycle_issue',
        difficulty: 'medium',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
In DFS, using queue instead of stack results in:
`,
        options: [
          'DFS behavior',
          'BFS behavior',
          'Sorted graph',
          'No traversal',
        ],
        answer: 1,
        concept: 'dfs_vs_bfs',
        difficulty: 'easy',
      },
      {
        question: `
If visited marking is done after recursion call in DFS, what issue may occur?
`,
        options: [
          'Duplicate recursive calls',
          'Correct traversal',
          'Sorted nodes',
          'No issue',
        ],
        answer: 0,
        concept: 'dfs_visited_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix DFS recursive implementation in C++ where visited marking and recursion calls are incorrect.',
        language: 'cpp',
        code: [
          'void dfs(vector<vector<int>>& adj, int node, vector<bool>& visited){',
          '  visited[___] = true;',
          '',
          '  for(auto neighbor : adj[node]){',
          '    if(!visited[___]){',
          '      dfs(adj, ___, visited);',
          '    }',
          '  }',
          '}',
        ],
        blanks: [['node'], ['neighbor'], ['neighbor']],
        concept: 'dfs_cpp_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Java DFS recursion where incorrect node reference causes wrong traversal.',
        language: 'java',
        code: [
          'void dfs(List<List<Integer>> adj, int node, boolean[] visited){',
          '  visited[___] = true;',
          '',
          '  for(int neighbor : adj.get(node)){',
          '    if(!visited[___]){',
          '      dfs(adj, ___, visited);',
          '    }',
          '  }',
          '}',
        ],
        blanks: [['node'], ['neighbor'], ['neighbor']],
        concept: 'dfs_java_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Python DFS where recursion and visited handling are incorrect.',
        language: 'python',
        code: [
          'def dfs(adj, node, visited):',
          '    visited[___] = True',
          '',
          '    for neighbor in adj[node]:',
          '        if not visited[___]:',
          '            dfs(adj, ___, visited)',
        ],
        blanks: [['node'], ['neighbor'], ['neighbor']],
        concept: 'dfs_python_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix JavaScript DFS using stack where push/pop order is incorrect.',
        language: 'javascript',
        code: [
          'function dfs(adj, start){',
          '  let visited = new Array(adj.length).fill(false);',
          '  let stack = [];',
          '',
          '  stack.push(___);',
          '',
          '  while(stack.length > 0){',
          '    let node = stack.pop();',
          '',
          '    if(!visited[___]){',
          '      visited[___] = true;',
          '',
          '      for(let neighbor of adj[node]){',
          '        if(!visited[___]){',
          '          stack.push(___);',
          '        }',
          '      }',
          '    }',
          '  }',
          '}',
        ],
        blanks: [['start'], ['node'], ['node'], ['neighbor'], ['neighbor']],
        concept: 'dfs_stack_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix DFS for counting connected components where traversal logic is incomplete.',
        language: 'cpp',
        code: [
          'void dfs(vector<vector<int>>& adj, int node, vector<bool>& visited){',
          '  visited[___] = true;',
          '',
          '  for(auto neighbor : adj[node]){',
          '    if(!visited[___]){',
          '      dfs(adj, ___, visited);',
          '    }',
          '  }',
          '}',
          '',
          'int countComponents(vector<vector<int>>& adj){',
          '  vector<bool> visited(adj.size(), false);',
          '  int count = 0;',
          '',
          '  for(int i = 0; i < adj.size(); i++){',
          '    if(!visited[___]){',
          '      dfs(adj, ___, visited);',
          '      count++;',
          '    }',
          '  }',
          '',
          '  return count;',
          '}',
        ],
        blanks: [['node'], ['neighbor'], ['neighbor'], ['i'], ['i']],
        concept: 'dfs_components',
        difficulty: 'hard',
      },
    ],
  },
  dijkstra: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In Dijkstra’s Algorithm, what is the main goal when working with a weighted graph?',
        options: [
          'Traverse all nodes',
          'Find shortest path from source to all nodes',
          'Sort the graph',
          'Detect cycles',
        ],
        answer: 1,
        concept: 'dijkstra_goal',
        difficulty: 'easy',
      },
      {
        question:
          'Which data structure is used to efficiently pick the next minimum distance node in Dijkstra’s Algorithm?',
        options: ['Stack', 'Queue', 'Priority Queue (Min Heap)', 'Set'],
        answer: 2,
        concept: 'dijkstra_heap_usage',
        difficulty: 'easy',
      },
      {
        question:
          'Time complexity of Dijkstra’s Algorithm using a priority queue is:',
        options: ['O(V^2)', 'O(E log V)', 'O(V log V)', 'O(E^2)'],
        answer: 1,
        concept: 'dijkstra_complexity',
        difficulty: 'medium',
      },
      {
        question:
          'Dijkstra’s Algorithm does NOT work correctly for graphs with:',
        options: [
          'Positive weights',
          'Zero weights',
          'Negative weights',
          'Unweighted edges',
        ],
        answer: 2,
        concept: 'dijkstra_limitation',
        difficulty: 'medium',
      },
      {
        question:
          'What is the purpose of relaxation step in Dijkstra’s Algorithm?',
        options: [
          'To remove edges',
          'To update shortest distances',
          'To sort nodes',
          'To detect cycles',
        ],
        answer: 1,
        concept: 'dijkstra_relaxation',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
Using Dijkstra’s Algorithm, find shortest distance from node 0:

Graph:
0 → 1 (4), 2 (1)
2 → 1 (2), 3 (5)
1 → 3 (1)

What is shortest distance to node 3?
`,
        options: ['6', '5', '4', '3'],
        answer: 3,
        concept: 'dijkstra_path',
        difficulty: 'medium',
      },
      {
        question: `
In Dijkstra’s Algorithm, if a node is popped from priority queue with distance 10 but later a shorter path (5) is found, what happens?
`,
        options: [
          'Old value remains',
          'New value updates distance',
          'Algorithm fails',
          'Node is removed',
        ],
        answer: 1,
        concept: 'dijkstra_update',
        difficulty: 'medium',
      },
      {
        question: `
If priority queue is replaced with normal queue in Dijkstra’s Algorithm, what will happen?
`,
        options: [
          'Still correct',
          'Becomes BFS-like and incorrect',
          'Faster execution',
          'No traversal',
        ],
        answer: 1,
        concept: 'dijkstra_queue_issue',
        difficulty: 'medium',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If relaxation condition "dist[u] + weight < dist[v]" is not checked, what issue occurs?
`,
        options: [
          'Distances remain incorrect',
          'Graph becomes cyclic',
          'Algorithm speeds up',
          'No effect',
        ],
        answer: 0,
        concept: 'dijkstra_relaxation_bug',
        difficulty: 'medium',
      },
      {
        question: `
If visited array is not used in Dijkstra’s Algorithm, what happens?
`,
        options: [
          'Infinite loop',
          'Multiple unnecessary processing of nodes',
          'Correct output always',
          'Sorting fails',
        ],
        answer: 1,
        concept: 'dijkstra_visited_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix Dijkstra’s Algorithm in C++ where relaxation and priority queue logic is incorrect.',
        language: 'cpp',
        code: [
          'vector<int> dijkstra(vector<vector<pair<int,int>>>& adj, int start){',
          '  vector<int> dist(adj.size(), INT_MAX);',
          '  priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;',
          '',
          '  dist[___] = 0;',
          '  pq.push({0, ___});',
          '',
          '  while(!pq.empty()){',
          '    auto [d, node] = pq.top();',
          '    pq.pop();',
          '',
          '    for(auto [neighbor, weight] : adj[node]){',
          '      if(dist[node] + ___ < dist[___]){',
          '        dist[___] = dist[node] + ___;',
          '        pq.push({dist[___], ___});',
          '      }',
          '    }',
          '  }',
          '',
          '  return dist;',
          '}',
        ],
        blanks: [
          ['start'],
          ['start'],
          ['weight'],
          ['neighbor'],
          ['neighbor'],
          ['weight'],
          ['neighbor'],
          ['neighbor'],
        ],
        concept: 'dijkstra_cpp_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Java Dijkstra implementation where incorrect relaxation condition causes wrong distances.',
        language: 'java',
        code: [
          'int[] dijkstra(List<List<int[]>> adj, int start){',
          '  int[] dist = new int[adj.size()];',
          '  Arrays.fill(dist, Integer.MAX_VALUE);',
          '',
          '  PriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> a[0]-b[0]);',
          '',
          '  dist[___] = 0;',
          '  pq.add(new int[]{0, ___});',
          '',
          '  while(!pq.isEmpty()){',
          '    int[] curr = pq.poll();',
          '    int node = curr[1];',
          '',
          '    for(int[] edge : adj.get(node)){',
          '      int neighbor = edge[0];',
          '      int weight = edge[1];',
          '',
          '      if(dist[node] + ___ < dist[___]){',
          '        dist[___] = dist[node] + ___;',
          '        pq.add(new int[]{dist[___], ___});',
          '      }',
          '    }',
          '  }',
          '',
          '  return dist;',
          '}',
        ],
        blanks: [
          ['start'],
          ['start'],
          ['weight'],
          ['neighbor'],
          ['neighbor'],
          ['weight'],
          ['neighbor'],
          ['neighbor'],
        ],
        concept: 'dijkstra_java_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Python Dijkstra implementation where heap usage and relaxation logic is incorrect.',
        language: 'python',
        code: [
          'import heapq',
          '',
          'def dijkstra(adj, start):',
          '    dist = [float("inf")] * len(adj)',
          '    dist[___] = 0',
          '',
          '    pq = []',
          '    heapq.heappush(pq, (0, ___))',
          '',
          '    while pq:',
          '        d, node = heapq.heappop(pq)',
          '',
          '        for neighbor, weight in adj[node]:',
          '            if dist[node] + ___ < dist[___]:',
          '                dist[___] = dist[node] + ___',
          '                heapq.heappush(pq, (dist[___], ___))',
          '',
          '    return dist',
        ],
        blanks: [
          ['start'],
          ['start'],
          ['weight'],
          ['neighbor'],
          ['neighbor'],
          ['weight'],
          ['neighbor'],
          ['neighbor'],
        ],
        concept: 'dijkstra_python_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix JavaScript Dijkstra implementation where priority queue simulation is incorrect.',
        language: 'javascript',
        code: [
          'function dijkstra(adj, start){',
          '  let dist = new Array(adj.length).fill(Infinity);',
          '  dist[___] = 0;',
          '',
          '  let pq = [[0, ___]];',
          '',
          '  while(pq.length > 0){',
          '    pq.sort((a,b) => a[0] - b[0]);',
          '    let [d, node] = pq.shift();',
          '',
          '    for(let [neighbor, weight] of adj[node]){',
          '      if(dist[node] + ___ < dist[___]){',
          '        dist[___] = dist[node] + ___;',
          '        pq.push([dist[___], ___]);',
          '      }',
          '    }',
          '  }',
          '',
          '  return dist;',
          '}',
        ],
        blanks: [
          ['start'],
          ['start'],
          ['weight'],
          ['neighbor'],
          ['neighbor'],
          ['weight'],
          ['neighbor'],
          ['neighbor'],
        ],
        concept: 'dijkstra_js_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Dijkstra shortest path where stale entries in priority queue are not handled.',
        language: 'cpp',
        code: [
          'while(!pq.empty()){',
          '  auto [d, node] = pq.top();',
          '  pq.pop();',
          '',
          '  if(d > ___) continue;',
          '',
          '  for(auto [neighbor, weight] : adj[node]){',
          '    if(dist[node] + ___ < dist[___]){',
          '      dist[___] = dist[node] + ___;',
          '      pq.push({dist[___], ___});',
          '    }',
          '  }',
          '}',
        ],
        blanks: [
          ['dist[node]'],
          ['weight'],
          ['neighbor'],
          ['neighbor'],
          ['weight'],
          ['neighbor'],
          ['neighbor'],
        ],
        concept: 'dijkstra_stale_entries',
        difficulty: 'hard',
      },
    ],
  },
  bellman_ford: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In Bellman-Ford Algorithm, what is the main goal when applied to a weighted graph?',
        options: [
          'Traverse all nodes',
          'Find shortest path from source to all nodes',
          'Sort edges',
          'Detect only cycles',
        ],
        answer: 1,
        concept: 'bellman_goal',
        difficulty: 'easy',
      },
      {
        question:
          'Bellman-Ford Algorithm can handle which type of edge weights?',
        options: [
          'Only positive weights',
          'Only zero weights',
          'Both positive and negative weights',
          'Only unit weights',
        ],
        answer: 2,
        concept: 'bellman_negative_support',
        difficulty: 'easy',
      },
      {
        question:
          'How many times are edges relaxed in Bellman-Ford for a graph with V vertices?',
        options: ['V', 'V-1', 'E', 'E-1'],
        answer: 1,
        concept: 'bellman_relaxations',
        difficulty: 'medium',
      },
      {
        question: 'Time complexity of Bellman-Ford Algorithm is:',
        options: ['O(V + E)', 'O(E log V)', 'O(V * E)', 'O(V^2)'],
        answer: 2,
        concept: 'bellman_complexity',
        difficulty: 'medium',
      },
      {
        question: 'Bellman-Ford Algorithm can detect:',
        options: [
          'Positive cycles',
          'Negative weight cycles',
          'Only shortest path',
          'Only MST',
        ],
        answer: 1,
        concept: 'bellman_cycle_detection',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
Using Bellman-Ford Algorithm:

Edges:
0 → 1 (4)
0 → 2 (5)
1 → 2 (-3)

What is shortest distance from 0 to 2?
`,
        options: ['5', '1', '2', '3'],
        answer: 1,
        concept: 'bellman_shortest_path',
        difficulty: 'medium',
      },
      {
        question: `
In Bellman-Ford, after V-1 relaxations, what does an additional relaxation that still updates distance indicate?
`,
        options: [
          'Correct shortest path',
          'Negative cycle exists',
          'Graph is disconnected',
          'Algorithm failed',
        ],
        answer: 1,
        concept: 'bellman_negative_cycle',
        difficulty: 'medium',
      },
      {
        question: `
If Bellman-Ford runs only V-2 iterations instead of V-1, what happens?
`,
        options: [
          'Still correct always',
          'Some shortest paths may remain incorrect',
          'Faster and correct',
          'No effect',
        ],
        answer: 1,
        concept: 'bellman_iteration_issue',
        difficulty: 'medium',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If relaxation condition "dist[u] + weight < dist[v]" is skipped in Bellman-Ford, what happens?
`,
        options: [
          'Correct output',
          'Distances never update correctly',
          'Faster execution',
          'Graph becomes sorted',
        ],
        answer: 1,
        concept: 'bellman_relaxation_bug',
        difficulty: 'easy',
      },
      {
        question: `
If negative cycle check is not performed in Bellman-Ford, what issue occurs?
`,
        options: [
          'Incorrect shortest paths reported',
          'Algorithm stops early',
          'Graph becomes acyclic',
          'No effect',
        ],
        answer: 0,
        concept: 'bellman_cycle_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix Bellman-Ford implementation in C++ where relaxation logic and initialization are incorrect.',
        language: 'cpp',
        code: [
          'vector<int> bellmanFord(int V, vector<vector<int>>& edges, int start){',
          '  vector<int> dist(V, INT_MAX);',
          '',
          '  dist[___] = 0;',
          '',
          '  for(int i = 0; i < ___; i++){',
          '    for(auto edge : edges){',
          '      int u = edge[0], v = edge[1], w = edge[2];',
          '',
          '      if(dist[u] != ___ && dist[u] + ___ < dist[___]){',
          '        dist[___] = dist[u] + ___;',
          '      }',
          '    }',
          '  }',
          '',
          '  return dist;',
          '}',
        ],
        blanks: [['start'], ['V-1'], ['INT_MAX'], ['w'], ['v'], ['v'], ['w']],
        concept: 'bellman_cpp_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Java Bellman-Ford where iteration count and relaxation condition are wrong.',
        language: 'java',
        code: [
          'int[] bellmanFord(int V, List<int[]> edges, int start){',
          '  int[] dist = new int[V];',
          '  Arrays.fill(dist, Integer.MAX_VALUE);',
          '',
          '  dist[___] = 0;',
          '',
          '  for(int i = 0; i < ___; i++){',
          '    for(int[] edge : edges){',
          '      int u = edge[0], v = edge[1], w = edge[2];',
          '',
          '      if(dist[u] != ___ && dist[u] + ___ < dist[___]){',
          '        dist[___] = dist[u] + ___;',
          '      }',
          '    }',
          '  }',
          '',
          '  return dist;',
          '}',
        ],
        blanks: [
          ['start'],
          ['V-1'],
          ['Integer.MAX_VALUE'],
          ['w'],
          ['v'],
          ['v'],
          ['w'],
        ],
        concept: 'bellman_java_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Python Bellman-Ford where initialization and relaxation condition are missing.',
        language: 'python',
        code: [
          'def bellman_ford(V, edges, start):',
          '    dist = [float("inf")] * V',
          '',
          '    dist[___] = 0',
          '',
          '    for _ in range(___):',
          '        for u, v, w in edges:',
          '            if dist[u] != ___ and dist[u] + ___ < dist[___]:',
          '                dist[___] = dist[u] + ___',
          '',
          '    return dist',
        ],
        blanks: [
          ['start'],
          ['V-1'],
          ['float("inf")'],
          ['w'],
          ['v'],
          ['v'],
          ['w'],
        ],
        concept: 'bellman_python_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix JavaScript Bellman-Ford where edge relaxation and iteration loop are incorrect.',
        language: 'javascript',
        code: [
          'function bellmanFord(V, edges, start){',
          '  let dist = new Array(V).fill(Infinity);',
          '',
          '  dist[___] = 0;',
          '',
          '  for(let i = 0; i < ___; i++){',
          '    for(let [u, v, w] of edges){',
          '      if(dist[u] !== ___ && dist[u] + ___ < dist[___]){',
          '        dist[___] = dist[u] + ___;',
          '      }',
          '    }',
          '  }',
          '',
          '  return dist;',
          '}',
        ],
        blanks: [['start'], ['V-1'], ['Infinity'], ['w'], ['v'], ['v'], ['w']],
        concept: 'bellman_js_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Bellman-Ford negative cycle detection logic where final check is incomplete.',
        language: 'cpp',
        code: [
          'for(auto edge : edges){',
          '  int u = edge[0], v = edge[1], w = edge[2];',
          '',
          '  if(dist[u] != ___ && dist[u] + ___ < dist[___]){',
          '    cout << "Negative Cycle Detected";',
          '  }',
          '}',
        ],
        blanks: [['INT_MAX'], ['w'], ['v']],
        concept: 'bellman_cycle_fix',
        difficulty: 'medium',
      },
    ],
  },
  floyd_warshall: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In Floyd-Warshall Algorithm, what is the main goal when working with a weighted graph?',
        options: [
          'Find shortest path from one source',
          'Find shortest paths between all pairs of vertices',
          'Sort edges',
          'Detect only cycles',
        ],
        answer: 1,
        concept: 'fw_goal',
        difficulty: 'easy',
      },
      {
        question: 'Floyd-Warshall Algorithm is based on which technique?',
        options: [
          'Greedy',
          'Divide and Conquer',
          'Dynamic Programming',
          'Backtracking',
        ],
        answer: 2,
        concept: 'fw_dp',
        difficulty: 'easy',
      },
      {
        question: 'Time complexity of Floyd-Warshall Algorithm is:',
        options: ['O(V^2)', 'O(V log V)', 'O(V^3)', 'O(E log V)'],
        answer: 2,
        concept: 'fw_complexity',
        difficulty: 'easy',
      },
      {
        question: 'Floyd-Warshall Algorithm can handle:',
        options: [
          'Only positive weights',
          'Negative weights (no negative cycles)',
          'Only unweighted graphs',
          'Only trees',
        ],
        answer: 1,
        concept: 'fw_negative_weights',
        difficulty: 'medium',
      },
      {
        question: 'What does dp[i][j] represent in Floyd-Warshall Algorithm?',
        options: [
          'Weight of edge',
          'Shortest distance from i to j',
          'Number of paths',
          'Visited state',
        ],
        answer: 1,
        concept: 'fw_dp_meaning',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
Using Floyd-Warshall:

Initial matrix:
0  3  INF
2  0  5
INF 1  0

What is shortest path from 0 to 2?
`,
        options: ['8', '5', '7', '6'],
        answer: 1,
        concept: 'fw_path',
        difficulty: 'medium',
      },
      {
        question: `
If dp[i][k] + dp[k][j] < dp[i][j], what should Floyd-Warshall do?
`,
        options: ['Ignore', 'Update dp[i][j]', 'Delete node', 'Stop algorithm'],
        answer: 1,
        concept: 'fw_update',
        difficulty: 'easy',
      },
      {
        question: `
If after Floyd-Warshall dp[i][i] becomes negative, what does it indicate?
`,
        options: [
          'Shortest path found',
          'Negative cycle exists',
          'Graph is disconnected',
          'No path',
        ],
        answer: 1,
        concept: 'fw_negative_cycle',
        difficulty: 'medium',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If triple loop order in Floyd-Warshall is incorrect, what happens?
`,
        options: [
          'Correct result always',
          'Incorrect shortest paths',
          'Faster execution',
          'No change',
        ],
        answer: 1,
        concept: 'fw_loop_bug',
        difficulty: 'medium',
      },
      {
        question: `
If INF is not handled properly in Floyd-Warshall, what issue occurs?
`,
        options: [
          'Overflow or wrong distances',
          'Correct output',
          'Graph becomes tree',
          'No traversal',
        ],
        answer: 0,
        concept: 'fw_inf_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix Floyd-Warshall implementation in C++ where triple loop order and update logic are incorrect.',
        language: 'cpp',
        code: [
          'void floydWarshall(vector<vector<int>>& dist, int V){',
          '  for(int ___ = 0; ___ < V; ___++){',
          '    for(int ___ = 0; ___ < V; ___++){',
          '      for(int ___ = 0; ___ < V; ___++){',
          '        if(dist[i][___] + dist[___][j] < dist[i][j]){',
          '          dist[i][j] = dist[i][___] + dist[___][j];',
          '        }',
          '      }',
          '    }',
          '  }',
          '}',
        ],
        blanks: [
          ['k', 'k', 'k'],
          ['i', 'i', 'i'],
          ['j', 'j', 'j'],
          ['k', 'k', 'k'],
          ['k', 'k', 'k'],
          ['k', 'k', 'k'],
          ['k', 'k', 'k'],
        ],
        concept: 'fw_cpp_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Java Floyd-Warshall where INF handling and update condition are incorrect.',
        language: 'java',
        code: [
          'void floydWarshall(int[][] dist, int V){',
          '  for(int k = 0; k < V; k++){',
          '    for(int i = 0; i < V; i++){',
          '      for(int j = 0; j < V; j++){',
          '        if(dist[i][k] != ___ && dist[k][j] != ___ &&',
          '           dist[i][k] + dist[k][j] < dist[i][j]){',
          '          dist[i][j] = dist[i][k] + dist[k][j];',
          '        }',
          '      }',
          '    }',
          '  }',
          '}',
        ],
        blanks: [['Integer.MAX_VALUE'], ['Integer.MAX_VALUE']],
        concept: 'fw_java_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Python Floyd-Warshall implementation where update condition is incomplete.',
        language: 'python',
        code: [
          'def floyd_warshall(dist):',
          '    V = len(dist)',
          '',
          '    for k in range(V):',
          '        for i in range(V):',
          '            for j in range(V):',
          '                if dist[i][k] != ___ and dist[k][j] != ___ and \\',
          '                   dist[i][k] + dist[k][j] < dist[i][j]:',
          '                    dist[i][j] = dist[i][k] + dist[k][j]',
        ],
        blanks: [['float("inf")'], ['float("inf")']],
        concept: 'fw_python_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix JavaScript Floyd-Warshall where matrix update logic is incorrect.',
        language: 'javascript',
        code: [
          'function floydWarshall(dist){',
          '  let V = dist.length;',
          '',
          '  for(let k = 0; k < V; k++){',
          '    for(let i = 0; i < V; i++){',
          '      for(let j = 0; j < V; j++){',
          '        if(dist[i][k] !== ___ && dist[k][j] !== ___ &&',
          '           dist[i][k] + dist[k][j] < dist[i][j]){',
          '          dist[i][j] = dist[i][k] + dist[k][j];',
          '        }',
          '      }',
          '    }',
          '  }',
          '}',
        ],
        blanks: [['Infinity'], ['Infinity']],
        concept: 'fw_js_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Floyd-Warshall negative cycle detection logic using diagonal values.',
        language: 'cpp',
        code: [
          'for(int i = 0; i < V; i++){',
          '  if(dist[i][___] < ___){',
          '    cout << "Negative Cycle Detected";',
          '  }',
          '}',
        ],
        blanks: [['i'], ['0']],
        concept: 'fw_cycle_fix',
        difficulty: 'medium',
      },
    ],
  },
  astar: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In A* Algorithm, what is the main goal when searching in a graph?',
        options: [
          'Traverse all nodes',
          'Find shortest path using heuristic + cost',
          'Sort nodes',
          'Detect cycles',
        ],
        answer: 1,
        concept: 'astar_goal',
        difficulty: 'easy',
      },
      {
        question: 'In A* Algorithm, what does f(n) represent?',
        options: [
          'Only heuristic',
          'Only distance from start',
          'g(n) + h(n)',
          'Number of nodes',
        ],
        answer: 2,
        concept: 'astar_formula',
        difficulty: 'easy',
      },
      {
        question: 'In A*, what does g(n) represent?',
        options: [
          'Estimated cost to goal',
          'Actual cost from start to node',
          'Total nodes',
          'Weight of graph',
        ],
        answer: 1,
        concept: 'astar_g',
        difficulty: 'easy',
      },
      {
        question: 'In A*, what does h(n) represent?',
        options: [
          'Actual distance',
          'Heuristic estimate to goal',
          'Edge weight',
          'Node degree',
        ],
        answer: 1,
        concept: 'astar_h',
        difficulty: 'easy',
      },
      {
        question: 'A* becomes Dijkstra’s Algorithm when:',
        options: ['h(n) = 0', 'g(n) = 0', 'f(n) = 0', 'Graph is unweighted'],
        answer: 0,
        concept: 'astar_vs_dijkstra',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
In A*, if two nodes have same f(n), which one is preferred?
`,
        options: ['Higher g(n)', 'Lower g(n)', 'Random', 'Always left node'],
        answer: 1,
        concept: 'astar_tiebreak',
        difficulty: 'medium',
      },
      {
        question: `
If heuristic h(n) overestimates actual cost, what happens in A*?
`,
        options: [
          'Still optimal',
          'May give incorrect shortest path',
          'Faster and correct',
          'No effect',
        ],
        answer: 1,
        concept: 'astar_overestimate',
        difficulty: 'medium',
      },
      {
        question: `
If heuristic is always 0, what is behavior of A*?
`,
        options: ['DFS', 'BFS', 'Dijkstra', 'Greedy'],
        answer: 2,
        concept: 'astar_zero_heuristic',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If priority queue sorts only by g(n) instead of f(n), what happens?
`,
        options: [
          'Correct A*',
          'Behaves like Dijkstra',
          'Behaves like BFS',
          'Fails completely',
        ],
        answer: 1,
        concept: 'astar_sort_bug',
        difficulty: 'medium',
      },
      {
        question: `
If visited nodes are not tracked in A*, what issue may occur?
`,
        options: [
          'Infinite loops or repeated work',
          'Correct execution',
          'Faster execution',
          'Sorted nodes',
        ],
        answer: 0,
        concept: 'astar_visited_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix A* implementation in C++ where f(n), g(n), and priority queue logic are incorrect.',
        language: 'cpp',
        code: [
          'vector<int> astar(vector<vector<pair<int,int>>>& adj, int start, int goal){',
          '  vector<int> g(adj.size(), INT_MAX);',
          '  priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;',
          '',
          '  g[___] = 0;',
          '  pq.push({___, ___});',
          '',
          '  while(!pq.empty()){',
          '    auto [f, node] = pq.top();',
          '    pq.pop();',
          '',
          '    if(node == ___) break;',
          '',
          '    for(auto [neighbor, weight] : adj[node]){',
          '      int new_g = g[node] + ___;',
          '',
          '      if(new_g < g[___]){',
          '        g[___] = new_g;',
          '        int f_val = new_g + ___;',
          '        pq.push({___, ___});',
          '      }',
          '    }',
          '  }',
          '',
          '  return g;',
          '}',
        ],
        blanks: [
          ['start'],
          ['0'],
          ['start'],
          ['goal'],
          ['weight'],
          ['neighbor'],
          ['neighbor'],
          ['h(neighbor)', 'heuristic(neighbor)'],
          ['f_val'],
          ['neighbor'],
        ],
        concept: 'astar_cpp_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Java A* where heuristic and priority queue ordering are incorrect.',
        language: 'java',
        code: [
          'int astar(List<List<int[]>> adj, int start, int goal){',
          '  int[] g = new int[adj.size()];',
          '  Arrays.fill(g, Integer.MAX_VALUE);',
          '',
          '  PriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> a[0] - b[0]);',
          '',
          '  g[___] = 0;',
          '  pq.add(new int[]{0, ___});',
          '',
          '  while(!pq.isEmpty()){',
          '    int[] curr = pq.poll();',
          '    int node = curr[1];',
          '',
          '    if(node == ___) break;',
          '',
          '    for(int[] edge : adj.get(node)){',
          '      int neighbor = edge[0];',
          '      int weight = edge[1];',
          '',
          '      int new_g = g[node] + ___;',
          '',
          '      if(new_g < g[___]){',
          '        g[___] = new_g;',
          '        int f = new_g + ___;',
          '        pq.add(new int[]{___, ___});',
          '      }',
          '    }',
          '  }',
          '',
          '  return g[goal];',
          '}',
        ],
        blanks: [
          ['start'],
          ['start'],
          ['goal'],
          ['weight'],
          ['neighbor'],
          ['neighbor'],
          ['heuristic(neighbor)', 'h(neighbor)'],
          ['f'],
          ['neighbor'],
        ],
        concept: 'astar_java_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Python A* implementation where heap usage and heuristic are missing.',
        language: 'python',
        code: [
          'import heapq',
          '',
          'def astar(adj, start, goal):',
          '    g = [float("inf")] * len(adj)',
          '    g[___] = 0',
          '',
          '    pq = []',
          '    heapq.heappush(pq, (0, ___))',
          '',
          '    while pq:',
          '        f, node = heapq.heappop(pq)',
          '',
          '        if node == ___:',
          '            break',
          '',
          '        for neighbor, weight in adj[node]:',
          '            new_g = g[node] + ___',
          '',
          '            if new_g < g[___]:',
          '                g[___] = new_g',
          '                f_val = new_g + ___',
          '                heapq.heappush(pq, (___, ___))',
          '',
          '    return g[goal]',
        ],
        blanks: [
          ['start'],
          ['start'],
          ['goal'],
          ['weight'],
          ['neighbor'],
          ['neighbor'],
          ['heuristic(neighbor)', 'h(neighbor)'],
          ['f_val'],
          ['neighbor'],
        ],
        concept: 'astar_python_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix JavaScript A* where sorting logic and heuristic are incorrect.',
        language: 'javascript',
        code: [
          'function astar(adj, start, goal){',
          '  let g = new Array(adj.length).fill(Infinity);',
          '  g[___] = 0;',
          '',
          '  let pq = [[0, ___]];',
          '',
          '  while(pq.length > 0){',
          '    pq.sort((a,b) => a[0] - b[0]);',
          '    let [f, node] = pq.shift();',
          '',
          '    if(node === ___) break;',
          '',
          '    for(let [neighbor, weight] of adj[node]){',
          '      let new_g = g[node] + ___;',
          '',
          '      if(new_g < g[___]){',
          '        g[___] = new_g;',
          '        let f_val = new_g + ___;',
          '        pq.push([___, ___]);',
          '      }',
          '    }',
          '  }',
          '',
          '  return g[goal];',
          '}',
        ],
        blanks: [
          ['start'],
          ['start'],
          ['goal'],
          ['weight'],
          ['neighbor'],
          ['neighbor'],
          ['heuristic(neighbor)', 'h(neighbor)'],
          ['f_val'],
          ['neighbor'],
        ],
        concept: 'astar_js_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix A* heuristic consistency check where incorrect heuristic leads to suboptimal paths.',
        language: 'cpp',
        code: [
          'if(___(node) > ___ + ___(neighbor)){',
          '  cout << "Heuristic not consistent";',
          '}',
        ],
        blanks: [['h'], ['weight'], ['h']],
        concept: 'astar_consistency',
        difficulty: 'medium',
      },
    ],
  },
  prims: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In Prim’s Algorithm, what is the main goal when working with a graph?',
        options: [
          'Find shortest path',
          'Find Minimum Spanning Tree',
          'Sort edges',
          'Detect cycles',
        ],
        answer: 1,
        concept: 'prims_goal',
        difficulty: 'easy',
      },
      {
        question: 'Prim’s Algorithm belongs to which category?',
        options: [
          'Dynamic Programming',
          'Greedy Algorithm',
          'Divide and Conquer',
          'Backtracking',
        ],
        answer: 1,
        concept: 'prims_type',
        difficulty: 'easy',
      },
      {
        question: 'Prim’s Algorithm works best with which data structure?',
        options: ['Stack', 'Queue', 'Priority Queue (Min Heap)', 'Array only'],
        answer: 2,
        concept: 'prims_pq',
        difficulty: 'easy',
      },
      {
        question:
          'Time complexity of Prim’s Algorithm using priority queue is:',
        options: ['O(V^2)', 'O(E log V)', 'O(V log V)', 'O(E^2)'],
        answer: 1,
        concept: 'prims_complexity',
        difficulty: 'medium',
      },
      {
        question: 'Prim’s Algorithm is applicable to:',
        options: [
          'Directed graphs',
          'Undirected weighted graphs',
          'Only trees',
          'Unweighted graphs',
        ],
        answer: 1,
        concept: 'prims_graph_type',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
Consider graph edges:
(0-1,2), (1-2,3), (0-2,1)

Using Prim’s Algorithm starting from node 0, what is MST cost?
`,
        options: ['3', '4', '5', '6'],
        answer: 0,
        concept: 'prims_output',
        difficulty: 'medium',
      },
      {
        question: `
In Prim’s Algorithm, which edge is chosen at each step?
`,
        options: [
          'Largest edge',
          'Random edge',
          'Minimum weight edge connecting MST to new node',
          'All edges',
        ],
        answer: 2,
        concept: 'prims_choice',
        difficulty: 'easy',
      },
      {
        question: `
If graph is disconnected, what does Prim’s Algorithm produce?
`,
        options: ['Shortest path', 'Minimum spanning forest', 'Error', 'Cycle'],
        answer: 1,
        concept: 'prims_disconnected',
        difficulty: 'medium',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If visited array is not used in Prim’s Algorithm, what issue occurs?
`,
        options: [
          'Infinite loop or cycles',
          'Correct MST',
          'Faster execution',
          'No edges added',
        ],
        answer: 0,
        concept: 'prims_visited_bug',
        difficulty: 'medium',
      },
      {
        question: `
If priority queue stores edges incorrectly, what happens?
`,
        options: [
          'Correct MST always',
          'Incorrect MST',
          'Faster result',
          'Graph becomes tree',
        ],
        answer: 1,
        concept: 'prims_pq_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix Prim’s Algorithm in C++ where priority queue and visited logic are incorrect.',
        language: 'cpp',
        code: [
          'int prims(int V, vector<vector<pair<int,int>>>& adj){',
          '  vector<int> visited(V, 0);',
          '  priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;',
          '',
          '  pq.push({0, ___});',
          '  int cost = 0;',
          '',
          '  while(!pq.empty()){',
          '    auto [wt, node] = pq.top();',
          '    pq.pop();',
          '',
          '    if(visited[___]) continue;',
          '    visited[___] = 1;',
          '',
          '    cost += ___;',
          '',
          '    for(auto [adjNode, edgeWt] : adj[node]){',
          '      if(!visited[___]){',
          '        pq.push({___, ___});',
          '      }',
          '    }',
          '  }',
          '',
          '  return cost;',
          '}',
        ],
        blanks: [
          ['0'],
          ['node'],
          ['node'],
          ['wt'],
          ['adjNode'],
          ['edgeWt'],
          ['adjNode'],
        ],
        concept: 'prims_cpp_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Java Prim’s Algorithm where edge selection and visited logic are incorrect.',
        language: 'java',
        code: [
          'int prims(int V, List<List<int[]>> adj){',
          '  boolean[] visited = new boolean[V];',
          '  PriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> a[0]-b[0]);',
          '',
          '  pq.add(new int[]{0, ___});',
          '  int cost = 0;',
          '',
          '  while(!pq.isEmpty()){',
          '    int[] curr = pq.poll();',
          '    int wt = curr[0];',
          '    int node = curr[1];',
          '',
          '    if(visited[___]) continue;',
          '    visited[___] = true;',
          '',
          '    cost += ___;',
          '',
          '    for(int[] edge : adj.get(node)){',
          '      int next = edge[0];',
          '      int weight = edge[1];',
          '',
          '      if(!visited[___]){',
          '        pq.add(new int[]{___, ___});',
          '      }',
          '    }',
          '  }',
          '',
          '  return cost;',
          '}',
        ],
        blanks: [
          ['0'],
          ['node'],
          ['node'],
          ['wt'],
          ['next'],
          ['weight'],
          ['next'],
        ],
        concept: 'prims_java_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Python Prim’s Algorithm where heap usage and visited condition are incorrect.',
        language: 'python',
        code: [
          'import heapq',
          '',
          'def prims(adj):',
          '    V = len(adj)',
          '    visited = [False] * V',
          '',
          '    pq = []',
          '    heapq.heappush(pq, (0, ___))',
          '',
          '    cost = 0',
          '',
          '    while pq:',
          '        wt, node = heapq.heappop(pq)',
          '',
          '        if visited[___]:',
          '            continue',
          '',
          '        visited[___] = True',
          '        cost += ___',
          '',
          '        for neighbor, weight in adj[node]:',
          '            if not visited[___]:',
          '                heapq.heappush(pq, (___, ___))',
          '',
          '    return cost',
        ],
        blanks: [
          ['0'],
          ['node'],
          ['node'],
          ['wt'],
          ['neighbor'],
          ['weight'],
          ['neighbor'],
        ],
        concept: 'prims_python_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix JavaScript Prim’s Algorithm where sorting and MST logic are incorrect.',
        language: 'javascript',
        code: [
          'function prims(adj){',
          '  let V = adj.length;',
          '  let visited = new Array(V).fill(false);',
          '',
          '  let pq = [[0, ___]];',
          '  let cost = 0;',
          '',
          '  while(pq.length > 0){',
          '    pq.sort((a,b) => a[0] - b[0]);',
          '    let [wt, node] = pq.shift();',
          '',
          '    if(visited[___]) continue;',
          '',
          '    visited[___] = true;',
          '    cost += ___;',
          '',
          '    for(let [neighbor, weight] of adj[node]){',
          '      if(!visited[___]){',
          '        pq.push([___, ___]);',
          '      }',
          '    }',
          '  }',
          '',
          '  return cost;',
          '}',
        ],
        blanks: [
          ['0'],
          ['node'],
          ['node'],
          ['wt'],
          ['neighbor'],
          ['weight'],
          ['neighbor'],
        ],
        concept: 'prims_js_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Prim’s Algorithm initialization where starting node is not properly set.',
        language: 'cpp',
        code: [
          'priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;',
          '',
          'vector<int> visited(V, 0);',
          '',
          'pq.push({___, ___});',
        ],
        blanks: [['0'], ['0']],
        concept: 'prims_init_fix',
        difficulty: 'easy',
      },
    ],
  },
  kruskals: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In Kruskal’s Algorithm, what is the primary goal when working with a graph?',
        options: [
          'Find shortest path',
          'Find Minimum Spanning Tree',
          'Traverse all nodes',
          'Detect cycles only',
        ],
        answer: 1,
        concept: 'kruskal_goal',
        difficulty: 'easy',
      },
      {
        question: 'Kruskal’s Algorithm is based on which technique?',
        options: [
          'Dynamic Programming',
          'Greedy Algorithm',
          'Backtracking',
          'Divide and Conquer',
        ],
        answer: 1,
        concept: 'kruskal_type',
        difficulty: 'easy',
      },
      {
        question: 'What data structure is essential for Kruskal’s Algorithm?',
        options: ['Queue', 'Stack', 'Disjoint Set (Union-Find)', 'Array only'],
        answer: 2,
        concept: 'kruskal_dsu',
        difficulty: 'easy',
      },
      {
        question: 'Time complexity of Kruskal’s Algorithm is dominated by:',
        options: ['Traversal', 'Sorting edges', 'Union operation', 'DFS'],
        answer: 1,
        concept: 'kruskal_complexity',
        difficulty: 'medium',
      },
      {
        question: 'Kruskal’s Algorithm processes edges in what order?',
        options: [
          'Random',
          'Descending weight',
          'Ascending weight',
          'By nodes',
        ],
        answer: 2,
        concept: 'kruskal_sort',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
Consider edges:
(0-1,4), (1-2,2), (0-2,3)

Using Kruskal’s Algorithm, what is MST cost?
`,
        options: ['5', '6', '7', '9'],
        answer: 0,
        concept: 'kruskal_output',
        difficulty: 'medium',
      },
      {
        question: `
In Kruskal’s Algorithm, when is an edge included in MST?
`,
        options: [
          'Always include',
          'If it forms a cycle',
          'If it does not form a cycle',
          'Only if weight is largest',
        ],
        answer: 2,
        concept: 'kruskal_choice',
        difficulty: 'easy',
      },
      {
        question: `
If graph is disconnected, Kruskal’s Algorithm produces:
`,
        options: [
          'Shortest path',
          'Minimum spanning forest',
          'Error',
          'Cycle graph',
        ],
        answer: 1,
        concept: 'kruskal_disconnected',
        difficulty: 'medium',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If union-find is not used in Kruskal’s Algorithm, what happens?
`,
        options: [
          'Correct MST',
          'Cycle detection fails',
          'Faster execution',
          'No edges selected',
        ],
        answer: 1,
        concept: 'kruskal_dsu_bug',
        difficulty: 'medium',
      },
      {
        question: `
If edges are not sorted before processing, what happens?
`,
        options: [
          'Correct MST',
          'Incorrect MST',
          'Faster algorithm',
          'Graph becomes tree',
        ],
        answer: 1,
        concept: 'kruskal_sort_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix Kruskal’s Algorithm in C++ where sorting and DSU logic are incorrect.',
        language: 'cpp',
        code: [
          'struct Edge { int u, v, wt; };',
          '',
          'bool cmp(Edge a, Edge b){',
          '  return a.wt ___ b.wt;',
          '}',
          '',
          'int kruskal(int V, vector<Edge>& edges){',
          '  sort(edges.begin(), edges.end(), ___);',
          '',
          '  vector<int> parent(V);',
          '  for(int i=0;i<V;i++) parent[i]=i;',
          '',
          '  int cost = 0;',
          '',
          '  for(auto e : edges){',
          '    int pu = find(parent, ___);',
          '    int pv = find(parent, ___);',
          '',
          '    if(pu != pv){',
          '      cost += ___;',
          '      unionSet(parent, pu, pv);',
          '    }',
          '  }',
          '',
          '  return cost;',
          '}',
        ],
        blanks: [['<'], ['cmp'], ['e.u'], ['e.v'], ['e.wt']],
        concept: 'kruskal_cpp_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Java Kruskal implementation where union-find and edge processing are incorrect.',
        language: 'java',
        code: [
          'int kruskal(int V, List<int[]> edges){',
          '  edges.sort((a,b) -> a[2] - b[2]);',
          '',
          '  int[] parent = new int[V];',
          '  for(int i=0;i<V;i++) parent[i]=i;',
          '',
          '  int cost = 0;',
          '',
          '  for(int[] e : edges){',
          '    int u = e[0], v = e[1], w = e[2];',
          '',
          '    int pu = find(parent, ___);',
          '    int pv = find(parent, ___);',
          '',
          '    if(pu != pv){',
          '      cost += ___;',
          '      union(parent, pu, pv);',
          '    }',
          '  }',
          '',
          '  return cost;',
          '}',
        ],
        blanks: [['u'], ['v'], ['w']],
        concept: 'kruskal_java_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Python Kruskal implementation where sorting and DSU are incorrect.',
        language: 'python',
        code: [
          'def kruskal(V, edges):',
          '    edges.sort(key=lambda x: ___)',
          '',
          '    parent = list(range(V))',
          '',
          '    cost = 0',
          '',
          '    for u, v, w in edges:',
          '        pu = find(parent, ___)',
          '        pv = find(parent, ___)',
          '',
          '        if pu != pv:',
          '            cost += ___',
          '            union(parent, pu, pv)',
          '',
          '    return cost',
        ],
        blanks: [['x[2]'], ['u'], ['v'], ['w']],
        concept: 'kruskal_python_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix JavaScript Kruskal implementation where sorting and cycle detection are incorrect.',
        language: 'javascript',
        code: [
          'function kruskal(V, edges){',
          '  edges.sort((a,b) => a[2] - b[2]);',
          '',
          '  let parent = Array.from({length: V}, (_, i) => i);',
          '',
          '  let cost = 0;',
          '',
          '  for(let [u,v,w] of edges){',
          '    let pu = find(parent, ___);',
          '    let pv = find(parent, ___);',
          '',
          '    if(pu !== pv){',
          '      cost += ___;',
          '      union(parent, pu, pv);',
          '    }',
          '  }',
          '',
          '  return cost;',
          '}',
        ],
        blanks: [['u'], ['v'], ['w']],
        concept: 'kruskal_js_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix union-find find() function where path compression is missing.',
        language: 'cpp',
        code: [
          'int find(vector<int>& parent, int x){',
          '  if(parent[x] != ___)',
          '    parent[x] = find(parent, parent[x]);',
          '  return ___;',
          '}',
        ],
        blanks: [['x'], ['parent[x]']],
        concept: 'kruskal_dsu_fix',
        difficulty: 'medium',
      },
    ],
  },
};

export default graphDataset;
