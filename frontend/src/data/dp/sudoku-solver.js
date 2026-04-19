const sudokuSolver = {
  id: 'sudoku-solver',
  title: 'Sudoku Solver',
  difficulty: 'Advanced',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(9^(n²))',
  best: 'O(n²)',
  average: 'O(9^(n²))',
  worst: 'O(9^(n²))',
  space: 'O(n²)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
In the best case, the Sudoku grid is almost filled and requires minimal recursion.

Only a few empty cells need to be filled.

Time Complexity: O(n²)
Space Complexity: O(n²) for storing the board.

Practical Scenario:
Nearly completed Sudoku puzzles.
      `,
    },
    average: {
      description: `
In average cases, multiple recursive branches are explored.

Each empty cell may try up to 9 possibilities.

Backtracking prunes invalid paths.

Time Complexity: O(9^(n²))
Space Complexity: O(n²)

Practical Scenario:
Moderately difficult Sudoku puzzles.
      `,
    },
    worst: {
      description: `
Worst case occurs when the board is mostly empty.

Every cell may attempt 9 values leading to exponential branching.

Backtracking explores many possibilities.

Time Complexity: O(9^(n²))
Space Complexity: O(n²)

Practical Scenario:
Very difficult or empty Sudoku grids.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Sudoku Solver uses backtracking to fill a 9×9 grid such that each row, column, and 3×3 subgrid contains numbers from 1 to 9 without repetition.',

  intuition:
    'Try placing numbers in empty cells one by one. If a number violates Sudoku rules, backtrack and try another number. Continue until the grid is solved.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Given a partially filled Sudoku grid, fill all empty cells.',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Find an empty cell', 'Try placing numbers 1 to 9'],
      },
      {
        pass: 'Step 2',
        steps: ['Check if the number is valid in row, column, and subgrid'],
      },
      {
        pass: 'Step 3',
        steps: [
          'If valid → place number and move forward',
          'If not → try next number',
        ],
      },
      {
        pass: 'Step 4',
        steps: ['If stuck → backtrack and change previous decisions'],
      },
      {
        pass: 'Final Result',
        steps: ['All cells filled correctly → Sudoku solved'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Find an empty cell in the grid.',
    'Try placing numbers from 1 to 9.',
    'Check if the number is valid.',
    'If valid, place the number and recurse.',
    'If recursion fails, backtrack.',
    'Repeat until the grid is complete.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION solve(board):',
    '  find empty cell',
    '  if none:',
    '    return true',
    '  for num = 1 to 9:',
    '    if valid(board, num):',
    '      place num',
    '      if solve(board):',
    '        return true',
    '      remove num (backtrack)',
    '  return false',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used in constraint satisfaction problems, puzzles, and backtracking-based search problems where multiple choices must be explored and validated.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Guarantees correct solution if one exists',
    'Demonstrates powerful backtracking technique',
    'Works for all valid Sudoku inputs',
    'Teaches constraint checking and pruning',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Exponential time complexity',
    'Can be slow for difficult puzzles',
    'Requires careful constraint checking',
    'Not efficient without optimizations',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'What technique is used in Sudoku Solver?',
      options: [
        'Greedy',
        'Backtracking',
        'Dynamic Programming',
        'Divide & Conquer',
      ],
      answer: 1,
    },
    {
      question: 'What is checked before placing a number?',
      options: ['Sorting', 'Row, column, subgrid', 'Stack', 'Queue'],
      answer: 1,
    },
    {
      question: 'What happens if a choice fails?',
      options: ['Skip', 'Break', 'Backtrack', 'Restart'],
      answer: 2,
    },
    {
      question: 'Max choices per cell?',
      options: ['1', '5', '9', '10'],
      answer: 2,
    },
    {
      question: 'Time complexity is:',
      options: ['O(n)', 'O(log n)', 'O(9^(n²))', 'O(n²)'],
      answer: 2,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>
#include <stdbool.h>

bool isValid(int board[9][9], int row, int col, int num) {
    for(int i=0;i<9;i++){
        if(board[row][i]==num || board[i][col]==num)
            return false;
    }
    int sr = row - row%3;
    int sc = col - col%3;
    for(int i=0;i<3;i++)
        for(int j=0;j<3;j++)
            if(board[sr+i][sc+j]==num)
                return false;
    return true;
}
`,

    cpp: `
bool isValid(vector<vector<int>>& board, int r, int c, int num){
    for(int i=0;i<9;i++){
        if(board[r][i]==num || board[i][c]==num) return false;
    }
    int sr=r-r%3, sc=c-c%3;
    for(int i=0;i<3;i++)
        for(int j=0;j<3;j++)
            if(board[sr+i][sc+j]==num) return false;
    return true;
}
`,

    java: `
boolean isValid(char[][] board, int r, int c, char num) {
    for(int i=0;i<9;i++){
        if(board[r][i]==num || board[i][c]==num) return false;
    }
    int sr=r-r%3, sc=c-c%3;
    for(int i=0;i<3;i++)
        for(int j=0;j<3;j++)
            if(board[sr+i][sc+j]==num) return false;
    return true;
}
`,

    python: `
def is_valid(board, r, c, num):
    for i in range(9):
        if board[r][i] == num or board[i][c] == num:
            return False
    sr, sc = r - r%3, c - c%3
    for i in range(3):
        for j in range(3):
            if board[sr+i][sc+j] == num:
                return False
    return True
`,

    js: `
function isValid(board, r, c, num) {
  for (let i = 0; i < 9; i++) {
    if (board[r][i] === num || board[i][c] === num) return false;
  }
  let sr = r - (r % 3);
  let sc = c - (c % 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[sr + i][sc + j] === num) return false;
    }
  }
  return true;
}
`,
  },
};

export default sudokuSolver;
