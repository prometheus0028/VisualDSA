class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export function createLinkedQueue() {
  let front = null;
  let rear = null;

  const steps = [];

  const record = (line = null) => {
    const arr = [];
    let curr = front;

    while (curr) {
      arr.push(curr.data);
      curr = curr.next;
    }

    steps.push({
      queue: arr,
      highlightLine: line,
    });
  };

  function enqueue(x) {
    record(8);

    const newNode = new Node(x);
    record(9);

    if (rear === null) {
      front = rear = newNode;
      record(13);
      return { steps };
    }

    rear.next = newNode;
    record(15);

    rear = newNode;
    record(16);

    return { steps };
  }

  function dequeue() {
    record(18);

    if (front === null) {
      record(20);
      return { error: 'Underflow', steps };
    }

    const temp = front;
    record(22);

    front = front.next;
    record(23);

    if (front === null) {
      rear = null;
      record(25);
    }

    return { value: temp.data, steps };
  }

  function peek() {
    record(28);
    return front?.data;
  }

  return { enqueue, dequeue, peek };
}
