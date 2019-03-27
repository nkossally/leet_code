var minPathSum = function(grid) {
  return minimumPathSumRecursion(grid, 0, 0, 0, null);
};

var minPathSumRecursion = function(grid, row, col, sum, min) {
  sum += grid[row][col];
  if (min && min < sum) {
    return null;
  }
  if (
    row === grid.length - 1 &&
    col === grid[0].length - 1 &&
    (min === null || sum < min)
  ) {
    return sum;
  }
  if (row < grid.length - 1) {
    minPathSumRecursion(grid, row + 1, col, sum, min);
  }
  if (row < grid[0].length - 1) {
    minPathSumRecursion(grid, row, col + 1, sum, min);
  }
};

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
