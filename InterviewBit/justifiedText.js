module.exports = {
  //param A : array of strings
  //param B : integer
  //return a array of strings
  fullJustify: function (A, B) {
    const result = [];

    const getSpaces = (num) => {
      let result = "";
      for (let i = 0; i < num; i++) {
        result += " ";
      }
      return result;
    };

    let i = 0;
    const getLastWordIdx = (idx) => {
      let j = idx;
      let sum = 0;
      while (j < A.length) {
        if (sum + A[j].length <= B) {
          sum += A[j].length + 1;
        } else {
          break;
        }
        j++;
      }
      sum--;
      j--;
      return [j, sum];
    };
    while (i < A.length) {
      const tuple = getLastWordIdx(i);
      const j = tuple[0];
      const letterCount = tuple[1];
      const wordCount = j - i + 1;
      let spaces =
        wordCount > 1 ? Math.floor((B - letterCount) / (wordCount - 1)) : 0;
      let spacesStr = getSpaces(spaces);
      let extraSpaces =
        wordCount > 1 ? B - letterCount - spaces * (wordCount - 1) : 0;
      if (j === A.length - 1) {
        extraSpaces = 0;
        spacesStr = "";
      }
      let str = "";
      for (let k = i; k <= j; k++) {
        str += A[k];
        if (k < j) str += " " + spacesStr;
        if (k === A.length - 1  || wordCount === 1) str += getSpaces(B - letterCount);
        if (extraSpaces > 0) {
          str += " ";
          extraSpaces--;
        }
      }
      result.push(str);
      i = j + 1;
    }
    // console.log(result)
    return result;
  },
};

const A = [ "am", "fasgoprn", "lvqsrjylg", "rzuslwan", "xlaui", "tnzegzuzn", "kuiwdc", "fofjkkkm", "ssqjig", "tcmejefj", "uixgzm", "lyuxeaxsg", "iqiyip", "msv", "uurcazjc", "earsrvrq", "qlq", "lxrtzkjpg", "jkxymjus", "mvornwza", "zty", "q", "nsecqphjy" ]
module.exports.fullJustify(A, 14);
