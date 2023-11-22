module.exports = {
  //param A : integer
  //param B : array of integers
  //return a array of integers
  rodCut: function (A, B) {
    if (B.length === 0) return [];
    B.sort((a, b) => a - b);
    B.unshift(0);
    B.push(A);

    class SumSequence {
      constructor(sum, sequence) {
        this.sum = sum;
        this.sequence = sequence;
      }
    }
    const recur = (arr) => {
      if (arr.length === 2) {
        const notEdge = (val) => val !== 0 && val !== A;
        const finalPick = notEdge(arr[0]) ? arr[0] : arr[1];
        return new SumSequence(arr[1] - arr[0], [finalPick]);
      }
      if (arr.length === 1) {
        const notEdge = (val) => val !== 0 && val !== A;
        if (notEdge(arr[0])) {
          return new SumSequence(0, [arr[0]]);
        } else {
          return new SumSequence(0, []);
        }
      }
      if (arr.length === 3) {
        return new SumSequence(arr[2] - arr[0], [arr[1]]);
      }
      let minSequence;
      let minSum = 1 / 0;
      const midPoint = arr[0] + (arr[arr.length - 1] - arr[0]) / 2;
      for (let i = 1; i < arr.length - 1; i++) {
        const a = recur(arr.slice(0, i));
        const b = recur(arr.slice(i + 1));
        const totalSum = arr[arr.length - 1] - arr[0] + a.sum + b.sum;
        if (totalSum < minSum) {
          minSum = totalSum;
          minSequence = new SumSequence(
            totalSum,
            [arr[i]].concat(a.sequence).concat(b.sequence)
          );
        }
      }

      return minSequence;
    };
    const result = recur(B);
    console.log(result);
    return result.sequence;
  },
};

// module.exports.rodCut()
