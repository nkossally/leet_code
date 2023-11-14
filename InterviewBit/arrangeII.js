module.exports = {
  //param A : string
  //param B : integer
  //return an integer
  arrange: function (A, B) {
    let min = 1 / 0;

    const getMinSum = (idx, currSum, blks, whites, numStrs) => {
      if (currSum > min) return;
      if (A.length - idx < B - numStrs - 1) return;
      if (idx === A.length) {
        if (numStrs === B - 1) {
          min = Math.min(min, currSum + blks * whites);
        }
        return;
      }
      if (A[idx] === "W") {
        const newSum = currSum + blks * (whites + 1);
        getMinSum(idx + 1, newSum, 0, 0, numStrs + 1);
        getMinSum(idx + 1, currSum, blks, whites + 1, numStrs);
      } else {
        const newSum = currSum + (blks + 1) * whites;
        getMinSum(idx + 1, newSum, 0, 0, numStrs + 1);
        getMinSum(idx + 1, currSum, blks + 1, whites, numStrs);
      }
    };

    getMinSum(0, 0, 0, 0, 0);

    return min;
  },
};
