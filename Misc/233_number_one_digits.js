/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
    if (n === 0) return 0

    let totalCount = 0;

    const numStr = n.toString()

    const numLength = numStr.length

    const mem = {}

    const getProduct = (upper, lower) => {
        if(mem[upper]){
            if(mem[upper][lower]){
                return mem[upper][lower]
            }
        }
        let result = 1;
        let curr = lower
        while (curr <= upper) {
            result *= curr
            curr++
        }
        if(!mem[upper]) mem[upper] = {}
        mem[upper][lower] = result
        return result
    }

    const getCombination = (n, k) => {
        const higher = Math.max(k, n - k)
        const lower = Math.min(k, n - k)
        return getProduct(n, higher + 1) / (getProduct(lower, 1))

    }

    // count for all numbers with less digits than n
    for (let i = 1; i < numLength; i++) {
        for (let j = 0; j <= i - 1; j++) {
            // first dig is 1
            totalCount += (j + 1) * getCombination(i - 1, j) * Math.pow(9, i - 1 - j)
            // first dig is not 1
            totalCount += j * 8 * getCombination(i - 1, j) * Math.pow(9, i - 1 - j)
        }
    }

    const lowerBound = Math.pow(10, numLength - 1)

    // count for all numbers with same number of digits as n
    for (let i = 0; i < numStr.length; i++) {
        // choose index at which digit is lower than digit in n
        if (i === 0) {
            const dig = parseInt(numStr[0])
            if (dig > 1) {
                // choose 1
                for (let j = 0; j <= numLength - 1; j++) {
                    totalCount += (j + 1) * getCombination(numLength - 1, j) * Math.pow(9, numLength - 1 - j)
                }
                // don't choose 1
                for (let j = 0; j <= numLength - 1 - i; j++) {
                    totalCount += j * (dig - 2) * getCombination(numLength - 1, j) * Math.pow(9, numLength - 1 - j)
                }
            }
        } else {
            if (numStr[i] !== "0") {
                const prefixCount = numStr.slice(0, i).split("").filter(elem => elem === "1").length
                const dig = parseInt(numStr[i])
                // choose 1
                if (numStr[i] !== "1") {
                    for (let j = 0; j <= numLength - 1 - i; j++) {
                        totalCount += (j + 1 + prefixCount) * getCombination(numLength - 1 - i, j) * Math.pow(9, numLength - i - 1 - j)
                    }
                }
                // don't choose 1
                for (let j = 0; j <= numLength - 1 - i; j++) {
                    const optionCount = dig === 1 ? 1 : dig - 1
                    totalCount += (j + prefixCount) * optionCount * getCombination(numLength - 1 - i, j) * Math.pow(9, numLength - i - 1 - j)
                }
            }
        }

    }

    totalCount += n.toString().split("").filter(elem => elem === "1").length

    return totalCount
};