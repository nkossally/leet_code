module.exports = {
  //param A : array of array of integers
  //return an integer
  solve: function (A) {
    let max = 0;

    checkRectangle = (a, b, dx, dy) => {
      let result = true;
      for (let i = 0; i <= dx; i++) {
        if (result === false) {
          break;
        }
        for (let j = 0; j <= dy; j++) {
          if (A[a + i][b + j] === 0) {
            result = false;
            break;
          }
        }
      }
      return result;
    };

    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A[0].length; j++) {
        let dx = 0;
        while (dx <= A.length - 1 - i) {
          let dy = 0;
          while (dy <= A[0].length - 1 - j) {
            if (checkRectangle(i, j, dx, dy)) {
              const area = (dx + 1) * (dy + 1);
              max = Math.max(max, area);
            } else {
              break;
            }
            dy++;
          }
          dx++;
        }
      }
    }
    console.log(max)
    return max;
  },
};

const A = [  [1, 0, 1],
[0, 1 ,0],
[1, 0, 0]
]

module.exports.solve(A)