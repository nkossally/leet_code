module.exports = {
  //param A : integer
  //return an integer
  sqrt: function (A) {
    if (A === 0) return 0;
    if (A === 1) return 1;
    let upperBound = A;
    let lowerBound = 1;
    while (Math.abs(upperBound - lowerBound) > 1) {
      const mid = Math.floor((upperBound + lowerBound) / 2);
      if (Math.pow(mid, 2) <= A) {
        lowerBound = mid;
      } else {
        upperBound = mid;
      }
    }
    return lowerBound;
  },
};
module.exports.sqrt(4);
