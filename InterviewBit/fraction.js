module.exports = {
  //param A : integer
  //param B : integer
  //return a strings
  fractionToDecimal: function (A, B) {
    let isRepeating = false;
    let num = B;
    while (num % 5 === 0) {
        console.log(num)
      num /= 5;
    }
    while (num % 2 === 0) {
        console.log(num)

      num /= 2;
    }
    if (num !== 1 && num !== -1 && A !== 0) isRepeating = true;
    let result;
    console.log(num, isRepeating)
    if (!isRepeating) {
      result = (A / B).toString();
    } else {
      const number = A / B;
      const check = (num, idx) => {
        const multiplied = Math.pow(10, num + idx) * number;
        const wholeNumber = Math.floor(multiplied);
        const fraction = multiplied - wholeNumber;
        const otherMultipled= Math.pow(10, idx) * number;
        const otherWholeNumber = Math.floor(otherMultipled);

        const otherFraction = otherMultipled - otherWholeNumber
        return otherFraction - fraction < .001;
      };
      let repeatingLength = 1;
      let start = 0
      while (start < 10 && !check(repeatingLength, start)) {
        repeatingLength++;
        if(repeatingLength === 11){
            start++
            repeatingLength = 1
        }
      }
      const wholeStr = number.toString();
      const beginRepeat = wholeStr.indexOf(".") + start + 1;
      result = `${wholeStr.slice(0, beginRepeat)}(${wholeStr.slice(
        beginRepeat,
        beginRepeat + repeatingLength
      )})`;
    }
    return result;
  },
};
// module.exports.fractionToDecimal(87, 22)
// module.exports.fractionToDecimal(10, 2)
module.exports.fractionToDecimal(-1, 2147483648)