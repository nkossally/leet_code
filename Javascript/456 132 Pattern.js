/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {

    const pairs = []
    let min = 1/0
    let max = -1/0

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        let j = 0;
        while (j < pairs.length) {
            const pair = pairs[j]
            if (pair.length === 1) {
                if (num > pair[0]) {
                    pair.push(num)
                }
            } else {
                if (num > pair[0] && num < pair[1]) {
                    return true
                } else if (num > pair[0] && num > pair[1]) {
                    pair[1] = num
                }
            }
            j++
        }
        let m = 0;

        if(num > max){
            pairs.splice(0, pairs.length - 1)
            max = num
        }

        if (num < min) {
            pairs.push([num])
            min = num
        }

    }
    return false

};