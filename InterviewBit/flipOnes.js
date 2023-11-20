module.exports = {
  //param A : string
  //return a array of integers
  flip: function (A) {
    let maxDif = 0;
    let result = [];

    let onesCount = 0;
    numOnes = [0];

    for (let i = 0; i < A.length; i++) {
      if (A[i] === "1") onesCount++;
      numOnes[i + 1] = onesCount;
    }

    for (let i = 1; i <= A.length; i++) {
      for (let j = i; j <= A.length; j++) {
        const ones = numOnes[j] - numOnes[i - 1];
        const zeros = j - i + 1 - ones;
        diff = zeros - ones;
        if (diff > maxDif) {
          maxDif = diff;
          result = [i, j];
        }
      }
    }
    return result;
  },

  flip2: function (A) {
    let max = 0;
    let result = [];
    let i = 0;
    let j = 0;

    let onesCount = A[0] === "1" ? 1 : 0;

    const checkDiff = () => {
      zerosCount = j - i + 1 - onesCount;
      diff = zerosCount - onesCount;
      if (diff > max) {
        max = diff;
        result = [i + 1, j + 1];
      }
      return diff;
    };

    while (j < A.length - 1) {
      while(j < A.length - 1 && checkDiff() >= 0 ){
        j++;
        if(A[j] === "1") onesCount++
      }
      if(checkDiff() <= 0){
        j++
        i = j;
        onesCount =  A[j] === "1" ? 1 : 0;

      }
    }
    return result;
  },
};
module.exports.flip2("0101100010");
