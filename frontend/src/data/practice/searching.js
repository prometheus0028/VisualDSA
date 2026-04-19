const searchingDataset = {
  linear_search: {
    mcq: [
      // ===== CONCEPT BASED =====
      {
        question:
          'What is the worst-case time complexity of Linear Search when searching for an element not present in the array?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
        answer: 2,
        concept: 'linear_search_time_complexity',
        subtopic: 'linear_search',
        type: 'concept',
        difficulty: 'easy',
      },
      {
        question:
          'Why is Linear Search preferred over Binary Search for small or unsorted datasets?',
        options: [
          'Requires sorting',
          'Works without sorting',
          'Uses recursion',
          'Uses divide and conquer',
        ],
        answer: 1,
        concept: 'linear_search_applicability',
        subtopic: 'linear_search',
        type: 'concept',
        difficulty: 'easy',
      },
      {
        question:
          'In Linear Search, how many elements are checked in the best case?',
        options: ['n', 'n/2', '1', 'log n'],
        answer: 2,
        concept: 'linear_search_best_case',
        subtopic: 'linear_search',
        type: 'concept',
        difficulty: 'easy',
      },
      {
        question: 'Which scenario gives worst performance for Linear Search?',
        options: [
          'Element at first index',
          'Element at middle',
          'Element at last or not present',
          'Sorted array',
        ],
        answer: 2,
        concept: 'linear_search_worst_case',
        subtopic: 'linear_search',
        type: 'concept',
        difficulty: 'medium',
      },
      {
        question: 'Linear Search is most suitable for which type of data?',
        options: [
          'Sorted large datasets',
          'Unsorted small datasets',
          'Balanced trees',
          'Graphs',
        ],
        answer: 1,
        concept: 'linear_search_use_case',
        subtopic: 'linear_search',
        type: 'concept',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED =====
      {
        question: `
What will be the output?

function search(arr, key){
  for(let i=0;i<arr.length;i++){
    if(arr[i] === key) return i;
  }
  return -1;
}
console.log(search([4,2,7,1], 7));
`,
        options: ['2', '3', '-1', 'Error'],
        answer: 0,
        concept: 'linear_search_basic_tracing',
        subtopic: 'linear_search',
        type: 'output',
        difficulty: 'easy',
      },
      {
        question: `
What will be printed?

int arr[] = {5,10,15};
int key = 20;
for(int i=0;i<3;i++){
  if(arr[i] == key){
    printf("%d", i);
    break;
  }
}
`,
        options: ['0', '2', 'Nothing', '-1'],
        answer: 2,
        concept: 'linear_search_not_found_behavior',
        subtopic: 'linear_search',
        type: 'output',
        difficulty: 'medium',
      },
      {
        question: `
What is the output?

let arr = [1,3,5,7];
let count = 0;
for(let i=0;i<arr.length;i++){
  count++;
  if(arr[i] === 5) break;
}
console.log(count);
`,
        options: ['2', '3', '4', '1'],
        answer: 1,
        concept: 'linear_search_iteration_count',
        subtopic: 'linear_search',
        type: 'output',
        difficulty: 'medium',
      },

      // ===== ERROR BASED =====
      {
        question: `
What is the issue in the following code?

for(int i=0;i<=n;i++){
  if(arr[i]==key) return i;
}
`,
        options: [
          'Syntax error',
          'Out of bounds access',
          'Infinite loop',
          'No issue',
        ],
        answer: 1,
        concept: 'linear_search_boundary_error',
        subtopic: 'linear_search',
        type: 'error',
        difficulty: 'medium',
      },
      {
        question: `
What error will occur?

for(int i=0;i<n;i++){
  if(arr[i]=key) return i;
}
`,
        options: [
          'Assignment instead of comparison',
          'Infinite loop',
          'Segmentation fault',
          'No error',
        ],
        answer: 0,
        concept: 'linear_search_assignment_bug',
        subtopic: 'linear_search',
        type: 'error',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix Linear Search where loop condition causes out-of-bounds error.',
        language: 'cpp',
        code: [
          'int search(int arr[], int n, int key){',
          '  for(int i=0; i ___ ; i++){',
          '    if(arr[i] ___ key){',
          '      return ___;',
          '    }',
          '  }',
          '  return ___;',
          '}',
        ],
        blanks: [['< n'], ['=='], ['i'], ['-1']],
        concept: 'linear_search_boundary',
        subtopic: 'linear_search',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix Linear Search where assignment is used instead of comparison.',
        language: 'c',
        code: [
          'int search(int arr[], int n, int key){',
          '  for(int i=0;i<___;i++){',
          '    if(arr[i] ___ key){',
          '      return ___;',
          '    }',
          '  }',
          '  return ___;',
          '}',
        ],
        blanks: [['n'], ['=='], ['i'], ['-1']],
        concept: 'linear_search_comparison_bug',
        subtopic: 'linear_search',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix bug where function does not return when element not found.',
        language: 'java',
        code: [
          'int search(int[] arr, int key){',
          '  for(int i=0;i<___;i++){',
          '    if(arr[i] == ___){',
          '      return ___;',
          '    }',
          '  }',
          '  return ___;',
          '}',
        ],
        blanks: [['arr.length'], ['key'], ['i'], ['-1']],
        concept: 'linear_search_missing_return',
        subtopic: 'linear_search',
        difficulty: 'easy',
      },

      {
        problem: 'Fix logic where search skips first element.',
        language: 'python',
        code: [
          'def search(arr, key):',
          '    for i in range(___, len(arr)):',
          '        if arr[i] ___ key:',
          '            return ___',
          '    return ___',
        ],
        blanks: [['0'], ['=='], ['i'], ['-1']],
        concept: 'linear_search_skip_bug',
        subtopic: 'linear_search',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Linear Search where loop never executes due to wrong condition.',
        language: 'javascript',
        code: [
          'function search(arr, key){',
          '  for(let i=0; i ___ arr.length; i++){',
          '    if(arr[i] === ___){',
          '      return ___;',
          '    }',
          '  }',
          '  return ___;',
          '}',
        ],
        blanks: [['<'], ['key'], ['i'], ['-1']],
        concept: 'linear_search_loop_condition_bug',
        subtopic: 'linear_search',
        difficulty: 'medium',
      },
    ],
  },

  binary_search: {
    mcq: [
      // ===== CONCEPT =====
      {
        question:
          'In Binary Search, what is the best-case time complexity when the target element is found at the first mid calculation?',
        options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'],
        answer: 2,
        concept: 'binary_search_best_case',
        subtopic: 'binary_search',
        type: 'concept',
        difficulty: 'easy',
      },
      {
        question:
          'Why does Binary Search require the array to be sorted before searching?',
        options: [
          'To reduce memory usage',
          'To divide the search space correctly',
          'To avoid recursion',
          'To improve stability',
        ],
        answer: 1,
        concept: 'binary_search_sorted_requirement',
        subtopic: 'binary_search',
        type: 'concept',
        difficulty: 'easy',
      },
      {
        question:
          'In Binary Search, what is the correct way to calculate mid to avoid overflow in large arrays?',
        options: [
          '(low + high) / 2',
          'low + high / 2',
          'low + (high - low) / 2',
          '(low * high) / 2',
        ],
        answer: 2,
        concept: 'binary_search_mid_overflow',
        subtopic: 'binary_search',
        type: 'concept',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (REAL CODE) =====
      {
        question: `
Consider the following Binary Search implementation:

function binarySearch(arr, key){
  let low = 0, high = arr.length - 1;
  while(low <= high){
    let mid = Math.floor((low + high) / 2);
    if(arr[mid] === key) return mid;
    else if(arr[mid] < key) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

console.log(binarySearch([2,4,6,8,10], 8));

What will be the output?
`,
        options: ['2', '3', '4', '-1'],
        answer: 1,
        concept: 'binary_search_tracing',
        subtopic: 'binary_search',
        type: 'output',
        difficulty: 'medium',
      },
      {
        question: `
In Binary Search, what will be printed by the following code?

int arr[] = {1,3,5,7,9};
int low = 0, high = 4;
int key = 2;

while(low <= high){
  int mid = (low + high) / 2;
  if(arr[mid] == key){
    printf("%d", mid);
    break;
  }
  else if(arr[mid] < key)
    low = mid + 1;
  else
    high = mid - 1;
}

`,
        options: ['0', '1', '-1', 'No output'],
        answer: 3,
        concept: 'binary_search_not_found_no_print',
        subtopic: 'binary_search',
        type: 'output',
        difficulty: 'medium',
      },
      {
        question: `
In Binary Search, how many iterations will be required in the worst case for an array of size 32?

`,
        options: ['5', '6', '4', '3'],
        answer: 0,
        concept: 'binary_search_iterations',
        subtopic: 'binary_search',
        type: 'output',
        difficulty: 'medium',
      },

      // ===== ERROR / LOGIC =====
      {
        question: `
In Binary Search, what error exists in the following code?

while(low < high){
  int mid = (low + high) / 2;
  if(arr[mid] == key) return mid;
}
`,
        options: [
          'Infinite loop may occur',
          'Syntax error',
          'Wrong return type',
          'No error',
        ],
        answer: 0,
        concept: 'binary_search_infinite_loop',
        subtopic: 'binary_search',
        type: 'error',
        difficulty: 'medium',
      },
      {
        question: `
In Binary Search, what is the issue with this condition?

if(arr[mid] = key)

`,
        options: [
          'Assignment instead of comparison',
          'Infinite loop',
          'Segmentation fault',
          'Correct condition',
        ],
        answer: 0,
        concept: 'binary_search_assignment_bug',
        subtopic: 'binary_search',
        type: 'error',
        difficulty: 'easy',
      },
    ],

    debug: [
      {
        problem:
          'Given a sorted array nums and a target value, implement Binary Search to return the index of the target. If not found, return -1. Fix all logical errors in the implementation.',
        language: 'cpp',
        code: [
          'int search(vector<int>& nums, int target){',
          '  int low = 0, high = nums.size() - 1;',
          '  while(low ___ high){',
          '    int mid = ___;',
          '    if(nums[mid] ___ target)',
          '      return ___;',
          '    else if(nums[mid] < target)',
          '      low = ___;',
          '    else',
          '      high = ___;',
          '  }',
          '  return ___;',
          '}',
        ],
        blanks: [
          ['<='],
          ['low + (high - low)/2'],
          ['=='],
          ['mid'],
          ['mid+1'],
          ['mid-1'],
          ['-1'],
        ],
        concept: 'binary_search_complete_logic',
        subtopic: 'binary_search',
        difficulty: 'medium',
      },

      {
        problem:
          'Given a sorted array nums, find the first occurrence of target using Binary Search. Fix the code to correctly implement lower bound.',
        language: 'java',
        code: [
          'int lowerBound(int[] nums, int target){',
          '  int low = 0, high = nums.length;',
          '  while(low < high){',
          '    int mid = (low + high) / 2;',
          '    if(nums[mid] ___ target)',
          '      high = ___;',
          '    else',
          '      low = ___;',
          '  }',
          '  return ___;',
          '}',
        ],
        blanks: [['>='], ['mid'], ['mid+1'], ['low']],
        concept: 'binary_search_lower_bound',
        subtopic: 'binary_search',
        difficulty: 'hard',
      },

      {
        problem:
          'Given a sorted array nums, find the last occurrence of target using Binary Search. Fix all missing parts.',
        language: 'python',
        code: [
          'def upper_bound(nums, target):',
          '    low, high = 0, len(nums)',
          '    while low < high:',
          '        mid = (low + high) // 2',
          '        if nums[mid] ___ target:',
          '            low = ___',
          '        else:',
          '            high = ___',
          '    return ___',
        ],
        blanks: [['<='], ['mid+1'], ['mid'], ['low-1']],
        concept: 'binary_search_upper_bound',
        subtopic: 'binary_search',
        difficulty: 'hard',
      },

      {
        problem:
          'Given a sorted array nums, determine if target exists using Binary Search recursion. Fix incorrect recursion boundaries.',
        language: 'c',
        code: [
          'int search(int arr[], int low, int high, int key){',
          '  if(low > high) return ___;',
          '  int mid = (low + high)/2;',
          '  if(arr[mid] == key) return ___;',
          '  else if(arr[mid] < key)',
          '    return search(arr, ___, high, key);',
          '  else',
          '    return search(arr, low, ___, key);',
          '}',
        ],
        blanks: [['-1'], ['mid'], ['mid+1'], ['mid-1']],
        concept: 'binary_search_recursion',
        subtopic: 'binary_search',
        difficulty: 'medium',
      },

      {
        problem:
          'Given a sorted array nums, fix Binary Search where incorrect loop condition causes missing last element.',
        language: 'javascript',
        code: [
          'function search(nums, target){',
          '  let low = 0, high = nums.length - 1;',
          '  while(low ___ high){',
          '    let mid = Math.floor((low + high)/2);',
          '    if(nums[mid] === target) return ___;',
          '    else if(nums[mid] < target)',
          '      low = ___;',
          '    else',
          '      high = ___;',
          '  }',
          '  return ___;',
          '}',
        ],
        blanks: [['<='], ['mid'], ['mid+1'], ['mid-1'], ['-1']],
        concept: 'binary_search_off_by_one',
        subtopic: 'binary_search',
        difficulty: 'medium',
      },
    ],
  },
  ternary_search: {
    mcq: [
      // ===== CONCEPT =====
      {
        question:
          'In ternary search, what is the main difference compared to binary search when searching in a sorted array?',
        options: [
          'Ternary search uses recursion only',
          'Ternary search divides the array into three parts',
          'Ternary search works on unsorted arrays',
          'Ternary search uses hashing',
        ],
        answer: 1,
        concept: 'ternary_partitioning',
        subtopic: 'ternary_search',
        type: 'concept',
        difficulty: 'easy',
      },
      {
        question:
          'In ternary search, why is it generally slower than binary search despite having the same O(log n) complexity?',
        options: [
          'It uses recursion',
          'It performs more comparisons per iteration',
          'It uses extra memory',
          'It sorts the array first',
        ],
        answer: 1,
        concept: 'ternary_vs_binary_efficiency',
        subtopic: 'ternary_search',
        type: 'concept',
        difficulty: 'medium',
      },
      {
        question:
          'In ternary search on a unimodal function, what property must the function satisfy?',
        options: [
          'Strictly increasing',
          'Strictly decreasing',
          'First increases then decreases (or vice versa)',
          'Random values',
        ],
        answer: 2,
        concept: 'ternary_unimodal_property',
        subtopic: 'ternary_search',
        type: 'concept',
        difficulty: 'medium',
      },

      // ===== OUTPUT (REAL CODE) =====
      {
        question: `
Consider the following ternary search code on a sorted array:

function search(arr, key){
  let l = 0, r = arr.length - 1;
  while(l <= r){
    let mid1 = l + Math.floor((r-l)/3);
    let mid2 = r - Math.floor((r-l)/3);

    if(arr[mid1] === key) return mid1;
    if(arr[mid2] === key) return mid2;

    if(key < arr[mid1]) r = mid1 - 1;
    else if(key > arr[mid2]) l = mid2 + 1;
    else{
      l = mid1 + 1;
      r = mid2 - 1;
    }
  }
  return -1;
}

console.log(search([1,3,5,7,9,11], 7));

What will be the output?
`,
        options: ['2', '3', '4', '-1'],
        answer: 1,
        concept: 'ternary_tracing',
        subtopic: 'ternary_search',
        type: 'output',
        difficulty: 'medium',
      },
      {
        question: `
In ternary search, what will happen when searching for 4 in the array [1,3,5,7,9] using correct implementation?

`,
        options: [
          'Returns index 1',
          'Returns index 2',
          'Returns -1',
          'Infinite loop',
        ],
        answer: 2,
        concept: 'ternary_not_found',
        subtopic: 'ternary_search',
        type: 'output',
        difficulty: 'easy',
      },

      // ===== LOGIC / ERROR =====
      {
        question: `
In ternary search, what is wrong with this mid calculation?

mid1 = (l + r) / 3
mid2 = 2 * (l + r) / 3
`,
        options: [
          'Incorrect partitioning of range',
          'Infinite loop',
          'Syntax error',
          'Correct formula',
        ],
        answer: 0,
        concept: 'ternary_mid_bug',
        subtopic: 'ternary_search',
        type: 'error',
        difficulty: 'medium',
      },
      {
        question: `
In ternary search, what happens if the condition while(l <= r) is replaced with while(l < r)?
`,
        options: [
          'Works perfectly',
          'May skip checking last element',
          'Infinite recursion',
          'Compilation error',
        ],
        answer: 1,
        concept: 'ternary_boundary_issue',
        subtopic: 'ternary_search',
        type: 'error',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given a sorted array nums and a target value, implement ternary search to return the index of target. Fix all logical errors in the implementation.',
        language: 'cpp',
        code: [
          'int search(vector<int>& nums, int target){',
          '  int l = 0, r = nums.size() - 1;',
          '  while(l ___ r){',
          '    int mid1 = ___;',
          '    int mid2 = ___;',
          '    if(nums[mid1] ___ target) return ___;',
          '    if(nums[mid2] ___ target) return ___;',
          '    if(target < nums[mid1])',
          '      r = ___;',
          '    else if(target > nums[mid2])',
          '      l = ___;',
          '    else{',
          '      l = ___;',
          '      r = ___;',
          '    }',
          '  }',
          '  return ___;',
          '}',
        ],
        blanks: [
          ['<='],
          ['l + (r-l)/3'],
          ['r - (r-l)/3'],
          ['=='],
          ['mid1'],
          ['=='],
          ['mid2'],
          ['mid1-1'],
          ['mid2+1'],
          ['mid1+1'],
          ['mid2-1'],
          ['-1'],
        ],
        concept: 'ternary_complete_logic',
        subtopic: 'ternary_search',
        difficulty: 'hard',
      },

      {
        problem:
          'Given a sorted array, fix ternary search implementation where incorrect bounds update causes infinite loop.',
        language: 'java',
        code: [
          'int search(int[] arr, int key){',
          '  int l=0, r=arr.length-1;',
          '  while(l <= r){',
          '    int mid1 = l + (r-l)/3;',
          '    int mid2 = r - (r-l)/3;',
          '    if(arr[mid1] == key) return mid1;',
          '    if(arr[mid2] == key) return mid2;',
          '    if(key < arr[mid1])',
          '      r = ___;',
          '    else if(key > arr[mid2])',
          '      l = ___;',
          '    else{',
          '      l = ___;',
          '      r = ___;',
          '    }',
          '  }',
          '  return ___;',
          '}',
        ],
        blanks: [['mid1-1'], ['mid2+1'], ['mid1+1'], ['mid2-1'], ['-1']],
        concept: 'ternary_bounds_fix',
        subtopic: 'ternary_search',
        difficulty: 'medium',
      },

      {
        problem:
          'Given a unimodal function array, use ternary search to find maximum element. Fix incorrect comparison logic.',
        language: 'python',
        code: [
          'def ternary(arr):',
          '    l, r = 0, len(arr)-1',
          '    while l < r:',
          '        mid1 = l + (r-l)//3',
          '        mid2 = r - (r-l)//3',
          '        if arr[mid1] ___ arr[mid2]:',
          '            l = ___',
          '        else:',
          '            r = ___',
          '    return ___',
        ],
        blanks: [['<'], ['mid1+1'], ['mid2-1'], ['arr[l]']],
        concept: 'ternary_unimodal_max',
        subtopic: 'ternary_search',
        difficulty: 'hard',
      },

      {
        problem:
          'Given a sorted array, fix ternary search recursion implementation.',
        language: 'c',
        code: [
          'int search(int arr[], int l, int r, int key){',
          '  if(l > r) return ___;',
          '  int mid1 = l + (r-l)/3;',
          '  int mid2 = r - (r-l)/3;',
          '  if(arr[mid1] == key) return ___;',
          '  if(arr[mid2] == key) return ___;',
          '  if(key < arr[mid1])',
          '    return search(arr, l, ___, key);',
          '  else if(key > arr[mid2])',
          '    return search(arr, ___, r, key);',
          '  else',
          '    return search(arr, ___, ___, key);',
          '}',
        ],
        blanks: [
          ['-1'],
          ['mid1'],
          ['mid2'],
          ['mid1-1'],
          ['mid2+1'],
          ['mid1+1'],
          ['mid2-1'],
        ],
        concept: 'ternary_recursion',
        subtopic: 'ternary_search',
        difficulty: 'hard',
      },

      {
        problem:
          'Given a sorted array, fix ternary search where incorrect loop condition causes missing elements.',
        language: 'javascript',
        code: [
          'function search(arr, key){',
          '  let l=0, r=arr.length-1;',
          '  while(l ___ r){',
          '    let mid1 = l + Math.floor((r-l)/3);',
          '    let mid2 = r - Math.floor((r-l)/3);',
          '    if(arr[mid1] === key) return mid1;',
          '    if(arr[mid2] === key) return mid2;',
          '    if(key < arr[mid1]) r = mid1-1;',
          '    else if(key > arr[mid2]) l = mid2+1;',
          '    else{',
          '      l = mid1+1;',
          '      r = mid2-1;',
          '    }',
          '  }',
          '  return ___;',
          '}',
        ],
        blanks: [['<='], ['-1']],
        concept: 'ternary_loop_condition',
        subtopic: 'ternary_search',
        difficulty: 'medium',
      },
    ],
  },
};

export default searchingDataset;
