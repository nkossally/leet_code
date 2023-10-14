module.exports = {
  //param A : array of integers
  //return a strings
  largestNumber: function (A) {
    let onlyZero = true;
    for (let i = 0; i < A.length; i++) {
      if (A[i] !== 0) onlyZero = false;
    }
    if (onlyZero) return 0;

    const compare = (a, b) => {
      return (
        parseInt(b.toString() + a.toString()) -
        parseInt(a.toString() + b.toString())
      );
    };

    A.sort(compare);
    return A.join("");
  },
};
