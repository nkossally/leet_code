/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let total = 0;
    let maxPile = -1/0

    for(let i = 0; i < piles.length; i++){
        total += piles[i]
        maxPile = Math.max(maxPile, piles[i])
    }

    let lowerBound = Math.ceil(total/h)
    let upperBound = Math.ceil(h/piles.length ) * maxPile

    const trySpeed = (speed) =>{
        let count = 0
        for(let idx = 0; idx < piles.length; idx++){
            count += Math.ceil(piles[idx]/speed)
            if(count > h) return false
        }
        return true
    }

    while (lowerBound <= upperBound) {
        let mid = Math.ceil((lowerBound + upperBound)/2)

        const works = trySpeed(mid)
        if(works){
            upperBound = mid - 1
        } else {
            lowerBound = mid + 1
        }
    }
    
    return lowerBound
};