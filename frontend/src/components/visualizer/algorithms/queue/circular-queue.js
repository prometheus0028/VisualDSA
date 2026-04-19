export function createCircularQueue(capacity = 10) {
  const queue = new Array(capacity);

  let front = -1;
  let rear = -1;

  const steps = [];

  const record = (line = null) => {
    steps.push({
      queue: [...queue],
      front,
      rear,
      highlightLine: line,
    });
  };

  function enqueue(x) {
    record(2);

    if ((rear + 1) % capacity === front) {
      record(4);
      return { error: 'Overflow', steps };
    }

    if (front === -1) {
      front = rear = 0;
      queue[rear] = x;
      record(7);
      return { steps };
    }

    rear = (rear + 1) % capacity;
    queue[rear] = x;
    record(10);

    return { steps };
  }

  function dequeue() {
    record(13);

    if (front === -1) {
      record(15);
      return { error: 'Underflow', steps };
    }

    const value = queue[front];
    record(17);

    if (front === rear) {
      front = rear = -1;
      record(20);
    } else {
      front = (front + 1) % capacity;
      record(22);
    }

    return { value, steps };
  }

  function peek() {
    record(25);
    return queue[front];
  }

  return { enqueue, dequeue, peek };
}
