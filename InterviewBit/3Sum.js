module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  threeSumClosest: function (A, B) {
    A.sort((a, b) => a - b);

    let minDiff = 1 / 0;
    let bestSum;

    for (let i = 0; i < A.length; i++) {
      let j = i + 1;
      let k = A.length - 1;
      while (j < k) {
        const sum = A[i] + A[j] + A[k];
        const diff = Math.abs(sum - B);
        if (diff < minDiff) {
          minDiff = diff;
          bestSum = sum;
        }
        if (sum < B) {
          j++;
        } else {
          k--;
        }
      }
    }
    return bestSum;
  },
};


const len = (str) => { 
  let size = Buffer.from(str).length; 
  return size; 
}  
  
console.log(len("Geeksforgeeks")) 
console.log(len("true")) 
console.log(len("false")) 
console.log(len("12345")) 
console.log(len("20€")) 
console.log(len("????"))
console.log(len("Αα"))