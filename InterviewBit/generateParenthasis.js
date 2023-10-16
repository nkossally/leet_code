module.exports = {
  //param A : integer
  //return a array of strings
  generateParenthesis: function (A) {
    let result = [];
    const generateParenthesis = (str, openCount, pairs) => {
      if (pairs === A) {
        result.push(str);
        return;
      }
      if (pairs + openCount < A) {
        generateParenthesis(str + "(", openCount + 1, pairs);
      }
      if (openCount > 0) {
        generateParenthesis(str + ")", openCount - 1, pairs + 1);
      }
    };
    generateParenthesis("", 0, 0);
    console.log(result);
    return result;
  },
};

module.exports.generateParenthesis(3);
