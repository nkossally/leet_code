/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    const belowTenNumToString = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    }
    const betweenTenAndTwenty = {
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    }

    tensNumToString = {

    }
    const handleBelowThousand = (str) =>{
        let trimmedStr = str;
        while(trimmedStr[0] === "0"){
            trimmedStr = trimmedStr.slice(1);
        }
        

    }

    const numStr = num.toString();
    const arr = []
    let result = "";

    for(let i = numStr.length - 1; i >= 0; i -= 3){
        const subStr = numStr.slice(i - 2, i + 1);
        arr.push(subStr)
    }
    for(let i = 0; i < arr.length; i++){
        const str = arr[i]
        let convert = handleBelowThousand(str);
        if(i === 1){
            convert += " thousand"
        } else if(i === 2){
            convert += " million"
        } else if(i === 3){
            convert += " billion"
        }
        result = convert + " " + result;
    }

    
};