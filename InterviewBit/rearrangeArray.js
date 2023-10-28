module.exports = {
  //param A : array of integers
  //return nothing
  arrange: function (A) {
    for (let i = 0; i < A.length; i++) {
      if (typeof A[i] === "string") continue;
      const arr = [];
      let curr = i;
      while (A[curr] !== i) {
        arr.push(A[curr]);
        curr = A[curr];
      }
      arr.push(i);
    //   console.log("arr", arr);
      for (let j = 0; j < arr.length; j++) {
        const skipTwo = arr[(j + 2) % arr.length].toString()
        A[arr[j]] = skipTwo;
      }
    //   console.log("after", A)
    }

    for (let i = 0; i < A.length; i++) {
      A[i] = parseInt(A[i]);
    }
    // console.log(A);
    return A;
  },
};

module.exports.arrange([4, 0, 2, 1, 3]);
