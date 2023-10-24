module.exports = {
  //param A : string
  //param B : string
  //param C : array of strings
  //return an integer
  solve: function (A, B, C) {
    const seen = {};
    if (A === B) return 0;

    wordToWord = {};

    const differByOne = (a, b) => {
      if (a.length !== b.length) return false;
      let diff = 0;
      let i = 0;
      while (i < a.length) {
        if (a[i] !== b[i]) {
          diff++;
        }
        if (diff > 1) break;
        i++;
      }
      return diff === 1;
    };

    let min = 1 / 0;
    let count = 0;

    const getNextString = (word, count) => {
      if (seen[word]) {
        if (seen[word] <= count) {
          return;
        } else {
          seen[word] = count;
        }
      } else {
        seen[word] = count;
      }
      if (word === B) {
        min = Math.min(min, count);
        return;
      }
      if (!wordToWord[word]) {
        wordToWord[word] = C.filter((otherWord) =>
          differByOne(word, otherWord)
        );
      }
      const connectedWords = wordToWord[word];
      connectedWords.forEach((otherWord) => {
        getNextString(otherWord, count + 1);
      });
    };
    getNextString(A, 1);
    return min !== 1 / 0 ? min : 0;
  },

  solveWithHeap: function (A, B, C) {
    const seen = new Set();
    if (A === B) return 0;

    wordToWord = {};

    const differByOne = (a, b) => {
      if (a.length !== b.length) return false;
      let diff = 0;
      let i = 0;
      while (i < a.length) {
        if (a[i] !== b[i]) {
          diff++;
        }
        if (diff > 1) break;
        i++;
      }
      return diff === 1;
    };

    let count = 0;
    let heap = [A];
    let found;

    while (heap.length > 0) {
      const newHeap = [];
      while (heap.length > 0 && !found) {
        const word = heap.shift();
        seen.add(word);
        if (word === B) break;
        if (!wordToWord[word]) {
          wordToWord[word] = C.filter((otherWord) => {
            return differByOne(word, otherWord);
          });
        }
        const connectedWords = wordToWord[word];
        console.log(word, connectedWords)
        connectedWords.forEach((otherWord) => {
         if(otherWord === B ) found = true;;
          if (!seen.has(otherWord)) newHeap.push(otherWord);
        });
        if(found === true) break;
      }
      if(found === true) break;
      heap = newHeap;
      count++;
    }

    console.log(count + 1)
    return count !== 0 ? count + 2 : 0;
  },
};

const A = "baxug";
const B = "clgko";
const C = [
  "cljkh",
  "baxbg",
  "bajbm",
  "bljkm",
  "baxug",
  "cljko",
  "bajbg",
  "clnko",
  "clgko",
  "bljkh",
  "bljbm",
];


const A2 = "ymain"
const B2 = "oecij"
const C2 = [ "ymann", "yycrj", "oecij", "ymcnj", "yzcrj", "yycij", "xecij", "yecij", "ymanj", "yzcnj", "ymain" ]

module.exports.solveWithHeap(A, B, C);
module.exports.solveWithHeap(A2, B2, C2);
