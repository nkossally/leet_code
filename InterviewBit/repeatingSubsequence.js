module.exports = {
  //param A : string
  //return an integer
  anytwo: function (A) {
    if(A.length === 0) return 0
    const counts = {}
    let result = false
    for(let i = 0; i < A.length; i++){
        if(counts[A[i]] === undefined) counts[A[i]] = []
        counts[A[i]].push(i)
        if(counts[A[i]].length > 2) result = true
    }
    const isValid = (arr1, arr2) =>{
        if(arr1.length < 2 || arr2.length < 2) return false;
        const way1 = arr1[0] < arr2[0] && arr1[1] < arr2[arr2.length - 1]
        const way2 = arr2[0] < arr2[0] && arr2[1] < arr1[arr1.length - 1]
        return way1 || way2

    }
    const keys = Object.keys(counts)
    for(let i = 0; i < keys.length; i++){
        if(result) break;
        for(let j = i + 1; j < keys.length; j++){
            const arr1 = counts[keys[i]]
            const arr2 = counts[keys[j]]
            if(isValid(arr1, arr2)){
                result = true;
            }

        }
    }

    console.log(result)
    return result ? 1 : 0;
  },
};

module.exports.anytwo("acdecdea");
