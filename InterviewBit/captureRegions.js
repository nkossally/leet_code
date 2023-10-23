module.exports = {
  /**
   * param A: list of string
   * return: list of string
   */
  solve: function (A) {
    const isValid = (x, y) => {
      return x >= 0 && x < A.length && y >= 0 && y < A[0].length;
    };

    const dirs = [
      [-1, 0],
      [0, -1],
      [0, 1],
      [1, 0],
    ];

    const getAllConnected = (initialX, initialY) => {
      const set = new Set();

      const getOnBorder = (i, j) => {
        return (
          i === 0 || i === A.length - 1 || j === 0 || j === A[0].length - 1
        );
      };
      let onBorder = false;

      const helper = (i, j) => {
        const str = JSON.stringify([i, j]);
        if(set.has(str)) return;
        set.add(str);
        onBorder = onBorder || getOnBorder(i, j);

        dirs.forEach((dir) => {
          const newX = i + dir[0];
          const newY = j + dir[1];
          if (isValid(newX, newY) && A[newX][newY] === "O") {
            helper(newX, newY);
          }
        });
      };
      helper(initialX, initialY);
      return [onBorder, set];
    };

    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A[0].length; j++) {
        if (A[i][j] === "O") {
          const boolAndSet = getAllConnected(i, j);
          const onBorder = boolAndSet[0];
          const set = boolAndSet[1];
          const newVal = onBorder ? "o" : "X";
          set.forEach((elem) => {
            const coords = JSON.parse(elem);
            const l = coords[0];
            const m = coords[1];
            A[l] = A[l].slice(0, m) + newVal + A[l].slice(m + 1);
          });
        }
      }
    }

    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A[0].length; j++) {
        if (A[i][j] === "o") {
          A[i] = A[i].slice(0, j) + "O" + A[i].slice(j + 1);
        }
      }
    }

    console.log(A)
    return A;
  },
};

const A = [
  "XOXXXXOOXX",
  "XOOOOXOOXX",
  "OXXOOXXXOO",
  "OXOXOOOXXO",
  "OXOOXXOOXX",
  "OXXXOXXOXO",
  "OOXXXXOXOO",
];

module.exports.solve(A);
