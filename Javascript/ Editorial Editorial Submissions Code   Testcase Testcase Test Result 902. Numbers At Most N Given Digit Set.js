/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function (digits, n) {
    const uniqueDigits = Array.from(new Set(digits))
    let count = 0

    const nStr = n.toString()
    const digitCount = nStr.length

    for(let i = 1; i < digitCount; i++){
        count += Math.pow(uniqueDigits.length, i)
    }

    const handleLargeNumber = (str) => {
        if (str.length === digitCount) {
            count++
            return
        }
        for (let i = 0; i < uniqueDigits.length; i++) {
            const num = parseInt(uniqueDigits[i])
            const originalDigit = parseInt(nStr[str.length])

            if (num < originalDigit) {
                count += Math.pow(uniqueDigits.length , digitCount - str.length - 1)

            } else if(num === originalDigit) {
                handleLargeNumber(str + num)
            }
        }
    }

    handleLargeNumber("")

    return count
};