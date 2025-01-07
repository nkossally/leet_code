/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
    let valCounts = {}

    const getMod = num => num % (7 + Math.pow(10, 9))

    for(let i = 0; i < arr.length; i++){
        const val = arr[i]
        if(!valCounts[val]) valCounts[val] = 0
        valCounts[val]++
        valCounts[val] = getMod(valCounts[val])
    }

    const getCount = val =>{
        if(valCounts[val]) return valCounts[val]
        return 0
    }

    let totalCount = 0

    for(let i = 0; i < arr.length - 1; i++){
    
        for(let j = i + 1; j < arr.length; j++){
            const sum = arr[i] + arr[j]
            const diff = target - sum
            let count = getCount(diff)
            if(diff === arr[i])  count--
            if(diff === arr[j] ) count--
            if(count > 0 ) totalCount += count
        }
    }

    return getMod(totalCount/3  )
};