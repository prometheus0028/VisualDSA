const radixSort = {
  id: 'radix-sort',
  title: 'Radix Sort',
  difficulty: 'Advanced',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(nk)',
  best: 'O(nk)',
  average: 'O(nk)',
  worst: 'O(nk)',
  space: 'O(n + k)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Radix Sort processes each digit position.

If numbers have k digits and we use Counting Sort per digit,
each pass takes O(n + base).

Total Time Complexity: O(nk)

Practical Scenario:
Fixed-length numbers like phone numbers or IDs.
      `,
    },
    average: {
      description: `
For n elements with k digits,
Radix Sort performs k passes.

Each pass distributes elements into buckets.

Time Complexity: O(nk)

Practical Scenario:
Sorting large integer datasets efficiently.
      `,
    },
    worst: {
      description: `
Worst case occurs when numbers have many digits.

The algorithm must process all k digits.

Time Complexity: O(nk)
Space Complexity: O(n + base)

Practical Scenario:
Very large numbers with many digit positions.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Radix Sort is a non-comparison sorting algorithm that sorts numbers digit by digit, starting from least significant digit (LSD) to most significant digit (MSD).',

  intuition:
    'Imagine sorting numbers by units place first, then tens place, then hundreds place. Each pass groups numbers based on one digit.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Let us sort the array: [170, 45, 75, 90, 802, 24, 2, 66]',
    walkthrough: [
      {
        pass: 'Pass 1 (Units Place)',
        steps: [
          'Group by last digit',
          'Result: [170, 90, 802, 2, 24, 45, 75, 66]',
        ],
      },
      {
        pass: 'Pass 2 (Tens Place)',
        steps: [
          'Group by tens digit',
          'Result: [802, 2, 24, 45, 66, 170, 75, 90]',
        ],
      },
      {
        pass: 'Pass 3 (Hundreds Place)',
        steps: [
          'Group by hundreds digit',
          'Result: [2, 24, 45, 66, 75, 90, 170, 802]',
        ],
      },
      {
        pass: 'Final Result',
        steps: ['[2, 24, 45, 66, 75, 90, 170, 802]'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Find maximum number to know number of digits.',
    'Start with least significant digit.',
    'Apply stable Counting Sort for that digit.',
    'Move to next digit position.',
    'Repeat until most significant digit is processed.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'radixSort(arr):',
    '  find maximum number',
    '  exp = 1',
    '  while max/exp > 0:',
    '    countingSortByDigit(arr, exp)',
    '    exp *= 10',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Radix Sort is ideal for sorting large integers or fixed-length numeric data where comparison-based sorting becomes expensive.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Faster than comparison sorts for large n',
    'Stable sorting algorithm',
    'Efficient for fixed digit lengths',
    'Linear time for small k',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Requires extra memory',
    'Only works for integers or fixed-length data',
    'Complex implementation compared to simple sorts',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Radix Sort is:',
      options: ['Comparison based', 'Non-comparison based'],
      answer: 1,
    },
    {
      question: 'Radix Sort works digit by digit starting from:',
      options: [
        'Most significant digit',
        'Least significant digit',
        'Middle digit',
        'Random digit',
      ],
      answer: 1,
    },
    {
      question: 'Time complexity depends on:',
      options: ['n only', 'k only', 'n and k', 'log n'],
      answer: 2,
    },
    {
      question: 'Radix Sort uses which algorithm internally?',
      options: ['Quick Sort', 'Heap Sort', 'Counting Sort', 'Merge Sort'],
      answer: 2,
    },
    {
      question: 'Radix Sort is stable?',
      options: ['Yes', 'No'],
      answer: 0,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>
#include <stdlib.h>

void countingSort(int arr[], int n, int exp) {
    int output[n];
    int count[10] = {0};

    for(int i = 0; i < n; i++)
        count[(arr[i]/exp)%10]++;

    for(int i = 1; i < 10; i++)
        count[i] += count[i-1];

    for(int i = n-1; i >= 0; i--) {
        output[count[(arr[i]/exp)%10]-1] = arr[i];
        count[(arr[i]/exp)%10]--;
    }

    for(int i = 0; i < n; i++)
        arr[i] = output[i];
}
`,

    cpp: `
#include <vector>
using namespace std;

void countingSort(vector<int>& arr, int exp) {
    vector<int> output(arr.size());
    int count[10] = {0};

    for(int num : arr)
        count[(num/exp)%10]++;

    for(int i = 1; i < 10; i++)
        count[i] += count[i-1];

    for(int i = arr.size()-1; i >= 0; i--) {
        output[count[(arr[i]/exp)%10]-1] = arr[i];
        count[(arr[i]/exp)%10]--;
    }

    arr = output;
}
`,

    java: `
public class RadixSort {
    static void countingSort(int arr[], int exp) {
        int n = arr.length;
        int output[] = new int[n];
        int count[] = new int[10];

        for(int i = 0; i < n; i++)
            count[(arr[i]/exp)%10]++;

        for(int i = 1; i < 10; i++)
            count[i] += count[i-1];

        for(int i = n-1; i >= 0; i--) {
            output[count[(arr[i]/exp)%10]-1] = arr[i];
            count[(arr[i]/exp)%10]--;
        }

        for(int i = 0; i < n; i++)
            arr[i] = output[i];
    }
}
`,

    python: `
def radix_sort(arr):
    max_val = max(arr)
    exp = 1

    while max_val // exp > 0:
        counting_sort_by_digit(arr, exp)
        exp *= 10

def counting_sort_by_digit(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    for num in arr:
        index = (num // exp) % 10
        count[index] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    for i in range(n - 1, -1, -1):
        index = (arr[i] // exp) % 10
        output[count[index] - 1] = arr[i]
        count[index] -= 1

    for i in range(n):
        arr[i] = output[i]
`,
    js: `
function radixSort(arr) {
    const max = Math.max(...arr);
    let exp = 1;

    while (Math.floor(max / exp) > 0) {
        countingSortByDigit(arr, exp);
        exp *= 10;
    }

    return arr;
}

function countingSortByDigit(arr, exp) {
    const output = new Array(arr.length).fill(0);
    const count = new Array(10).fill(0);

    for (let num of arr)
        count[Math.floor(num / exp) % 10]++;

    for (let i = 1; i < 10; i++)
        count[i] += count[i - 1];

    for (let i = arr.length - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    for (let i = 0; i < arr.length; i++)
        arr[i] = output[i];
}
`,
  },
};

export default radixSort;
