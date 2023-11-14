module.exports = {
  //param A : array of integers
  //return a array of array of integers
  avgsetRecursion: function (A) {
    A.sort((a, b) => a - b);
    const avg = A.reduce((acc, curr) => acc + curr, 0) / A.length;

    let result;

    const isLower = (a, b) => {
      if (a.length < b.length) {
        return true;
      } else if (b.length < a.length) {
        return false;
      }
      let i = 0;
      while (i < a.length && a[i] === b[i]) {
        i++;
      }
      if (a[i] < b[i]) return true;
      return false;
    };

    const getOtherArr = (arr) => {
      const otherArr = [];
      let i = 0;
      let j = 0;
      while (i < A.length) {
        const val = A[i];
        if (val === arr[j]) {
          j++;
        } else {
          otherArr.push(val);
        }
        i++;
      }
      return otherArr;
    };

    const getArr = (idx, arr, currSum) => {
      if (currSum / arr.length > avg) return;
      if (idx === A.length) return;
      if (arr.length > 0 && currSum === avg * arr.length) {
        if (result === undefined || isLower(arr, result)) {
          result = arr;
        }
        return;
      }
      if (idx === A.length) return;
      getArr(idx + 1, arr, currSum);
      getArr(idx + 1, [...arr, A[idx]], currSum + A[idx]);
    };
    getArr(0, [], 0);

    const resultArr = result ? [result, getOtherArr(result)] : [];
    console.log(resultArr);

    return resultArr;
  },

  avgsetIterative: function (A) {
    A.sort((a, b) => a - b);
    const avg = A.reduce((acc, curr) => acc + curr, 0) / A.length;

    let result;

    const isLower = (a, b) => {
      if (a.length < b.length) {
        return true;
      } else if (b.length < a.length) {
        return false;
      }

      let i = 0;
      while (i < a.length && a[i] === b[i]) {
        i++;
      }
      if (a[i] < b[i]) return true;
      return false;
    };

    class Struct {
      constructor(idx) {
        this.arr = [];
        this.sum = 0;
        this.idx = idx;
      }
    }

    const getOtherArr = (arr) => {
      const otherArr = [];
      let i = 0;
      let j = 0;
      while (i < A.length) {
        const val = A[i];
        if (val === arr[j]) {
          j++;
        } else {
          otherArr.push(val);
        }
        i++;
      }
      return otherArr;
    };

    let heap = [new Struct(0)];
    while (heap.length > 0) {
      const struct = heap.shift();
      const idx = struct.idx;
      if (struct.arr.length * avg < struct.sum) continue;
      if (result && isLower(result, struct.arr)) continue;
      if (
        struct.arr.length > 0 &&
        struct.arr.length < A.length &&
        struct.arr.length * avg === struct.sum
      ) {
        result = struct.arr;
      } else if (idx < A.length - 1) {
        struct.idx++;
        const newStruct = new Struct(idx + 1);
        newStruct.arr = [...struct.arr];
        newStruct.sum = struct.sum;
        struct.arr.push(A[idx]);
        struct.sum += A[idx];
        heap.push(struct);
        heap.push(newStruct);
      }
    }

    const resultArr = result ? [result, getOtherArr(result)] : [];
    console.log(resultArr);
    return resultArr;
  },
};
const A = [
  33, 0, 19, 49, 29, 29, 28, 41, 36, 40, 24, 34, 35, 26, 1, 0, 27, 12, 13, 50,
  4, 0, 45, 39, 26,
];
// const A = [ 39, 22, 20, 42, 36, 23, 20, 44, 24, 26, 43, 38, 42, 15, 12, 17, 5, 16, 4, 40, 8 ]
// const A = [
//   13, 30, 9, 13, 17, 42, 28, 20, 9, 24, 14, 20, 1, 28, 24, 26, 45, 27, 34, 38,
//   48, 38, 7, 34,
// ];

module.exports.avgsetRecursion(A);
module.exports.avgsetIterative(A);
