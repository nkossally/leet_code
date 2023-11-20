module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  dNums: function (A, B) {
    if (B > A.length) return [];
    const result = [];
    let windowCounts = {};

    let size = 0;

    const addToWindowCounts = (i) => {
      if (windowCounts[A[i]] === undefined){
        size++;
        windowCounts[A[i]] = 0;
      } 
      windowCounts[A[i]]++;
    };
    for (let i = 0; i < B; i++) {
      addToWindowCounts(i);
    }
    result.push(Object.keys(windowCounts).length);
    console.log(windowCounts)
    for (let i = B; i < A.length; i++) {
      windowCounts[A[i - B]]--;
      if (windowCounts[A[i - B]] === 0) {
        delete windowCounts[A[i - B]];
        size--;
      }
      addToWindowCounts(i);
      console.log(windowCounts);
      result.push(size);
    }
    console.log(result)
    return result;
  },
};

module.exports.dNums([1, 2, 1, 3, 4, 3], 3);
