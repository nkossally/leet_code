module.exports = {
  //param A : array of integers
  //return an integer
  firstMissingPositive: function (A) {
    let max = 0;
    let nums = new Set();
    let missingNum;
    for (let i = 0; i < A.length; i++) {
      const val = A[i];
      nums.add(val);
      max = Math.max(max, val);
    }

    for (let i = 1; i <= max; i++) {
      if (missingNum !== undefined) break;
      if (!nums.has(i) && missingNum === undefined) {
        missingNum = i;
      }
    }
    if (missingNum === undefined) {
      missingNum = max + 1;
    }
    console.log(missingNum)
    return missingNum;
  },
};

module.exports.firstMissingPositive([1, 2, 3, 5, 6]);
