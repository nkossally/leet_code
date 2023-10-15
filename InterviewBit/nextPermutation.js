module.exports = {
  //param A : array of integers
  //return a array of integers
  nextPermutation: function (A) {
    const getAllPermutations = arr =>{
        let result = []
        const recursion = (a, numsLeft) =>{
            if(a.length === A.length){
                result.push(a)
                return;
            }
            numsLeft.forEach(num =>{
                const copy = new Set(Array.from(numsLeft))
                copy.delete(num)
                recursion([...a, num], copy)
            })
        }
        recursion([], new Set(arr))
        return result;
    }
    let result;
    let idx = A.length - 2;
    while(idx >= 0 && result === undefined){
        const tails = getAllPermutations(A.slice(idx))
        console.log("tails", tails)
        tails.forEach(tail =>{
            const arr = A.slice(0, idx).concat(tail);
            console.log(arr)
            if(arr > A){
                if(result === undefined || arr < result){
                    result = arr;
                }
            }
        })
        idx--
    }
    console.log(A, result)
   return result;
  },
};
module.exports.nextPermutation([4, 3, 2, 1]);
