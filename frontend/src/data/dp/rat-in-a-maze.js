const ratInMaze = {
  id: 'rat-in-a-maze',
  title: 'Rat in a Maze',
  difficulty: 'Intermediate',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(2^(n²))',
  best: 'O(n²)',
  average: 'O(2^(n²))',
  worst: 'O(2^(n²))',
  space: 'O(n²)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
In the best case, the correct path is found immediately without exploring alternatives.

The rat moves directly from start to destination.

Time Complexity: O(n²)
Space Complexity: O(n²) for recursion stack and path storage.

Practical Scenario:
Straightforward path with minimal obstacles.
      `,
    },
    average: {
      description: `
The rat explores multiple paths due to branching.

At each cell, it may try moving in different directions.

Backtracking eliminates invalid paths.

Time Complexity: O(2^(n²))
Space Complexity: O(n²)

Practical Scenario:
Maze with moderate obstacles and multiple possible paths.
      `,
    },
    worst: {
      description: `
Worst case occurs when the maze has many dead ends.

The algorithm explores almost all possible paths before finding a solution.

Time Complexity: O(2^(n²))
Space Complexity: O(n²)

Practical Scenario:
Highly complex maze with many blocked paths.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Rat in a Maze is a backtracking problem where a rat must find a path from the top-left corner to the bottom-right corner of a grid while avoiding blocked cells.',

  intuition:
    'Start from the initial cell and try moving in all possible directions. If a move leads to a dead end, backtrack and try another direction until a valid path is found.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description:
      'Consider a 4×4 maze where 1 represents open cells and 0 represents blocked cells.',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Start at (0,0)', 'Check possible moves (right, down)'],
      },
      {
        pass: 'Step 2',
        steps: ['Move to a valid cell', 'Mark it as part of path'],
      },
      {
        pass: 'Step 3',
        steps: ['If blocked or visited → try another direction'],
      },
      {
        pass: 'Step 4',
        steps: ['If no moves possible → backtrack'],
      },
      {
        pass: 'Final Result',
        steps: ['Reach destination (n-1, n-1)', 'Path successfully found'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Start at the top-left cell (0,0).',
    'Check if the current cell is valid.',
    'Mark the cell as part of the path.',
    'Move in possible directions (right, down, left, up).',
    'If a move leads to solution → return true.',
    'If not → backtrack and unmark cell.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION solve(x, y):',
    '  if (x,y) is destination:',
    '    return true',
    '  if valid(x,y):',
    '    mark (x,y)',
    '    if solve(x+1,y) OR solve(x,y+1) OR solve(x-1,y) OR solve(x,y-1):',
    '      return true',
    '    unmark (backtrack)',
    '  return false',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used in pathfinding problems, maze solving, robotics navigation, and constraint-based search problems.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Finds valid path if one exists',
    'Demonstrates backtracking clearly',
    'Works for all maze configurations',
    'Good visualization problem',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Exponential time complexity',
    'Explores many unnecessary paths',
    'Requires careful handling of visited cells',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'What technique is used?',
      options: ['Greedy', 'Backtracking', 'DP', 'Sorting'],
      answer: 1,
    },
    {
      question: 'What does 0 represent?',
      options: ['Path', 'Blocked cell', 'Start', 'End'],
      answer: 1,
    },
    {
      question: 'What happens when stuck?',
      options: ['Restart', 'Backtrack', 'Stop', 'Skip'],
      answer: 1,
    },
    {
      question: 'Goal position?',
      options: ['(0,0)', '(n-1,n-1)', '(1,1)', '(n,n)'],
      answer: 1,
    },
    {
      question: 'Time complexity?',
      options: ['O(n)', 'O(log n)', 'O(2^(n²))', 'O(n²)'],
      answer: 2,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdbool.h>

bool solve(int maze[4][4], int x, int y) {
    if (x == 3 && y == 3) return true;
    if (maze[x][y] == 1) {
        maze[x][y] = 2;
        if (solve(maze, x+1, y) || solve(maze, x, y+1))
            return true;
        maze[x][y] = 1;
    }
    return false;
}
`,

    cpp: `
bool solve(vector<vector<int>>& maze, int x, int y){
    if(x==n-1 && y==n-1) return true;
    if(maze[x][y]==1){
        maze[x][y]=2;
        if(solve(maze,x+1,y) || solve(maze,x,y+1))
            return true;
        maze[x][y]=1;
    }
    return false;
}
`,

    java: `
boolean solve(int[][] maze, int x, int y){
    if(x==n-1 && y==n-1) return true;
    if(maze[x][y]==1){
        maze[x][y]=2;
        if(solve(maze,x+1,y) || solve(maze,x,y+1))
            return true;
        maze[x][y]=1;
    }
    return false;
}
`,

    python: `
def solve(maze, x, y):
    if x == n-1 and y == n-1:
        return True
    if maze[x][y] == 1:
        maze[x][y] = 2
        if solve(maze, x+1, y) or solve(maze, x, y+1):
            return True
        maze[x][y] = 1
    return False
`,

    js: `
function solve(maze, x, y) {
  if (x === n - 1 && y === n - 1) return true;
  if (maze[x][y] === 1) {
    maze[x][y] = 2;
    if (solve(maze, x + 1, y) || solve(maze, x, y + 1))
      return true;
    maze[x][y] = 1;
  }
  return false;
}
`,
  },
};

export default ratInMaze;
