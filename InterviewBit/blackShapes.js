// I misinterpretted the problem to mean count the number of horizontal and vertical lines
// The actual question is more like number of islands
module.exports = {
  //param A : array of strings
  //return an integer
  black: function (A) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
      A[i] = A[i].split("");
    }

    const isValid = (x, y) => {
      return x >= 0 && x < A.length && y >= 0 && y < A[0].length;
    };

    const checkVertical = (x, y) => {
      if (A[x][y] === "O") return;
      if (A[x][y] !== "X" && A[x][y].has("V")) return;
      let currX = x;
      let currY = y;
      let isBlackShape = false;
      while (isValid(currX, currY) && A[currX][currY] !== "O") {
        if (A[currX][currY] === "X") {
          A[currX][currY] = new Set();
        }
        A[currX][currY].add("V");
        if (!(currX === x && currY === y)) isBlackShape = true;
        currY++;
      }
      currX = x;
      currY = y;
      while (isValid(currX, currY) && A[currX][currY] !== "O") {
        if (A[currX][currY] === "X") {
          A[currX][currY] = new Set();
        }
        A[currX][currY].add("V");
        if (!(currX === x && currY === y)) isBlackShape = true;
        currY--;
      }
      if (isBlackShape) count++;
    };

    const checkHorizontal = (x, y) => {
      if (A[x][y] === "O") return;
      if (A[x][y] !== "X" && A[x][y].has("H")) return;
      let currX = x;
      let currY = y;
      let isBlackShape = false;
      while (isValid(currX, currY) && A[currX][currY] !== "O") {
        if (A[currX][currY] === "X") {
          A[currX][currY] = new Set();
        }
        A[currX][currY].add("H");
        if (!(currX === x && currY === y)) isBlackShape = true;
        currX++;
      }
      currX = x;
      currY = y;
      while (isValid(currX, currY) && A[currX][currY] !== "O") {
        if (A[currX][currY] === "X") {
          A[currX][currY] = new Set();
        }
        A[currX][currY].add("H");
        if (!(currX === x && currY === y)) isBlackShape = true;
        currX--;
      }
      if (isBlackShape) count++;
    };

    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A[0].length; j++) {
        checkVertical(i, j);
        checkHorizontal(i, j);
      }
    }

    return count;
  },

  black2: function (A) {
    let result = 0;

    const isValid = (x, y) => {
      return x >= 0 && x < A.length && y >= 0 && y < A[0].length;
    };

    const dirs = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    const checkCellContainer = (x, y) => {
      let count = 0;

      const checkCell = (currX, currY) => {
        if (!isValid(currX, currY)) return;
        if (A[currX][currY] === "X") {
          count++;
          A[currX] = A[currX].slice(0, currY) + "-" +A[currX].slice(currY + 1);
          dirs.forEach((dir) => {
            const newX = currX + dir[0];
            const newY = currY + dir[1];
            checkCell(newX, newY);
          });
        }
      };
      checkCell(x, y);
      if (count > 0) result++;
    };

    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A[0].length; j++) {
        checkCellContainer(i, j);
      }
    }

    console.log(A)
    console.log(result)
    return result;
  },
};

module.exports.black2([ "OOOXOOO", "OOXXOXO", "OXOOOXO" ])
