var minPathSum = function(grid) {
  return minPathSumRecursion(grid, 0, 0, 0, [], {});
};

var minPathSumRecursion = function(grid, row, col, sum, sums, seenCells) {
  sum += grid[row][col];
  let key = [row, col];
  if (seenCells[key]) {
    if (sum < seenCells[key]) {
      seenCells[key] = sum;
    } else {
      return;
    }
  } else {
    seenCells[key] = sum;
  }

  if (row === grid.length - 1 && col === grid[0].length - 1) {
    sums.push(sum);
  }
  if (row < grid.length - 1) {
    minPathSumRecursion(grid, row + 1, col, sum, sums, seenCells);
  }
  if (col < grid[0].length - 1) {
    minPathSumRecursion(grid, row, col + 1, sum, sums, seenCells);
  }

  return Math.min(...sums);
};

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
