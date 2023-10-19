module.exports = {
  //param A : integer
  //return a strings
  intToRoman: function (A) {
    const romans = ["I", "V", "X", "L", "C", "D", "M"];
    const nums = [1, 5, 10, 50, 100, 500, 1000];

    let remainder = A;
    let result = "";
    let idx = romans.length - 1;
    while (remainder > 0) {
        const val = nums[idx];
        const firstDig = remainder.toString().slice(0, 1);
        if (remainder >= val) {
          if (firstDig === "4") {
            result += romans[idx] + romans[idx + 1];
            remainder -= 4 * val;
          } else if (firstDig === "9") {
            // don't use the roman at 50, 500, etc
            result += romans[idx - 1] + romans[idx + 1];
            remainder -= 9 * nums[idx - 1];

          } else if (remainder >= val) {
            while (remainder >= val) {
              result += romans[idx];
              remainder -= val;
            }
          }
        }
        idx--;
      }
    
    console.log(result);
    return result;
  },
};
module.exports.intToRoman(40);
module.exports.intToRoman(91);
