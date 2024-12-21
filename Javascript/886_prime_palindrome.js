/**
 * @param {number} n
 * @return {number}
 */
var primePalindrome = function (n) {
    // even palindromes are divisible by 11
    if(n <= 2) return 2
    if(n <= 3) return 3
    if(n <= 5) return 5
    if(n <= 7) return 7
    if(n <= 11) return 11

    const getIsPrime = (num) => {
        if (num === 1) return false
        let k = 2;
        while (k <= Math.floor(Math.pow(num, .5))) {
            if (num % k === 0) return false
            k++
        }
        return true
    }

    const numLength = n.toString().length
    let desiredLength = numLength % 2 === 1 ? numLength : numLength + 1;

    let minPrime

    const getValidPalindrome = (str) => {
        if ((str.length - 1) * 2 === desiredLength - 1) {
            const prefix = str.slice(0, str.length - 1)
            const num = parseInt(prefix + str[str.length - 1] + prefix.split("").reverse().join(""))
            // console.log(num)
            if (num >= n && getIsPrime(num)) {
                if(!minPrime || num < minPrime) minPrime = num
            }
            return
        }

        for (let i = 0; i <= 9; i++) {
            if (i === 0) {
                if (str.length !== 0) {
                    getValidPalindrome(str + i)
                }
            } else {
                getValidPalindrome(str + i)
            }
        }
    }

    while(!minPrime){
        getValidPalindrome("")
        desiredLength += 2

    }
    return minPrime


};