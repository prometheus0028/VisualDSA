// visualizer/algorithms/stack/stack-array.js

export function createArrayStack(capacity = 10) {
  const stack = new Array(capacity);
  let top = -1;

  const steps = [];

  const record = (line = null) => {
    steps.push({
      stack: stack.slice(0, top + 1),
      top,
      highlightLine: line,
    });
  };

  function push(x) {
    record(3);

    if (top === capacity - 1) {
      record(5);
      return { error: 'Overflow', steps };
    }

    top++;
    record(7);

    stack[top] = x;
    record(8);

    return { stack: stack.slice(0, top + 1), steps };
  }

  function pop() {
    record(11);

    if (top === -1) {
      record(13);
      return { error: 'Underflow', steps };
    }

    const value = stack[top];
    record(15);

    top--;
    record(16);

    return { value, stack: stack.slice(0, top + 1), steps };
  }

  function peek() {
    record(19);
    return stack[top];
  }

  return { push, pop, peek };
}
