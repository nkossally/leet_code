module.exports = {
  //param A : array of strings
  //return an integer
  isValidSudoku: function (A) {
    const checkRow = (i) => {
      const nums = A[i].split("").filter(elem => elem !== ".");
      return (nums.length === new Set(nums).size);
    };
    const checkCol = (j) => {
      const col = [];
      for (let i = 0; i < A[0].length; i++) {
        const val = A[i][j];
        if (val !== ".") {
          col.push(val);
        }
      }
      return (col.length === new Set(col).size);
    };
    const checkSquare = (x, y) => {
      const val1 = A[x][y];
      const val2 = A[x][y + 1];
      const val3 = A[x][y + 2];
      const val4 = A[x + 1][y];
      const val5 = A[x + 1][y + 1];
      const val6 = A[x + 1][y + 2];
      const val7 = A[x + 2][y];
      const val8 = A[x + 2][y + 1];
      const val9 = A[x + 2][y + 2];
      const arr = [val1, val2, val3, val4, val5, val6, val7, val8, val9].filter(
        (elem) => elem !== "."
      );
      const set = new Set(arr);
      return arr.length === set.size;
    };

    let result = true;
    for (let i = 0; i < 9; i++) {
      result = result && checkRow(i);
      result = result && checkCol(i);
    }

    const corners = [
      [0, 0],
      [0, 3],
      [0, 6],
      [3, 0],
      [3, 3],
      [3, 6],
      [6, 0],
      [6, 3],
      [6, 6],
    ];
    corners.forEach((corner) => {
      result = result && checkSquare(corner[0], corner[1]);
    });
    return result ? 1 : 0;
  },
};
const A = [ "..5.....6", "....14...", ".........", ".....92..", "5....2...", ".......3.", "...54....", "3.....42.", "...27.6.." ]

module.exports.isValidSudoku(A)