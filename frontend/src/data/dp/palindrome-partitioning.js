const palindromePartitioning = {
  id: 'palindrome-partitioning',
  title: 'Palindrome Partitioning',
  difficulty: 'Advanced',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n²)',
  best: 'O(n²)',
  average: 'O(n²)',
  worst: 'O(n²)',
  space: 'O(n²)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
If most substrings are palindromes, fewer recursive calls are needed.

DP helps quickly identify palindromes.

Time Complexity: O(n²)
Space Complexity: O(n²)

Practical Scenario:
Strings with repeated characters like "aaaa".
      `,
    },
    average: {
      description: `
We check all substrings and partition recursively.

DP precomputation reduces repeated palindrome checks.

Time Complexity: O(n²)
Space Complexity: O(n²)

Practical Scenario:
Typical strings with mixed characters.
      `,
    },
    worst: {
      description: `
Worst case occurs when every substring must be checked.

Backtracking explores many partitions.

Time Complexity: O(n²)
Space Complexity: O(n²)

Practical Scenario:
Strings with no palindromic structure.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Palindrome Partitioning splits a string into all possible combinations of substrings such that every substring is a palindrome.',

  intuition:
    'Try every possible cut. If the left substring is a palindrome, recursively partition the remaining string.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Input: "aab"',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Split "aab" → "a" + "ab"', '"a" is palindrome'],
      },
      {
        pass: 'Step 2',
        steps: ['Split "ab" → "a" + "b"', 'Both are palindromes'],
      },
      {
        pass: 'Step 3',
        steps: ['Another split → "aa" + "b"', '"aa" is palindrome'],
      },
      {
        pass: 'Final Result',
        steps: ['[["a","a","b"], ["aa","b"]]'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Start from index 0.',
    'Try all substrings from current index.',
    'Check if substring is palindrome.',
    'If yes → recurse for remaining string.',
    'Backtrack after each attempt.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION partition(s, start, path):',
    '  if start == length:',
    '    add path to result',
    '    return',
    '',
    '  for i = start to length:',
    '    if isPalindrome(s[start:i]):',
    '      add substring to path',
    '      partition(s, i+1, path)',
    '      remove substring (backtrack)',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used in string segmentation problems, palindrome detection, and combinatorial partitioning problems.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Generates all valid partitions',
    'Combines DP and backtracking',
    'Efficient palindrome checking',
    'Useful in NLP and string analysis',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'High complexity for large strings',
    'Many recursive calls',
    'Requires extra space for storing results',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'What must each substring be?',
      options: ['Sorted', 'Palindrome', 'Unique', 'Even'],
      answer: 1,
    },
    {
      question: 'Technique used?',
      options: ['Greedy', 'Backtracking', 'Sorting', 'Graph'],
      answer: 1,
    },
    {
      question: 'DP is used for?',
      options: ['Sorting', 'Palindrome checking', 'Counting', 'Searching'],
      answer: 1,
    },
    {
      question: 'Input "aab" gives how many results?',
      options: ['1', '2', '3', '4'],
      answer: 1,
    },
    {
      question: 'Time complexity?',
      options: ['O(n)', 'O(n²)', 'O(log n)', 'O(n³)'],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
bool isPalindrome(char* s, int l, int r) {
    while(l < r) {
        if(s[l++] != s[r--]) return false;
    }
    return true;
}
`,

    cpp: `
void backtrack(string s, int start, vector<string>& path) {
    if(start == s.size()) {
        // store path
        return;
    }
    for(int i = start; i < s.size(); i++) {
        if(isPalindrome(s, start, i)) {
            path.push_back(s.substr(start, i - start + 1));
            backtrack(s, i + 1, path);
            path.pop_back();
        }
    }
}
`,

    java: `
void backtrack(String s, int start, List<String> path) {
    if(start == s.length()) {
        return;
    }
    for(int i = start; i < s.length(); i++) {
        if(isPalindrome(s, start, i)) {
            path.add(s.substring(start, i+1));
            backtrack(s, i+1, path);
            path.remove(path.size()-1);
        }
    }
}
`,

    python: `
def backtrack(s, start, path):
    if start == len(s):
        print(path)
        return
    for i in range(start, len(s)):
        if s[start:i+1] == s[start:i+1][::-1]:
            backtrack(s, i+1, path + [s[start:i+1]])
`,

    js: `
function backtrack(s, start, path) {
  if (start === s.length) {
    console.log(path);
    return;
  }

  for (let i = start; i < s.length; i++) {
    const sub = s.slice(start, i + 1);
    if (sub === sub.split('').reverse().join('')) {
      backtrack(s, i + 1, [...path, sub]);
    }
  }
}
`,
  },
};

export default palindromePartitioning;
