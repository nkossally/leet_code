/**
 * @param {string} password
 * @return {number}
 */
var strongPasswordChecker = function (password) {
    const lowerCaseStr = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const digitsStr = "0123456789"
    const lowerCaseLetters = new Set(lowerCaseStr.split(""))
    const upperCaseLetters = new Set(upperCaseStr.split(""))
    const digits = new Set(digitsStr.split(""))
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasDigit = false;
    let missingCount = 3;

    const repeats = []
    let str = ""
    for (let i = 1; i < password.length; i++) {
        if (password[i] === password[i - 1]) {
            if (str === "") {
                str = password[i] + password[i]
            } else {
                str += password[i]
            }
        } else {
            if (str !== "") {
                if (str.length >= 3) repeats.push(str)
                str = ""
            }
        }
    }
    if (str.length >= 3) repeats.push(str)

    // repeats.sort((a, b) => {
    //     if(a.length % 3 === 0) return -1
    //     if(b.length % 3 === 0) return 1
    //     return 0;
    // })

    // repeats.sort((a, b) => {
    //     return b.length - a.length
    // })

    const getTripleIdx = () => {
        let result;
        for (let i = 0; i < repeats.length; i++) {
            const str = repeats[i]
            if (str.length === 3) {
                result = i;
                break
            }

        }
        return result
    }

    for (let i = 0; i < password.length; i++) {
        const letter = password[i]
        if (!hasDigit && digits.has(letter)) {
            missingCount--
            hasDigit = true;
        }
        if (!hasLowerCase && lowerCaseLetters.has(letter)) {
            missingCount--
            hasLowerCase = true;
        }
        if (!hasUpperCase && upperCaseLetters.has(letter)) {
            missingCount--
            hasUpperCase = true;
        }
        if (hasDigit && hasLowerCase && hasUpperCase) break;
    }

    console.log(repeats, missingCount)

    const alterRepatsWithDelete = () => {
        repeats[0] = repeats[0].slice(1)
        if (repeats[0].length < 3) repeats.splice(0, 1)
    }


    let changeIdx = 0
    const alterRepatsWithChange = () => {
        repeats[changeIdx] = repeats[changeIdx].slice(3)
        if (repeats[changeIdx].length < 3){
            repeats.splice(changeIdx, 1)
        } else {
            changeIdx++
        } 
        changeIdx = changeIdx % repeats.length
    }

    let changes = 0;
    let length = password.length
    while (missingCount > 0 && repeats.length > 0) {
        missingCount--
        alterRepatsWithChange()
        changes++
        console.log("flag 1")
    }

    while (missingCount > 0 && length < 6) {
        missingCount--;
        length++
        changes++
        console.log("flag 2")
    }

    // change letters without deleting
    while (missingCount > 0 && length > 20) {
        missingCount--;
        changes++
        console.log("flag 10")
    }

    while (repeats.length > 0 && length < 6) {
        alterRepatsWithChange()
        length++
        changes++
        console.log("flag 3")
    }

    while (length > 20 && repeats.length > 0 && getTripleIdx() !== undefined) {
        length--;
        const idx = getTripleIdx()
        repeats.splice(idx, 1)
        changes++
        console.log("flag 5")
    }

    while (missingCount > 0) {
        missingCount--;
        length++
        changes++
        console.log("flag 7")
    }

    while (length < 6) {
        length++
        changes++
        console.log("flag 8")
    }


    while (length >= 23 && getTripleIdx() !== undefined) {
        length -= 3;
        const idx = getTripleIdx()
        repeats.splice(idx, 1)
        changes += 3
        console.log("flag 11")
    }

    let i = 0;
    const blarg = () =>{
        let idx
        let zeroIdx;
        let oneIdx;
        let twoIdx;
        for(let i = 0; i < repeats.length; i++){
            if(zeroIdx === undefined && repeats[i].length % 3 === 0){
                zeroIdx = i
            }
            if(oneIdx === undefined && repeats[i].length % 3 === 1){
                oneIdx = i
            }
            if(twoIdx === undefined && repeats[i].length % 3 === 2){
                twoIdx = i
            }
        }
        if(zeroIdx !== undefined){
            idx = zeroIdx
        } else if(twoIdx !== undefined){
            idx = twoIdx
        } else {
            idx = oneIdx
        }
        repeats[idx] = repeats[idx].slice(1)
        if (repeats[idx].length < 3) {
            repeats.splice(idx, 1)
        }
    }

    while (length > 20 && repeats.length > 0) {
        console.log(repeats)
        blarg()
        length--;
        changes++
        console.log("flag 12")
    }


    while (length > 20) {
        length--;
        changes++
        console.log("flag 9")
    }

    console.log("changes", changes)
    console.log(repeats)

    repeats.forEach(str => {
        changes += Math.floor(str.length / 3)
    })

    return changes

};
// strongPasswordChecker("bbaaaaaaaaaaaaaaacccccc")
strongPasswordChecker("ABABABABABABABABABAB1")


