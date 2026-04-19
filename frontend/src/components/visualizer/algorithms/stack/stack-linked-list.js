// visualizer/algorithms/stack/stack-linked-list.js

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export function createLinkedStack() {
  let top = null;

  const steps = [];

  const record = (line = null) => {
    const stack = [];
    let curr = top;

    while (curr) {
      stack.push(curr.data);
      curr = curr.next;
    }

    steps.push({
      stack,
      highlightLine: line,
    });
  };

  function push(x) {
    record(7);

    const newNode = new Node(x);
    record(8);

    newNode.next = top;
    record(10);

    top = newNode;
    record(11);

    return { steps };
  }

  function pop() {
    record(14);

    if (top === null) {
      record(16);
      return { error: 'Underflow', steps };
    }

    const temp = top;
    record(18);

    top = top.next;
    record(19);

    return { value: temp.data, steps };
  }

  function peek() {
    record(23);
    return top?.data;
  }

  return { push, pop, peek };
}
