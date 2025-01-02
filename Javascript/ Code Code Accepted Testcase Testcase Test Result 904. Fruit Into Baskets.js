var totalFruit = function (fruits) {
    let val1Idx
    let val2Idx
    let val1
    let val2
    let maxCount = 0

    for (let i = 0; i < fruits.length; i++) {
        const val = fruits[i]

        if (val === val1) {
        } else if(val === val2){
        } else if(val1 === undefined){
            val1 = val
            val1Idx = i
        } else if(val2 === undefined){
            val2 = val
            val2Idx = i
        } else {
            const count = i - val1Idx
            maxCount = Math.max(count, maxCount)
            val1 = fruits[i - 1]
            val1Idx = i - 1
            while(fruits[val1Idx - 1] === val1){
                val1Idx--
            }
            val2 = val
            val2Idx = i
        }
        console.log(val1,val1Idx, val2, val2Idx)

    }

    const count = fruits.length - val1Idx
    maxCount = Math.max(count, maxCount)

    return maxCount
};

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruitV2 = function (fruits) {
    let val1Idx
    let val2Idx
    let lastVal1
    let lastVal2
    let val1
    let val2
    let maxCount = 0

    for (let i = 0; i < fruits.length; i++) {
        const val = fruits[i]

        if (val === val1) {
            lastVal1 = i
        } else if(val === val2){
            lastVal2 = i
        } else if(val1 === undefined){
            val1 = val
            val1Idx = i
            lastVal1 = i
        } else if(val2 === undefined){
            val2 = val
            val2Idx = i
            lastVal2 = i
        } else {
            const count = i - val1Idx
            maxCount = Math.max(count, maxCount)
            val1Idx = Math.min(lastVal1, lastVal2) + 1
            lastVal1 = Math.max(lastVal1, lastVal2)
            val1 = fruits[val1Idx]
            val2 = val
            val2Idx = i
            lastVal2 = i
        }
        // console.log(val1,val1Idx, val2, val2Idx)

    }

    const count = fruits.length - val1Idx
    maxCount = Math.max(count, maxCount)

    return maxCount
};
