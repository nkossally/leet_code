module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  slidingMaximum: function (A, B) {
    const result = [];
    let window = [];

    for (let i = 0; i < B; i++) {
      window.push(A[i]);
    }

    let getMax = () => {
      return window.reduce((acc, curr) => {
        return Math.max(acc, curr);
      }, A[0]);
    };
    result.push(getMax(window));
    for (let i = 1; i <= A.length - B; i++) {
      window.unshift();
      window.pop(A[i + B - 1]);
      const max = getMax(window);
      result.push(max);
    }
    console.log(result);
    return result;
  },
};

module.exports.slidingMaximum([1]);
