export function createPriorityQueue(capacity = 10) {
  let heap = [];

  const parent = (i) => Math.floor((i - 1) / 2);
  const left = (i) => 2 * i + 1;
  const right = (i) => 2 * i + 2;

  const insert = (value) => {
    if (heap.length >= capacity) {
      return { error: 'Overflow', steps: [{ highlightLine: 6 }] };
    }

    const steps = [];

    heap.push(value);
    let i = heap.length - 1;

    steps.push({
      heap: [...heap],
      active: [i],
      highlightLine: 3,
    });

    while (i > 0 && heap[parent(i)] > heap[i]) {
      const p = parent(i);

      [heap[i], heap[p]] = [heap[p], heap[i]];

      steps.push({
        heap: [...heap],
        active: [i, p],
        highlightLine: 6,
      });

      i = p;
    }

    return { steps };
  };

  const removeMin = () => {
    if (heap.length === 0) {
      return { error: 'Underflow', steps: [{ highlightLine: 11 }] };
    }

    const steps = [];

    const root = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();

    steps.push({
      heap: [...heap],
      active: [0],
      highlightLine: 13,
    });

    heapifyDown(0, steps);

    return { value: root, steps };
  };

  const heapifyDown = (i, steps) => {
    let smallest = i;

    const l = left(i);
    const r = right(i);

    if (l < heap.length && heap[l] < heap[smallest]) {
      smallest = l;
    }

    if (r < heap.length && heap[r] < heap[smallest]) {
      smallest = r;
    }

    if (smallest !== i) {
      [heap[i], heap[smallest]] = [heap[smallest], heap[i]];

      steps.push({
        heap: [...heap],
        active: [i, smallest],
        highlightLine: 25,
      });

      heapifyDown(smallest, steps);
    }
  };

  return {
    insert,
    removeMin,
    getHeap: () => heap,
  };
}
