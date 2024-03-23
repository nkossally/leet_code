/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if(num === 0) return "Zero"
    const belowTenNumToString = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine"
    }
    const betweenTenAndTwenty = {
        11: "Eleven",
        12: "Twelve",
        13: "Thirteen",
        14: "Fourteen",
        15: "Fifteen",
        16: "Sixteen",
        17: "Seventeen",
        18: "Eighteen",
        19: "Nineteen"
    }

    tensNumToString = {
        1: "Ten",
        2: "Twenty",
        3: "Thirty",
        4: "Forty",
        5: "Fifty",
        6: "Sixty",
        7: "Seventy",
        8: "Eighty",
        9: "Ninety"
    }
    const handleBelowThousand = (str) =>{
        let trimmedStr = str;
        let res = ""
        while(trimmedStr[0] === "0"){
            trimmedStr = trimmedStr.slice(1);
        }
        if(trimmedStr.length === 3){
            res = belowTenNumToString[trimmedStr[0]] + " Hundred"
        }

        const twoDigitTail = trimmedStr.length > 1 && parseInt(trimmedStr.slice(trimmedStr.length - 2))

        if(trimmedStr.length > 1 && trimmedStr[trimmedStr.length - 2] !== "0"){
            if(twoDigitTail < 20 && twoDigitTail > 10){
                res += " " + betweenTenAndTwenty[twoDigitTail]
            } else {
                res += " " + tensNumToString[twoDigitTail.toString()[0]]
            }
        }
        if(trimmedStr.length > 0 && trimmedStr[trimmedStr.length - 1] !== "0"){
            if(!(twoDigitTail && twoDigitTail < 20 && twoDigitTail > 10)){
                res += " " + belowTenNumToString[trimmedStr[trimmedStr.length - 1]]
            }
        }
        return res;
    }

    const numStr = num.toString();
    const arr = []
    let result = "";

    for(let i = numStr.length - 1; i >= 0; i -= 3){
        const lowerBound = Math.max(0, i - 2)
        const subStr = numStr.slice(lowerBound, i + 1);
        arr.push(subStr)
    }

    for(let i = 0; i < arr.length; i++){
        const str = arr[i]
        let convert = handleBelowThousand(str);
        if(convert !== ""){
            if(i === 1){
                convert += " Thousand"
            } else if(i === 2){
                convert += " Million"
            } else if(i === 3){
                convert += " Billion"
            }
        }

        result =  convert + " " + result;
        result = result.trim()
    }
    result = result.trim()
    return result;
    
};