//param A : integer
//return an integer
function numTrees(A) {
    const constructNodesBetweenRange = (start, end) =>{
        if(start >= end) return 1;
        // if(start === end) return 1;

        let total = 0;
        for(let i = start; i <= end; i++){
            const leftCount = constructNodesBetweenRange(start, i - 1)
            const rightCount = constructNodesBetweenRange(i + 1, end);
            total += leftCount * rightCount;
        }
        return total
    }
    result = constructNodesBetweenRange(1, A);
    // console.log(result)
    return result;
 
}

numTrees(3)