var uniquePaths = function(m, n) {
  return factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1));
};

var factorial = function(n) {
  result = 1;
  while (n > 1) {
    result *= n;
    n -= 1;
  }
  return result;
};

console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));
