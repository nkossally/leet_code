module.exports = {
  //param A : integer
  //param B : integer
  //return a strings
  getPermutation: function (A, B) {
    let perms = new Set();
    const getAllPermutations = (arr, vals) => {
      if (arr.length === A) {
        perms.add(JSON.stringify(arr));
        return;
      }
      for (let i = 0; i < vals.length; i++) {
        const copy = Array.from(vals);
        copy.splice(i, 1);
        getAllPermutations([...arr, vals[i]], copy);
      }
    };
    const numArr = [];
    for (let i = 1; i <= A; i++) {
      numArr.push(i);
    }
    getAllPermutations([], numArr);
    const sortedPerms = Array.from(perms).sort();
    const str = JSON.parse(sortedPerms[B - 1]).join("")
    return str;
  },
};
module.exports.getPermutation(2, 2)