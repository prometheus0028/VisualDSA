const countingSort = {
  id: 'counting-sort',
  title: 'Counting Sort',
  difficulty: 'Advanced',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n + k)',
  best: 'O(n + k)',
  average: 'O(n + k)',
  worst: 'O(n + k)',
  space: 'O(k)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Counting Sort does not compare elements.

It counts occurrences of each value.
Even if the array is already sorted, counting still occurs.

Time Complexity: O(n + k)
Where:
n = number of elements
k = range of input values

Practical Scenario:
Small range datasets like exam scores (0–100).
      `,
    },
    average: {
      description: `
Counting Sort always performs counting and reconstruction.

Time Complexity: O(n + k)

If k is small compared to n, performance is very fast.

Practical Scenario:
Sorting integers with known small range.
      `,
    },
    worst: {
      description: `
Worst case occurs when the range k is very large compared to n.

Memory usage increases significantly.

Time Complexity: O(n + k)
Space Complexity: O(k)

Practical Scenario:
Large value range like IDs up to millions.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Counting Sort is a non-comparison sorting algorithm that counts how many times each value appears, then reconstructs the sorted array using those counts.',

  intuition:
    'Instead of comparing elements, imagine creating buckets for each possible number and counting how many times each appears. Then place them back in order.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Let us sort the array: [4, 2, 2, 8, 3, 3, 1]',
    walkthrough: [
      {
        pass: 'Step 1 (Find Maximum)',
        steps: ['Maximum value = 8 → create count array of size 9'],
      },
      {
        pass: 'Step 2 (Count Occurrences)',
        steps: ['Count array becomes:', '[0,1,2,2,1,0,0,0,1]'],
      },
      {
        pass: 'Step 3 (Reconstruct Array)',
        steps: [
          'Insert 1 → once',
          'Insert 2 → twice',
          'Insert 3 → twice',
          'Insert 4 → once',
          'Insert 8 → once',
        ],
      },
      {
        pass: 'Final Result',
        steps: ['[1,2,2,3,3,4,8]'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Find the maximum element in the array.',
    'Create a count array of size (max + 1).',
    'Count occurrences of each element.',
    'Modify count array to store positions.',
    'Reconstruct the sorted array using count array.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'countingSort(arr):',
    '  find max value',
    '  create count array of size max+1',
    '  for each element in arr:',
    '    increment count[element]',
    '  for i = 0 to max:',
    '    while count[i] > 0:',
    '      place i in array',
    '      decrement count[i]',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Counting Sort is ideal when sorting integers with a small known range. It is especially useful when stability is required and comparisons are expensive.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Very fast when k is small',
    'Stable sorting algorithm',
    'Linear time complexity',
    'No comparisons required',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Requires extra memory O(k)',
    'Not suitable for large range values',
    'Works only for integers',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Counting Sort is:',
      options: ['Comparison based', 'Non-comparison based'],
      answer: 1,
    },
    {
      question: 'Time complexity depends on:',
      options: ['Only n', 'Only k', 'n and k', 'log n'],
      answer: 2,
    },
    {
      question: 'Counting Sort works best when:',
      options: [
        'Range is small',
        'Range is very large',
        'Data is floating point',
        'Array is reversed',
      ],
      answer: 0,
    },
    {
      question: 'Counting Sort is stable?',
      options: ['Yes', 'No'],
      answer: 0,
    },
    {
      question: 'Space complexity is:',
      options: ['O(1)', 'O(n)', 'O(k)', 'O(log n)'],
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

void countingSort(int arr[], int n) {
    int max = arr[0];
    for(int i = 1; i < n; i++)
        if(arr[i] > max)
            max = arr[i];

    int* count = (int*)calloc(max + 1, sizeof(int));

    for(int i = 0; i < n; i++)
        count[arr[i]]++;

    int index = 0;
    for(int i = 0; i <= max; i++) {
        while(count[i] > 0) {
            arr[index++] = i;
            count[i]--;
        }
    }

    free(count);
}
`,

    cpp: `
#include <vector>
using namespace std;

void countingSort(vector<int>& arr) {
    int maxVal = *max_element(arr.begin(), arr.end());
    vector<int> count(maxVal + 1, 0);

    for(int num : arr)
        count[num]++;

    int index = 0;
    for(int i = 0; i <= maxVal; i++) {
        while(count[i] > 0) {
            arr[index++] = i;
            count[i]--;
        }
    }
}
`,

    java: `
public class CountingSort {
    static void countingSort(int[] arr) {
        int max = arr[0];
        for(int num : arr)
            if(num > max) max = num;

        int[] count = new int[max + 1];

        for(int num : arr)
            count[num]++;

        int index = 0;
        for(int i = 0; i <= max; i++) {
            while(count[i] > 0) {
                arr[index++] = i;
                count[i]--;
            }
        }
    }
}
`,

    python: `
def counting_sort(arr):
    max_val = max(arr)
    count = [0] * (max_val + 1)

    for num in arr:
        count[num] += 1

    index = 0
    for i in range(len(count)):
        while count[i] > 0:
            arr[index] = i
            index += 1
            count[i] -= 1
    return arr
`,

    js: `
function countingSort(arr) {
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);

    for(const num of arr)
        count[num]++;

    let index = 0;
    for(let i = 0; i <= max; i++) {
        while(count[i] > 0) {
            arr[index++] = i;
            count[i]--;
        }
    }

    return arr;
}
`,
  },
};

export default countingSort;
