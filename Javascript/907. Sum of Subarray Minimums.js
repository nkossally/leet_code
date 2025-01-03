/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    if(arr.length === 0) return 0;

    const getMod = num => num % (Math.pow(10, 9) + 7)

    let sum = 0

    const left = []
    const right = []
    const leftStack = []
    const rightStack = []

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i]
        while(leftStack.length > 0 && leftStack[leftStack.length - 1][0] >= val){
            leftStack.pop()
        }
        left[i] = leftStack.length > 0 ? i - leftStack[leftStack.length - 1][1] : i + 1
        leftStack.push([arr[i], i])

        const rightIdx = arr.length - 1 - i
        val = arr[rightIdx]
        while(rightStack.length > 0 && rightStack[rightStack.length - 1][0] > val){
            rightStack.pop()
        }
        right[rightIdx] = rightStack.length > 0 ? rightStack[rightStack.length - 1][1] - rightIdx  : arr.length - rightIdx
        rightStack.push([arr[rightIdx], rightIdx])
    }


    for(let i = 0; i < arr.length; i++){
        sum += left[i] * right[i] * arr[i]
        sum = getMod(sum)
    }

    return sum
    
};