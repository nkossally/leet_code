/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    const oneCount = []
    let count = 0;
    let minChanges = 1 / 0

    for(let i = 0; i < s.length; i++){
        if(s[i] === "1") count++
        oneCount.push(count)

    }
    console.log(oneCount)
    for(let i = 1; i < s.length; i++){
        const onesToChange = oneCount[i - 1]
        const zerosToChange = (s.length - i) - (oneCount[s.length - 1] - oneCount[i - 1])
        const totalFlips = onesToChange + zerosToChange

        // console.log("i", i,"onesToChange", onesToChange, "zerosToChange", zerosToChange )
        minChanges = Math.min(totalFlips, minChanges)
    }

    // change everything to 0
    const val1 = oneCount[s.length - 1]
    // change everything to 1
    const val2 = s.length - oneCount[s.length - 1]

    minChanges = Math.min(minChanges, Math.min(val1, val2))

    return minChanges
};