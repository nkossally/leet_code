module.exports = {
  //param A : string
  //param B : array of strings
  //return a array of integers
  findSubstring: function (A, B) {
    let result = [];
    if(B.length < 1) return []
    const wordLength = B[0].length 

    const checkIndex = (start, idx, wordsLeft) => {
      if (wordsLeft.length === 0) {
        result.push(start);
        return;
      }
      const nextWord = A.slice(idx, idx + wordLength);
      const wordIdx = wordsLeft.indexOf(nextWord)
      if (wordIdx !== -1) {
        const newWordsLeft = Array.from(wordsLeft)
        newWordsLeft.splice(wordIdx, 1);
        checkIndex(start, idx + wordLength, newWordsLeft);
      }
    };
    for (let i = 0; i < A.length; i++) {
      checkIndex(i, i, Array.from(B));
    }
    return result;
  },
};
const A = "barfoothefoobarman"
const B = [ "foo", "bar"  ]
module.exports.findSubstring(A, B)