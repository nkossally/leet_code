module.exports = {
  //param A : string
  //return a strings
  solve: function (A) {
    const numLetters = A.split("");
    const num = parseInt(A);
    let result = 1 / 0;

    const helper = (prefix, lettersLeft, choseHigerDig) => {
      if (prefix.length === A.length) {
        const prefixNum = parseInt(prefix);
        if (prefixNum > num && prefixNum < result) {
          result = prefixNum;
        }
        return;
      }
      if (choseHigerDig) {
        helper(prefix + lettersLeft.join(""), [], true);
      } else {
        for (let i = 0; i < lettersLeft.length; i++) {
          const higherDig =
            parseInt(lettersLeft[i]) > parseInt(A[prefix.length]);
          const equalDig =
            parseInt(lettersLeft[i]) === parseInt(A[prefix.length]);
          if (higherDig || equalDig) {
            helper(
              prefix + lettersLeft[i],
              lettersLeft.slice(0, i).concat(lettersLeft.slice(i + 1)),
              choseHigerDig || higherDig
            );
          }
        }
      }
    };
    numLetters.sort((a, b) => parseInt(a) - parseInt(b));
    
    helper("", numLetters, false);
    if (result === 1 / 0) return -1;
    console.log("result", result)
    return result.toString();
  },
};

module.exports.solve("740948824551711527614232216857618927954312"
);
