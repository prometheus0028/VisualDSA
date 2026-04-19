const sortingDataset = {
  bubble_sort: {
    mcq: [
      // ===== CONCEPT =====
      {
        question:
          'In bubble sort, why does the largest element move to the end after each pass?',
        options: [
          'Because of recursion',
          'Because adjacent elements are swapped repeatedly',
          'Because array is divided',
          'Because heap is used',
        ],
        answer: 1,
        concept: 'bubble_swap_behavior',
        subtopic: 'bubble_sort',
        type: 'concept',
        difficulty: 'easy',
      },
      {
        question:
          'In bubble sort, what is the best case time complexity when using optimization (swap flag)?',
        options: ['O(n^2)', 'O(n log n)', 'O(n)', 'O(log n)'],
        answer: 2,
        concept: 'bubble_best_case',
        subtopic: 'bubble_sort',
        type: 'concept',
        difficulty: 'medium',
      },
      {
        question: 'Why is bubble sort considered stable?',
        options: [
          'Uses recursion',
          'Maintains relative order of equal elements',
          'Uses extra memory',
          'Sorts backwards',
        ],
        answer: 1,
        concept: 'bubble_stability',
        subtopic: 'bubble_sort',
        type: 'concept',
        difficulty: 'medium',
      },

      // ===== OUTPUT (REAL CODE) =====
      {
        question: `
Consider the following bubble sort implementation:

function bubble(arr){
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubble([5,1,4,2]));

What will be the output after full bubble sort?
`,
        options: ['[5,1,4,2]', '[1,2,4,5]', '[2,1,4,5]', '[1,4,2,5]'],
        answer: 1,
        concept: 'bubble_full_execution',
        subtopic: 'bubble_sort',
        type: 'output',
        difficulty: 'easy',
      },
      {
        question: `
In bubble sort, how many passes are required to completely sort an array of size n in worst case?
`,
        options: ['n', 'n-1', 'n/2', 'log n'],
        answer: 1,
        concept: 'bubble_passes',
        subtopic: 'bubble_sort',
        type: 'concept',
        difficulty: 'easy',
      },

      // ===== LOGIC / ERROR =====
      {
        question: `
In bubble sort, what is wrong if inner loop runs till j < n instead of j < n-i-1?
`,
        options: [
          'Nothing is wrong',
          'Index out of bounds may occur',
          'Sorting becomes faster',
          'Array reverses',
        ],
        answer: 1,
        concept: 'bubble_bounds_error',
        subtopic: 'bubble_sort',
        type: 'error',
        difficulty: 'medium',
      },
      {
        question: `
In bubble sort, what happens if swap condition is written as arr[j] < arr[j+1]?
`,
        options: [
          'Array sorts ascending',
          'Array sorts descending',
          'No change',
          'Infinite loop',
        ],
        answer: 1,
        concept: 'bubble_descending',
        subtopic: 'bubble_sort',
        type: 'error',
        difficulty: 'easy',
      },
    ],

    debug: [
      {
        problem:
          'Given an integer array nums, sort it using bubble sort. Fix all logical errors so that array gets sorted correctly.',
        language: 'javascript',
        code: [
          'function bubble(nums){',
          '  let n = nums.length;',
          '  for(let i=0; i<___; i++){',
          '    for(let j=0; j<___; j++){',
          '      if(nums[j] ___ nums[j+1]){',
          '        let temp = nums[j];',
          '        nums[j] = ___;',
          '        nums[j+1] = ___;',
          '      }',
          '    }',
          '  }',
          '  return ___;',
          '}',
        ],
        blanks: [['n-1'], ['n-i-1'], ['>'], ['nums[j+1]'], ['temp'], ['nums']],
        concept: 'bubble_basic_fix',
        subtopic: 'bubble_sort',
        difficulty: 'medium',
      },

      {
        problem:
          'Given an array, optimize bubble sort using a flag to stop early if already sorted. Fix missing logic.',
        language: 'cpp',
        code: [
          'void bubble(vector<int>& arr){',
          '  int n = arr.size();',
          '  for(int i=0;i<n-1;i++){',
          '    bool swapped = ___;',
          '    for(int j=0;j<n-i-1;j++){',
          '      if(arr[j] > arr[j+1]){',
          '        swap(arr[j], arr[j+1]);',
          '        swapped = ___;',
          '      }',
          '    }',
          '    if(swapped == ___) break;',
          '  }',
          '}',
        ],
        blanks: [['false'], ['true'], ['false']],
        concept: 'bubble_optimized',
        subtopic: 'bubble_sort',
        difficulty: 'medium',
      },

      {
        problem:
          'Given an array, fix bubble sort where incorrect loop bounds cause partial sorting.',
        language: 'java',
        code: [
          'void bubble(int[] arr){',
          '  int n = arr.length;',
          '  for(int i=0;i<___;i++){',
          '    for(int j=0;j<___;j++){',
          '      if(arr[j] > arr[j+1]){',
          '        int temp = arr[j];',
          '        arr[j] = arr[j+1];',
          '        arr[j+1] = temp;',
          '      }',
          '    }',
          '  }',
          '}',
        ],
        blanks: [['n-1'], ['n-i-1']],
        concept: 'bubble_bounds_fix',
        subtopic: 'bubble_sort',
        difficulty: 'easy',
      },

      {
        problem:
          'Given an array, fix bubble sort implementation where wrong swap order corrupts data.',
        language: 'c',
        code: [
          'void bubble(int arr[], int n){',
          '  for(int i=0;i<n-1;i++){',
          '    for(int j=0;j<n-i-1;j++){',
          '      if(arr[j] > arr[j+1]){',
          '        int temp = ___;',
          '        arr[j] = ___;',
          '        arr[j+1] = ___;',
          '      }',
          '    }',
          '  }',
          '}',
        ],
        blanks: [['arr[j]'], ['arr[j+1]'], ['temp']],
        concept: 'bubble_swap_correct',
        subtopic: 'bubble_sort',
        difficulty: 'easy',
      },

      {
        problem:
          'Given an array, fix bubble sort where incorrect condition causes infinite loop or no progress.',
        language: 'python',
        code: [
          'def bubble(arr):',
          '    n = len(arr)',
          '    for i in range(___):',
          '        for j in range(___):',
          '            if arr[j] > arr[j+1]:',
          '                arr[j], arr[j+1] = arr[j+1], arr[j]',
          '    return ___',
        ],
        blanks: [['n-1'], ['n-i-1'], ['arr']],
        concept: 'bubble_python_fix',
        subtopic: 'bubble_sort',
        difficulty: 'easy',
      },
    ],
  },
  selection_sort: {
    mcq: [
      // ===== CONCEPT =====
      {
        question:
          'In selection sort, what is the core idea used to sort the array?',
        options: [
          'Swapping adjacent elements repeatedly',
          'Selecting minimum element and placing it in correct position',
          'Dividing array into halves',
          'Using recursion',
        ],
        answer: 1,
        concept: 'selection_core_logic',
        subtopic: 'selection_sort',
        type: 'concept',
        difficulty: 'easy',
      },
      {
        question:
          'Why does selection sort perform exactly n-1 swaps in worst case?',
        options: [
          'Because it swaps every element multiple times',
          'Because it swaps only when necessary',
          'Because it selects one element per iteration and places it correctly',
          'Because it uses recursion',
        ],
        answer: 2,
        concept: 'selection_swap_count',
        subtopic: 'selection_sort',
        type: 'concept',
        difficulty: 'medium',
      },
      {
        question:
          'In selection sort, what is the time complexity regardless of input?',
        options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
        answer: 2,
        concept: 'selection_time_complexity',
        subtopic: 'selection_sort',
        type: 'concept',
        difficulty: 'easy',
      },

      // ===== OUTPUT =====
      {
        question: `
Consider the following selection sort implementation:

function selection(arr){
  for(let i=0;i<arr.length;i++){
    let min = i;
    for(let j=i+1;j<arr.length;j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(selection([64,25,12,22,11]));

What will be the output after complete execution of selection sort?
`,
        options: [
          '[64,25,12,22,11]',
          '[11,12,22,25,64]',
          '[25,12,22,11,64]',
          '[12,11,22,25,64]',
        ],
        answer: 1,
        concept: 'selection_full_execution',
        subtopic: 'selection_sort',
        type: 'output',
        difficulty: 'easy',
      },

      {
        question: `
After first pass of selection sort on array [29,10,14,37,13], what will be the array state?
`,
        options: [
          '[10,29,14,37,13]',
          '[29,10,14,37,13]',
          '[10,14,29,37,13]',
          '[13,10,14,37,29]',
        ],
        answer: 0,
        concept: 'selection_first_pass',
        subtopic: 'selection_sort',
        type: 'output',
        difficulty: 'medium',
      },

      // ===== ERROR BASED =====
      {
        question: `
In selection sort, what happens if inner loop starts from j = 0 instead of j = i+1?
`,
        options: [
          'Sorting becomes faster',
          'Already sorted elements get disturbed',
          'No change',
          'Infinite loop',
        ],
        answer: 1,
        concept: 'selection_wrong_loop',
        subtopic: 'selection_sort',
        type: 'error',
        difficulty: 'medium',
      },
      {
        question: `
In selection sort, what happens if swap is skipped when min == i?
`,
        options: [
          'Incorrect sorting',
          'Unnecessary swaps avoided (optimization)',
          'Infinite loop',
          'Sorting fails completely',
        ],
        answer: 1,
        concept: 'selection_optimization',
        subtopic: 'selection_sort',
        type: 'concept',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given an integer array, fix selection sort implementation so that it correctly sorts the array.',
        language: 'javascript',
        code: [
          'function selection(arr){',
          '  let n = arr.length;',
          '  for(let i=0;i<___;i++){',
          '    let min = ___;',
          '    for(let j=___;j<n;j++){',
          '      if(arr[j] ___ arr[min]){',
          '        min = ___;',
          '      }',
          '    }',
          '    let temp = arr[i];',
          '    arr[i] = ___;',
          '    arr[min] = ___;',
          '  }',
          '  return arr;',
          '}',
        ],
        blanks: [['n-1'], ['i'], ['i+1'], ['<'], ['j'], ['arr[min]'], ['temp']],
        concept: 'selection_basic_fix',
        subtopic: 'selection_sort',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix selection sort implementation where incorrect initialization of min index leads to wrong sorting.',
        language: 'cpp',
        code: [
          'void selection(vector<int>& arr){',
          '  int n = arr.size();',
          '  for(int i=0;i<n-1;i++){',
          '    int min = ___;',
          '    for(int j=i+1;j<n;j++){',
          '      if(arr[j] < arr[min]){',
          '        min = ___;',
          '      }',
          '    }',
          '    swap(arr[i], ___);',
          '  }',
          '}',
        ],
        blanks: [['i'], ['j'], ['arr[min]']],
        concept: 'selection_min_fix',
        subtopic: 'selection_sort',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix selection sort where loop bounds cause out-of-range access.',
        language: 'java',
        code: [
          'void selection(int[] arr){',
          '  int n = arr.length;',
          '  for(int i=0;i<___;i++){',
          '    int min = i;',
          '    for(int j=___;j<___;j++){',
          '      if(arr[j] < arr[min]){',
          '        min = j;',
          '      }',
          '    }',
          '    int temp = arr[i];',
          '    arr[i] = arr[min];',
          '    arr[min] = temp;',
          '  }',
          '}',
        ],
        blanks: [['n-1'], ['i+1'], ['n']],
        concept: 'selection_bounds_fix',
        subtopic: 'selection_sort',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix selection sort logic where swapping is incorrectly done before finding minimum element.',
        language: 'python',
        code: [
          'def selection(arr):',
          '    n = len(arr)',
          '    for i in range(n-1):',
          '        min = i',
          '        for j in range(i+1, n):',
          '            if arr[j] < arr[min]:',
          '                min = j',
          '        arr[i], arr[min] = ___',
          '    return ___',
        ],
        blanks: [['arr[min], arr[i]'], ['arr']],
        concept: 'selection_swap_fix',
        subtopic: 'selection_sort',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix selection sort implementation where incorrect comparison causes descending sort instead of ascending.',
        language: 'c',
        code: [
          'void selection(int arr[], int n){',
          '  for(int i=0;i<n-1;i++){',
          '    int min = i;',
          '    for(int j=i+1;j<n;j++){',
          '      if(arr[j] ___ arr[min]){',
          '        min = j;',
          '      }',
          '    }',
          '    int temp = arr[i];',
          '    arr[i] = arr[min];',
          '    arr[min] = temp;',
          '  }',
          '}',
        ],
        blanks: [['<']],
        concept: 'selection_comparison_fix',
        subtopic: 'selection_sort',
        difficulty: 'easy',
      },
    ],
  },
  insertion_sort: {
    mcq: [
      // ===== CONCEPT =====
      {
        question:
          'In insertion sort, how is the sorted portion of the array maintained?',
        options: [
          'By dividing array into halves',
          'By inserting each element into its correct position in the sorted part',
          'By swapping random elements',
          'By recursion',
        ],
        answer: 1,
        concept: 'insertion_core_logic',
        subtopic: 'insertion_sort',
        type: 'concept',
        difficulty: 'easy',
      },
      {
        question: 'Why is insertion sort efficient for nearly sorted arrays?',
        options: [
          'It uses recursion',
          'It performs fewer shifts when elements are already near correct positions',
          'It divides the array',
          'It uses hashing',
        ],
        answer: 1,
        concept: 'insertion_best_case',
        subtopic: 'insertion_sort',
        type: 'concept',
        difficulty: 'medium',
      },
      {
        question: 'What is the best case time complexity of insertion sort?',
        options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
        answer: 0,
        concept: 'insertion_time_best',
        subtopic: 'insertion_sort',
        type: 'concept',
        difficulty: 'easy',
      },

      // ===== OUTPUT =====
      {
        question: `
Consider the following insertion sort implementation:

function insertion(arr){
  for(let i=1;i<arr.length;i++){
    let key = arr[i];
    let j = i-1;

    while(j>=0 && arr[j] > key){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = key;
  }
  return arr;
}

console.log(insertion([8,3,5,2]));

What will be the final sorted output after insertion sort?
`,
        options: ['[8,3,5,2]', '[2,3,5,8]', '[3,5,2,8]', '[5,3,2,8]'],
        answer: 1,
        concept: 'insertion_full_execution',
        subtopic: 'insertion_sort',
        type: 'output',
        difficulty: 'easy',
      },

      {
        question: `
After first iteration of insertion sort on array [7,4,5,2], what will be the array?
`,
        options: ['[4,7,5,2]', '[7,4,5,2]', '[4,5,7,2]', '[5,4,7,2]'],
        answer: 0,
        concept: 'insertion_first_pass',
        subtopic: 'insertion_sort',
        type: 'output',
        difficulty: 'medium',
      },

      // ===== ERROR / LOGIC =====
      {
        question: `
In insertion sort, what happens if condition arr[j] > key is changed to arr[j] < key?
`,
        options: [
          'Array sorts ascending',
          'Array sorts descending',
          'No change',
          'Infinite loop',
        ],
        answer: 1,
        concept: 'insertion_descending',
        subtopic: 'insertion_sort',
        type: 'error',
        difficulty: 'easy',
      },
      {
        question: `
In insertion sort, what happens if j is not decremented inside while loop?
`,
        options: [
          'Sorting becomes faster',
          'Infinite loop occurs',
          'Sorting still works',
          'Array reverses',
        ],
        answer: 1,
        concept: 'insertion_infinite_loop',
        subtopic: 'insertion_sort',
        type: 'error',
        difficulty: 'easy',
      },
    ],

    debug: [
      {
        problem:
          'Given an integer array, fix insertion sort implementation so that elements are inserted at correct positions.',
        language: 'javascript',
        code: [
          'function insertion(arr){',
          '  for(let i=___; i<arr.length; i++){',
          '    let key = ___;',
          '    let j = ___;',
          '',
          '    while(j>=0 && arr[j] ___ key){',
          '      arr[j+1] = arr[j];',
          '      j = ___;',
          '    }',
          '',
          '    arr[j+1] = ___;',
          '  }',
          '  return ___;',
          '}',
        ],
        blanks: [['1'], ['arr[i]'], ['i-1'], ['>'], ['j-1'], ['key'], ['arr']],
        concept: 'insertion_basic_fix',
        subtopic: 'insertion_sort',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix insertion sort where incorrect shifting leads to overwritten elements.',
        language: 'cpp',
        code: [
          'void insertion(vector<int>& arr){',
          '  int n = arr.size();',
          '  for(int i=1;i<n;i++){',
          '    int key = arr[i];',
          '    int j = i-1;',
          '',
          '    while(j>=0 && arr[j] > key){',
          '      arr[j+1] = ___;',
          '      j--;',
          '    }',
          '',
          '    arr[j+1] = ___;',
          '  }',
          '}',
        ],
        blanks: [['arr[j]'], ['key']],
        concept: 'insertion_shift_fix',
        subtopic: 'insertion_sort',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix insertion sort where loop condition causes index out of bounds.',
        language: 'java',
        code: [
          'void insertion(int[] arr){',
          '  int n = arr.length;',
          '  for(int i=1;i<n;i++){',
          '    int key = arr[i];',
          '    int j = ___;',
          '',
          '    while(j>=___ && arr[j] > key){',
          '      arr[j+1] = arr[j];',
          '      j--;',
          '    }',
          '',
          '    arr[j+1] = key;',
          '  }',
          '}',
        ],
        blanks: [['i-1'], ['0']],
        concept: 'insertion_bounds_fix',
        subtopic: 'insertion_sort',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix insertion sort implementation where incorrect update of j causes skipping elements.',
        language: 'python',
        code: [
          'def insertion(arr):',
          '    for i in range(1, len(arr)):',
          '        key = arr[i]',
          '        j = i - 1',
          '',
          '        while j >= 0 and arr[j] > key:',
          '            arr[j+1] = arr[j]',
          '            j = ___',
          '',
          '        arr[j+1] = ___',
          '    return ___',
        ],
        blanks: [['j-1'], ['key'], ['arr']],
        concept: 'insertion_pointer_fix',
        subtopic: 'insertion_sort',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix insertion sort logic where comparison direction results in incorrect sorting order.',
        language: 'c',
        code: [
          'void insertion(int arr[], int n){',
          '  for(int i=1;i<n;i++){',
          '    int key = arr[i];',
          '    int j = i-1;',
          '',
          '    while(j>=0 && arr[j] ___ key){',
          '      arr[j+1] = arr[j];',
          '      j--;',
          '    }',
          '',
          '    arr[j+1] = key;',
          '  }',
          '}',
        ],
        blanks: [['>']],
        concept: 'insertion_comparison_fix',
        subtopic: 'insertion_sort',
        difficulty: 'easy',
      },
    ],
  },
  merge_sort: {
    mcq: [
      // ===== CONCEPT =====
      {
        question: 'In merge sort, what is the main idea behind the algorithm?',
        options: [
          'Compare adjacent elements',
          'Divide array into halves, sort recursively, then merge',
          'Use heap structure',
          'Use hashing',
        ],
        answer: 1,
        concept: 'merge_divide_conquer',
        subtopic: 'merge_sort',
        type: 'concept',
        difficulty: 'easy',
      },
      {
        question: 'Why does merge sort always have time complexity O(n log n)?',
        options: [
          'Because merging takes constant time',
          'Because array is divided log n times and merging takes O(n)',
          'Because recursion is avoided',
          'Because swaps are constant',
        ],
        answer: 1,
        concept: 'merge_time_complexity',
        subtopic: 'merge_sort',
        type: 'concept',
        difficulty: 'medium',
      },
      {
        question: 'What is the main disadvantage of merge sort?',
        options: [
          'High time complexity',
          'Requires extra space for merging',
          'Not stable',
          'Only works for sorted arrays',
        ],
        answer: 1,
        concept: 'merge_space_complexity',
        subtopic: 'merge_sort',
        type: 'concept',
        difficulty: 'medium',
      },

      // ===== OUTPUT =====
      {
        question: `
Consider the following merge sort process on array [8,4,2,6]:

After first level of division in merge sort, what are the subarrays?
`,
        options: [
          '[[8],[4],[2],[6]]',
          '[[8,4],[2,6]]',
          '[[8,4,2],[6]]',
          '[[8],[4,2,6]]',
        ],
        answer: 1,
        concept: 'merge_division_step',
        subtopic: 'merge_sort',
        type: 'output',
        difficulty: 'medium',
      },
      {
        question: `
In merge sort, what will be the merged output of [2,8] and [3,5]?
`,
        options: ['[2,3,5,8]', '[3,2,5,8]', '[2,8,3,5]', '[5,3,2,8]'],
        answer: 0,
        concept: 'merge_merge_step',
        subtopic: 'merge_sort',
        type: 'output',
        difficulty: 'easy',
      },

      // ===== CODE OUTPUT =====
      {
        question: `
Consider merge sort on array [5,1,6,2].

After full execution of merge sort, what is the output?
`,
        options: ['[5,1,6,2]', '[1,2,5,6]', '[2,1,5,6]', '[1,5,2,6]'],
        answer: 1,
        concept: 'merge_full_execution',
        subtopic: 'merge_sort',
        type: 'output',
        difficulty: 'easy',
      },

      // ===== ERROR =====
      {
        question: `
In merge sort, what happens if merging step does not compare elements properly?
`,
        options: [
          'Sorting becomes faster',
          'Final array remains unsorted',
          'No effect',
          'Infinite recursion',
        ],
        answer: 1,
        concept: 'merge_wrong_merge',
        subtopic: 'merge_sort',
        type: 'error',
        difficulty: 'medium',
      },
      {
        question: `
In merge sort, what happens if base condition (low >= high) is missing?
`,
        options: [
          'Sorting improves',
          'Infinite recursion occurs',
          'No change',
          'Only partial sorting',
        ],
        answer: 1,
        concept: 'merge_base_condition',
        subtopic: 'merge_sort',
        type: 'error',
        difficulty: 'easy',
      },
    ],

    debug: [
      {
        problem:
          'Given an integer array nums, implement merge sort correctly by fixing all missing logic in recursive division.',
        language: 'javascript',
        code: [
          'function mergeSort(arr, l, r){',
          '  if(l ___ r) return;',
          '',
          '  let mid = Math.floor((l + r)/2);',
          '',
          '  mergeSort(arr, ___, ___);',
          '  mergeSort(arr, ___, ___);',
          '',
          '  merge(arr, l, mid, r);',
          '}',
        ],
        blanks: [['>='], ['l'], ['mid'], ['mid+1'], ['r']],
        concept: 'merge_recursion_fix',
        subtopic: 'merge_sort',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix merge function in merge sort so that two sorted arrays are merged correctly.',
        language: 'cpp',
        code: [
          'void merge(vector<int>& arr, int l, int mid, int r){',
          '  vector<int> temp;',
          '  int i = l;',
          '  int j = ___;',
          '',
          '  while(i <= mid && j <= r){',
          '    if(arr[i] ___ arr[j]){',
          '      temp.push_back(arr[i]);',
          '      i++;',
          '    } else {',
          '      temp.push_back(arr[j]);',
          '      j++;',
          '    }',
          '  }',
          '',
          '  while(i <= mid) temp.push_back(arr[___]);',
          '  while(j <= r) temp.push_back(arr[___]);',
          '',
          '  for(int k=l; k<=r; k++){',
          '    arr[k] = temp[___];',
          '  }',
          '}',
        ],
        blanks: [['mid+1'], ['<='], ['i++', 'i'], ['j++', 'j'], ['k-l']],
        concept: 'merge_merge_logic',
        subtopic: 'merge_sort',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix merge sort where incorrect indices cause missing elements during merge.',
        language: 'java',
        code: [
          'void merge(int arr[], int l, int mid, int r){',
          '  int i = l;',
          '  int j = ___;',
          '',
          '  int temp[] = new int[r-l+1];',
          '  int k = 0;',
          '',
          '  while(i <= mid && j <= r){',
          '    if(arr[i] < arr[j])',
          '      temp[k++] = arr[___];',
          '    else',
          '      temp[k++] = arr[___];',
          '  }',
          '',
          '  while(i <= mid) temp[k++] = arr[___];',
          '  while(j <= r) temp[k++] = arr[___];',
          '}',
        ],
        blanks: [
          ['mid+1'],
          ['i++', 'i'],
          ['j++', 'j'],
          ['i++', 'i'],
          ['j++', 'j'],
        ],
        concept: 'merge_index_fix',
        subtopic: 'merge_sort',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix merge sort where incorrect mid calculation causes wrong recursion splitting.',
        language: 'python',
        code: [
          'def mergeSort(arr, l, r):',
          '    if l >= r:',
          '        return',
          '',
          '    mid = ___',
          '',
          '    mergeSort(arr, l, mid)',
          '    mergeSort(arr, mid+1, r)',
        ],
        blanks: [['(l+r)//2']],
        concept: 'merge_mid_fix',
        subtopic: 'merge_sort',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix merge sort logic where copying back to original array is incorrect.',
        language: 'c',
        code: ['for(int i=l;i<=r;i++){', '  arr[i] = temp[___];', '}'],
        blanks: [['i-l']],
        concept: 'merge_copy_fix',
        subtopic: 'merge_sort',
        difficulty: 'easy',
      },
    ],
  },
  quick_sort: {
    mcq: [
      // ===== CONCEPT =====
      {
        question: 'In quick sort, what is the role of the pivot element?',
        options: [
          'To divide array into sorted and unsorted parts',
          'To partition array into elements smaller and greater than pivot',
          'To swap adjacent elements',
          'To merge arrays',
        ],
        answer: 1,
        concept: 'quick_pivot_role',
        subtopic: 'quick_sort',
        type: 'concept',
        difficulty: 'easy',
      },
      {
        question:
          'Why does quick sort have average time complexity O(n log n)?',
        options: [
          'Because it avoids recursion',
          'Because partition divides array roughly in half each time',
          'Because merging is constant time',
          'Because it uses heap',
        ],
        answer: 1,
        concept: 'quick_avg_case',
        subtopic: 'quick_sort',
        type: 'concept',
        difficulty: 'medium',
      },
      {
        question: 'When does quick sort degrade to O(n^2)?',
        options: [
          'When pivot divides array evenly',
          'When pivot is always smallest or largest element',
          'When array is random',
          'When recursion stops early',
        ],
        answer: 1,
        concept: 'quick_worst_case',
        subtopic: 'quick_sort',
        type: 'concept',
        difficulty: 'medium',
      },

      // ===== OUTPUT =====
      {
        question: `
Consider quick sort using last element as pivot on array [4,2,6,1].

After first partition, what is the position of pivot (1)?
`,
        options: ['Index 0', 'Index 1', 'Index 2', 'Index 3'],
        answer: 0,
        concept: 'quick_partition_position',
        subtopic: 'quick_sort',
        type: 'output',
        difficulty: 'medium',
      },
      {
        question: `
In quick sort, what will be the array after first partition using pivot = 5 on [7,2,5,1,6]?
`,
        options: ['[2,1,5,7,6]', '[1,2,5,7,6]', '[2,1,5,6,7]', '[5,2,1,7,6]'],
        answer: 0,
        concept: 'quick_partition_result',
        subtopic: 'quick_sort',
        type: 'output',
        difficulty: 'hard',
      },

      // ===== FULL EXECUTION =====
      {
        question: `
After complete execution of quick sort on array [3,1,4,2], what will be the output?
`,
        options: ['[3,1,4,2]', '[1,2,3,4]', '[2,1,3,4]', '[1,3,2,4]'],
        answer: 1,
        concept: 'quick_full_execution',
        subtopic: 'quick_sort',
        type: 'output',
        difficulty: 'easy',
      },

      // ===== ERROR =====
      {
        question: `
In quick sort, what happens if pivot element is not placed at correct partition index?
`,
        options: [
          'Sorting becomes faster',
          'Array remains partially sorted',
          'No effect',
          'Infinite recursion',
        ],
        answer: 1,
        concept: 'quick_wrong_partition',
        subtopic: 'quick_sort',
        type: 'error',
        difficulty: 'medium',
      },
      {
        question: `
In quick sort, what happens if recursive calls are made without reducing range?
`,
        options: [
          'Sorting improves',
          'Infinite recursion occurs',
          'Sorting becomes faster',
          'No change',
        ],
        answer: 1,
        concept: 'quick_recursion_error',
        subtopic: 'quick_sort',
        type: 'error',
        difficulty: 'easy',
      },
    ],

    debug: [
      {
        problem:
          'Given an integer array nums, implement quick sort correctly by fixing recursive calls and partition boundaries.',
        language: 'javascript',
        code: [
          'function quickSort(arr, low, high){',
          '  if(low ___ high){',
          '    let p = partition(arr, low, high);',
          '',
          '    quickSort(arr, ___, ___);',
          '    quickSort(arr, ___, ___);',
          '  }',
          '}',
        ],
        blanks: [['<'], ['low'], ['p-1'], ['p+1'], ['high']],
        concept: 'quick_recursion_fix',
        subtopic: 'quick_sort',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix partition function in quick sort using last element as pivot.',
        language: 'cpp',
        code: [
          'int partition(vector<int>& arr, int low, int high){',
          '  int pivot = arr[___];',
          '  int i = ___;',
          '',
          '  for(int j=low; j<high; j++){',
          '    if(arr[j] < pivot){',
          '      i++;',
          '      swap(arr[i], arr[j]);',
          '    }',
          '  }',
          '',
          '  swap(arr[i+1], arr[___]);',
          '  return ___;',
          '}',
        ],
        blanks: [['high'], ['low-1'], ['high'], ['i+1']],
        concept: 'quick_partition_logic',
        subtopic: 'quick_sort',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix quick sort partition where incorrect comparison causes wrong partitioning.',
        language: 'java',
        code: [
          'int partition(int arr[], int low, int high){',
          '  int pivot = arr[high];',
          '  int i = low-1;',
          '',
          '  for(int j=low;j<high;j++){',
          '    if(arr[j] ___ pivot){',
          '      i++;',
          '      int temp = arr[i];',
          '      arr[i] = arr[j];',
          '      arr[j] = temp;',
          '    }',
          '  }',
          '',
          '  int temp = arr[i+1];',
          '  arr[i+1] = arr[high];',
          '  arr[high] = temp;',
          '',
          '  return i+1;',
          '}',
        ],
        blanks: [['<']],
        concept: 'quick_comparison_fix',
        subtopic: 'quick_sort',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix quick sort implementation where pivot index is not handled correctly.',
        language: 'python',
        code: [
          'def quickSort(arr, low, high):',
          '    if low < high:',
          '        pi = partition(arr, low, high)',
          '',
          '        quickSort(arr, ___, ___)',
          '        quickSort(arr, ___, ___)',
        ],
        blanks: [['low'], ['pi-1'], ['pi+1'], ['high']],
        concept: 'quick_range_fix',
        subtopic: 'quick_sort',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix quick sort where incorrect swapping causes pivot to stay in wrong place.',
        language: 'c',
        code: ['int temp = arr[i+1];', 'arr[i+1] = ___;', 'arr[high] = ___;'],
        blanks: [['arr[high]'], ['temp']],
        concept: 'quick_swap_fix',
        subtopic: 'quick_sort',
        difficulty: 'easy',
      },
    ],
  },
  heap_sort: {
    mcq: [
      // ===== CONCEPT =====
      {
        question: 'In heap sort, which data structure is used internally?',
        options: ['Binary Search Tree', 'Binary Heap', 'Stack', 'Queue'],
        answer: 1,
        concept: 'heap_structure',
        subtopic: 'heap_sort',
        type: 'concept',
        difficulty: 'easy',
      },
      {
        question:
          'In heap sort, why do we use a max heap for ascending order sorting?',
        options: [
          'To extract smallest element first',
          'To extract largest element and place it at the end',
          'To reduce recursion',
          'To divide array',
        ],
        answer: 1,
        concept: 'heap_maxheap_logic',
        subtopic: 'heap_sort',
        type: 'concept',
        difficulty: 'medium',
      },
      {
        question: 'What is the time complexity of heap sort in all cases?',
        options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
        answer: 1,
        concept: 'heap_time_complexity',
        subtopic: 'heap_sort',
        type: 'concept',
        difficulty: 'easy',
      },

      // ===== OUTPUT =====
      {
        question: `
In heap sort, what will be the max heap representation of array [4,10,3,5,1] after heapify?
`,
        options: [
          '[10,5,3,4,1]',
          '[10,4,3,5,1]',
          '[4,10,3,5,1]',
          '[1,3,4,5,10]',
        ],
        answer: 0,
        concept: 'heap_build_heap',
        subtopic: 'heap_sort',
        type: 'output',
        difficulty: 'medium',
      },
      {
        question: `
After first extraction in heap sort (max heap) on [10,5,3,4,1], what happens?
`,
        options: [
          '10 stays at root',
          '10 is swapped to last position and heap size reduces',
          'Array remains same',
          'Only children are swapped',
        ],
        answer: 1,
        concept: 'heap_extract_max',
        subtopic: 'heap_sort',
        type: 'concept',
        difficulty: 'easy',
      },

      // ===== FULL EXECUTION =====
      {
        question: `
After complete execution of heap sort on [4,1,3,2], what will be the output?
`,
        options: ['[4,1,3,2]', '[1,2,3,4]', '[2,1,3,4]', '[3,2,1,4]'],
        answer: 1,
        concept: 'heap_full_execution',
        subtopic: 'heap_sort',
        type: 'output',
        difficulty: 'easy',
      },

      // ===== ERROR =====
      {
        question: `
In heap sort, what happens if heapify is not called after swapping root with last element?
`,
        options: [
          'Sorting becomes faster',
          'Heap property breaks and array becomes unsorted',
          'No effect',
          'Infinite loop',
        ],
        answer: 1,
        concept: 'heap_missing_heapify',
        subtopic: 'heap_sort',
        type: 'error',
        difficulty: 'medium',
      },
      {
        question: `
In heap sort, what happens if child indices are calculated incorrectly?
`,
        options: [
          'Sorting improves',
          'Heap structure becomes invalid',
          'No change',
          'Only root is affected',
        ],
        answer: 1,
        concept: 'heap_index_error',
        subtopic: 'heap_sort',
        type: 'error',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given an integer array nums, fix heapify function in heap sort so that max heap property is maintained.',
        language: 'javascript',
        code: [
          'function heapify(arr, n, i){',
          '  let largest = ___;',
          '  let left = ___;',
          '  let right = ___;',
          '',
          '  if(left < n && arr[left] > arr[largest])',
          '    largest = ___;',
          '',
          '  if(right < n && arr[right] > arr[largest])',
          '    largest = ___;',
          '',
          '  if(largest != i){',
          '    [arr[i], arr[largest]] = [arr[largest], arr[i]];',
          '    heapify(arr, n, ___);',
          '  }',
          '}',
        ],
        blanks: [['i'], ['2*i+1'], ['2*i+2'], ['left'], ['right'], ['largest']],
        concept: 'heap_heapify_fix',
        subtopic: 'heap_sort',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix build heap phase in heap sort where incorrect loop prevents proper heap construction.',
        language: 'cpp',
        code: ['for(int i = ___; i >= 0; i--){', '  heapify(arr, n, i);', '}'],
        blanks: [['n/2 - 1']],
        concept: 'heap_build_fix',
        subtopic: 'heap_sort',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix heap sort extraction phase where swapping and heapify calls are incorrect.',
        language: 'java',
        code: [
          'for(int i=n-1;i>0;i--){',
          '  int temp = arr[0];',
          '  arr[0] = arr[___];',
          '  arr[i] = ___;',
          '',
          '  heapify(arr, ___, ___);',
          '}',
        ],
        blanks: [['i'], ['temp'], ['i'], ['0']],
        concept: 'heap_extract_fix',
        subtopic: 'heap_sort',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix heap sort implementation where incorrect child index calculation breaks heap.',
        language: 'python',
        code: ['left = ___', 'right = ___'],
        blanks: [['2*i+1'], ['2*i+2']],
        concept: 'heap_index_fix',
        subtopic: 'heap_sort',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix heap sort where recursive heapify is not called correctly after swap.',
        language: 'c',
        code: [
          'if(largest != i){',
          '  swap(&arr[i], &arr[largest]);',
          '  heapify(arr, n, ___);',
          '}',
        ],
        blanks: [['largest']],
        concept: 'heap_recursive_fix',
        subtopic: 'heap_sort',
        difficulty: 'easy',
      },
    ],
  },
  counting_sort: {
    mcq: [
      // ===== CONCEPT =====
      {
        question:
          'In counting sort, what is the primary assumption about the input array values?',
        options: [
          'They must be sorted',
          'They must be integers within a known range',
          'They must be unique',
          'They must be positive only',
        ],
        answer: 1,
        concept: 'counting_range_requirement',
        difficulty: 'easy',
      },
      {
        question:
          'What is the time complexity of counting sort in terms of n (elements) and k (range)?',
        options: ['O(n log n)', 'O(n + k)', 'O(n^2)', 'O(log n)'],
        answer: 1,
        concept: 'counting_time_complexity',
        difficulty: 'easy',
      },
      {
        question: 'Why is counting sort considered a non-comparison sort?',
        options: [
          'It does not compare elements directly',
          'It uses recursion',
          'It divides array',
          'It uses heap',
        ],
        answer: 0,
        concept: 'counting_non_comparison',
        difficulty: 'medium',
      },

      // ===== OUTPUT =====
      {
        question: `
In counting sort, what will be the frequency array for input [1,3,2,1,0]?
`,
        options: ['[1,2,1,1]', '[2,1,1,1]', '[1,1,2,1]', '[0,1,2,1]'],
        answer: 0,
        concept: 'counting_frequency',
        difficulty: 'medium',
      },
      {
        question: `
After prefix sum computation in counting sort on [1,3,2,1,0], what will be count array?
`,
        options: ['[1,3,4,5]', '[1,2,3,4]', '[2,3,4,5]', '[1,2,4,5]'],
        answer: 0,
        concept: 'counting_prefix_sum',
        difficulty: 'medium',
      },

      // ===== EXECUTION =====
      {
        question: `
After applying counting sort on array [4,2,2,8,3,3,1], what is final sorted output?
`,
        options: [
          '[1,2,2,3,3,4,8]',
          '[8,4,3,3,2,2,1]',
          '[1,2,3,4,2,3,8]',
          '[2,2,3,3,1,4,8]',
        ],
        answer: 0,
        concept: 'counting_full_execution',
        difficulty: 'easy',
      },

      // ===== ERROR =====
      {
        question: `
In counting sort, what happens if prefix sum step is skipped?
`,
        options: [
          'Sorting still works',
          'Output positions become incorrect',
          'Algorithm becomes faster',
          'No change',
        ],
        answer: 1,
        concept: 'counting_missing_prefix',
        difficulty: 'medium',
      },
      {
        question: `
What problem occurs if counting sort is applied directly on negative numbers without modification?
`,
        options: [
          'Infinite loop',
          'Negative indexing error',
          'Faster sorting',
          'No effect',
        ],
        answer: 1,
        concept: 'counting_negative_issue',
        difficulty: 'medium',
      },

      // ===== ADVANCED =====
      {
        question: `
Why is counting sort stable when implemented correctly?
`,
        options: [
          'Because it swaps elements',
          'Because it processes elements in reverse while placing them',
          'Because it uses recursion',
          'Because it divides array',
        ],
        answer: 1,
        concept: 'counting_stability',
        difficulty: 'hard',
      },
    ],

    debug: [
      {
        problem:
          'Given an integer array nums with values in range 0–k, fix counting sort frequency calculation.',
        language: 'javascript',
        code: [
          'let count = new Array(k+1).fill(0);',
          'for(let i=0;i<nums.length;i++){',
          '  count[nums[i]] ___;',
          '}',
        ],
        blanks: [['++', '+=1']],
        concept: 'counting_frequency_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix prefix sum computation in counting sort so that positions are correctly calculated.',
        language: 'cpp',
        code: [
          'for(int i=1;i<=k;i++){',
          '  count[i] = count[i] ___ count[i-1];',
          '}',
        ],
        blanks: [['+', '+=']],
        concept: 'counting_prefix_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix output placement logic in counting sort where stable ordering is broken.',
        language: 'java',
        code: [
          'for(int i = n-1; i>=0; i--){',
          '  output[count[arr[i]] - 1] = ___;',
          '  count[arr[i]] ___;',
          '}',
        ],
        blanks: [['arr[i]'], ['--']],
        concept: 'counting_output_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix counting sort to handle negative numbers using offset technique.',
        language: 'python',
        code: [
          'min_val = min(arr)',
          'max_val = max(arr)',
          'range_val = ___ - ___ + 1',
          '',
          'count = [0]*range_val',
          '',
          'for num in arr:',
          '    count[num - ___] += 1',
        ],
        blanks: [['max_val'], ['min_val'], ['min_val']],
        concept: 'counting_negative_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix counting sort where incorrect loop direction breaks stability.',
        language: 'c',
        code: [
          'for(int i = ___; i>=0; i--){',
          '  output[count[arr[i]] - 1] = arr[i];',
          '  count[arr[i]]--;',
          '}',
        ],
        blanks: [['n-1']],
        concept: 'counting_stability_fix',
        difficulty: 'medium',
      },
    ],
  },
  radix_sort: {
    mcq: [
      // ===== CONCEPT =====
      {
        question: 'In radix sort, numbers are sorted based on which principle?',
        options: [
          'Divide and conquer',
          'Digit by digit processing',
          'Comparison of elements',
          'Heap property',
        ],
        answer: 1,
        concept: 'radix_digit_processing',
        difficulty: 'easy',
      },
      {
        question:
          'Radix sort is based on which stable sorting algorithm internally?',
        options: ['Quick Sort', 'Merge Sort', 'Counting Sort', 'Heap Sort'],
        answer: 2,
        concept: 'radix_counting_dependency',
        difficulty: 'easy',
      },
      {
        question:
          'Why must the internal sorting algorithm in radix sort be stable?',
        options: [
          'To reduce time complexity',
          'To preserve order of digits from previous passes',
          'To use recursion',
          'To divide array',
        ],
        answer: 1,
        concept: 'radix_stability_reason',
        difficulty: 'medium',
      },

      // ===== OUTPUT =====
      {
        question: `
In radix sort (LSD), after sorting [170, 45, 75, 90, 802, 24, 2, 66] by unit digit, what is the array?
`,
        options: [
          '[170, 90, 802, 2, 24, 45, 75, 66]',
          '[2, 24, 45, 66, 75, 90, 170, 802]',
          '[170, 45, 75, 90, 802, 24, 2, 66]',
          '[45, 75, 90, 24, 2, 66, 170, 802]',
        ],
        answer: 0,
        concept: 'radix_unit_pass',
        difficulty: 'medium',
      },
      {
        question: `
After full radix sort execution on [170, 45, 75, 90, 802, 24, 2, 66], what is output?
`,
        options: [
          '[2,24,45,66,75,90,170,802]',
          '[802,170,90,75,66,45,24,2]',
          '[24,2,45,66,75,90,170,802]',
          '[2,24,66,45,75,90,170,802]',
        ],
        answer: 0,
        concept: 'radix_full_execution',
        difficulty: 'easy',
      },

      // ===== LOGIC =====
      {
        question:
          'What is the time complexity of radix sort (k digits, n numbers)?',
        options: ['O(n log n)', 'O(nk)', 'O(n^2)', 'O(log n)'],
        answer: 1,
        concept: 'radix_time_complexity',
        difficulty: 'medium',
      },
      {
        question: 'What is the main limitation of radix sort?',
        options: [
          'Needs recursion',
          'Works only for integers or fixed-length keys',
          'Not stable',
          'Requires comparisons',
        ],
        answer: 1,
        concept: 'radix_limitation',
        difficulty: 'medium',
      },

      // ===== ERROR =====
      {
        question: `
What happens if counting sort used inside radix sort is not stable?
`,
        options: [
          'Sorting still works',
          'Digit order gets corrupted leading to wrong final output',
          'Algorithm becomes faster',
          'Nothing changes',
        ],
        answer: 1,
        concept: 'radix_instability_error',
        difficulty: 'hard',
      },
      {
        question: `
If radix sort processes most significant digit first without recursion, what issue occurs?
`,
        options: [
          'Correct sorting',
          'Incorrect ordering of numbers',
          'Faster sorting',
          'Memory overflow',
        ],
        answer: 1,
        concept: 'radix_msd_issue',
        difficulty: 'hard',
      },

      // ===== ADVANCED =====
      {
        question: `
Why is radix sort efficient for large datasets with small digit size?
`,
        options: [
          'Avoids comparisons entirely',
          'Uses recursion',
          'Reduces memory usage',
          'Uses heap',
        ],
        answer: 0,
        concept: 'radix_efficiency_reason',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given an array of integers, fix radix sort digit extraction logic for current exponent.',
        language: 'javascript',
        code: ['let digit = Math.floor(arr[i] / ___) % ___;'],
        blanks: [['exp'], ['10']],
        concept: 'radix_digit_extraction',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix counting sort inside radix sort where digit frequency is incorrectly updated.',
        language: 'cpp',
        code: [
          'for(int i=0;i<n;i++){',
          '  int digit = (arr[i]/exp) % 10;',
          '  count[digit] ___;',
          '}',
        ],
        blanks: [['++']],
        concept: 'radix_frequency_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix prefix sum step in radix counting sort to correctly compute positions.',
        language: 'java',
        code: [
          'for(int i=1;i<10;i++){',
          '  count[i] = count[i] ___ count[i-1];',
          '}',
        ],
        blanks: [['+']],
        concept: 'radix_prefix_sum_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix stable placement logic in radix sort to maintain correct ordering.',
        language: 'python',
        code: [
          'for i in range(n-1, -1, -1):',
          '    digit = (arr[i] // exp) % 10',
          '    output[count[digit] - 1] = ___',
          '    count[digit] ___',
        ],
        blanks: [['arr[i]'], ['-=1']],
        concept: 'radix_stability_fix',
        difficulty: 'medium',
      },

      {
        problem: 'Fix loop to iterate over all digit places in radix sort.',
        language: 'c',
        code: [
          'int max = getMax(arr, n);',
          'for(int exp = 1; max/exp > 0; exp *= ___){',
          '  countingSort(arr, n, exp);',
          '}',
        ],
        blanks: [['10']],
        concept: 'radix_loop_fix',
        difficulty: 'easy',
      },
    ],
  },
};

export default sortingDataset;
