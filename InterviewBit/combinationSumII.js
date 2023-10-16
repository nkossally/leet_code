module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of array of integers
  combinationSum: function (A, B) {
    A.sort((a, b) => a - b);
    const counts = {};

    A.forEach((num) => {
      if (counts[num] === undefined) {
        counts[num] = 0;
      }
      counts[num]++;
    });
    A = Array.from(new Set(A))

    const result = [];

    const generateSequences = (arr, sum, idx) => {
      if (sum === B) {
        result.push(arr);
        return;
      }
      if (idx === A.length) return;
      let k = counts[A[idx]];
      while (k >= 0) {
        const newSum = sum + k * A[idx];
        if (newSum <= B) {
          const newArr = Array.from(arr);
          for (let i = 0; i < k; i++) {
            newArr.push(A[idx]);
          }
          generateSequences(newArr, newSum, idx + 1);
        }
        k--;
      }
    };
    generateSequences([], 0, 0);
    console.log(result)
    return result;
  },
};
module.exports.combinationSum([10,1,2,7,6,1,5], 8)