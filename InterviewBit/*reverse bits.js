// reverse bits in 32 bit integer
module.exports = {
  //param A : integer
  //return an integer
  reverse: function (A) {
    let str = A.toString(2).split("").reverse().join("");
    while (str.length < 32) {
      str += "0";
    }
    return parseInt(str, 2);
  },
};

module.exports.reverse(3);
module.exports.reverse(0);
