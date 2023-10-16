module.exports = {
  //param A : integer
  //return a array of array of integers
  solveNQueens: function (A) {
    const canPlace = (x, y, x2, y2) => {
      if (x === x2 || y === y2) return false;
      if (Math.abs(x - x2) === Math.abs(y - y2)) return false;
      return true;
    };

    let result = [];

    const makeQueenString = (idx) => {
      let i = 0;
      let str = "";
      while (i < idx) {
        str += ".";
        i++;
      }
      str += "Q";
      i++;
      while (i < A) {
        str += ".";
        i++
      }
      return str;
    };

    const generateChess = (arr) => {
      if (arr.length === A) {
        result.push(arr);
        return;
      }
      const row = arr.length;
      for (let col = 0; col < A; col++) {
        let canPlaceHere = true;
        arr.forEach((placement, i) => {
          const queenIndex = placement.indexOf("Q");
          const x = i;
          const y = queenIndex;
          if (!canPlace(x, y, row, col)) {
            canPlaceHere = false;
          }
        });
        if (canPlaceHere) {
          const str = makeQueenString(col);
          generateChess([...arr, str]);
        }
      }
    };
    generateChess([]);
    console.log(result);
    return result;
  },
  solveNQueens2: function (A) {
    let nums = [];
    const result = [];
    for (let i = 0; i < A; i++) {
      nums.push(i);
    }

    const canPlace = (x, y, x2, y2) => {
      if (Math.abs(x - x2) === Math.abs(y - y2)) return false;
      return true;
    };

    const makeQueenString = (idx) => {
      let i = 0;
      let str = "";
      while (i < idx) {
        str += ".";
        i++;
      }
      str += "Q";
      i++;
      while (i < A) {
        str += ".";
        i++;
      }
      return str;
    };

    const makeBoard = (arr, numsLeft) => {
      if (arr.length === A) {
        const board = [];
        arr.forEach((num) => {
          board.push(makeQueenString(num));
        });
        result.push(board);
        return;
      }

      for (let i = 0; i < numsLeft.length; i++) {
        const num = numsLeft[i];
        let works = true;
        arr.forEach((placedNum, i) => {
          if (!canPlace(i, placedNum, arr.length, num)) {
            works = false;
          }
        });
        if (works) {
          const newNumsLeft = Array.from(numsLeft);
          newNumsLeft.splice(i, 1);
          const newArr = Array.from(arr);
          newArr.push(num);
          makeBoard(newArr, newNumsLeft);
        }
      }
    };
    makeBoard([], nums);
    console.log(result)
    return result
  },
};

module.exports.solveNQueens2(15);
