module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of array of integers
  combinationSum: function (A, B) {
    A = Array.from(new Set(A));
    A.sort((a, b) => a - b);
    const sequences = [];

    const getSequences = (vals, sum, idx) => {
      if (sum === B) {
        sequences.push(vals);
        return;
      }
      if (idx === A.length) return;
      let val = A[idx];
      let k = Math.floor((B - sum)/val);

      while (k >= 0) {
        const newVals = Array.from(vals)
        for(let i = 0; i < k; i++ ){
            newVals.push(val)
        }
        getSequences(newVals, sum + k * val, idx + 1);
        k--;
      }

    };
    getSequences([], 0, 0);
    return sequences;
  },
};

module.exports.combinationSum([8, 10, 6, 11, 1, 16, 8], 28);
