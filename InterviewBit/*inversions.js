  //To count the occurrances in which A[j] < A[i] where j > i, do a merge sort
  // and count the number of times that something from the right matrix
  // goes before elements from the left matrix
module.exports = {
  countInversions: function (A) {
    let count = 0;
    const mergeSort = (arr) => {
      if (arr.length <= 1) return arr;
      const mid = Math.floor(arr.length / 2);

      const left = arr.slice(0, mid);
      const right = arr.slice(mid);
      return merge(mergeSort(left), mergeSort(right));
    };
    const merge = (arr1, arr2) => {
      let idx1 = 0;
      let idx2 = 0;
      const result = [];
      while (idx1 < arr1.length && idx2 < arr2.length) {
        const val1 = arr1[idx1];
        const val2 = arr2[idx2];
        if (val1 <= val2) {
          result.push(val1);
          idx1++;
        } else {
          result.push(val2);
          idx2++;
          count += arr1.length - idx1;
        }
      }
      return result.concat(arr1.slice(idx1)).concat(arr2.slice(idx2));
    };
    mergeSort(A);
    return count;
  },
};
