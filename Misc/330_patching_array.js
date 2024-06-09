/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    let reachableNums = []
    let count = 0;
    const chosenNums = []
    let lastAdded

    const putInOrder = num =>{
        if(reachableNums.length === 0){
            reachableNums.push(num)
            return;
        }

        const helper = (min, max) =>{
            if(max <= min){
                return min
            }

            const mid = Math.floor((min + max) / 2)

            if(reachableNums[mid] === num){
                return mid
            } else if(reachableNums[mid] > num){
                return helper(min, mid - 1)
            } else {
                return helper(mid + 1 , max)
            }
        }

        const length = reachableNums.length - 1 >= 0 ? reachableNums.length - 1 : 0;
        const idx = helper(0, length)

        if(reachableNums[idx] > num){
            reachableNums.splice(idx,0, num)
        } else if(reachableNums[idx] < num){
            reachableNums.splice(idx + 1,0, num)
        }
    }

    const getSums = (idx, sum) =>{
        if(idx === nums.length){
            if(sum <= n){
                putInOrder(sum)
            }
            return
        }
        getSums(idx + 1, sum)
        getSums(idx + 1, sum + nums[idx])
    }

    getSums(0, 0)
    console.log(reachableNums)

    const getNewNums = () => {
        let newNums = []
        let chosenNum

        let lowerBound = lastAdded ? lastAdded + 1 : 1;

        const reachableNumsSet = new Set(reachableNums)

        for(let i = lowerBound; i <= n; i++){
            const possibleNewNums = []
            reachableNums.forEach(sum => {
                if(!reachableNumsSet.has(sum + i) && sum + i <= n){
                    possibleNewNums.push(sum + i)
                }

            })
            if(possibleNewNums.length > newNums.length){
                chosenNum = i
                newNums = possibleNewNums
            }
        }
        chosenNums.push(chosenNum)
        lowerBound = chosenNum
        return newNums
    }


    while(reachableNums.length < n + 1 ){
        const newNums = getNewNums()
        newNums.forEach(num =>{
            putInOrder(num)
        })
        count++
    }

    console.log(chosenNums)
    return count
};

console.log(minPatches([1,2,31,33] , 2147483647))