export function createArrayQueue(capacity = 10) {
  const queue = new Array(capacity);

  let front = 0;
  let rear = -1;
  let size = 0;

  const steps = [];

  const record = (line = null) => {
    steps.push({
      queue: queue.slice(front, front + size),
      front,
      rear,
      size,
      highlightLine: line,
    });
  };

  function enqueue(x) {
    record(2);

    if (size === capacity) {
      record(4);
      return { error: 'Overflow', steps };
    }

    rear++;
    record(6);

    queue[rear] = x;
    size++;
    record(7);

    return { queue: queue.slice(front, front + size), steps };
  }

  function dequeue() {
    record(10);

    if (size === 0) {
      record(12);
      return { error: 'Underflow', steps };
    }

    const value = queue[front];
    record(14);

    front++;
    size--;
    record(15);

    return { value, steps };
  }

  function peek() {
    record(18);
    return queue[front];
  }

  return { enqueue, dequeue, peek };
}
