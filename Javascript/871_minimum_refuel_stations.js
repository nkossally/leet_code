/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
    // dp[num] is farthest can reach stopping at num stations
    const dp = [startFuel]

    for(let i = 0; i < stations.length; i++){
        const station = stations[i]
        const fuel = station[1]
        const pos = station[0]

        for(let j = i; j >= 0; j--){
            if(j === i) dp[j + 1] = 0
            if(dp[j] >= pos){
                dp[j + 1] = Math.max(dp[j + 1], dp[j] + fuel)
            }
        }

    }

    for(let i = 0; i < dp.length; i++){
        if(dp[i] >= target){
            return i
        }
    }

    return -1
};

/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops2 = function (target, startFuel, stations) {
    const queue = []
    let fuel = startFuel
    let pos = 0
    let count = 0

    const placeInQueue = (num) =>{
        let i = 0;
        while(i < queue.length && num < queue[i]){
            i++
        }
        queue.splice(i, 0, num)
    }

    for(let i = 0; i < stations.length; i++){
        const station = stations[i]
        const newPos = station[0]
        const refuel = station[1]
        fuel -= (newPos - pos)
        pos = newPos
        while(fuel < 0 && queue.length > 0){
            fuel += queue.shift()
            count++
        }
        if(fuel < 0){
            return -1
        }
        placeInQueue(refuel)

    }
    while(fuel < target - pos && queue.length > 0){
        fuel += queue.shift()
        count++
    }
    if(fuel >= target - pos) return count


    return  -1
};