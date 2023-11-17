module.exports = {
  //param A : string
  //return an integer
  findRank: function (A) {
    const letters = A.split("").sort((a, b)=> a.charCodeAt(0) - b.charCodeAt(0));
    const factorial = num =>{
        let i = 1;
        let prod = 1;
        while(i <= num){
            prod *= i
            prod = prod % 1000003
            i++
        }
        return prod % 1000003;
    }
    
    let str = ""
    let rank = 0;
    while(str !== A){
        const letter = A[str.length]
        const idx = letters.indexOf(letter)
        rank += (idx * factorial(A.length - str.length - 1)) 
        rank = rank % 1000003;
        letters.splice(idx, 1)
        str += letter
    }

    const result = (rank + 1) % 1000003
    console.log(result)
    return result
 
  },
};

module.exports.findRank("gTFAMYjxCewRlftmGOKJHUuhSBVDZnbqyoPQadEkLrpNsv");
