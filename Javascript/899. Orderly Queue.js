/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {

    const orderedChars = s.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    if(k > 1) return orderedChars.join("")
    

    let best = s
    let curr = s.slice(0)

    for(let i = 0; i < s.length; i++){
        curr = curr.slice(1) + curr[0]
        if(curr < best) best = curr
    }

    return best

};