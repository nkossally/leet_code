module.exports = {
  //param A : string
  //param B : array of strings
  //return a array of integers
  solve: function (A, B) {
    const goodWords = new Set(A.split("_"));

    const goodCount = (str) => {
      let count = 0;
      str.split("_").forEach((word) => {
        if (goodWords.has(word)) {
          count++;
        }
      });
      return count;
    };

    class WordCount {
      constructor(idx, count) {
        this.idx = idx;
        this.count = count;
      }
    }

    const arr = B.map((review, i) => {
      return new WordCount(i, goodCount(review));
    });
    console.log(arr);
    arr.sort((a, b) => b.count - a.count);
    console.log("sorted", arr);
    const indicesByCount = arr.map((elem) => elem.idx);
    console.log(indicesByCount);
    return indicesByCount;
  },
};

const A = "cool_ice_wifi";
const B = ["water_is_cool", "cold_ice_drink", "cool_wifi_speed"];
module.exports.solve(A, B);
