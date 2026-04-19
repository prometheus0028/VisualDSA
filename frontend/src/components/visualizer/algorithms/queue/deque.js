export function createDeque() {
  const deque = [];

  const steps = [];

  const record = (line = null) => {
    steps.push({
      deque: [...deque],
      highlightLine: line,
    });
  };

  function pushFront(x) {
    record(2);

    deque.unshift(x);

    record(5);

    return { steps };
  }

  function pushBack(x) {
    record(7);

    deque.push(x);

    record(10);

    return { steps };
  }

  function popFront() {
    record(12);

    if (deque.length === 0) {
      record(14);
      return { error: 'Underflow', steps };
    }

    const value = deque.shift();
    record(15);

    return { value, steps };
  }

  function popBack() {
    record(17);

    if (deque.length === 0) {
      record(19);
      return { error: 'Underflow', steps };
    }

    const value = deque.pop();
    record(20);

    return { value, steps };
  }

  return {
    pushFront,
    pushBack,
    popFront,
    popBack,
  };
}
