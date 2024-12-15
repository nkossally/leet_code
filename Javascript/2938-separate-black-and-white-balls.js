/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function (s) {
    let zeroCount = 0;

    let zeroIndicesSum = 0;

    for(let i = 0; i < s.length; i++){
        const char = s[i]
        if(char === "0"){
            zeroCount += 1
            zeroIndicesSum += i
        }
    } 

    const desiredSum = (zeroCount * (zeroCount - 1))/2

    return zeroIndicesSum - desiredSum

};


/**
 * @param {string} s
 * @return {number}
 */
var minimumStepsV2 = function (s) {
    let swapCount = 0;
    let blackCount = 0
    let i = 0
    while(i < s.length){
        const char = s[i]
        if(char === "1"){
            blackCount++
        } else {
            swapCount += blackCount
        }
        i++
    }
    return swapCount

};