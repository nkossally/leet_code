module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  uniquePaths: function (A, B) {
    // this is combinatorics avoiding too many operations for factorials
    const m = A - 1;
    const n = B - 1;
    let max = Math.max(m,n )
    let min = Math.min(m, n)
    let result = 1;
    for(let i = max + 1; i <= m + n; i++){
        result *= i;
    }
    for(let i = 1; i <= min; i++){
        result /= i;
    }
    console.log(result)
    return result;
  },
};
module.exports.uniquePaths(200, 1);
