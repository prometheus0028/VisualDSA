const dpDataset = {
  factorial: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In factorial computation using recursion, what is the correct base condition for n ≥ 0?',
        options: ['n == 1', 'n == 0', 'n <= 0', 'n == -1'],
        answer: 1,
        concept: 'factorial_base',
        difficulty: 'easy',
      },
      {
        question:
          'What is the time complexity of computing factorial using recursion?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
        answer: 2,
        concept: 'factorial_time',
        difficulty: 'easy',
      },
      {
        question:
          'What is the space complexity of recursive factorial due to call stack?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
        answer: 2,
        concept: 'factorial_space',
        difficulty: 'medium',
      },
      {
        question:
          'Why is factorial considered a good example to introduce recursion?',
        options: [
          'It requires graphs',
          'It has a simple self-referential definition',
          'It uses sorting',
          'It uses heaps',
        ],
        answer: 1,
        concept: 'factorial_recursion',
        difficulty: 'easy',
      },
      {
        question:
          'What happens if base case is missing in factorial recursion?',
        options: [
          'Correct output',
          'Infinite recursion / stack overflow',
          'Faster execution',
          'Returns 0',
        ],
        answer: 1,
        concept: 'factorial_stackoverflow',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
Consider factorial function:

int fact(int n){
  if(n == 0) return 1;
  return n * fact(n-1);
}

What is output of fact(4)?
`,
        options: ['24', '12', '16', '20'],
        answer: 0,
        concept: 'factorial_output',
        difficulty: 'easy',
      },
      {
        question: `
How many recursive calls are made when computing factorial(5)?
`,
        options: ['4', '5', '6', '10'],
        answer: 2,
        concept: 'factorial_calls',
        difficulty: 'medium',
      },
      {
        question: `
If factorial is implemented iteratively, what changes compared to recursion?
`,
        options: [
          'Time increases',
          'Space reduces (no call stack)',
          'Wrong output',
          'Becomes slower',
        ],
        answer: 1,
        concept: 'factorial_iterative',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If factorial function returns 0 instead of 1 at base case, what happens?
`,
        options: [
          'Correct result',
          'All outputs become 0',
          'Infinite recursion',
          'Runtime error',
        ],
        answer: 1,
        concept: 'factorial_base_bug',
        difficulty: 'medium',
      },
      {
        question: `
If recursive call uses fact(n+1) instead of fact(n-1), what happens?
`,
        options: [
          'Correct result',
          'Infinite recursion',
          'Faster execution',
          'Returns 1',
        ],
        answer: 1,
        concept: 'factorial_direction_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix recursive factorial implementation in C++ where base condition and recursion direction are incorrect.',
        language: 'cpp',
        code: [
          'int fact(int n){',
          '  if(n == ___) return ___;',
          '  return n * fact(n ___ 1);',
          '}',
        ],
        blanks: [['0'], ['1'], ['-']],
        concept: 'factorial_cpp_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix Java factorial where incorrect base case leads to wrong result.',
        language: 'java',
        code: [
          'int fact(int n){',
          '  if(n == ___) return ___;',
          '  return n * fact(n - 1);',
          '}',
        ],
        blanks: [['0'], ['1']],
        concept: 'factorial_java_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix Python factorial implementation where recursion stops incorrectly.',
        language: 'python',
        code: [
          'def fact(n):',
          '    if n == ___:',
          '        return ___',
          '    return n * fact(n ___ 1)',
        ],
        blanks: [['0'], ['1'], ['-']],
        concept: 'factorial_python_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix JavaScript factorial where incorrect operator causes infinite recursion.',
        language: 'javascript',
        code: [
          'function fact(n){',
          '  if(n === ___) return ___;',
          '  return n * fact(n ___ 1);',
          '}',
        ],
        blanks: [['0'], ['1'], ['-']],
        concept: 'factorial_js_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix factorial iterative version where loop condition and multiplication are incorrect.',
        language: 'cpp',
        code: [
          'int fact(int n){',
          '  int res = 1;',
          '  for(int i = 1; i ___ n; i++){',
          '    res = res ___ i;',
          '  }',
          '  return res;',
          '}',
        ],
        blanks: [['<='], ['*']],
        concept: 'factorial_iter_fix',
        difficulty: 'medium',
      },
    ],
  },
  fibonacci: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In Fibonacci sequence, what are the base cases for recursion?',
        options: [
          'F(0)=1, F(1)=1',
          'F(0)=0, F(1)=1',
          'F(1)=1 only',
          'F(2)=1 only',
        ],
        answer: 1,
        concept: 'fib_base',
        difficulty: 'easy',
      },
      {
        question: 'What is the recurrence relation for Fibonacci?',
        options: [
          'F(n) = F(n-1) + F(n-2)',
          'F(n) = n * F(n-1)',
          'F(n) = F(n-1) - F(n-2)',
          'F(n) = F(n/2)',
        ],
        answer: 0,
        concept: 'fib_relation',
        difficulty: 'easy',
      },
      {
        question: 'What is the time complexity of naive recursive Fibonacci?',
        options: ['O(n)', 'O(log n)', 'O(2^n)', 'O(n^2)'],
        answer: 2,
        concept: 'fib_recursion_complexity',
        difficulty: 'medium',
      },
      {
        question: 'Why is recursive Fibonacci inefficient?',
        options: [
          'Uses extra memory',
          'Repeats overlapping subproblems',
          'Uses loops',
          'Uses sorting',
        ],
        answer: 1,
        concept: 'fib_overlap',
        difficulty: 'medium',
      },
      {
        question:
          'What technique improves Fibonacci from exponential to linear time?',
        options: ['Greedy', 'Memoization / DP', 'Sorting', 'Binary Search'],
        answer: 1,
        concept: 'fib_dp',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
Consider Fibonacci:

int fib(int n){
  if(n <= 1) return n;
  return fib(n-1) + fib(n-2);
}

What is fib(5)?
`,
        options: ['5', '8', '3', '13'],
        answer: 0,
        concept: 'fib_output',
        difficulty: 'easy',
      },
      {
        question: `
How many recursive calls are approximately made for fib(n) in naive recursion?
`,
        options: ['O(n)', 'O(log n)', 'O(2^n)', 'O(n^2)'],
        answer: 2,
        concept: 'fib_calls',
        difficulty: 'medium',
      },
      {
        question: `
If Fibonacci is implemented using DP (tabulation), what is time complexity?
`,
        options: ['O(n)', 'O(log n)', 'O(2^n)', 'O(n^2)'],
        answer: 0,
        concept: 'fib_dp_complexity',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If base case is written as if(n == 1) return 1, what issue occurs?
`,
        options: [
          'Correct output',
          'Wrong value for fib(0)',
          'Infinite recursion',
          'No recursion',
        ],
        answer: 1,
        concept: 'fib_base_bug',
        difficulty: 'medium',
      },
      {
        question: `
If recursive call is fib(n-1) + fib(n-3), what happens?
`,
        options: [
          'Correct Fibonacci',
          'Wrong sequence',
          'Infinite recursion',
          'Faster execution',
        ],
        answer: 1,
        concept: 'fib_relation_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix recursive Fibonacci implementation in C++ where base case and recursion relation are incorrect.',
        language: 'cpp',
        code: [
          'int fib(int n){',
          '  if(n ___ 1) return ___;',
          '  return fib(n ___ 1) + fib(n ___ 2);',
          '}',
        ],
        blanks: [['<='], ['n'], ['-'], ['-']],
        concept: 'fib_cpp_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix memoized Fibonacci in Java where dp array is not used properly.',
        language: 'java',
        code: [
          'int fib(int n, int[] dp){',
          '  if(n <= 1) return n;',
          '  if(dp[n] != ___) return dp[n];',
          '',
          '  dp[n] = fib(n-1, dp) + fib(n-2, dp);',
          '  return ___;',
          '}',
        ],
        blanks: [['-1'], ['dp[n]']],
        concept: 'fib_memo_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix tabulation Fibonacci in Python where loop and indexing are incorrect.',
        language: 'python',
        code: [
          'def fib(n):',
          '    dp = [0] * (n+1)',
          '    dp[1] = 1',
          '',
          '    for i in range(2, ___):',
          '        dp[i] = dp[i-1] ___ dp[i-2]',
          '',
          '    return dp[___]',
        ],
        blanks: [['n+1'], ['+'], ['n']],
        concept: 'fib_tab_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix space-optimized Fibonacci in JavaScript where variables are updated incorrectly.',
        language: 'javascript',
        code: [
          'function fib(n){',
          '  if(n <= 1) return n;',
          '',
          '  let a = 0, b = 1;',
          '  for(let i = 2; i <= n; i++){',
          '    let c = ___ + ___;',
          '    a = ___;',
          '    b = ___;',
          '  }',
          '  return ___;',
          '}',
        ],
        blanks: [['a'], ['b'], ['b'], ['c'], ['b']],
        concept: 'fib_space_opt',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix recursive Fibonacci where overlapping calls are reduced using memoization in C++.',
        language: 'cpp',
        code: [
          'int fib(int n, vector<int>& dp){',
          '  if(n <= 1) return n;',
          '',
          '  if(dp[n] != ___) return dp[n];',
          '',
          '  return dp[n] = fib(n-1, dp) + fib(n-2, dp);',
          '}',
        ],
        blanks: [['-1']],
        concept: 'fib_dp_fix',
        difficulty: 'medium',
      },
    ],
  },
  power_function: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In power function x^n using naive recursion, what is time complexity?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
        answer: 2,
        concept: 'power_naive',
        difficulty: 'easy',
      },
      {
        question: 'How does optimized power function reduce complexity?',
        options: [
          'Using sorting',
          'Using divide and conquer (n/2)',
          'Using BFS',
          'Using memoization only',
        ],
        answer: 1,
        concept: 'power_divide',
        difficulty: 'easy',
      },
      {
        question:
          'Time complexity of optimized power function (binary exponentiation) is:',
        options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
        answer: 1,
        concept: 'power_log',
        difficulty: 'easy',
      },
      {
        question: 'If n is even, x^n can be written as:',
        options: ['x * x^(n-1)', '(x^(n/2)) * (x^(n/2))', 'x^(n-1)', '2 * x^n'],
        answer: 1,
        concept: 'power_even',
        difficulty: 'easy',
      },
      {
        question: 'If n is odd, optimized power function computes:',
        options: [
          'x * (x^(n/2))^2',
          '(x^(n/2))^2',
          'x^n directly',
          'x + x^(n-1)',
        ],
        answer: 0,
        concept: 'power_odd',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
Using fast exponentiation:

int power(int x, int n){
  if(n == 0) return 1;
  int half = power(x, n/2);
  if(n % 2 == 0)
    return half * half;
  else
    return x * half * half;
}

What is power(2,5)?
`,
        options: ['32', '16', '64', '8'],
        answer: 0,
        concept: 'power_output',
        difficulty: 'easy',
      },
      {
        question: `
How many recursive calls are made approximately in optimized power function?
`,
        options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'],
        answer: 1,
        concept: 'power_calls',
        difficulty: 'medium',
      },
      {
        question: `
If exponent is negative (x^-n), what modification is needed?
`,
        options: [
          'Return 0',
          'Compute 1 / power(x, n)',
          'Multiply by x',
          'Ignore sign',
        ],
        answer: 1,
        concept: 'power_negative',
        difficulty: 'medium',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If recursion uses power(x, n-1) instead of n/2, what happens?
`,
        options: [
          'Still O(log n)',
          'Becomes O(n)',
          'Infinite loop',
          'Wrong result',
        ],
        answer: 1,
        concept: 'power_slow_bug',
        difficulty: 'medium',
      },
      {
        question: `
If base case returns 0 instead of 1, what happens?
`,
        options: [
          'Correct result',
          'All outputs become 0',
          'Infinite recursion',
          'Runtime error',
        ],
        answer: 1,
        concept: 'power_base_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix optimized power function in C++ where recursion and even/odd logic are incorrect.',
        language: 'cpp',
        code: [
          'int power(int x, int n){',
          '  if(n == ___) return ___;',
          '',
          '  int half = power(x, ___);',
          '',
          '  if(n % 2 == ___)',
          '    return half ___ half;',
          '  else',
          '    return x ___ half ___ half;',
          '}',
        ],
        blanks: [['0'], ['1'], ['n/2'], ['0'], ['*'], ['*'], ['*']],
        concept: 'power_cpp_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Java power function where incorrect recursion causes O(n) complexity.',
        language: 'java',
        code: [
          'int power(int x, int n){',
          '  if(n == ___) return ___;',
          '',
          '  int half = power(x, ___);',
          '',
          '  if(n % 2 == 0)',
          '    return ___ * ___;',
          '  else',
          '    return x * ___ * ___;',
          '}',
        ],
        blanks: [['0'], ['1'], ['n/2'], ['half'], ['half'], ['half'], ['half']],
        concept: 'power_java_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Python fast exponentiation where multiplication and recursion are incorrect.',
        language: 'python',
        code: [
          'def power(x, n):',
          '    if n == ___:',
          '        return ___',
          '',
          '    half = power(x, ___)',
          '',
          '    if n % 2 == 0:',
          '        return half ___ half',
          '    else:',
          '        return x ___ half ___ half',
        ],
        blanks: [['0'], ['1'], ['n//2'], ['*'], ['*'], ['*']],
        concept: 'power_python_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix JavaScript power function where negative exponent handling is missing.',
        language: 'javascript',
        code: [
          'function power(x, n){',
          '  if(n == ___) return ___;',
          '',
          '  if(n < 0) return ___;',
          '',
          '  let half = power(x, ___);',
          '',
          '  if(n % 2 === 0)',
          '    return half * half;',
          '  else',
          '    return x * half * half;',
          '}',
        ],
        blanks: [['0'], ['1'], ['1 / power(x, -n)'], ['Math.floor(n/2)']],
        concept: 'power_js_fix',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix iterative binary exponentiation where bit manipulation logic is incorrect.',
        language: 'cpp',
        code: [
          'int power(int x, int n){',
          '  int result = 1;',
          '',
          '  while(n > 0){',
          '    if(n % 2 == ___)',
          '      result = result ___ x;',
          '',
          '    x = x ___ x;',
          '    n = n ___ 2;',
          '  }',
          '',
          '  return result;',
          '}',
        ],
        blanks: [['1'], ['*'], ['*'], ['/']],
        concept: 'power_iter_fix',
        difficulty: 'hard',
      },
    ],
  },
  reverse_array: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'When reversing an array using two-pointer technique, where do pointers start?',
        options: [
          'Both at start',
          'Both at end',
          'One at start and one at end',
          'Middle only',
        ],
        answer: 2,
        concept: 'reverse_two_pointer',
        difficulty: 'easy',
      },
      {
        question: 'What is time complexity of reversing an array of size n?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
        answer: 2,
        concept: 'reverse_time',
        difficulty: 'easy',
      },
      {
        question: 'What is space complexity of in-place array reversal?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
        answer: 0,
        concept: 'reverse_space',
        difficulty: 'easy',
      },
      {
        question: 'In recursive array reversal, when should recursion stop?',
        options: [
          'left > right',
          'left == right',
          'left >= right',
          'Always continue',
        ],
        answer: 2,
        concept: 'reverse_base',
        difficulty: 'medium',
      },
      {
        question: 'Why is swapping required in reversing array?',
        options: [
          'To sort array',
          'To move elements to correct reversed position',
          'To delete elements',
          'To create new array',
        ],
        answer: 1,
        concept: 'reverse_swap',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
Given array: [1, 2, 3, 4]

After reversing using two-pointer method, what is output?
`,
        options: [
          '[4, 3, 2, 1]',
          '[1, 4, 3, 2]',
          '[2, 3, 4, 1]',
          '[1, 2, 4, 3]',
        ],
        answer: 0,
        concept: 'reverse_output',
        difficulty: 'easy',
      },
      {
        question: `
How many swaps are needed to reverse array of size n?
`,
        options: ['n', 'n-1', 'n/2', 'log n'],
        answer: 2,
        concept: 'reverse_swaps',
        difficulty: 'medium',
      },
      {
        question: `
If array has odd length, what happens to middle element during reversal?
`,
        options: [
          'Deleted',
          'Swapped twice',
          'Remains unchanged',
          'Moves to end',
        ],
        answer: 2,
        concept: 'reverse_middle',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If pointers are not updated (left++, right--), what happens?
`,
        options: [
          'Correct reversal',
          'Infinite loop',
          'Only one swap',
          'Sorted array',
        ],
        answer: 1,
        concept: 'reverse_pointer_bug',
        difficulty: 'medium',
      },
      {
        question: `
If swapping is done incorrectly (missing temp), what happens?
`,
        options: [
          'Correct result',
          'Data loss / overwrite',
          'Faster execution',
          'No change',
        ],
        answer: 1,
        concept: 'reverse_swap_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix two-pointer array reversal in C++ where pointer updates and swapping are incorrect.',
        language: 'cpp',
        code: [
          'void reverse(vector<int>& arr){',
          '  int left = 0;',
          '  int right = arr.size() ___ 1;',
          '',
          '  while(left ___ right){',
          '    int temp = arr[left];',
          '    arr[left] = arr[___];',
          '    arr[right] = ___;',
          '',
          '    left ___;',
          '    right ___;',
          '  }',
          '}',
        ],
        blanks: [['-'], ['<'], ['right'], ['temp'], ['++'], ['--']],
        concept: 'reverse_cpp_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix recursive array reversal in Java where base condition and swapping are incorrect.',
        language: 'java',
        code: [
          'void reverse(int[] arr, int left, int right){',
          '  if(left ___ right) return;',
          '',
          '  int temp = arr[left];',
          '  arr[left] = arr[___];',
          '  arr[right] = ___;',
          '',
          '  reverse(arr, left ___ 1, right ___ 1);',
          '}',
        ],
        blanks: [['>='], ['right'], ['temp'], ['+'], ['-']],
        concept: 'reverse_java_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Python recursive reversal where indices and base case are incorrect.',
        language: 'python',
        code: [
          'def reverse(arr, left, right):',
          '    if left ___ right:',
          '        return',
          '',
          '    arr[left], arr[right] = arr[___], arr[___]',
          '',
          '    reverse(arr, left ___ 1, right ___ 1)',
        ],
        blanks: [['>='], ['right'], ['left'], ['+'], ['-']],
        concept: 'reverse_python_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix JavaScript array reversal where swapping and pointer movement are incorrect.',
        language: 'javascript',
        code: [
          'function reverse(arr){',
          '  let left = 0;',
          '  let right = arr.length ___ 1;',
          '',
          '  while(left < right){',
          '    let temp = arr[left];',
          '    arr[left] = arr[___];',
          '    arr[right] = ___;',
          '',
          '    left ___;',
          '    right ___;',
          '  }',
          '}',
        ],
        blanks: [['-'], ['right'], ['temp'], ['++'], ['--']],
        concept: 'reverse_js_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix reverse function where loop condition causes out-of-bound access.',
        language: 'cpp',
        code: [
          'for(int i = 0; i ___ arr.size()/2; i++){',
          '  swap(arr[i], arr[arr.size() ___ 1 ___ i]);',
          '}',
        ],
        blanks: [['<'], ['-'], ['-']],
        concept: 'reverse_loop_fix',
        difficulty: 'medium',
      },
    ],
  },
  tower_of_hanoi: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In Tower of Hanoi problem, what is the minimum number of moves required to transfer n disks?',
        options: ['2^n', '2^n - 1', 'n^2', 'n!'],
        answer: 1,
        concept: 'toh_moves',
        difficulty: 'easy',
      },
      {
        question: 'What is the recurrence relation for Tower of Hanoi?',
        options: [
          'T(n) = T(n-1) + 1',
          'T(n) = 2T(n-1) + 1',
          'T(n) = n * T(n-1)',
          'T(n) = T(n/2)',
        ],
        answer: 1,
        concept: 'toh_relation',
        difficulty: 'medium',
      },
      {
        question: 'Time complexity of Tower of Hanoi is:',
        options: ['O(n)', 'O(log n)', 'O(2^n)', 'O(n^2)'],
        answer: 2,
        concept: 'toh_complexity',
        difficulty: 'easy',
      },
      {
        question: 'Why is Tower of Hanoi not solvable efficiently for large n?',
        options: [
          'Uses loops',
          'Exponential growth of moves',
          'Uses sorting',
          'Uses stacks',
        ],
        answer: 1,
        concept: 'toh_exponential',
        difficulty: 'medium',
      },
      {
        question: 'What is the base case in Tower of Hanoi recursion?',
        options: ['n == 0', 'n == 1', 'n == 2', 'n < 0'],
        answer: 1,
        concept: 'toh_base',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
For Tower of Hanoi with n = 3 disks, how many moves are required?
`,
        options: ['7', '6', '8', '9'],
        answer: 0,
        concept: 'toh_output_moves',
        difficulty: 'easy',
      },
      {
        question: `
How many recursive calls are made in Tower of Hanoi for n disks?
`,
        options: ['O(n)', 'O(log n)', 'O(2^n)', 'O(n^2)'],
        answer: 2,
        concept: 'toh_calls',
        difficulty: 'medium',
      },
      {
        question: `
If n = 4, what is total number of moves?
`,
        options: ['15', '16', '14', '8'],
        answer: 0,
        concept: 'toh_n4',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If recursive calls are swapped incorrectly (wrong source/destination rods), what happens?
`,
        options: [
          'Correct solution',
          'Wrong sequence of moves',
          'Infinite loop',
          'Faster execution',
        ],
        answer: 1,
        concept: 'toh_wrong_rods',
        difficulty: 'medium',
      },
      {
        question: `
If base case is missing in Tower of Hanoi, what happens?
`,
        options: [
          'Correct result',
          'Infinite recursion / stack overflow',
          'Returns 0',
          'Stops early',
        ],
        answer: 1,
        concept: 'toh_base_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given n disks and three rods (A, B, C), move all disks from source rod A to destination rod C using auxiliary rod B following rules of Tower of Hanoi. Fix recursive logic in C++.',
        language: 'cpp',
        code: [
          'void toh(int n, char src, char aux, char dest){',
          '  if(n == ___){',
          '    cout << src << " -> " << dest << endl;',
          '    return;',
          '  }',
          '',
          '  toh(n ___ 1, src, ___, aux);',
          '  cout << src << " -> " << dest << endl;',
          '  toh(n ___ 1, aux, ___, dest);',
          '}',
        ],
        blanks: [['1'], ['-'], ['dest'], ['-'], ['src']],
        concept: 'toh_cpp_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Tower of Hanoi implementation in Java where recursive calls and parameters are incorrect.',
        language: 'java',
        code: [
          'void toh(int n, char src, char aux, char dest){',
          '  if(n == ___){',
          '    System.out.println(src + " -> " + dest);',
          '    return;',
          '  }',
          '',
          '  toh(n ___ 1, src, ___, aux);',
          '  System.out.println(src + " -> " + dest);',
          '  toh(n ___ 1, aux, ___, dest);',
          '}',
        ],
        blanks: [['1'], ['-'], ['dest'], ['-'], ['src']],
        concept: 'toh_java_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Python Tower of Hanoi where recursive order is incorrect.',
        language: 'python',
        code: [
          'def toh(n, src, aux, dest):',
          '    if n == ___:',
          '        print(src, "->", dest)',
          '        return',
          '',
          '    toh(n ___ 1, src, ___, aux)',
          '    print(src, "->", dest)',
          '    toh(n ___ 1, aux, ___, dest)',
        ],
        blanks: [['1'], ['-'], ['dest'], ['-'], ['src']],
        concept: 'toh_python_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix JavaScript Tower of Hanoi implementation where parameters are misplaced.',
        language: 'javascript',
        code: [
          'function toh(n, src, aux, dest){',
          '  if(n === ___){',
          '    console.log(src + " -> " + dest);',
          '    return;',
          '  }',
          '',
          '  toh(n ___ 1, src, ___, aux);',
          '  console.log(src + " -> " + dest);',
          '  toh(n ___ 1, aux, ___, dest);',
          '}',
        ],
        blanks: [['1'], ['-'], ['dest'], ['-'], ['src']],
        concept: 'toh_js_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Tower of Hanoi where number of moves is incorrectly calculated.',
        language: 'cpp',
        code: [
          'int moves(int n){',
          '  if(n == ___) return ___;',
          '  return ___ * moves(n ___ 1) + ___;',
          '}',
        ],
        blanks: [['1'], ['1'], ['2'], ['-'], ['1']],
        concept: 'toh_moves_fix',
        difficulty: 'medium',
      },
    ],
  },
  sudoku_solver: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question: 'Sudoku Solver uses which core algorithmic technique?',
        options: [
          'Greedy',
          'Backtracking',
          'Divide and Conquer',
          'Dynamic Programming',
        ],
        answer: 1,
        concept: 'sudoku_backtracking',
        difficulty: 'easy',
      },
      {
        question:
          'In Sudoku, what constraints must be satisfied for each number placement?',
        options: [
          'Row only',
          'Column only',
          'Row, Column, and 3x3 grid',
          'Diagonal only',
        ],
        answer: 2,
        concept: 'sudoku_constraints',
        difficulty: 'easy',
      },
      {
        question: 'Why is backtracking required in Sudoku solving?',
        options: [
          'To sort numbers',
          'To try all possibilities and undo invalid ones',
          'To reduce space',
          'To use recursion only',
        ],
        answer: 1,
        concept: 'sudoku_backtracking_reason',
        difficulty: 'medium',
      },
      {
        question: 'Worst-case time complexity of Sudoku solver is:',
        options: ['O(n)', 'O(n^2)', 'Exponential', 'O(log n)'],
        answer: 2,
        concept: 'sudoku_complexity',
        difficulty: 'medium',
      },
      {
        question: 'What is the purpose of a "safe check" function in Sudoku?',
        options: [
          'To sort board',
          'To validate placement of number',
          'To print solution',
          'To remove duplicates',
        ],
        answer: 1,
        concept: 'sudoku_safe_check',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
In Sudoku solving, when a valid number is placed and leads to a dead-end later, what happens?
`,
        options: [
          'Program stops',
          'Backtracking occurs',
          'Infinite loop',
          'Number stays permanently',
        ],
        answer: 1,
        concept: 'sudoku_backtrack_flow',
        difficulty: 'easy',
      },
      {
        question: `
How many possibilities can exist for a single empty cell before constraint filtering?
`,
        options: ['1', '9', '81', 'Infinite'],
        answer: 1,
        concept: 'sudoku_possibilities',
        difficulty: 'easy',
      },
      {
        question: `
If Sudoku is completely filled correctly, what does solver do next?
`,
        options: [
          'Restart',
          'Return true / solution found',
          'Delete board',
          'Recalculate',
        ],
        answer: 1,
        concept: 'sudoku_completion',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If row check is skipped in Sudoku validation, what happens?
`,
        options: [
          'Correct solution',
          'Invalid duplicates allowed in row',
          'Faster solution',
          'No solution',
        ],
        answer: 1,
        concept: 'sudoku_row_bug',
        difficulty: 'medium',
      },
      {
        question: `
If backtracking step (reset cell to empty) is missing, what happens?
`,
        options: [
          'Correct solution',
          'Incorrect final board',
          'Infinite recursion',
          'Faster execution',
        ],
        answer: 1,
        concept: 'sudoku_backtrack_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given a partially filled 9x9 Sudoku board, fill empty cells (represented by 0) so that each row, column, and 3x3 subgrid contains digits 1–9 without repetition. Fix the backtracking logic in C++.',
        language: 'cpp',
        code: [
          'bool solve(vector<vector<int>>& board){',
          '  for(int i=0;i<9;i++){',
          '    for(int j=0;j<9;j++){',
          '      if(board[i][j] == ___){',
          '        for(int num=1; num<=9; num++){',
          '          if(isSafe(board, i, j, ___)){',
          '            board[i][j] = ___;',
          '',
          '            if(solve(board)) return ___;',
          '',
          '            board[i][j] = ___;',
          '          }',
          '        }',
          '        return ___;',
          '      }',
          '    }',
          '  }',
          '  return ___;',
          '}',
        ],
        blanks: [['0'], ['num'], ['num'], ['true'], ['0'], ['false'], ['true']],
        concept: 'sudoku_cpp_backtracking',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Java Sudoku solver where constraint checking and backtracking are incorrect.',
        language: 'java',
        code: [
          'boolean solve(int[][] board){',
          '  for(int i=0;i<9;i++){',
          '    for(int j=0;j<9;j++){',
          '      if(board[i][j] == ___){',
          '        for(int num=1; num<=9; num++){',
          '          if(isSafe(board, i, j, ___)){',
          '            board[i][j] = ___;',
          '',
          '            if(solve(board)) return ___;',
          '',
          '            board[i][j] = ___;',
          '          }',
          '        }',
          '        return ___;',
          '      }',
          '    }',
          '  }',
          '  return ___;',
          '}',
        ],
        blanks: [['0'], ['num'], ['num'], ['true'], ['0'], ['false'], ['true']],
        concept: 'sudoku_java_backtracking',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Python Sudoku solver where recursion and backtracking reset are incorrect.',
        language: 'python',
        code: [
          'def solve(board):',
          '    for i in range(9):',
          '        for j in range(9):',
          '            if board[i][j] == ___:',
          '                for num in range(1,10):',
          '                    if isSafe(board, i, j, ___):',
          '                        board[i][j] = ___',
          '',
          '                        if solve(board):',
          '                            return ___',
          '',
          '                        board[i][j] = ___',
          '                return ___',
          '    return ___',
        ],
        blanks: [['0'], ['num'], ['num'], ['True'], ['0'], ['False'], ['True']],
        concept: 'sudoku_python_backtracking',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix JavaScript Sudoku solver where backtracking logic is incomplete.',
        language: 'javascript',
        code: [
          'function solve(board){',
          '  for(let i=0;i<9;i++){',
          '    for(let j=0;j<9;j++){',
          '      if(board[i][j] === ___){',
          '        for(let num=1; num<=9; num++){',
          '          if(isSafe(board, i, j, ___)){',
          '            board[i][j] = ___;',
          '',
          '            if(solve(board)) return ___;',
          '',
          '            board[i][j] = ___;',
          '          }',
          '        }',
          '        return ___;',
          '      }',
          '    }',
          '  }',
          '  return ___;',
          '}',
        ],
        blanks: [['0'], ['num'], ['num'], ['true'], ['0'], ['false'], ['true']],
        concept: 'sudoku_js_backtracking',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Sudoku safe-check function where row, column, and grid validation is incorrect.',
        language: 'cpp',
        code: [
          'bool isSafe(vector<vector<int>>& board, int row, int col, int num){',
          '  for(int x=0;x<9;x++){',
          '    if(board[row][x] == ___) return false;',
          '    if(board[x][col] == ___) return false;',
          '  }',
          '',
          '  int sr = row - row % ___;',
          '  int sc = col - col % ___;',
          '',
          '  for(int i=0;i<3;i++){',
          '    for(int j=0;j<3;j++){',
          '      if(board[i+sr][j+sc] == ___) return false;',
          '    }',
          '  }',
          '',
          '  return ___;',
          '}',
        ],
        blanks: [['num'], ['num'], ['3'], ['3'], ['num'], ['true']],
        concept: 'sudoku_safe_fix',
        difficulty: 'hard',
      },
    ],
  },
  rat_in_maze: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'Rat in a Maze problem is primarily solved using which technique?',
        options: [
          'Greedy',
          'Backtracking',
          'Dynamic Programming',
          'Binary Search',
        ],
        answer: 1,
        concept: 'maze_backtracking',
        difficulty: 'easy',
      },
      {
        question:
          'What does a cell value of 0 typically represent in maze problems?',
        options: ['Valid path', 'Blocked cell', 'Destination', 'Start point'],
        answer: 1,
        concept: 'maze_block',
        difficulty: 'easy',
      },
      {
        question: 'What is the goal of Rat in a Maze problem?',
        options: [
          'Sort the grid',
          'Find all valid paths from start to destination',
          'Find shortest path only',
          'Count nodes',
        ],
        answer: 1,
        concept: 'maze_goal',
        difficulty: 'easy',
      },
      {
        question: 'Why is visited marking important in Rat in a Maze?',
        options: [
          'To sort path',
          'To avoid cycles and infinite recursion',
          'To count steps',
          'To reduce memory',
        ],
        answer: 1,
        concept: 'maze_visited',
        difficulty: 'medium',
      },
      {
        question: 'Worst-case time complexity of Rat in a Maze is:',
        options: ['O(n)', 'O(n^2)', 'Exponential', 'O(log n)'],
        answer: 2,
        concept: 'maze_complexity',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
If no valid path exists from source to destination in Rat in a Maze, what should the algorithm return?
`,
        options: [
          'Empty result / false',
          'Random path',
          'Infinite loop',
          'Return grid',
        ],
        answer: 0,
        concept: 'maze_no_path',
        difficulty: 'easy',
      },
      {
        question: `
In a 2x2 grid with all cells open, how many distinct paths exist from top-left to bottom-right (only right and down moves)?
`,
        options: ['1', '2', '3', '4'],
        answer: 1,
        concept: 'maze_paths_small',
        difficulty: 'medium',
      },
      {
        question: `
What happens when a valid path to destination is found in backtracking?
`,
        options: [
          'Continue exploring all paths',
          'Stop immediately',
          'Delete path',
          'Restart recursion',
        ],
        answer: 0,
        concept: 'maze_all_paths',
        difficulty: 'medium',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If visited marking is not removed during backtracking, what happens?
`,
        options: [
          'Correct output',
          'Some valid paths are missed',
          'Infinite loop',
          'Faster execution',
        ],
        answer: 1,
        concept: 'maze_backtrack_bug',
        difficulty: 'medium',
      },
      {
        question: `
If boundary check is skipped in maze traversal, what happens?
`,
        options: [
          'Correct solution',
          'Out-of-bounds error',
          'Faster execution',
          'No recursion',
        ],
        answer: 1,
        concept: 'maze_boundary_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given a maze represented by a matrix of 0s and 1s, where 1 means open and 0 means blocked, find all paths from (0,0) to (n-1,n-1). Fix backtracking logic in C++.',
        language: 'cpp',
        code: [
          'void solve(int x, int y, vector<vector<int>>& maze, int n, string path){',
          '  if(x == ___ && y == ___){',
          '    cout << path << endl;',
          '    return;',
          '  }',
          '',
          '  maze[x][y] = ___;',
          '',
          '  if(x+1 < n && maze[x+1][y] == ___)',
          '    solve(x+1, y, maze, n, path + "D");',
          '',
          '  if(y+1 < n && maze[x][y+1] == ___)',
          '    solve(x, y+1, maze, n, path + "R");',
          '',
          '  maze[x][y] = ___;',
          '}',
        ],
        blanks: [['n-1'], ['n-1'], ['0'], ['1'], ['1'], ['1']],
        concept: 'maze_cpp_backtracking',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Java Rat in a Maze implementation where visited marking and recursion are incorrect.',
        language: 'java',
        code: [
          'void solve(int x, int y, int[][] maze, int n, String path){',
          '  if(x == ___ && y == ___){',
          '    System.out.println(path);',
          '    return;',
          '  }',
          '',
          '  maze[x][y] = ___;',
          '',
          '  if(x+1 < n && maze[x+1][y] == ___)',
          '    solve(x+1, y, maze, n, path + "D");',
          '',
          '  if(y+1 < n && maze[x][y+1] == ___)',
          '    solve(x, y+1, maze, n, path + "R");',
          '',
          '  maze[x][y] = ___;',
          '}',
        ],
        blanks: [['n-1'], ['n-1'], ['0'], ['1'], ['1'], ['1']],
        concept: 'maze_java_backtracking',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Python Rat in a Maze where backtracking reset and condition checks are incorrect.',
        language: 'python',
        code: [
          'def solve(x, y, maze, n, path):',
          '    if x == ___ and y == ___:',
          '        print(path)',
          '        return',
          '',
          '    maze[x][y] = ___',
          '',
          '    if x+1 < n and maze[x+1][y] == ___:',
          '        solve(x+1, y, maze, n, path + "D")',
          '',
          '    if y+1 < n and maze[x][y+1] == ___:',
          '        solve(x, y+1, maze, n, path + "R")',
          '',
          '    maze[x][y] = ___',
        ],
        blanks: [['n-1'], ['n-1'], ['0'], ['1'], ['1'], ['1']],
        concept: 'maze_python_backtracking',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix JavaScript Rat in a Maze where recursion and backtracking are incorrectly implemented.',
        language: 'javascript',
        code: [
          'function solve(x, y, maze, n, path){',
          '  if(x === ___ && y === ___){',
          '    console.log(path);',
          '    return;',
          '  }',
          '',
          '  maze[x][y] = ___;',
          '',
          '  if(x+1 < n && maze[x+1][y] === ___)',
          '    solve(x+1, y, maze, n, path + "D");',
          '',
          '  if(y+1 < n && maze[x][y+1] === ___)',
          '    solve(x, y+1, maze, n, path + "R");',
          '',
          '  maze[x][y] = ___;',
          '}',
        ],
        blanks: [['n-1'], ['n-1'], ['0'], ['1'], ['1'], ['1']],
        concept: 'maze_js_backtracking',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix boundary and safety check function for Rat in a Maze in C++.',
        language: 'cpp',
        code: [
          'bool isSafe(int x, int y, vector<vector<int>>& maze, int n){',
          '  if(x >= ___ && x < ___ && y >= ___ && y < ___ && maze[x][y] == ___)',
          '    return ___;',
          '  return ___;',
          '}',
        ],
        blanks: [['0'], ['n'], ['0'], ['n'], ['1'], ['true'], ['false']],
        concept: 'maze_safe_fix',
        difficulty: 'hard',
      },
    ],
  },
  permutations: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'What is the total number of permutations of an array of size n?',
        options: ['n', 'n^2', 'n!', '2^n'],
        answer: 2,
        concept: 'perm_count',
        difficulty: 'easy',
      },
      {
        question: 'Which technique is primarily used to generate permutations?',
        options: [
          'Greedy',
          'Backtracking',
          'Binary Search',
          'Dynamic Programming',
        ],
        answer: 1,
        concept: 'perm_backtracking',
        difficulty: 'easy',
      },
      {
        question: 'Why is swapping commonly used in permutation generation?',
        options: [
          'To sort array',
          'To fix elements at current index',
          'To reduce memory',
          'To delete elements',
        ],
        answer: 1,
        concept: 'perm_swap',
        difficulty: 'medium',
      },
      {
        question: 'Alternative to swapping in permutations is:',
        options: ['Sorting', 'Visited array approach', 'Queue', 'Stack'],
        answer: 1,
        concept: 'perm_visited',
        difficulty: 'medium',
      },
      {
        question: 'Time complexity of generating all permutations is:',
        options: ['O(n)', 'O(n log n)', 'O(n!)', 'O(n^2)'],
        answer: 2,
        concept: 'perm_complexity',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
How many permutations exist for array [1,2,3]?
`,
        options: ['3', '6', '9', '12'],
        answer: 1,
        concept: 'perm_small',
        difficulty: 'easy',
      },
      {
        question: `
If recursion depth is n in permutation generation, what does each level represent?
`,
        options: ['Row', 'Column', 'Position in permutation', 'Value of array'],
        answer: 2,
        concept: 'perm_depth',
        difficulty: 'medium',
      },
      {
        question: `
What happens after generating one complete permutation?
`,
        options: [
          'Stop execution',
          'Backtrack and explore next possibilities',
          'Delete array',
          'Restart recursion',
        ],
        answer: 1,
        concept: 'perm_flow',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If swapping is not reverted during backtracking, what happens?
`,
        options: [
          'Correct permutations',
          'Incorrect permutations / missing cases',
          'Infinite loop',
          'Faster execution',
        ],
        answer: 1,
        concept: 'perm_backtrack_bug',
        difficulty: 'medium',
      },
      {
        question: `
If visited array is not used properly, what happens?
`,
        options: [
          'Correct output',
          'Duplicate or missing permutations',
          'Infinite recursion',
          'No output',
        ],
        answer: 1,
        concept: 'perm_visited_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given an array nums of distinct integers, return all possible permutations. Fix backtracking logic using swapping in C++.',
        language: 'cpp',
        code: [
          'void permute(vector<int>& nums, int index){',
          '  if(index == ___){',
          '    print(nums);',
          '    return;',
          '  }',
          '',
          '  for(int i = index; i < ___; i++){',
          '    swap(nums[index], nums[___]);',
          '',
          '    permute(nums, ___);',
          '',
          '    swap(nums[index], nums[___]);',
          '  }',
          '}',
        ],
        blanks: [['nums.size()'], ['nums.size()'], ['i'], ['index+1'], ['i']],
        concept: 'perm_cpp_swap',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Java permutation generation where swapping and recursion are incorrect.',
        language: 'java',
        code: [
          'void permute(int[] nums, int index){',
          '  if(index == ___){',
          '    print(nums);',
          '    return;',
          '  }',
          '',
          '  for(int i=index; i<___; i++){',
          '    swap(nums, index, ___);',
          '',
          '    permute(nums, ___);',
          '',
          '    swap(nums, index, ___);',
          '  }',
          '}',
        ],
        blanks: [['nums.length'], ['nums.length'], ['i'], ['index+1'], ['i']],
        concept: 'perm_java_swap',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Python permutation generation using visited array where state tracking is incorrect.',
        language: 'python',
        code: [
          'def permute(nums, path, visited):',
          '    if len(path) == ___:',
          '        print(path)',
          '        return',
          '',
          '    for i in range(len(nums)):',
          '        if visited[i] == ___:',
          '            visited[i] = ___',
          '            permute(nums, path + [nums[i]], visited)',
          '            visited[i] = ___',
        ],
        blanks: [['len(nums)'], ['False'], ['True'], ['False']],
        concept: 'perm_python_visited',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix JavaScript permutation generation using swapping where backtracking is missing.',
        language: 'javascript',
        code: [
          'function permute(nums, index){',
          '  if(index === ___){',
          '    console.log(nums);',
          '    return;',
          '  }',
          '',
          '  for(let i=index; i<___; i++){',
          '    [nums[index], nums[i]] = [nums[i], nums[index]];',
          '',
          '    permute(nums, ___);',
          '',
          '    [nums[index], nums[i]] = [___, ___];',
          '  }',
          '}',
        ],
        blanks: [
          ['nums.length'],
          ['nums.length'],
          ['index+1'],
          ['nums[i]'],
          ['nums[index]'],
        ],
        concept: 'perm_js_swap',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix permutation generation where loop bounds cause missing permutations.',
        language: 'cpp',
        code: [
          'for(int i = index; i ___ nums.size(); i++){',
          '  swap(nums[index], nums[i]);',
          '  permute(nums, index ___ 1);',
          '  swap(nums[index], nums[i]);',
          '}',
        ],
        blanks: [['<'], ['+']],
        concept: 'perm_loop_fix',
        difficulty: 'medium',
      },
    ],
  },
  combinations: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'What is the key difference between combinations and permutations?',
        options: [
          'Permutations allow repetition',
          'Combinations ignore order',
          'Permutations ignore order',
          'Both are same',
        ],
        answer: 1,
        concept: 'comb_vs_perm',
        difficulty: 'easy',
      },
      {
        question:
          'How many combinations exist when choosing k elements from n elements?',
        options: ['n!', 'n^k', 'nCk', 'k!'],
        answer: 2,
        concept: 'comb_formula',
        difficulty: 'easy',
      },
      {
        question:
          'Why do combinations use index-based recursion (start index)?',
        options: [
          'To sort array',
          'To avoid duplicates',
          'To reduce time complexity',
          'To reverse array',
        ],
        answer: 1,
        concept: 'comb_index',
        difficulty: 'medium',
      },
      {
        question:
          'What happens if we do not increment index in combinations recursion?',
        options: [
          'Correct output',
          'Duplicate combinations',
          'Faster execution',
          'Infinite loop',
        ],
        answer: 1,
        concept: 'comb_duplicate_bug',
        difficulty: 'medium',
      },
      {
        question: 'Time complexity of generating combinations is:',
        options: ['O(n)', 'O(n log n)', 'Exponential', 'O(n^2)'],
        answer: 2,
        concept: 'comb_complexity',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
How many combinations exist for choosing 2 elements from [1,2,3]?
`,
        options: ['2', '3', '6', '9'],
        answer: 1,
        concept: 'comb_small',
        difficulty: 'easy',
      },
      {
        question: `
If combinations are generated using recursion, what does each recursion level represent?
`,
        options: ['Index choice', 'Sorted array', 'Permutation', 'Graph node'],
        answer: 0,
        concept: 'comb_depth',
        difficulty: 'medium',
      },
      {
        question: `
What happens after selecting an element in combinations backtracking?
`,
        options: [
          'Restart recursion',
          'Move to next index',
          'Swap elements',
          'Delete array',
        ],
        answer: 1,
        concept: 'comb_flow',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If same index is reused in recursive call, what happens?
`,
        options: [
          'Correct output',
          'Duplicate combinations',
          'Infinite recursion',
          'Faster execution',
        ],
        answer: 1,
        concept: 'comb_index_bug',
        difficulty: 'medium',
      },
      {
        question: `
If base case is incorrect (wrong size condition), what happens?
`,
        options: [
          'Correct combinations',
          'Missing or extra combinations',
          'Infinite loop',
          'No recursion',
        ],
        answer: 1,
        concept: 'comb_base_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given an array nums and integer k, return all possible combinations of size k. Fix backtracking logic in C++.',
        language: 'cpp',
        code: [
          'void combine(vector<int>& nums, int k, int index, vector<int>& path){',
          '  if(path.size() == ___){',
          '    print(path);',
          '    return;',
          '  }',
          '',
          '  for(int i = index; i < ___; i++){',
          '    path.push_back(nums[___]);',
          '',
          '    combine(nums, k, ___, path);',
          '',
          '    path.pop_back();',
          '  }',
          '}',
        ],
        blanks: [['k'], ['nums.size()'], ['i'], ['i+1']],
        concept: 'comb_cpp_backtracking',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Java combination generation where recursion index handling is incorrect.',
        language: 'java',
        code: [
          'void combine(int[] nums, int k, int index, List<Integer> path){',
          '  if(path.size() == ___){',
          '    print(path);',
          '    return;',
          '  }',
          '',
          '  for(int i=index; i<___; i++){',
          '    path.add(nums[___]);',
          '',
          '    combine(nums, k, ___, path);',
          '',
          '    path.remove(path.size()-1);',
          '  }',
          '}',
        ],
        blanks: [['k'], ['nums.length'], ['i'], ['i+1']],
        concept: 'comb_java_backtracking',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Python combination generation where index progression is incorrect.',
        language: 'python',
        code: [
          'def combine(nums, k, index, path):',
          '    if len(path) == ___:',
          '        print(path)',
          '        return',
          '',
          '    for i in range(index, ___):',
          '        path.append(nums[___])',
          '',
          '        combine(nums, k, ___, path)',
          '',
          '        path.pop()',
        ],
        blanks: [['k'], ['len(nums)'], ['i'], ['i+1']],
        concept: 'comb_python_backtracking',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix JavaScript combinations where recursion uses wrong index causing duplicates.',
        language: 'javascript',
        code: [
          'function combine(nums, k, index, path){',
          '  if(path.length === ___){',
          '    console.log(path);',
          '    return;',
          '  }',
          '',
          '  for(let i=index; i<___; i++){',
          '    path.push(nums[___]);',
          '',
          '    combine(nums, k, ___, path);',
          '',
          '    path.pop();',
          '  }',
          '}',
        ],
        blanks: [['k'], ['nums.length'], ['i'], ['i+1']],
        concept: 'comb_js_backtracking',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix combination generation where loop condition causes missing elements.',
        language: 'cpp',
        code: [
          'for(int i = index; i ___ nums.size(); i++){',
          '  path.push_back(nums[i]);',
          '  combine(nums, k, i ___ 1, path);',
          '  path.pop_back();',
          '}',
        ],
        blanks: [['<'], ['+']],
        concept: 'comb_loop_fix',
        difficulty: 'medium',
      },
    ],
  },
  subset_generation: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question: 'How many subsets exist for an array of size n?',
        options: ['n', 'n!', '2^n', 'n^2'],
        answer: 2,
        concept: 'subset_count',
        difficulty: 'easy',
      },
      {
        question: 'What is the core idea behind subset generation?',
        options: [
          'Sorting elements',
          'Include / Exclude each element',
          'Swapping elements',
          'Greedy choice',
        ],
        answer: 1,
        concept: 'subset_include_exclude',
        difficulty: 'easy',
      },
      {
        question: 'Why does subset generation use recursion depth n?',
        options: [
          'Each level decides for one element',
          'To sort array',
          'To reduce complexity',
          'To remove duplicates',
        ],
        answer: 0,
        concept: 'subset_depth',
        difficulty: 'medium',
      },
      {
        question:
          'What happens when recursion reaches end of array in subset generation?',
        options: [
          'Return empty',
          'Store current subset',
          'Restart recursion',
          'Delete elements',
        ],
        answer: 1,
        concept: 'subset_base',
        difficulty: 'easy',
      },
      {
        question: 'Subset generation is equivalent to which concept?',
        options: ['Binary decision tree', 'Sorting', 'Graph traversal', 'Heap'],
        answer: 0,
        concept: 'subset_binary_tree',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
How many subsets exist for array [1,2,3]?
`,
        options: ['6', '8', '9', '3'],
        answer: 1,
        concept: 'subset_small',
        difficulty: 'easy',
      },
      {
        question: `
Which subset is always present in subset generation?
`,
        options: [
          'Full array only',
          'Empty subset',
          'Single element subset',
          'Sorted subset',
        ],
        answer: 1,
        concept: 'subset_empty',
        difficulty: 'easy',
      },
      {
        question: `
If each element has 2 choices (include/exclude), total combinations become?
`,
        options: ['n', '2n', '2^n', 'n^2'],
        answer: 2,
        concept: 'subset_math',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If exclude case is not considered in subset recursion, what happens?
`,
        options: [
          'Correct output',
          'Missing subsets',
          'Infinite recursion',
          'Duplicate subsets',
        ],
        answer: 1,
        concept: 'subset_exclude_bug',
        difficulty: 'medium',
      },
      {
        question: `
If base case is incorrect, what happens?
`,
        options: [
          'Correct subsets',
          'Missing or incorrect subsets',
          'Faster execution',
          'No recursion',
        ],
        answer: 1,
        concept: 'subset_base_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given an array nums, generate all subsets using include/exclude recursion. Fix logic in C++.',
        language: 'cpp',
        code: [
          'void subsets(vector<int>& nums, int index, vector<int>& path){',
          '  if(index == ___){',
          '    print(path);',
          '    return;',
          '  }',
          '',
          '  // include',
          '  path.push_back(nums[___]);',
          '  subsets(nums, ___, path);',
          '',
          '  path.pop_back();',
          '',
          '  // exclude',
          '  subsets(nums, ___, path);',
          '}',
        ],
        blanks: [['nums.size()'], ['index'], ['index+1'], ['index+1']],
        concept: 'subset_cpp',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Java subset generation where include/exclude recursion is incorrect.',
        language: 'java',
        code: [
          'void subsets(int[] nums, int index, List<Integer> path){',
          '  if(index == ___){',
          '    print(path);',
          '    return;',
          '  }',
          '',
          '  path.add(nums[___]);',
          '  subsets(nums, ___, path);',
          '',
          '  path.remove(path.size()-1);',
          '',
          '  subsets(nums, ___, path);',
          '}',
        ],
        blanks: [['nums.length'], ['index'], ['index+1'], ['index+1']],
        concept: 'subset_java',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Python subset generation where recursion calls are incorrect.',
        language: 'python',
        code: [
          'def subsets(nums, index, path):',
          '    if index == ___:',
          '        print(path)',
          '        return',
          '',
          '    # include',
          '    subsets(nums, ___, path + [nums[index]])',
          '',
          '    # exclude',
          '    subsets(nums, ___, path)',
        ],
        blanks: [['len(nums)'], ['index+1'], ['index+1']],
        concept: 'subset_python',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix JavaScript subset generation where include/exclude flow is broken.',
        language: 'javascript',
        code: [
          'function subsets(nums, index, path){',
          '  if(index === ___){',
          '    console.log(path);',
          '    return;',
          '  }',
          '',
          '  subsets(nums, ___, [...path, nums[index]]);',
          '  subsets(nums, ___, path);',
          '}',
        ],
        blanks: [['nums.length'], ['index+1'], ['index+1']],
        concept: 'subset_js',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix subset generation loop-based approach where index handling is incorrect.',
        language: 'cpp',
        code: [
          'void subsets(vector<int>& nums, int index, vector<int>& path){',
          '  print(path);',
          '',
          '  for(int i = index; i ___ nums.size(); i++){',
          '    path.push_back(nums[i]);',
          '    subsets(nums, ___, path);',
          '    path.pop_back();',
          '  }',
          '}',
        ],
        blanks: [['<'], ['i+1']],
        concept: 'subset_loop',
        difficulty: 'medium',
      },
    ],
  },
  climbing_stairs: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In the climbing stairs problem, if you can take 1 or 2 steps, what is the recurrence relation?',
        options: [
          'f(n) = f(n-1)',
          'f(n) = f(n-1) + f(n-2)',
          'f(n) = n * f(n-1)',
          'f(n) = f(n/2)',
        ],
        answer: 1,
        concept: 'stairs_relation',
        difficulty: 'easy',
      },
      {
        question: 'Climbing stairs problem is equivalent to which sequence?',
        options: [
          'Arithmetic progression',
          'Geometric progression',
          'Fibonacci sequence',
          'Prime numbers',
        ],
        answer: 2,
        concept: 'stairs_fibonacci',
        difficulty: 'easy',
      },
      {
        question: 'What is the base condition for climbing stairs?',
        options: ['f(0)=0, f(1)=1', 'f(1)=1, f(2)=2', 'f(2)=1', 'No base case'],
        answer: 1,
        concept: 'stairs_base',
        difficulty: 'easy',
      },
      {
        question:
          'Time complexity of DP (tabulation) solution for climbing stairs is:',
        options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'],
        answer: 0,
        concept: 'stairs_dp_time',
        difficulty: 'easy',
      },
      {
        question: 'Space can be optimized in climbing stairs DP because:',
        options: [
          'We only need last two states',
          'We use recursion',
          'We sort values',
          'We use stacks',
        ],
        answer: 0,
        concept: 'stairs_space_opt',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
How many ways are there to climb 4 stairs?
`,
        options: ['3', '5', '8', '4'],
        answer: 1,
        concept: 'stairs_n4',
        difficulty: 'easy',
      },
      {
        question: `
How many ways are there to climb 5 stairs?
`,
        options: ['5', '8', '13', '10'],
        answer: 2,
        concept: 'stairs_n5',
        difficulty: 'medium',
      },
      {
        question: `
If only 1-step moves are allowed, how many ways exist for n stairs?
`,
        options: ['n', '1', '2^n', 'n!'],
        answer: 1,
        concept: 'stairs_single_step',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If recurrence is written as f(n)=f(n-1)+f(n-3), what happens?
`,
        options: [
          'Correct solution',
          'Incorrect count',
          'Infinite recursion',
          'Faster solution',
        ],
        answer: 1,
        concept: 'stairs_relation_bug',
        difficulty: 'medium',
      },
      {
        question: `
If base case is missing, what happens in recursion?
`,
        options: [
          'Correct output',
          'Infinite recursion',
          'Returns 0',
          'Faster execution',
        ],
        answer: 1,
        concept: 'stairs_base_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'You are given n stairs and you can climb either 1 or 2 steps at a time. Return number of distinct ways to reach top. Fix recursive solution in C++.',
        language: 'cpp',
        code: [
          'int climb(int n){',
          '  if(n == ___ || n == ___) return n;',
          '',
          '  return climb(n ___ 1) + climb(n ___ 2);',
          '}',
        ],
        blanks: [['1'], ['2'], ['-'], ['-']],
        concept: 'stairs_cpp_rec',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix memoized climbing stairs in Java where dp array is not used properly.',
        language: 'java',
        code: [
          'int climb(int n, int[] dp){',
          '  if(n <= 2) return n;',
          '',
          '  if(dp[n] != ___) return dp[n];',
          '',
          '  return dp[n] = climb(n-1, dp) + climb(n-2, dp);',
          '}',
        ],
        blanks: [['-1']],
        concept: 'stairs_memo',
        difficulty: 'medium',
      },

      {
        problem: 'Fix tabulation DP for climbing stairs in Python.',
        language: 'python',
        code: [
          'def climb(n):',
          '    dp = [0] * (n+1)',
          '    dp[1] = 1',
          '    dp[2] = 2',
          '',
          '    for i in range(3, ___):',
          '        dp[i] = dp[i-1] ___ dp[i-2]',
          '',
          '    return dp[___]',
        ],
        blanks: [['n+1'], ['+'], ['n']],
        concept: 'stairs_tab',
        difficulty: 'medium',
      },

      {
        problem: 'Fix space optimized climbing stairs in JavaScript.',
        language: 'javascript',
        code: [
          'function climb(n){',
          '  if(n <= 2) return n;',
          '',
          '  let a = 1, b = 2;',
          '',
          '  for(let i = 3; i <= n; i++){',
          '    let c = ___ + ___;',
          '    a = ___;',
          '    b = ___;',
          '  }',
          '',
          '  return ___;',
          '}',
        ],
        blanks: [['a'], ['b'], ['b'], ['c'], ['b']],
        concept: 'stairs_space',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix climbing stairs iterative logic where loop condition is incorrect.',
        language: 'cpp',
        code: [
          'for(int i = 3; i ___ n; i++){',
          '  dp[i] = dp[i-1] + dp[i-2];',
          '}',
        ],
        blanks: [['<=']],
        concept: 'stairs_loop_bug',
        difficulty: 'easy',
      },
    ],
  },
  coin_change: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question: 'In Coin Change problem (minimum coins), what is the goal?',
        options: [
          'Maximize coins',
          'Count number of ways',
          'Minimize number of coins',
          'Sort coins',
        ],
        answer: 2,
        concept: 'coin_goal',
        difficulty: 'easy',
      },
      {
        question: 'Coin Change is a variation of which DP pattern?',
        options: ['0/1 Knapsack', 'Unbounded Knapsack', 'Greedy', 'Graph DP'],
        answer: 1,
        concept: 'coin_unbounded',
        difficulty: 'medium',
      },
      {
        question: 'Why is greedy approach not always valid in coin change?',
        options: [
          'Coins are unsorted',
          'Local optimum may not give global optimum',
          'Too slow',
          'Requires recursion',
        ],
        answer: 1,
        concept: 'coin_greedy_fail',
        difficulty: 'medium',
      },
      {
        question: 'What is the recurrence relation for minimum coins?',
        options: [
          'dp[i] = dp[i-1]',
          'dp[i] = min(dp[i], 1 + dp[i-coin])',
          'dp[i] = dp[i]^2',
          'dp[i] = max(dp[i], dp[i-coin])',
        ],
        answer: 1,
        concept: 'coin_relation',
        difficulty: 'easy',
      },
      {
        question: 'Base case for coin change DP is:',
        options: ['dp[0] = 1', 'dp[0] = 0', 'dp[1] = 0', 'dp[n] = 1'],
        answer: 1,
        concept: 'coin_base',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
Given coins [1,2,5] and amount = 5, what is minimum coins required?
`,
        options: ['1', '2', '3', '5'],
        answer: 0,
        concept: 'coin_example_easy',
        difficulty: 'easy',
      },
      {
        question: `
Given coins [2] and amount = 3, what is the result?
`,
        options: ['1', '2', '-1', '0'],
        answer: 2,
        concept: 'coin_impossible',
        difficulty: 'easy',
      },
      {
        question: `
Given coins [1,3,4] and amount = 6, what is minimum coins required?
`,
        options: ['2', '3', '1', '4'],
        answer: 0,
        concept: 'coin_case_medium',
        difficulty: 'medium',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If dp[i] is initialized to 0 instead of infinity, what happens?
`,
        options: [
          'Correct answer',
          'Incorrect minimum calculation',
          'Infinite loop',
          'Faster execution',
        ],
        answer: 1,
        concept: 'coin_init_bug',
        difficulty: 'medium',
      },
      {
        question: `
If recurrence uses dp[i-1] instead of dp[i-coin], what happens?
`,
        options: [
          'Correct solution',
          'Incorrect transitions',
          'Faster solution',
          'No DP needed',
        ],
        answer: 1,
        concept: 'coin_transition_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given coins array and target amount, return minimum number of coins needed. Fix recursive solution in C++.',
        language: 'cpp',
        code: [
          'int coinChange(vector<int>& coins, int amount){',
          '  if(amount == ___) return 0;',
          '  if(amount < ___) return INT_MAX;',
          '',
          '  int ans = INT_MAX;',
          '',
          '  for(int coin : coins){',
          '    int res = coinChange(coins, amount ___ coin);',
          '',
          '    if(res != ___)',
          '      ans = min(ans, ___ + res);',
          '  }',
          '',
          '  return ans;',
          '}',
        ],
        blanks: [['0'], ['0'], ['-'], ['INT_MAX'], ['1']],
        concept: 'coin_cpp_rec',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix memoized coin change in Java where dp array is not used properly.',
        language: 'java',
        code: [
          'int coinChange(int[] coins, int amount, int[] dp){',
          '  if(amount == 0) return 0;',
          '  if(amount < 0) return Integer.MAX_VALUE;',
          '',
          '  if(dp[amount] != ___) return dp[amount];',
          '',
          '  int ans = Integer.MAX_VALUE;',
          '',
          '  for(int coin : coins){',
          '    int res = coinChange(coins, amount - coin, dp);',
          '    if(res != Integer.MAX_VALUE)',
          '      ans = Math.min(ans, ___ + res);',
          '  }',
          '',
          '  return dp[amount] = ans;',
          '}',
        ],
        blanks: [['-1'], ['1']],
        concept: 'coin_memo',
        difficulty: 'hard',
      },

      {
        problem: 'Fix tabulation DP for minimum coin change in Python.',
        language: 'python',
        code: [
          'def coinChange(coins, amount):',
          '    dp = [float("inf")] * (amount+1)',
          '    dp[0] = ___',
          '',
          '    for i in range(1, ___):',
          '        for coin in coins:',
          '            if i >= coin:',
          '                dp[i] = min(dp[i], ___ + dp[i-coin])',
          '',
          '    return dp[amount] if dp[amount] != float("inf") else ___',
        ],
        blanks: [['0'], ['amount+1'], ['1'], ['-1']],
        concept: 'coin_tab',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix JavaScript coin change where loop order causes incorrect results.',
        language: 'javascript',
        code: [
          'function coinChange(coins, amount){',
          '  let dp = new Array(amount+1).fill(Infinity);',
          '  dp[0] = ___;',
          '',
          '  for(let i=1; i<=amount; i++){',
          '    for(let coin of coins){',
          '      if(i >= coin)',
          '        dp[i] = Math.min(dp[i], ___ + dp[i-coin]);',
          '    }',
          '  }',
          '',
          '  return dp[amount] === Infinity ? ___ : dp[amount];',
          '}',
        ],
        blanks: [['0'], ['1'], ['-1']],
        concept: 'coin_js_tab',
        difficulty: 'medium',
      },

      {
        problem: 'Fix DP transition where wrong loop bound skips valid states.',
        language: 'cpp',
        code: [
          'for(int i=1; i ___ amount; i++){',
          '  for(int coin : coins){',
          '    if(i >= coin)',
          '      dp[i] = min(dp[i], 1 + dp[i-coin]);',
          '  }',
          '}',
        ],
        blanks: [['<=']],
        concept: 'coin_loop_bug',
        difficulty: 'easy',
      },
    ],
  },
  edit_distance: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question: 'What does Edit Distance measure between two strings?',
        options: [
          'Number of matching characters',
          'Minimum operations to convert one string into another',
          'Length difference',
          'Number of swaps',
        ],
        answer: 1,
        concept: 'edit_definition',
        difficulty: 'easy',
      },
      {
        question: 'Which operations are allowed in Edit Distance?',
        options: ['Insert, Delete, Replace', 'Swap only', 'Sort', 'Reverse'],
        answer: 0,
        concept: 'edit_operations',
        difficulty: 'easy',
      },
      {
        question: 'What is the DP state for Edit Distance?',
        options: ['dp[i]', 'dp[i][j]', 'dp[n]', 'dp[i+j]'],
        answer: 1,
        concept: 'edit_state',
        difficulty: 'easy',
      },
      {
        question: 'What does dp[i][j] represent?',
        options: [
          'Distance between prefixes of length i and j',
          'Total operations',
          'String length',
          'Character match',
        ],
        answer: 0,
        concept: 'edit_meaning',
        difficulty: 'medium',
      },
      {
        question: 'Time complexity of Edit Distance DP is:',
        options: ['O(n)', 'O(n log n)', 'O(n*m)', 'O(n^2 log n)'],
        answer: 2,
        concept: 'edit_complexity',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
What is the edit distance between "horse" and "ros"?
`,
        options: ['2', '3', '4', '5'],
        answer: 1,
        concept: 'edit_example1',
        difficulty: 'medium',
      },
      {
        question: `
What is the edit distance between "intention" and "execution"?
`,
        options: ['3', '4', '5', '6'],
        answer: 2,
        concept: 'edit_example2',
        difficulty: 'hard',
      },
      {
        question: `
If two strings are identical, what is their edit distance?
`,
        options: ['0', '1', 'Length', 'Infinity'],
        answer: 0,
        concept: 'edit_same',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If replace operation is ignored, what happens?
`,
        options: [
          'Correct result',
          'Suboptimal result',
          'Faster execution',
          'Infinite loop',
        ],
        answer: 1,
        concept: 'edit_replace_bug',
        difficulty: 'medium',
      },
      {
        question: `
If base cases dp[0][j] or dp[i][0] are incorrect, what happens?
`,
        options: [
          'Correct output',
          'Incorrect distances',
          'Infinite recursion',
          'No DP needed',
        ],
        answer: 1,
        concept: 'edit_base_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given two strings word1 and word2, return minimum operations to convert word1 into word2. Fix recursive solution in C++.',
        language: 'cpp',
        code: [
          'int solve(string s1, string s2, int i, int j){',
          '  if(i < ___) return j+1;',
          '  if(j < ___) return i+1;',
          '',
          '  if(s1[i] == s2[j])',
          '    return solve(s1, s2, ___, ___);',
          '',
          '  int insert = solve(s1, s2, i, ___);',
          '  int del = solve(s1, s2, ___, j);',
          '  int replace = solve(s1, s2, ___, ___);',
          '',
          '  return 1 + min({insert, del, replace});',
          '}',
        ],
        blanks: [
          ['0'],
          ['0'],
          ['i-1'],
          ['j-1'],
          ['j-1'],
          ['i-1'],
          ['i-1'],
          ['j-1'],
        ],
        concept: 'edit_cpp_rec',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix memoized edit distance in Java where dp is not used correctly.',
        language: 'java',
        code: [
          'int solve(String s1, String s2, int i, int j, int[][] dp){',
          '  if(i < 0) return j+1;',
          '  if(j < 0) return i+1;',
          '',
          '  if(dp[i][j] != ___) return dp[i][j];',
          '',
          '  if(s1.charAt(i) == s2.charAt(j))',
          '    return dp[i][j] = solve(s1, s2, i-1, j-1, dp);',
          '',
          '  int insert = solve(s1, s2, i, j-1, dp);',
          '  int del = solve(s1, s2, i-1, j, dp);',
          '  int replace = solve(s1, s2, i-1, j-1, dp);',
          '',
          '  return dp[i][j] = ___ + Math.min(insert, Math.min(del, replace));',
          '}',
        ],
        blanks: [['-1'], ['1']],
        concept: 'edit_memo',
        difficulty: 'hard',
      },

      {
        problem: 'Fix tabulation DP for edit distance in Python.',
        language: 'python',
        code: [
          'def editDistance(s1, s2):',
          '    n, m = len(s1), len(s2)',
          '    dp = [[0]*(m+1) for _ in range(n+1)]',
          '',
          '    for i in range(n+1):',
          '        dp[i][0] = ___',
          '',
          '    for j in range(m+1):',
          '        dp[0][j] = ___',
          '',
          '    for i in range(1, n+1):',
          '        for j in range(1, m+1):',
          '            if s1[i-1] == s2[j-1]:',
          '                dp[i][j] = dp[i-1][j-1]',
          '            else:',
          '                dp[i][j] = 1 + min(dp[i][j-1], dp[i-1][j], ___)',
          '',
          '    return dp[n][m]',
        ],
        blanks: [['i'], ['j'], ['dp[i-1][j-1]']],
        concept: 'edit_tab',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix JavaScript edit distance where DP transitions are incorrect.',
        language: 'javascript',
        code: [
          'function editDistance(s1, s2){',
          '  let n = s1.length, m = s2.length;',
          '  let dp = Array.from({length:n+1}, ()=>Array(m+1).fill(0));',
          '',
          '  for(let i=0;i<=n;i++) dp[i][0] = ___;',
          '  for(let j=0;j<=m;j++) dp[0][j] = ___;',
          '',
          '  for(let i=1;i<=n;i++){',
          '    for(let j=1;j<=m;j++){',
          '      if(s1[i-1] === s2[j-1])',
          '        dp[i][j] = dp[i-1][j-1];',
          '      else',
          '        dp[i][j] = 1 + Math.min(dp[i][j-1], dp[i-1][j], ___);',
          '    }',
          '  }',
          '',
          '  return dp[n][m];',
          '}',
        ],
        blanks: [['i'], ['j'], ['dp[i-1][j-1]']],
        concept: 'edit_js_tab',
        difficulty: 'medium',
      },

      {
        problem: 'Fix DP loop bounds where incorrect limits skip valid states.',
        language: 'cpp',
        code: [
          'for(int i=1; i ___ n; i++){',
          '  for(int j=1; j ___ m; j++){',
          '    // dp logic',
          '  }',
          '}',
        ],
        blanks: [['<='], ['<=']],
        concept: 'edit_loop_bug',
        difficulty: 'easy',
      },
    ],
  },
  partition_equal_subset: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question: 'What is the goal of Partition Equal Subset Sum problem?',
        options: [
          'Split array into equal size subsets',
          'Split array into two subsets with equal sum',
          'Sort array',
          'Find maximum subset',
        ],
        answer: 1,
        concept: 'partition_goal',
        difficulty: 'easy',
      },
      {
        question: 'If total sum of array is odd, what is the result?',
        options: ['True', 'False', 'Depends', 'Undefined'],
        answer: 1,
        concept: 'partition_odd_sum',
        difficulty: 'easy',
      },
      {
        question: 'Partition Equal Subset reduces to which problem?',
        options: ['Sorting', 'Subset Sum', 'Graph traversal', 'Greedy'],
        answer: 1,
        concept: 'partition_subset_sum',
        difficulty: 'medium',
      },
      {
        question: 'What is the target sum for subset?',
        options: ['Total sum', 'Total sum / 2', 'Max element', 'Min element'],
        answer: 1,
        concept: 'partition_target',
        difficulty: 'easy',
      },
      {
        question: 'DP state dp[i][j] represents:',
        options: [
          'Minimum sum',
          'Maximum sum',
          'Whether sum j can be formed using first i elements',
          'Total subsets',
        ],
        answer: 2,
        concept: 'partition_state',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
Can array [1,5,11,5] be partitioned into equal subset sum?
`,
        options: ['True', 'False', 'Depends', 'Error'],
        answer: 0,
        concept: 'partition_example1',
        difficulty: 'easy',
      },
      {
        question: `
Can array [1,2,3,5] be partitioned into equal subset sum?
`,
        options: ['True', 'False', 'Depends', 'Error'],
        answer: 1,
        concept: 'partition_example2',
        difficulty: 'easy',
      },
      {
        question: `
If total sum = 20, what is subset target sum?
`,
        options: ['10', '20', '5', '15'],
        answer: 0,
        concept: 'partition_target_calc',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If DP is initialized incorrectly (dp[0][0] = false), what happens?
`,
        options: [
          'Correct result',
          'All results become false',
          'Infinite loop',
          'Faster execution',
        ],
        answer: 1,
        concept: 'partition_init_bug',
        difficulty: 'medium',
      },
      {
        question: `
If we reuse elements multiple times (instead of 0/1), what happens?
`,
        options: [
          'Correct solution',
          'Becomes unbounded knapsack',
          'No change',
          'Faster execution',
        ],
        answer: 1,
        concept: 'partition_unbounded_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given an integer array nums, return true if it can be partitioned into two subsets with equal sum. Fix recursive subset sum in C++.',
        language: 'cpp',
        code: [
          'bool solve(vector<int>& nums, int index, int target){',
          '  if(target == ___) return true;',
          '  if(index == ___ || target < 0) return false;',
          '',
          '  bool include = solve(nums, ___, target - nums[index]);',
          '  bool exclude = solve(nums, ___, target);',
          '',
          '  return ___ || ___;',
          '}',
        ],
        blanks: [
          ['0'],
          ['nums.size()'],
          ['index+1'],
          ['index+1'],
          ['include'],
          ['exclude'],
        ],
        concept: 'partition_cpp_rec',
        difficulty: 'hard',
      },

      {
        problem: 'Fix memoized subset sum for partition problem in Java.',
        language: 'java',
        code: [
          'boolean solve(int[] nums, int index, int target, int[][] dp){',
          '  if(target == 0) return true;',
          '  if(index == nums.length) return false;',
          '',
          '  if(dp[index][target] != ___)',
          '    return dp[index][target] == 1;',
          '',
          '  boolean include = false;',
          '  if(target >= nums[index])',
          '    include = solve(nums, ___, target - nums[index], dp);',
          '',
          '  boolean exclude = solve(nums, ___, target, dp);',
          '',
          '  dp[index][target] = (include || exclude) ? 1 : 0;',
          '  return ___;',
          '}',
        ],
        blanks: [['-1'], ['index+1'], ['index+1'], ['dp[index][target] == 1']],
        concept: 'partition_memo',
        difficulty: 'hard',
      },

      {
        problem: 'Fix tabulation DP for partition equal subset in Python.',
        language: 'python',
        code: [
          'def canPartition(nums):',
          '    total = sum(nums)',
          '    if total % 2 != 0:',
          '        return False',
          '',
          '    target = total // ___',
          '    dp = [[False]*(target+1) for _ in range(len(nums)+1)]',
          '',
          '    for i in range(len(nums)+1):',
          '        dp[i][0] = ___',
          '',
          '    for i in range(1, len(nums)+1):',
          '        for j in range(1, target+1):',
          '            if j >= nums[i-1]:',
          '                dp[i][j] = dp[i-1][j] or dp[i-1][___]',
          '            else:',
          '                dp[i][j] = dp[i-1][j]',
          '',
          '    return dp[len(nums)][target]',
        ],
        blanks: [['2'], ['True'], ['j-nums[i-1]']],
        concept: 'partition_tab',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix space optimized 1D DP for partition problem in JavaScript.',
        language: 'javascript',
        code: [
          'function canPartition(nums){',
          '  let sum = nums.reduce((a,b)=>a+b,0);',
          '  if(sum % 2 !== 0) return false;',
          '',
          '  let target = sum / ___;',
          '  let dp = new Array(target+1).fill(false);',
          '  dp[0] = ___;',
          '',
          '  for(let num of nums){',
          '    for(let j = target; j >= ___; j--){',
          '      dp[j] = dp[j] || dp[j-___];',
          '    }',
          '  }',
          '',
          '  return dp[target];',
          '}',
        ],
        blanks: [['2'], ['true'], ['num'], ['num']],
        concept: 'partition_1d',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix loop bounds where incorrect direction breaks 0/1 constraint.',
        language: 'cpp',
        code: [
          'for(int num : nums){',
          '  for(int j = target; j ___ num; j--){',
          '    dp[j] = dp[j] || dp[j-num];',
          '  }',
          '}',
        ],
        blanks: [['>=']],
        concept: 'partition_loop_bug',
        difficulty: 'medium',
      },
    ],
  },
  palindrome_partitioning: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question: 'What is the goal of Palindrome Partitioning problem?',
        options: [
          'Sort string',
          'Split string into palindromic substrings',
          'Find longest substring',
          'Reverse string',
        ],
        answer: 1,
        concept: 'pal_goal',
        difficulty: 'easy',
      },
      {
        question:
          'Which technique is primarily used in palindrome partitioning?',
        options: ['Greedy', 'Backtracking', 'Binary Search', 'Heap'],
        answer: 1,
        concept: 'pal_backtracking',
        difficulty: 'easy',
      },
      {
        question: 'Why is palindrome checking important?',
        options: [
          'To sort string',
          'To ensure valid partitions',
          'To count substrings',
          'To reduce memory',
        ],
        answer: 1,
        concept: 'pal_check',
        difficulty: 'easy',
      },
      {
        question: 'Time complexity of palindrome partitioning is:',
        options: ['O(n)', 'O(n^2)', 'Exponential', 'O(log n)'],
        answer: 2,
        concept: 'pal_complexity',
        difficulty: 'medium',
      },
      {
        question: 'How can palindrome checking be optimized?',
        options: ['Sorting', 'Using DP table', 'Using stack', 'Using queue'],
        answer: 1,
        concept: 'pal_dp_opt',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
How many palindrome partitions exist for "aab"?
`,
        options: ['1', '2', '3', '4'],
        answer: 1,
        concept: 'pal_example1',
        difficulty: 'medium',
      },
      {
        question: `
What are valid partitions of "aba"?
`,
        options: [
          '["a","b","a"] and ["aba"]',
          '["ab","a"]',
          '["a","ba"]',
          '["aba","a"]',
        ],
        answer: 0,
        concept: 'pal_example2',
        difficulty: 'easy',
      },
      {
        question: `
If string is already palindrome, how many partitions exist at minimum?
`,
        options: ['1', '2', 'n', '0'],
        answer: 0,
        concept: 'pal_full',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If palindrome check is skipped, what happens?
`,
        options: [
          'Correct partitions',
          'Invalid partitions generated',
          'Infinite recursion',
          'Faster execution',
        ],
        answer: 1,
        concept: 'pal_check_bug',
        difficulty: 'medium',
      },
      {
        question: `
If backtracking pop is missing, what happens?
`,
        options: [
          'Correct output',
          'Incorrect partitions',
          'Infinite loop',
          'No recursion',
        ],
        answer: 1,
        concept: 'pal_backtrack_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given a string s, partition it such that every substring is a palindrome. Return all possible partitions. Fix backtracking logic in C++.',
        language: 'cpp',
        code: [
          'bool isPalindrome(string s, int l, int r){',
          '  while(l < r){',
          '    if(s[l] != s[r]) return ___;',
          '    l++; r--;',
          '  }',
          '  return ___;',
          '}',
          '',
          'void solve(string s, int index, vector<string>& path){',
          '  if(index == ___){',
          '    print(path);',
          '    return;',
          '  }',
          '',
          '  for(int i=index; i<___; i++){',
          '    if(isPalindrome(s, index, i)){',
          '      path.push_back(s.substr(index, ___));',
          '      solve(s, ___, path);',
          '      path.pop_back();',
          '    }',
          '  }',
          '}',
        ],
        blanks: [
          ['false'],
          ['true'],
          ['s.size()'],
          ['s.size()'],
          ['i-index+1'],
          ['i+1'],
        ],
        concept: 'pal_cpp_backtracking',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Java palindrome partitioning where recursion and substring extraction are incorrect.',
        language: 'java',
        code: [
          'boolean isPalindrome(String s, int l, int r){',
          '  while(l < r){',
          '    if(s.charAt(l) != s.charAt(r)) return ___;',
          '    l++; r--;',
          '  }',
          '  return ___;',
          '}',
          '',
          'void solve(String s, int index, List<String> path){',
          '  if(index == ___){',
          '    print(path);',
          '    return;',
          '  }',
          '',
          '  for(int i=index; i<___; i++){',
          '    if(isPalindrome(s, index, i)){',
          '      path.add(s.substring(index, ___));',
          '      solve(s, ___, path);',
          '      path.remove(path.size()-1);',
          '    }',
          '  }',
          '}',
        ],
        blanks: [
          ['false'],
          ['true'],
          ['s.length()'],
          ['s.length()'],
          ['i+1'],
          ['i+1'],
        ],
        concept: 'pal_java_backtracking',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Python palindrome partitioning where slicing and recursion index are incorrect.',
        language: 'python',
        code: [
          'def isPalindrome(s, l, r):',
          '    while l < r:',
          '        if s[l] != s[r]:',
          '            return ___',
          '        l += 1',
          '        r -= 1',
          '    return ___',
          '',
          'def solve(s, index, path):',
          '    if index == ___:',
          '        print(path)',
          '        return',
          '',
          '    for i in range(index, ___):',
          '        if isPalindrome(s, index, i):',
          '            solve(s, ___, path + [s[index:i+1]])',
        ],
        blanks: [['False'], ['True'], ['len(s)'], ['len(s)'], ['i+1']],
        concept: 'pal_python_backtracking',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix JavaScript palindrome partitioning where substring and recursion are incorrect.',
        language: 'javascript',
        code: [
          'function isPalindrome(s, l, r){',
          '  while(l < r){',
          '    if(s[l] !== s[r]) return ___;',
          '    l++; r--;',
          '  }',
          '  return ___;',
          '}',
          '',
          'function solve(s, index, path){',
          '  if(index === ___){',
          '    console.log(path);',
          '    return;',
          '  }',
          '',
          '  for(let i=index; i<___; i++){',
          '    if(isPalindrome(s, index, i)){',
          '      solve(s, ___, [...path, s.slice(index, i+1)]);',
          '    }',
          '  }',
          '}',
        ],
        blanks: [['false'], ['true'], ['s.length'], ['s.length'], ['i+1']],
        concept: 'pal_js_backtracking',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix DP optimization for palindrome checking where incorrect indices break table.',
        language: 'cpp',
        code: [
          'for(int i=n-1; i>=0; i--){',
          '  for(int j=i; j ___ n; j++){',
          '    if(s[i] == s[j] && (j-i < 2 || dp[i+1][j-1]))',
          '      dp[i][j] = ___;',
          '  }',
          '}',
        ],
        blanks: [['<'], ['true']],
        concept: 'pal_dp_opt',
        difficulty: 'hard',
      },
    ],
  },
  knapsack_01: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question: 'In 0/1 Knapsack, what does "0/1" signify?',
        options: [
          'Weights are 0 or 1',
          'Items can be taken only once or not taken',
          'Only one item allowed',
          'Values are binary',
        ],
        answer: 1,
        concept: 'knapsack_01_meaning',
        difficulty: 'easy',
      },
      {
        question: 'What is the goal of 0/1 Knapsack problem?',
        options: [
          'Minimize weight',
          'Maximize value within capacity',
          'Sort items',
          'Count subsets',
        ],
        answer: 1,
        concept: 'knapsack_goal',
        difficulty: 'easy',
      },
      {
        question: 'DP state dp[i][w] represents:',
        options: [
          'Minimum value',
          'Maximum value using first i items and capacity w',
          'Total weight',
          'Subset count',
        ],
        answer: 1,
        concept: 'knapsack_state',
        difficulty: 'medium',
      },
      {
        question: 'Transition relation for knapsack is:',
        options: [
          'dp[i][w] = dp[i-1][w]',
          'dp[i][w] = max(dp[i-1][w], value[i] + dp[i-1][w-weight[i]])',
          'dp[i][w] = dp[i][w-1]',
          'dp[i][w] = min(dp[i][w])',
        ],
        answer: 1,
        concept: 'knapsack_transition',
        difficulty: 'medium',
      },
      {
        question: 'Time complexity of 0/1 Knapsack DP is:',
        options: ['O(n)', 'O(n log n)', 'O(n * W)', 'O(W^2)'],
        answer: 2,
        concept: 'knapsack_complexity',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
Given weights = [1,3,4], values = [15,20,30], capacity = 4.
What is maximum value using 0/1 knapsack?
`,
        options: ['30', '35', '45', '50'],
        answer: 1,
        concept: 'knapsack_example1',
        difficulty: 'medium',
      },
      {
        question: `
If capacity = 0, what is result in knapsack?
`,
        options: ['-1', '0', 'Infinity', 'Depends'],
        answer: 1,
        concept: 'knapsack_zero_capacity',
        difficulty: 'easy',
      },
      {
        question: `
If no items are available, what is result?
`,
        options: ['0', '1', 'Max value', 'Error'],
        answer: 0,
        concept: 'knapsack_no_items',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If dp is filled left-to-right in 1D optimization, what happens?
`,
        options: [
          'Correct solution',
          'Becomes unbounded knapsack',
          'Faster execution',
          'Infinite loop',
        ],
        answer: 1,
        concept: 'knapsack_loop_bug',
        difficulty: 'medium',
      },
      {
        question: `
If we allow reuse of same item, what problem does it become?
`,
        options: ['Subset sum', 'Unbounded knapsack', 'Greedy', 'Sorting'],
        answer: 1,
        concept: 'knapsack_unbounded',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given weights and values of items and a capacity W, return maximum value achievable using each item at most once. Fix recursive solution in C++.',
        language: 'cpp',
        code: [
          'int solve(vector<int>& wt, vector<int>& val, int index, int W){',
          '  if(index == ___ || W == ___) return 0;',
          '',
          '  if(wt[index] > W)',
          '    return solve(wt, val, ___, W);',
          '',
          '  int include = val[index] + solve(wt, val, ___, W - wt[index]);',
          '  int exclude = solve(wt, val, ___, W);',
          '',
          '  return max(___, ___);',
          '}',
        ],
        blanks: [
          ['wt.size()'],
          ['0'],
          ['index+1'],
          ['index+1'],
          ['index+1'],
          ['include'],
          ['exclude'],
        ],
        concept: 'knapsack_cpp_rec',
        difficulty: 'hard',
      },

      {
        problem: 'Fix memoized knapsack in Java where dp is not used properly.',
        language: 'java',
        code: [
          'int solve(int[] wt, int[] val, int i, int W, int[][] dp){',
          '  if(i == wt.length || W == 0) return 0;',
          '',
          '  if(dp[i][W] != ___) return dp[i][W];',
          '',
          '  int include = 0;',
          '  if(wt[i] <= W)',
          '    include = val[i] + solve(wt, val, ___, W - wt[i], dp);',
          '',
          '  int exclude = solve(wt, val, ___, W, dp);',
          '',
          '  return dp[i][W] = Math.max(include, exclude);',
          '}',
        ],
        blanks: [['-1'], ['i+1'], ['i+1']],
        concept: 'knapsack_memo',
        difficulty: 'hard',
      },

      {
        problem: 'Fix tabulation DP for 0/1 knapsack in Python.',
        language: 'python',
        code: [
          'def knapsack(wt, val, W):',
          '    n = len(wt)',
          '    dp = [[0]*(W+1) for _ in range(n+1)]',
          '',
          '    for i in range(1, n+1):',
          '        for w in range(0, W+1):',
          '            if wt[i-1] <= w:',
          '                dp[i][w] = max(dp[i-1][w], ___ + dp[i-1][w-wt[i-1]])',
          '            else:',
          '                dp[i][w] = dp[i-1][w]',
          '',
          '    return dp[n][W]',
        ],
        blanks: [['val[i-1]']],
        concept: 'knapsack_tab',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix 1D optimized knapsack in JavaScript where loop direction is incorrect.',
        language: 'javascript',
        code: [
          'function knapsack(wt, val, W){',
          '  let dp = new Array(W+1).fill(0);',
          '',
          '  for(let i=0;i<wt.length;i++){',
          '    for(let w=W; w ___ wt[i]; w--){',
          '      dp[w] = Math.max(dp[w], val[i] + dp[w-wt[i]]);',
          '    }',
          '  }',
          '',
          '  return dp[W];',
          '}',
        ],
        blanks: [['>=']],
        concept: 'knapsack_1d',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix loop bounds where incorrect condition skips valid capacities.',
        language: 'cpp',
        code: [
          'for(int i=1; i ___ n; i++){',
          '  for(int w=0; w ___ W; w++){',
          '    // dp logic',
          '  }',
          '}',
        ],
        blanks: [['<='], ['<=']],
        concept: 'knapsack_loop_fix',
        difficulty: 'easy',
      },
    ],
  },
  unbounded_knapsack: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'What is the key difference between 0/1 and Unbounded Knapsack?',
        options: [
          'Weights differ',
          'Items can be reused multiple times',
          'Values are different',
          'Capacity changes',
        ],
        answer: 1,
        concept: 'unbounded_difference',
        difficulty: 'easy',
      },
      {
        question: 'What is the goal of Unbounded Knapsack?',
        options: [
          'Minimize weight',
          'Maximize value within capacity',
          'Count subsets',
          'Sort items',
        ],
        answer: 1,
        concept: 'unbounded_goal',
        difficulty: 'easy',
      },
      {
        question: 'Which DP transition is correct for Unbounded Knapsack?',
        options: [
          'dp[i][w] = dp[i-1][w]',
          'dp[i][w] = max(dp[i-1][w], val[i] + dp[i][w-wt[i]])',
          'dp[i][w] = dp[i][w-1]',
          'dp[i][w] = min(dp[i][w])',
        ],
        answer: 1,
        concept: 'unbounded_transition',
        difficulty: 'medium',
      },
      {
        question: 'Why do we use dp[i][w-wt[i]] instead of dp[i-1][...]?',
        options: [
          'To reduce memory',
          'Because item can be reused',
          'To sort items',
          'To avoid recursion',
        ],
        answer: 1,
        concept: 'unbounded_reuse',
        difficulty: 'medium',
      },
      {
        question: 'Time complexity of Unbounded Knapsack DP is:',
        options: ['O(n)', 'O(n log n)', 'O(n * W)', 'O(W^2)'],
        answer: 2,
        concept: 'unbounded_complexity',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
Given weights = [2,3,4], values = [4,5,6], capacity = 6.
What is maximum value in unbounded knapsack?
`,
        options: ['10', '12', '8', '6'],
        answer: 1,
        concept: 'unbounded_example1',
        difficulty: 'medium',
      },
      {
        question: `
If only one item of weight 1 and value 10 exists, capacity = 5.
What is maximum value?
`,
        options: ['10', '20', '50', '5'],
        answer: 2,
        concept: 'unbounded_repeat',
        difficulty: 'easy',
      },
      {
        question: `
If capacity is smaller than smallest weight, what is result?
`,
        options: ['0', '1', 'Infinity', '-1'],
        answer: 0,
        concept: 'unbounded_small_capacity',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If we use dp[i-1][w-wt[i]] instead of dp[i][w-wt[i]], what happens?
`,
        options: [
          'Correct solution',
          'Becomes 0/1 knapsack',
          'Infinite loop',
          'Faster execution',
        ],
        answer: 1,
        concept: 'unbounded_wrong_transition',
        difficulty: 'medium',
      },
      {
        question: `
If loop runs backward (like 0/1 knapsack), what happens?
`,
        options: [
          'Correct result',
          'Prevents reuse of items',
          'Faster execution',
          'Infinite loop',
        ],
        answer: 1,
        concept: 'unbounded_loop_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given weights and values, find maximum value with unlimited supply of items. Fix recursive solution in C++.',
        language: 'cpp',
        code: [
          'int solve(vector<int>& wt, vector<int>& val, int index, int W){',
          '  if(index == ___ || W == ___) return 0;',
          '',
          '  if(wt[index] > W)',
          '    return solve(wt, val, ___, W);',
          '',
          '  int include = val[index] + solve(wt, val, ___, W - wt[index]);',
          '  int exclude = solve(wt, val, ___, W);',
          '',
          '  return max(include, exclude);',
          '}',
        ],
        blanks: [
          ['wt.size()'],
          ['0'],
          ['index+1'],
          ['index'], // 🔥 key difference
          ['index+1'],
        ],
        concept: 'unbounded_cpp_rec',
        difficulty: 'hard',
      },

      {
        problem: 'Fix memoized unbounded knapsack in Java.',
        language: 'java',
        code: [
          'int solve(int[] wt, int[] val, int i, int W, int[][] dp){',
          '  if(i == wt.length || W == 0) return 0;',
          '',
          '  if(dp[i][W] != ___) return dp[i][W];',
          '',
          '  int include = 0;',
          '  if(wt[i] <= W)',
          '    include = val[i] + solve(wt, val, ___, W - wt[i], dp);',
          '',
          '  int exclude = solve(wt, val, ___, W, dp);',
          '',
          '  return dp[i][W] = Math.max(include, exclude);',
          '}',
        ],
        blanks: [
          ['-1'],
          ['i'], // 🔥 reuse allowed
          ['i+1'],
        ],
        concept: 'unbounded_memo',
        difficulty: 'hard',
      },

      {
        problem: 'Fix tabulation DP for unbounded knapsack in Python.',
        language: 'python',
        code: [
          'def knapsack(wt, val, W):',
          '    n = len(wt)',
          '    dp = [0]*(W+1)',
          '',
          '    for i in range(n):',
          '        for w in range(___, W+1):',
          '            dp[w] = max(dp[w], ___ + dp[w-wt[i]])',
          '',
          '    return dp[W]',
        ],
        blanks: [['wt[i]'], ['val[i]']],
        concept: 'unbounded_tab',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix JavaScript unbounded knapsack where loop direction is incorrect.',
        language: 'javascript',
        code: [
          'function knapsack(wt, val, W){',
          '  let dp = new Array(W+1).fill(0);',
          '',
          '  for(let i=0;i<wt.length;i++){',
          '    for(let w=___; w<=W; w++){',
          '      dp[w] = Math.max(dp[w], val[i] + dp[w-wt[i]]);',
          '    }',
          '  }',
          '',
          '  return dp[W];',
          '}',
        ],
        blanks: [['wt[i]']],
        concept: 'unbounded_js',
        difficulty: 'medium',
      },

      {
        problem: 'Fix DP where wrong loop bound skips valid capacities.',
        language: 'cpp',
        code: [
          'for(int i=0; i<n; i++){',
          '  for(int w=wt[i]; w ___ W; w++){',
          '    dp[w] = max(dp[w], val[i] + dp[w-wt[i]]);',
          '  }',
          '}',
        ],
        blanks: [['<=']],
        concept: 'unbounded_loop_fix',
        difficulty: 'easy',
      },
    ],
  },
  fractional_knapsack: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question: 'In Fractional Knapsack, what is allowed?',
        options: [
          'Items must be taken fully',
          'Items can be broken into fractions',
          'Only one item allowed',
          'Weights must be equal',
        ],
        answer: 1,
        concept: 'fractional_definition',
        difficulty: 'easy',
      },
      {
        question: 'Which strategy is used in Fractional Knapsack?',
        options: [
          'Dynamic Programming',
          'Greedy',
          'Backtracking',
          'Divide and Conquer',
        ],
        answer: 1,
        concept: 'fractional_greedy',
        difficulty: 'easy',
      },
      {
        question: 'What is the selection criteria in Fractional Knapsack?',
        options: [
          'Minimum weight',
          'Maximum value',
          'Maximum value/weight ratio',
          'Minimum value',
        ],
        answer: 2,
        concept: 'fractional_ratio',
        difficulty: 'easy',
      },
      {
        question: 'Why does greedy work for Fractional Knapsack?',
        options: [
          'Because items are sorted',
          'Because local optimal choice leads to global optimum',
          'Because DP is not needed',
          'Because recursion is used',
        ],
        answer: 1,
        concept: 'fractional_greedy_valid',
        difficulty: 'medium',
      },
      {
        question: 'Time complexity of Fractional Knapsack is:',
        options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
        answer: 1,
        concept: 'fractional_complexity',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
Given weights = [10,20,30], values = [60,100,120], capacity = 50.
What is maximum value using fractional knapsack?
`,
        options: ['220', '240', '300', '180'],
        answer: 1,
        concept: 'fractional_example1',
        difficulty: 'medium',
      },
      {
        question: `
If capacity allows full items only, fractional knapsack behaves like:
`,
        options: [
          '0/1 knapsack',
          'Greedy fails',
          'Sorting problem',
          'Graph problem',
        ],
        answer: 0,
        concept: 'fractional_edge',
        difficulty: 'medium',
      },
      {
        question: `
If item with highest ratio fits partially, what do we do?
`,
        options: [
          'Skip item',
          'Take fraction of item',
          'Take full item',
          'Sort again',
        ],
        answer: 1,
        concept: 'fractional_partial',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If we sort items by value instead of value/weight, what happens?
`,
        options: [
          'Correct result',
          'Suboptimal result',
          'Infinite loop',
          'Faster execution',
        ],
        answer: 1,
        concept: 'fractional_sort_bug',
        difficulty: 'medium',
      },
      {
        question: `
If we apply DP like 0/1 knapsack here, what happens?
`,
        options: [
          'Correct result',
          'Overcomplicated and unnecessary',
          'Faster execution',
          'Infinite recursion',
        ],
        answer: 1,
        concept: 'fractional_dp_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given weights and values of items, maximize value using fractional knapsack. Fix sorting logic in C++.',
        language: 'cpp',
        code: [
          'struct Item { int value, weight; };',
          '',
          'bool cmp(Item a, Item b){',
          '  return (double)a.value/a.weight ___ (double)b.value/b.weight;',
          '}',
          '',
          'sort(items.begin(), items.end(), ___);',
        ],
        blanks: [['>'], ['cmp']],
        concept: 'fractional_sort',
        difficulty: 'easy',
      },

      {
        problem: 'Fix greedy selection logic in Java for fractional knapsack.',
        language: 'java',
        code: [
          'double total = 0;',
          '',
          'for(Item item : items){',
          '  if(capacity >= item.weight){',
          '    total += ___;',
          '    capacity -= ___;',
          '  } else {',
          '    total += (double)item.value/item.weight * ___;',
          '    break;',
          '  }',
          '}',
        ],
        blanks: [['item.value'], ['item.weight'], ['capacity']],
        concept: 'fractional_logic',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Python implementation where ratio calculation is incorrect.',
        language: 'python',
        code: [
          'items.sort(key=lambda x: ___, reverse=True)',
          '',
          'for val, wt in items:',
          '    if capacity >= wt:',
          '        total += val',
          '        capacity -= wt',
          '    else:',
          '        total += (val / wt) * capacity',
          '        break',
        ],
        blanks: [['x[0]/x[1]']],
        concept: 'fractional_ratio_calc',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix JavaScript fractional knapsack where partial selection is incorrect.',
        language: 'javascript',
        code: [
          'items.sort((a,b)=> (b.value/b.weight) - (a.value/a.weight));',
          '',
          'for(let item of items){',
          '  if(capacity >= item.weight){',
          '    total += item.value;',
          '    capacity -= item.weight;',
          '  } else {',
          '    total += (item.value/item.weight) * ___;',
          '    break;',
          '  }',
          '}',
        ],
        blanks: [['capacity']],
        concept: 'fractional_partial_js',
        difficulty: 'easy',
      },

      {
        problem: 'Fix loop where missing break causes incorrect accumulation.',
        language: 'cpp',
        code: [
          'else{',
          '  total += (item.value/item.weight) * capacity;',
          '  ___;',
          '}',
        ],
        blanks: [['break']],
        concept: 'fractional_break_bug',
        difficulty: 'easy',
      },
    ],
  },
  lcs: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question: 'What does LCS (Longest Common Subsequence) find?',
        options: [
          'Longest common substring',
          'Longest sequence present in both strings (not necessarily contiguous)',
          'Sorted string',
          'Shortest path',
        ],
        answer: 1,
        concept: 'lcs_definition',
        difficulty: 'easy',
      },
      {
        question:
          'What is the key difference between substring and subsequence?',
        options: [
          'No difference',
          'Substring must be contiguous, subsequence need not be',
          'Subsequence must be contiguous',
          'Substring ignores order',
        ],
        answer: 1,
        concept: 'lcs_vs_substring',
        difficulty: 'easy',
      },
      {
        question: 'DP state dp[i][j] represents in LCS:',
        options: [
          'Minimum operations',
          'Length of LCS of first i and j characters',
          'Total matches',
          'Substring length',
        ],
        answer: 1,
        concept: 'lcs_state',
        difficulty: 'medium',
      },
      {
        question: 'If characters match in LCS, what is transition?',
        options: [
          'dp[i][j] = dp[i-1][j]',
          'dp[i][j] = dp[i][j-1]',
          'dp[i][j] = 1 + dp[i-1][j-1]',
          'dp[i][j] = 0',
        ],
        answer: 2,
        concept: 'lcs_match',
        difficulty: 'easy',
      },
      {
        question: 'If characters do NOT match in LCS, what is transition?',
        options: [
          'dp[i][j] = dp[i-1][j-1]',
          'dp[i][j] = max(dp[i-1][j], dp[i][j-1])',
          'dp[i][j] = 1',
          'dp[i][j] = 0',
        ],
        answer: 1,
        concept: 'lcs_mismatch',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
What is LCS length of "abcde" and "ace"?
`,
        options: ['2', '3', '4', '5'],
        answer: 1,
        concept: 'lcs_example1',
        difficulty: 'easy',
      },
      {
        question: `
What is LCS length of "abc" and "def"?
`,
        options: ['0', '1', '2', '3'],
        answer: 0,
        concept: 'lcs_example2',
        difficulty: 'easy',
      },
      {
        question: `
What is LCS length of "AGGTAB" and "GXTXAYB"?
`,
        options: ['3', '4', '5', '6'],
        answer: 1,
        concept: 'lcs_example3',
        difficulty: 'medium',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If we use dp[i-1][j-1] when characters don’t match, what happens?
`,
        options: [
          'Correct result',
          'Incorrect shorter LCS',
          'Faster execution',
          'Infinite loop',
        ],
        answer: 1,
        concept: 'lcs_wrong_transition',
        difficulty: 'medium',
      },
      {
        question: `
If DP base cases are not initialized to 0, what happens?
`,
        options: [
          'Correct output',
          'Incorrect results',
          'Infinite recursion',
          'No DP needed',
        ],
        answer: 1,
        concept: 'lcs_base_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given two strings text1 and text2, return the length of their longest common subsequence. Fix recursive solution in C++.',
        language: 'cpp',
        code: [
          'int solve(string s1, string s2, int i, int j){',
          '  if(i < ___ || j < ___) return 0;',
          '',
          '  if(s1[i] == s2[j])',
          '    return 1 + solve(s1, s2, ___, ___);',
          '',
          '  return max(',
          '    solve(s1, s2, ___, j),',
          '    solve(s1, s2, i, ___)',
          '  );',
          '}',
        ],
        blanks: [['0'], ['0'], ['i-1'], ['j-1'], ['i-1'], ['j-1']],
        concept: 'lcs_cpp_rec',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix memoized LCS in Java where dp array is not used properly.',
        language: 'java',
        code: [
          'int solve(String s1, String s2, int i, int j, int[][] dp){',
          '  if(i < 0 || j < 0) return 0;',
          '',
          '  if(dp[i][j] != ___) return dp[i][j];',
          '',
          '  if(s1.charAt(i) == s2.charAt(j))',
          '    return dp[i][j] = 1 + solve(s1, s2, i-1, j-1, dp);',
          '',
          '  return dp[i][j] = Math.max(',
          '    solve(s1, s2, i-1, j, dp),',
          '    solve(s1, s2, i, j-1, dp)',
          '  );',
          '}',
        ],
        blanks: [['-1']],
        concept: 'lcs_memo',
        difficulty: 'hard',
      },

      {
        problem: 'Fix tabulation DP for LCS in Python.',
        language: 'python',
        code: [
          'def lcs(s1, s2):',
          '    n, m = len(s1), len(s2)',
          '    dp = [[0]*(m+1) for _ in range(n+1)]',
          '',
          '    for i in range(1, n+1):',
          '        for j in range(1, m+1):',
          '            if s1[i-1] == s2[j-1]:',
          '                dp[i][j] = ___',
          '            else:',
          '                dp[i][j] = max(dp[i-1][j], dp[i][j-1])',
          '',
          '    return dp[n][m]',
        ],
        blanks: [['1 + dp[i-1][j-1]']],
        concept: 'lcs_tab',
        difficulty: 'medium',
      },

      {
        problem: 'Fix JavaScript LCS where DP transition is incorrect.',
        language: 'javascript',
        code: [
          'function lcs(s1, s2){',
          '  let n = s1.length, m = s2.length;',
          '  let dp = Array.from({length:n+1}, ()=>Array(m+1).fill(0));',
          '',
          '  for(let i=1;i<=n;i++){',
          '    for(let j=1;j<=m;j++){',
          '      if(s1[i-1] === s2[j-1])',
          '        dp[i][j] = ___;',
          '      else',
          '        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);',
          '    }',
          '  }',
          '',
          '  return dp[n][m];',
          '}',
        ],
        blanks: [['1 + dp[i-1][j-1]']],
        concept: 'lcs_js_tab',
        difficulty: 'medium',
      },

      {
        problem: 'Fix loop bounds where incorrect limits skip valid states.',
        language: 'cpp',
        code: [
          'for(int i=1; i ___ n; i++){',
          '  for(int j=1; j ___ m; j++){',
          '    // dp logic',
          '  }',
          '}',
        ],
        blanks: [['<='], ['<=']],
        concept: 'lcs_loop_bug',
        difficulty: 'easy',
      },
    ],
  },
  lis: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question: 'What does Longest Increasing Subsequence (LIS) find?',
        options: [
          'Longest sorted array',
          'Longest strictly increasing subsequence',
          'Longest substring',
          'Maximum sum',
        ],
        answer: 1,
        concept: 'lis_definition',
        difficulty: 'easy',
      },
      {
        question: 'In LIS, subsequence means:',
        options: [
          'Elements must be contiguous',
          'Elements can be skipped but order preserved',
          'Elements must be sorted',
          'Elements reversed',
        ],
        answer: 1,
        concept: 'lis_subsequence',
        difficulty: 'easy',
      },
      {
        question: 'Time complexity of DP solution for LIS is:',
        options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
        answer: 2,
        concept: 'lis_dp_complexity',
        difficulty: 'easy',
      },
      {
        question: 'Optimized LIS using binary search has complexity:',
        options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
        answer: 1,
        concept: 'lis_binary_complexity',
        difficulty: 'medium',
      },
      {
        question: 'In optimized LIS, what does the array "tails" represent?',
        options: [
          'Final sequence',
          'Smallest ending element of subsequences of each length',
          'Sorted array',
          'DP table',
        ],
        answer: 1,
        concept: 'lis_tails',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
What is LIS length of [10,9,2,5,3,7,101,18]?
`,
        options: ['3', '4', '5', '6'],
        answer: 1,
        concept: 'lis_example1',
        difficulty: 'medium',
      },
      {
        question: `
What is LIS length of [0,1,0,3,2,3]?
`,
        options: ['3', '4', '5', '6'],
        answer: 1,
        concept: 'lis_example2',
        difficulty: 'medium',
      },
      {
        question: `
If array is strictly decreasing, LIS length is:
`,
        options: ['0', '1', 'n', 'n/2'],
        answer: 1,
        concept: 'lis_decreasing',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If we use >= instead of > in LIS comparison, what happens?
`,
        options: [
          'Correct LIS',
          'Non-strict sequence allowed',
          'Infinite loop',
          'Faster execution',
        ],
        answer: 1,
        concept: 'lis_comparison_bug',
        difficulty: 'medium',
      },
      {
        question: `
If binary search replaces wrong index in tails array, what happens?
`,
        options: [
          'Correct result',
          'Incorrect LIS length',
          'Infinite loop',
          'No change',
        ],
        answer: 1,
        concept: 'lis_binary_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given an integer array nums, return length of longest increasing subsequence. Fix DP solution in C++.',
        language: 'cpp',
        code: [
          'int lengthOfLIS(vector<int>& nums){',
          '  int n = nums.size();',
          '  vector<int> dp(n, ___);',
          '',
          '  int ans = 1;',
          '',
          '  for(int i=0;i<n;i++){',
          '    for(int j=0;j<i;j++){',
          '      if(nums[i] ___ nums[j])',
          '        dp[i] = max(dp[i], ___ + dp[j]);',
          '    }',
          '    ans = max(ans, dp[i]);',
          '  }',
          '',
          '  return ans;',
          '}',
        ],
        blanks: [['1'], ['>'], ['1']],
        concept: 'lis_dp',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix memoized LIS in Java where dp array is not initialized correctly.',
        language: 'java',
        code: [
          'int solve(int[] nums, int i, int prev, int[][] dp){',
          '  if(i == nums.length) return 0;',
          '',
          '  if(dp[i][prev+1] != ___) return dp[i][prev+1];',
          '',
          '  int take = 0;',
          '  if(prev == -1 || nums[i] ___ nums[prev])',
          '    take = 1 + solve(nums, ___, i, dp);',
          '',
          '  int skip = solve(nums, ___, prev, dp);',
          '',
          '  return dp[i][prev+1] = Math.max(take, skip);',
          '}',
        ],
        blanks: [['-1'], ['>'], ['i+1'], ['i+1']],
        concept: 'lis_memo',
        difficulty: 'hard',
      },

      {
        problem: 'Fix binary search optimized LIS in Python.',
        language: 'python',
        code: [
          'import bisect',
          '',
          'def lis(nums):',
          '    tails = []',
          '',
          '    for num in nums:',
          '        idx = bisect.bisect_left(tails, ___)',
          '        if idx == len(tails):',
          '            tails.append(num)',
          '        else:',
          '            tails[idx] = ___',
          '',
          '    return len(tails)',
        ],
        blanks: [['num'], ['num']],
        concept: 'lis_binary',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix JavaScript LIS optimized solution where binary search condition is wrong.',
        language: 'javascript',
        code: [
          'function lis(nums){',
          '  let tails = [];',
          '',
          '  for(let num of nums){',
          '    let l=0, r=tails.length;',
          '',
          '    while(l<r){',
          '      let mid = Math.floor((l+r)/2);',
          '      if(tails[mid] ___ num)',
          '        l = mid + 1;',
          '      else',
          '        r = mid;',
          '    }',
          '',
          '    tails[l] = num;',
          '  }',
          '',
          '  return tails.length;',
          '}',
        ],
        blanks: [['<']],
        concept: 'lis_js_binary',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix loop bounds where incorrect iteration skips valid elements.',
        language: 'cpp',
        code: [
          'for(int i=0;i ___ n;i++){',
          '  for(int j=0;j ___ i;j++){',
          '    // LIS logic',
          '  }',
          '}',
        ],
        blanks: [['<'], ['<']],
        concept: 'lis_loop_bug',
        difficulty: 'easy',
      },
    ],
  },
  matrix_chain_multiplication: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question: 'What is the goal of Matrix Chain Multiplication problem?',
        options: [
          'Multiply matrices',
          'Find minimum cost of multiplying matrices',
          'Sort matrices',
          'Reverse matrices',
        ],
        answer: 1,
        concept: 'mcm_goal',
        difficulty: 'easy',
      },
      {
        question: 'What determines cost of multiplying two matrices?',
        options: [
          'Sum of elements',
          'Product of dimensions',
          'Difference of dimensions',
          'Matrix values',
        ],
        answer: 1,
        concept: 'mcm_cost',
        difficulty: 'easy',
      },
      {
        question: 'Why is MCM a DP problem?',
        options: [
          'Greedy works',
          'Overlapping subproblems exist',
          'Sorting needed',
          'Graph traversal used',
        ],
        answer: 1,
        concept: 'mcm_dp_reason',
        difficulty: 'medium',
      },
      {
        question: 'DP state dp[i][j] represents:',
        options: [
          'Cost of multiplying matrix i',
          'Minimum cost to multiply matrices from i to j',
          'Total matrices',
          'Dimensions',
        ],
        answer: 1,
        concept: 'mcm_state',
        difficulty: 'medium',
      },
      {
        question: 'What is the key idea in MCM?',
        options: ['Binary search', 'Partition at every k', 'Sorting', 'Greedy'],
        answer: 1,
        concept: 'mcm_partition',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
Given dimensions [10,20,30], what is minimum multiplication cost?
`,
        options: ['6000', '3000', '1000', '2000'],
        answer: 0,
        concept: 'mcm_example1',
        difficulty: 'easy',
      },
      {
        question: `
Given dimensions [40,20,30,10,30], what is minimum cost?
`,
        options: ['26000', '30000', '20000', '15000'],
        answer: 0,
        concept: 'mcm_example2',
        difficulty: 'hard',
      },
      {
        question: `
If only one matrix exists, cost is:
`,
        options: ['0', '1', 'n', 'Infinity'],
        answer: 0,
        concept: 'mcm_single',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If we skip trying all partition points k, what happens?
`,
        options: [
          'Correct result',
          'Suboptimal result',
          'Faster execution',
          'Infinite loop',
        ],
        answer: 1,
        concept: 'mcm_partition_bug',
        difficulty: 'medium',
      },
      {
        question: `
If multiplication cost formula is wrong, what happens?
`,
        options: [
          'Correct result',
          'Incorrect minimum cost',
          'Faster execution',
          'No effect',
        ],
        answer: 1,
        concept: 'mcm_formula_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given an array arr[] of size n where arr[i] represents matrix dimensions, find minimum cost to multiply matrices. Fix recursive solution in C++.',
        language: 'cpp',
        code: [
          'int solve(vector<int>& arr, int i, int j){',
          '  if(i == ___) return 0;',
          '',
          '  int ans = INT_MAX;',
          '',
          '  for(int k = i; k ___ j; k++){',
          '    int cost = solve(arr, i, k) +',
          '               solve(arr, ___, j) +',
          '               arr[i-1] * arr[k] * arr[j];',
          '',
          '    ans = min(ans, cost);',
          '  }',
          '',
          '  return ans;',
          '}',
        ],
        blanks: [['j'], ['<'], ['k+1']],
        concept: 'mcm_cpp_rec',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix memoized MCM in Java where dp array is not used correctly.',
        language: 'java',
        code: [
          'int solve(int[] arr, int i, int j, int[][] dp){',
          '  if(i == j) return 0;',
          '',
          '  if(dp[i][j] != ___) return dp[i][j];',
          '',
          '  int ans = Integer.MAX_VALUE;',
          '',
          '  for(int k=i; k<j; k++){',
          '    int cost = solve(arr, i, k, dp) +',
          '               solve(arr, ___, j, dp) +',
          '               arr[i-1]*arr[k]*arr[j];',
          '',
          '    ans = Math.min(ans, cost);',
          '  }',
          '',
          '  return dp[i][j] = ans;',
          '}',
        ],
        blanks: [['-1'], ['k+1']],
        concept: 'mcm_memo',
        difficulty: 'hard',
      },

      {
        problem: 'Fix tabulation DP for MCM in Python.',
        language: 'python',
        code: [
          'def mcm(arr):',
          '    n = len(arr)',
          '    dp = [[0]*n for _ in range(n)]',
          '',
          '    for length in range(2, n):',
          '        for i in range(1, n-length+1):',
          '            j = i + length - 1',
          '            dp[i][j] = float("inf")',
          '',
          '            for k in range(i, j):',
          '                dp[i][j] = min(',
          '                    dp[i][j],',
          '                    dp[i][k] + dp[k+1][j] + ___',
          '                )',
          '',
          '    return dp[1][n-1]',
        ],
        blanks: [['arr[i-1]*arr[k]*arr[j]']],
        concept: 'mcm_tab',
        difficulty: 'hard',
      },

      {
        problem: 'Fix JavaScript MCM where partition logic is incorrect.',
        language: 'javascript',
        code: [
          'function mcm(arr){',
          '  let n = arr.length;',
          '  let dp = Array.from({length:n}, ()=>Array(n).fill(0));',
          '',
          '  for(let len=2; len<n; len++){',
          '    for(let i=1; i<=n-len; i++){',
          '      let j = i+len-1;',
          '      dp[i][j] = Infinity;',
          '',
          '      for(let k=i; k ___ j; k++){',
          '        let cost = dp[i][k] + dp[k+1][j] + arr[i-1]*arr[k]*arr[j];',
          '        dp[i][j] = Math.min(dp[i][j], cost);',
          '      }',
          '    }',
          '  }',
          '',
          '  return dp[1][n-1];',
          '}',
        ],
        blanks: [['<']],
        concept: 'mcm_js',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix loop bounds where incorrect range skips valid partitions.',
        language: 'cpp',
        code: ['for(int k=i; k ___ j; k++){', '  // partition logic', '}'],
        blanks: [['<']],
        concept: 'mcm_loop_bug',
        difficulty: 'easy',
      },
    ],
  },
  dp_on_trees: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question: 'What is the main idea behind DP on Trees?',
        options: [
          'Sorting nodes',
          'Applying DP on hierarchical structure',
          'Binary search',
          'Greedy selection',
        ],
        answer: 1,
        concept: 'tree_dp_definition',
        difficulty: 'easy',
      },
      {
        question: 'DP on trees is typically performed using:',
        options: ['BFS', 'DFS', 'Sorting', 'Heap'],
        answer: 1,
        concept: 'tree_dp_dfs',
        difficulty: 'easy',
      },
      {
        question: 'Why is DFS preferred for DP on trees?',
        options: [
          'Faster sorting',
          'Processes children before parent',
          'Uses less memory',
          'Avoids recursion',
        ],
        answer: 1,
        concept: 'tree_dp_postorder',
        difficulty: 'medium',
      },
      {
        question: 'What is a common DP state in tree problems?',
        options: ['dp[i]', 'dp[node][state]', 'dp[n]', 'dp[i+j]'],
        answer: 1,
        concept: 'tree_dp_state',
        difficulty: 'medium',
      },
      {
        question: 'In tree DP, what is often returned from recursion?',
        options: ['Nothing', 'Value of subtree', 'Sorted array', 'Graph edges'],
        answer: 1,
        concept: 'tree_dp_return',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
In a binary tree, what is the diameter defined as?
`,
        options: [
          'Height of tree',
          'Longest path between two nodes',
          'Number of nodes',
          'Depth of root',
        ],
        answer: 1,
        concept: 'tree_diameter',
        difficulty: 'easy',
      },
      {
        question: `
If a node has no children, what does DFS return in DP on trees?
`,
        options: ['0', '1', 'Infinity', '-1'],
        answer: 1,
        concept: 'tree_leaf',
        difficulty: 'easy',
      },
      {
        question: `
In maximum path sum problem, what do we ignore?
`,
        options: ['Negative paths', 'Positive paths', 'Root node', 'Leaves'],
        answer: 0,
        concept: 'tree_negative_skip',
        difficulty: 'medium',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If we don’t combine left and right subtree results properly, what happens?
`,
        options: [
          'Correct result',
          'Incorrect DP result',
          'Faster execution',
          'Infinite loop',
        ],
        answer: 1,
        concept: 'tree_merge_bug',
        difficulty: 'medium',
      },
      {
        question: `
If recursion does not return subtree value, what happens?
`,
        options: [
          'Correct output',
          'Broken DP computation',
          'Infinite recursion',
          'No effect',
        ],
        answer: 1,
        concept: 'tree_return_bug',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given a binary tree, find the maximum depth using DFS (basic tree DP). Fix recursive logic in C++.',
        language: 'cpp',
        code: [
          'int depth(Node* root){',
          '  if(root == ___) return 0;',
          '',
          '  int left = depth(root->___);',
          '  int right = depth(root->___);',
          '',
          '  return ___ + max(left, right);',
          '}',
        ],
        blanks: [['NULL'], ['left'], ['right'], ['1']],
        concept: 'tree_depth',
        difficulty: 'easy',
      },

      {
        problem: 'Fix diameter of binary tree calculation in Java.',
        language: 'java',
        code: [
          'int diameter = 0;',
          '',
          'int dfs(Node root){',
          '  if(root == ___) return 0;',
          '',
          '  int left = dfs(root.left);',
          '  int right = dfs(root.right);',
          '',
          '  diameter = Math.max(diameter, ___ + ___);',
          '',
          '  return 1 + Math.max(left, right);',
          '}',
        ],
        blanks: [['null'], ['left'], ['right']],
        concept: 'tree_diameter_dp',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix maximum path sum logic in Python where negative paths must be ignored.',
        language: 'python',
        code: [
          'def maxPath(root):',
          '    if not root:',
          '        return 0',
          '',
          '    left = max(0, maxPath(root.left))',
          '    right = max(0, maxPath(root.right))',
          '',
          '    global_max[0] = max(global_max[0], ___ + ___ + root.val)',
          '',
          '    return root.val + max(left, right)',
        ],
        blanks: [['left'], ['right']],
        concept: 'tree_max_path',
        difficulty: 'hard',
      },

      {
        problem: 'Fix JavaScript House Robber III (tree DP) logic.',
        language: 'javascript',
        code: [
          'function rob(root){',
          '  function dfs(node){',
          '    if(!node) return [0,0];',
          '',
          '    let left = dfs(node.left);',
          '    let right = dfs(node.right);',
          '',
          '    let rob = node.val + left[1] + right[1];',
          '    let skip = Math.max(...left) + Math.max(...right);',
          '',
          '    return [___, ___];',
          '  }',
          '',
          '  return Math.max(...dfs(root));',
          '}',
        ],
        blanks: [['rob'], ['skip']],
        concept: 'tree_robber',
        difficulty: 'hard',
      },

      {
        problem: 'Fix DFS traversal where incorrect recursion order breaks DP.',
        language: 'cpp',
        code: [
          'void dfs(Node* root){',
          '  if(root == NULL) return;',
          '',
          '  dfs(root->___);',
          '  dfs(root->___);',
          '',
          '  // process node',
          '}',
        ],
        blanks: [['left'], ['right']],
        concept: 'tree_postorder',
        difficulty: 'easy',
      },
    ],
  },
};

export default dpDataset;
