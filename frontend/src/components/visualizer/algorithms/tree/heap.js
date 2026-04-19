// algorithms/tree/heap.js

export function createHeap() {
  let heap = [];

  // ===============================
  // SWAP
  // ===============================
  const swap = (i, j) => {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  };

  // ===============================
  // HEAPIFY UP
  // ===============================
  const heapifyUp = (index, steps) => {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (heap[parent] > heap[index]) {
        swap(parent, index);

        steps.push({
          heap: [...heap],
          active: [parent, index],
          action: `Swap ${heap[index]} with parent`,
          highlightLine: 5,
        });

        index = parent;
      } else break;
    }
  };

  // ===============================
  // HEAPIFY DOWN
  // ===============================
  const heapifyDown = (index, steps) => {
    const size = heap.length;

    while (true) {
      let smallest = index;
      let left = 2 * index + 1;
      let right = 2 * index + 2;

      if (left < size && heap[left] < heap[smallest]) {
        smallest = left;
      }

      if (right < size && heap[right] < heap[smallest]) {
        smallest = right;
      }

      if (smallest !== index) {
        swap(index, smallest);

        steps.push({
          heap: [...heap],
          active: [index, smallest],
          action: `Swap ${heap[index]} with child`,
          highlightLine: 10,
        });

        index = smallest;
      } else break;
    }
  };

  // ===============================
  // INSERT
  // ===============================
  const insert = (value) => {
    const steps = [];

    heap.push(value);

    steps.push({
      heap: [...heap],
      active: [heap.length - 1],
      action: `Inserted ${value}`,
      highlightLine: 2,
    });

    heapifyUp(heap.length - 1, steps);

    return { steps, heap: [...heap] };
  };

  // ===============================
  // REMOVE MIN
  // ===============================
  const removeMin = () => {
    const steps = [];

    if (heap.length === 0) {
      return { error: 'Underflow' };
    }

    const min = heap[0];

    heap[0] = heap[heap.length - 1];
    heap.pop();

    steps.push({
      heap: [...heap],
      active: [0],
      action: `Removed root ${min}`,
      highlightLine: 8,
    });

    heapifyDown(0, steps);

    return { steps, heap: [...heap], value: min };
  };

  // ===============================
  // GET HEAP
  // ===============================
  const getHeap = () => [...heap];

  return {
    insert,
    removeMin,
    getHeap,
  };
}
