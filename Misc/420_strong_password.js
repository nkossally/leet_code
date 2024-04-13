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

    const getPriorityRepeatIdx = () =>{
        let zeroIdx;
        let oneIdx;
        let twoIdx;
        for(let i = 0; i < repeats.length; i++){
            if(zeroIdx === undefined && repeats[i].length % 3 === 0){
                zeroIdx = i;
                break;
            }
            if(oneIdx === undefined && repeats[i].length % 3 === 1){
                oneIdx = i
            }
            if(twoIdx === undefined && repeats[i].length % 3 === 2){
                twoIdx = i
            }
        }
        if(zeroIdx !== undefined){
            return zeroIdx
        } else if(oneIdx !== undefined){
            return oneIdx
        } else {
            return twoIdx
        }
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

    const alterRepatsWithChange = () => {
        repeats[0] = repeats[0].slice(3)
        if (repeats[0].length < 3){
            repeats.splice(0, 1)
        } 
    }

    let changes = 0;
    let length = password.length

    while (missingCount > 0 && repeats.length > 0 && length < 6) {
        missingCount--
        alterRepatsWithChange()
        length++
        changes++
        console.log("flag 1")
    }

    while (missingCount > 0 && repeats.length > 0) {
        missingCount--
        alterRepatsWithChange()
        changes++
        console.log("flag 1")
    }

    while (repeats.length > 0 && length < 6) {
        alterRepatsWithChange()
        length++
        changes++
        console.log("flag 3")
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

    const alterPriorityRepeat = () =>{
        const idx = getPriorityRepeatIdx()
        repeats[idx] = repeats[idx].slice(1)
        if (repeats[idx].length < 3) {
            repeats.splice(idx, 1)
        }
    }

    while (length > 20 && repeats.length > 0) {
        alterPriorityRepeat()
        length--;
        changes++
        console.log("flag 12")
    }


    while (length > 20) {
        length--;
        changes++
        console.log("flag 9")
    }

    repeats.forEach(str => {
        changes += Math.floor(str.length / 3)
    })

    return changes

};