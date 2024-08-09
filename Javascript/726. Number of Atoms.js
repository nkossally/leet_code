/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {

    const getCounts = (str) => {
        const counts = {}
        for (let i = 0; i < str.length; i++) {
            const letter = str[i]
            if (!counts[letter]) counts[letter] = 0
            counts[letter]++
        }
        return counts
    }

    const mergeCounts = (counts1, counts2) => {
        Object.keys(counts2).forEach(key => {
            if (!counts1[key]) counts1[key] = 0
            counts1[key] += counts2[key]
        })
    }

    const incrementCounts = (counts, letter, num) => {
        if (!counts[letter]) counts[letter] = 0
        counts[letter] += num
    }

    const multiplyCounts = (counts, num) => {
        Object.keys(counts).forEach(key => {
            counts[key] *= num
        })
    }

    const nums = new Set("0123456789".split(""))
    const uppercaseLetters = new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""))
    const lowercaseLetters = new Set("abcdefghijklmnopqrstuvwxyz".split(""))

    const counts = {}
    const countsStack = [counts]

    let i = -1;
    let numStr = ""
    let elem = ""
    let shouldMultiplyCounts = false

    const getNextElemStr = (rightIdx) => {
        let elem = "";
        let i = rightIdx
        if (uppercaseLetters.has(formula[i + 1])) {
            elem += formula[i + 1]
            i++
        }
        while (lowercaseLetters.has(formula[i + 1])) {
            elem += formula[i + 1]
            i++
        }
        return elem
    }
    const getNextNumberStr = (rightIdx) => {
        let numStr = "";
        let i = rightIdx
        while (nums.has(formula[i + 1])) {
            numStr += formula[i + 1]
            i++
        }
        return numStr
    }
    while (i < formula.length - 1) {

        const currCounts = countsStack[countsStack.length - 1]
        elem = getNextElemStr(i)
        i += elem.length
        numStr = getNextNumberStr(i)
        i += numStr.length

        if (numStr && elem) {
            incrementCounts(currCounts, elem, parseInt(numStr))
        } else if (elem) {
            incrementCounts(currCounts, elem, 1)
        }

        if (shouldMultiplyCounts) {
            if (numStr) multiplyCounts(currCounts, parseInt(numStr))
            mergeCounts(countsStack[countsStack.length - 2], currCounts)
            countsStack.pop()
        } else if (numStr) {

        }
        if (formula[i + 1] === "(") {
            const newCounts = {}
            countsStack.push(newCounts)
            i++
        }
        if (formula[i + 1] === ")") {
            shouldMultiplyCounts = true
            i++
        } else {
            shouldMultiplyCounts = false
        }
    }
    if (countsStack.length > 1) {
        mergeCounts(countsStack[0], countsStack[1])
    }
    let result = ""
    const sortedElements = Object.keys(counts).sort((a, b) => {
        let i = 0
        while (i < Math.min(a.length, b.length)) {
            if (a.charCodeAt(i) !== b.charCodeAt(i)) return a.charCodeAt(i) - b.charCodeAt(i)
            i++
        }
        return a.length - b.length

    })
    sortedElements.forEach(elem => {
        result += (elem + (counts[elem] > 1 ? counts[elem] : ""))
    })
    return result
};