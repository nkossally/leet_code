module.exports = {
  //param A : integer
  //return a array of integers
  getRow: function (A) {
    if (A === 0) return [1];

    let arr = [1];
    let k = 0;
    while (k < A) {
      const newArr = [];
      for (let i = 0; i < arr.length + 1; i++) {
        const a = arr[i] !== undefined ? arr[i] : 0;
        const b = arr[i - 1] !== undefined ? arr[i - 1] : 0;
        newArr[i] = a + b;
      }
      arr = newArr;
      k++;
    }
    return arr;
  },

  getRowV2: function (A) {
    const factorial = (n) => {
      let i = 1;
      let result = 1;
      while (i <= n) {
        result *= i;
        i++;
      }
      return result;
    };

    const combination = (n, k) => {
      return Math.round(factorial(n) / (factorial(n - k) * factorial(k)));
    };

    let arr = [];
    for (let k = 0; k <= A; k++) {
      arr.push(combination(A, k));
    }

    return arr;
  },
};
