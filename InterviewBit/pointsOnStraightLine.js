module.exports = {
  /**
   * @param A: list of integers
   * @param B: list of integers
   * @return an integer
   */
  solve: function (A, B) {
    if (A.length === 1) return 1;
    const groups = [];
    let max = 0;

    const compareSlope = (dx1, dy1, dx2, dy2) => {
      if (dx1 === 0 && dx2 === 0) return true;
      if (dy1 === 0 && dy2 === 0) return true;
      return dy1 / dx1 === dy2 / dx2;
    };
    for (let i = 0; i < A.length; i++) {
      for (let j = i + 1; j < A.length; j++) {
        const dx1 = A[i] - A[j];
        const dy1 = B[i] - B[j];
        let foundGroup;
        for (let k = 0; k < groups.length; k++) {
          const group = groups[k];
          const dx2 = group[0];
          const dy2 = group[1];
          const count = group[2];
          if (compareSlope(dx1, dy1, dx2, dy2)) {
            console.log(i, j, groups[k], dx1, dy1)
            foundGroup = true;
            groups[k] = [dx2, dy2, count + 1];
            max = Math.max(max, count + 1);
          }
        }
        if (!foundGroup) {
          groups.push([dx1, dy1, 1]);
          max = Math.max(max, 1);
        }
      }
    }
    console.log(max)
    return max;
  },
};
module.exports.solve([1, 1, 1, 1, 1], [1, 1, 1, 1, 1])
