const towerOfHanoi = {
  id: 'tower-of-hanoi',
  title: 'Tower of Hanoi',
  difficulty: 'Intermediate',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(2^n)',
  best: 'O(2^n)',
  average: 'O(2^n)',
  worst: 'O(2^n)',
  space: 'O(n)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Even in the best case, Tower of Hanoi must move all disks.

The recurrence relation is:
T(n) = 2T(n-1) + 1

This expands to:
T(n) = 2^n - 1

Time Complexity: O(2^n)

The number of moves doubles with each additional disk.
      `,
    },
    average: {
      description: `
There is no variation in behavior.
Tower of Hanoi always requires exactly 2^n - 1 moves.

Average Case Time Complexity: O(2^n)
      `,
    },
    worst: {
      description: `
Worst case is same as best and average.

For n disks:
Minimum Moves = 2^n - 1

This exponential growth makes it inefficient for large n.

Worst Case Time Complexity: O(2^n)
      `,
    },
    space: {
      description: `
Recursive solution uses the call stack.

Maximum recursion depth = n

Space Complexity: O(n)

No additional data structures are required apart from recursion stack.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Tower of Hanoi is a classic recursive problem where you move disks from one rod to another following specific rules. Only one disk can be moved at a time, and a larger disk cannot be placed on top of a smaller disk.',

  intuition:
    'To move n disks, first move n-1 disks to the auxiliary rod, then move the largest disk to the destination rod, and finally move the n-1 disks onto the largest disk.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description:
      'Consider 3 disks on rod A that need to be moved to rod C using rod B as auxiliary.',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Move disk 1 from A to C'],
      },
      {
        pass: 'Step 2',
        steps: ['Move disk 2 from A to B'],
      },
      {
        pass: 'Step 3',
        steps: ['Move disk 1 from C to B'],
      },
      {
        pass: 'Step 4',
        steps: ['Move disk 3 from A to C'],
      },
      {
        pass: 'Step 5',
        steps: ['Move disk 1 from B to A'],
      },
      {
        pass: 'Step 6',
        steps: ['Move disk 2 from B to C'],
      },
      {
        pass: 'Step 7',
        steps: [
          'Move disk 1 from A to C',
          'All disks successfully moved in 7 steps (2^3 - 1)',
        ],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'If n == 1:',
    '  Move disk from source to destination.',
    'Else:',
    '  Move n-1 disks from source to auxiliary.',
    '  Move nth disk from source to destination.',
    '  Move n-1 disks from auxiliary to destination.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'Hanoi(n, source, auxiliary, destination):',
    '  if n == 1:',
    '    print "Move disk from source to destination"',
    '    return',
    '',
    '  Hanoi(n-1, source, destination, auxiliary)',
    '  print "Move disk n from source to destination"',
    '  Hanoi(n-1, auxiliary, source, destination)',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Tower of Hanoi is primarily used to understand recursion, divide and conquer strategy, and mathematical recurrence relations. It is commonly used in teaching recursion and problem decomposition.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Excellent for understanding recursion',
    'Demonstrates exponential growth clearly',
    'Helps in learning divide and conquer approach',
    'Classic interview and academic problem',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Exponential time complexity',
    'Not practical for large n',
    'Recursive depth may cause stack overflow for very large inputs',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Minimum number of moves required for n disks?',
      options: ['n', '2n', '2^n - 1', 'n^2'],
      answer: 2,
    },
    {
      question: 'Time complexity of Tower of Hanoi?',
      options: ['O(n)', 'O(n log n)', 'O(2^n)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'How many rods are used in classic Tower of Hanoi?',
      options: ['2', '3', '4', '5'],
      answer: 1,
    },
    {
      question: 'What strategy does Tower of Hanoi use?',
      options: [
        'Greedy',
        'Divide and Conquer',
        'Dynamic Programming',
        'Brute Force',
      ],
      answer: 1,
    },
    {
      question: 'For 4 disks, minimum moves required?',
      options: ['8', '15', '16', '31'],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>

void hanoi(int n, char source, char auxiliary, char destination) {
    if(n == 1) {
        printf("Move disk 1 from %c to %c\\n", source, destination);
        return;
    }
    hanoi(n-1, source, destination, auxiliary);
    printf("Move disk %d from %c to %c\\n", n, source, destination);
    hanoi(n-1, auxiliary, source, destination);
}
`,

    cpp: `
#include <iostream>
using namespace std;

void hanoi(int n, char source, char auxiliary, char destination) {
    if(n == 1) {
        cout << "Move disk 1 from " << source << " to " << destination << endl;
        return;
    }
    hanoi(n-1, source, destination, auxiliary);
    cout << "Move disk " << n << " from " << source << " to " << destination << endl;
    hanoi(n-1, auxiliary, source, destination);
}
`,

    java: `
class TowerOfHanoi {
    static void hanoi(int n, char source, char auxiliary, char destination) {
        if(n == 1) {
            System.out.println("Move disk 1 from " + source + " to " + destination);
            return;
        }
        hanoi(n-1, source, destination, auxiliary);
        System.out.println("Move disk " + n + " from " + source + " to " + destination);
        hanoi(n-1, auxiliary, source, destination);
    }
}
`,

    python: `
def hanoi(n, source, auxiliary, destination):
    if n == 1:
        print(f"Move disk 1 from {source} to {destination}")
        return
    hanoi(n-1, source, destination, auxiliary)
    print(f"Move disk {n} from {source} to {destination}")
    hanoi(n-1, auxiliary, source, destination)
`,

    js: `
function hanoi(n, source, auxiliary, destination) {
    if(n === 1) {
        console.log(\`Move disk 1 from \${source} to \${destination}\`);
        return;
    }
    hanoi(n-1, source, destination, auxiliary);
    console.log(\`Move disk \${n} from \${source} to \${destination}\`);
    hanoi(n-1, auxiliary, source, destination);
}
`,
  },
};

export default towerOfHanoi;
