export function generateInfixToPostfixSteps(expression) {
  const tokens = expression.match(/\d+|[()+\-*/^]/g) || [];

  const stack = [];
  const output = [];
  const steps = [];

  const precedence = (op) => {
    if (op === '^') return 3;
    if (op === '*' || op === '/') return 2;
    if (op === '+' || op === '-') return 1;
    return 0;
  };

  const isOperator = (c) => ['+', '-', '*', '/', '^'].includes(c);

  steps.push({
    stack: [],
    output: '',
    highlightLine: 0,
    action: 'Initialize stack and output',
  });

  tokens.forEach((token, index) => {
    if (/^\d+$/.test(token)) {
      output.push(token);

      steps.push({
        stack: [...stack],
        output: output.join(' '),
        highlightLine: 5,
        currentChar: index,
        action: `Added ${token} to output`,
      });
    } else if (token === '(') {
      stack.push(token);

      steps.push({
        stack: [...stack],
        output: output.join(' '),
        highlightLine: 7,
        currentChar: index,
        action: 'Pushed ( to stack',
      });
    } else if (token === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        const popped = stack.pop();
        output.push(popped);

        steps.push({
          stack: [...stack],
          output: output.join(' '),
          highlightLine: 10,
          currentChar: index,
          action: `Moved ${popped} to output`,
        });
      }

      stack.pop();

      steps.push({
        stack: [...stack],
        output: output.join(' '),
        highlightLine: 11,
        currentChar: index,
        action: 'Removed ( from stack',
      });
    } else if (isOperator(token)) {
      while (
        stack.length &&
        isOperator(stack[stack.length - 1]) &&
        precedence(stack[stack.length - 1]) >= precedence(token)
      ) {
        const popped = stack.pop();
        output.push(popped);

        steps.push({
          stack: [...stack],
          output: output.join(' '),
          highlightLine: 14,
          currentChar: index,
          action: `Moved ${popped} to output`,
        });
      }

      stack.push(token);

      steps.push({
        stack: [...stack],
        output: output.join(' '),
        highlightLine: 15,
        currentChar: index,
        action: `Pushed ${token} to stack`,
      });
    }
  });

  while (stack.length) {
    const popped = stack.pop();
    output.push(popped);

    steps.push({
      stack: [...stack],
      output: output.join(' '),
      highlightLine: 18,
      action: `Moved ${popped} to output`,
    });
  }

  return { steps, invalid: false };
}
