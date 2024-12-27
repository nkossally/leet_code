/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function(n, a, b) {
    const lower = a < b ? a : b;
    const higher = a < b ? b : a;

    let lcm = higher

    while( lcm % lower !== 0){
        lcm += higher
    }

    let lowerBound = lower
    let upperBound = lcm * n


    const getCount = num =>{
        let count = Math.floor(num/higher) + Math.floor(num/lower) - Math.floor(num/lcm)
        if(lcm === higher) count = Math.floor(num/lower)
        return count
    } 


    while(upperBound >= lowerBound){
        const mid = Math.floor((lowerBound + upperBound)/2)
        const count = getCount(mid)
        if(count >= n){
             upperBound = mid - 1
        } else{
            lowerBound = mid + 1
        }

    }
    return lowerBound % (Math.pow(10, 9) + 7)

};