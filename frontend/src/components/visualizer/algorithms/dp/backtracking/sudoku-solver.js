export function generateSudokuSteps(initialBoard) {
  const steps = [];

  const board = initialBoard.map((row) => [...row]);

  function isValid(r, c, num) {
    for (let i = 0; i < 9; i++) {
      if (
        board[r][i] === num ||
        board[i][c] === num ||
        board[3 * Math.floor(r / 3) + Math.floor(i / 3)][
          3 * Math.floor(c / 3) + (i % 3)
        ] === num
      )
        return false;
    }
    return true;
  }

  // 🔥 MRV: find best empty cell
  function findBestCell() {
    let best = null;
    let minOptions = 10;

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === 0) {
          let options = [];

          for (let num = 1; num <= 9; num++) {
            if (isValid(r, c, num)) {
              options.push(num);
            }
          }

          if (options.length < minOptions) {
            minOptions = options.length;
            best = { r, c, options };
          }
        }
      }
    }

    return best;
  }

  function solve() {
    const cell = findBestCell();

    if (!cell) {
      steps.push({
        action: 'complete',
        grid: board.map((row) => [...row]),
        highlightLine: 4,
      });
      return true;
    }

    const { r, c, options } = cell;

    for (let num of options) {
      steps.push({
        action: 'try',
        row: r,
        col: c,
        value: num,
        grid: board.map((row) => [...row]),
        highlightLine: 1,
      });

      board[r][c] = num;

      steps.push({
        action: 'place',
        row: r,
        col: c,
        value: num,
        grid: board.map((row) => [...row]),
        highlightLine: 2,
      });

      if (solve()) return true;

      board[r][c] = 0;

      steps.push({
        action: 'backtrack',
        row: r,
        col: c,
        grid: board.map((row) => [...row]),
        highlightLine: 3,
      });
    }

    return false;
  }

  solve();
  return steps;
}
