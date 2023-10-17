module.exports = {
  //param A : array of strings
  //return a array of array of integers
  anagrams: function (A) {
    const isAnagram = (a, b) => {
      if (a.length !== b.length) return false;
      let aCounts = {};
      let bCounts = {};
      a.split("").forEach((letter) => {
        if (aCounts[letter] === undefined) {
          aCounts[letter] = 0;
        }
        aCounts[letter]++;
      });
      b.split("").forEach((letter) => {
        if (bCounts[letter] === undefined) {
          bCounts[letter] = 0;
        }
        bCounts[letter]++;
      });
      let result = true;
      const letters = Object.keys(aCounts);
      let i = 0;
      while (i < letters.length) {
        const letter = letters[i];
        if (
          bCounts[letter] === undefined ||
          aCounts[letter] !== bCounts[letter]
        ) {
          result = false;
          break;
        }
        i++;
      }
      return result;
    };

    let groups = [];
    for (let i = 0; i < A.length; i++) {
      const val = A[i];
      let foundGroup;
      let j = 0;
      while (j < groups.length) {
        const group = groups[j];
        if (isAnagram(A[group[0] - 1], val)) {
          groups[j] = group.concat(i + 1).sort((a, b) => a - b);
          foundGroup = true;
          break;
        }
        j++;
      }
      if (!foundGroup) {
        groups.push([i + 1]);
      }
    }
    console.log(groups)
    return groups;
  },
};
const A = ["cat", "dog", "god", "tca"];
module.exports.anagrams(A);
