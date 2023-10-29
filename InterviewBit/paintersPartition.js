module.exports = {
  //param A : integer
  //param B : integer
  //param C : array of integers
  //return an integer
  paint: function (A, B, C) {

    const isValid = (time) => {
      let count = 0;
      let i = 0;
      let minutesLeft = time;
      while (i < C.length) {
        if (minutesLeft / B >= C[i]) {
          minutesLeft -= C[i] * B;
        } else {
          count++;
          minutesLeft = time - C[i] * B;
        }

        i++;
      }
      return count < A;
    };
    let maxBoard = C[0];
    let sumBoardUnits = 0;
    for (let i = 0; i < C.length; i++) {
      sumBoardUnits += C[i];
      maxBoard = Math.max(maxBoard, C[i]);
    }

    let result;

    let lowerBound = Math.ceil(maxBoard * B);
    let upperBound = sumBoardUnits * B;
    while (lowerBound <= upperBound) {
      const mid = Math.floor((lowerBound + upperBound) / 2);
      if (isValid(mid)) {
        result = mid;
        upperBound = mid - 1;
      } else {
        lowerBound = mid + 1;
      }
    }
    // console.log(result);
    return result % 10000003;
  },
};

const A = 2;
const B = 5;
const C = [1, 10];

module.exports.paint(A, B, C);
