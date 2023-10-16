module.exports = {
  //param A : integer
  //return a array of integers
  allFactors: function (A) {
    const factors = []
    for (let i = 1; i*i <= A; i++) {
        if (A % i == 0) {
            factors.push(i);

            if (i != Math.pow(A, .5)) {
                factors.push(A / i);
            }
        }
    }
    factors.sort((a, b) => a - b)
    return factors;
  },
};

module.exports.allFactors(70)
