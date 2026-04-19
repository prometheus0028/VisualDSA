export function generateMazeSteps(grid, start, end) {
  const steps = [];
  const n = grid.length;

  let shortestPath = null;

  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  function isValid(x, y, visited) {
    return (
      x >= 0 && y >= 0 && x < n && y < n && grid[x][y] === 1 && !visited[x][y]
    );
  }

  function dfs(x, y, path, visited) {
    if (x === end[0] && y === end[1]) {
      steps.push({
        action: 'found',
        path: [...path],
      });

      if (!shortestPath || path.length < shortestPath.length) {
        shortestPath = [...path];
      }

      return;
    }

    for (let [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (isValid(nx, ny, visited)) {
        visited[nx][ny] = true;
        path.push([nx, ny]);

        steps.push({
          action: 'move',
          path: [...path],
        });

        dfs(nx, ny, path, visited);

        path.pop();
        visited[nx][ny] = false;

        steps.push({
          action: 'backtrack',
          path: [...path],
        });
      }
    }
  }

  const visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false),
  );

  visited[start[0]][start[1]] = true;

  dfs(start[0], start[1], [[...start]], visited);

  // 🔥 FINAL SHORTEST PATH
  if (shortestPath) {
    steps.push({
      action: 'shortest',
      path: shortestPath,
    });
  }

  return steps;
}
