function steadyGene(gene) {
  const letterCounts = {};
  "ACTG".split("").forEach((letter) => {
    letterCounts[letter] = 0;
  });
  gene.split("").forEach((letter) => {
    letterCounts[letter]++;
  });
  const getIsBalanced = () => {
    let isBalanced = true;
    "ACTG".split("").forEach((letter) => {
      if (letterCounts[letter] > gene.length / 4) {
        isBalanced = false;
      }
    });
    return isBalanced;
  };
  let min = 1 / 0;
  let i = 0;
  let j = 0;
  while (i < gene.length && j < gene.length) {
    if (!getIsBalanced()) {
        console.log(i, j, "increasing j")
      letterCounts[gene[j]]--;
      j++;
    } else {
        console.log(i, j, "increasing i")

      min = Math.min(min, j - i);
      letterCounts[gene[i]]++;
      i++;
    }
    console.log(letterCounts)

  }
  console.log(i, j);
  return min;
}

// console.log(steadyGene("ACTGAAAG"));
// ACTGAAAG
// -CTGAAAG
// --TGAAAG
// ---GAAAG
// ----AAAG
// -----AAG
// A----AAG
// A-----AG

// AC----AG
// ACT---AG
// ACTG--AG
// ACTGA-AG
// ACTGA--G

