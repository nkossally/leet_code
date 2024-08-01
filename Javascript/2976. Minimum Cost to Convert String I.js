/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (source, target, original, changed, cost) {
    const costs = {}

    const hasCost = (start, dest, price) => {
        if (!costs[start]) return false
        if (costs[start][dest] === undefined) return false
        return true;
    }

    const addToCosts = (start, dest, price) => {
        if (!costs[start]) costs[start] = {}
        if (!costs[start][dest]) costs[start][dest] = price
        costs[start][dest] = Math.min(price, costs[start][dest])
    }

    const getCost = (start, dest) => {
        return costs[start][dest]
    }

    for (let i = 0; i < original.length; i++) {
        addToCosts(original[i], changed[i], cost[i])
    }

    const addCostPaths = (start, latest, seen, sum) => {
        if (hasCost(start, latest) && costs[start][latest] < sum) return
        if (!hasCost(start, latest) || costs[start][latest] > sum) {
            addToCosts(start, latest, sum)
        }       


        let letterCosts = costs[latest]
        const size1 = letterCosts ? Object.keys(letterCosts).length : 0; 
        if (letterCosts) {
            Object.keys(letterCosts).forEach(letter => {
                if (!seen.has(letter)) {
                    const letterCost = letterCosts[letter]
                    const newSeen = new Set(Array.from(seen))
                    newSeen.add(letter)
                    addCostPaths(start, letter, newSeen, sum + letterCost)
                }
            })
        }
        letterCosts = costs[latest]
        const size2 = letterCosts ? Object.keys(letterCosts).length : 0; 
        if(size2 !== size1) addCostPaths(start, start, new Set([start]), 0)
    }

    new Set(original).forEach(letter => {
        addCostPaths(letter, letter, new Set([letter]), 0)
    })

    let total = 0
    for (let i = 0; i < source.length; i++) {
        const letter1 = source[i]
        const letter2 = target[i]
        if (letter1 !== letter2) {
            if (!hasCost(letter1, letter2)) {
                return -1
            } else {
                total += costs[letter1][letter2]
            }

        }
    }

    return total
};