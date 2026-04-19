export function generatePostfixEvaluationSteps(expression) {
  const tokens = expression.trim().split(/\s+/);

  const stack = [];
  const steps = [];

  const isOperator = (c) => ['+', '-', '*', '/', '^'].includes(c);

  if (!tokens.length) {
    return { steps: [], invalid: true };
  }

  steps.push({
    stack: [],
    output: '',
    highlightLine: 0,
    action: 'Initialize empty stack',
  });

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (/^\d+$/.test(token)) {
      stack.push(Number(token));

      steps.push({
        stack: [...stack],
        output: '',
        highlightLine: 4,
        currentChar: i,
        action: `Pushed ${token}`,
      });
    } else if (isOperator(token)) {
      if (stack.length < 2) {
        return { steps, invalid: true };
      }

      const b = stack.pop();
      const a = stack.pop();

      let result;

      switch (token) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          result = a / b;
          break;
        case '^':
          result = Math.pow(a, b);
          break;
      }

      stack.push(result);

      steps.push({
        stack: [...stack],
        output: '',
        highlightLine: 9,
        currentChar: i,
        action: `${a} ${token} ${b} = ${result}`,
      });
    }
  }

  steps.push({
    stack: [...stack],
    output: stack[0],
    highlightLine: 11,
    action: `Final result = ${stack[0]}`,
  });

  return { steps, invalid: false };
}
