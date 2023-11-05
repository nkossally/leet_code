module.exports = {
  //param A : string
  //return an integer
  cnttrue: function (A) {
    if (A.length === 0) return 0;
    const trueStatements = new Set(["T|T", "T^F", "F^T", "T&T", "T|F", "F|T"]);
    let count = 0;

    const getVal = (str, path) => {
      for (let i = 0; i <= str.length - 3; i += 2) {
        const slice = str.slice(i, i + 3);
        const sliceRes = trueStatements.has(slice) ? "T" : "F";
        const newStr = str.slice(0, i) + sliceRes + str.slice(i + 3);
        console.log(path.length, slice, newStr);
        if (newStr.length === 1) {
          if (newStr === "T") {
            console.log(path);
            count++;
          }
        } else {
          getVal(newStr, [...path, newStr]);
        }
      }
    };
    getVal(A, [A]);
    return count;
  },
};

module.exports.cnttrue("F|T^T&F");
