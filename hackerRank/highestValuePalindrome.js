'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'highestValuePalindrome' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER n
 *  3. INTEGER k
 */

function highestValuePalindrome(s, n, k) {
    const copy = []
    let i = 0;
    const mid = Math.floor(s.length/2);
    const length = s.length;
    let isPalindrome = true;;

    while( i < mid ){
        copy[i] = s[i];
        copy[length - 1 - i] = s[length - 1 - i]
        const replaceBoth = s[i] !== "9" && s[length - 1 - i] !== "9";
        const replaceNeither = s[i] === "9" && s[length - 1 - i] === "9";
        const replaceOne = !replaceNeither && (s[i] === "9" || s[length - 1 - i] === "9");
        const max = Math.max(s[i], s[length - 1 - i])
        if(replaceBoth && k > 1){
            copy[i] = "9";
            copy[length - 1 - i] = "9";
            k -= 2;
        } else if(replaceOne && k > 0){
            copy[i] = "9";
            copy[length - 1 - i] = "9";
            k--;
        } else if(k > 0 && s[i] !== s[length - 1 - i]){
            copy[i] = max;
            copy[length - 1 - i] = max;
            k--;
        }
        if(copy[i] !== copy[length - 1 - i]){
            isPalindrome = false;
        }
        i++  
    }
    
    if( length % 2 === 1){
        if(k > 0){
            copy[mid] = "9"
        } else {
           copy[mid] = s[mid] 
        }   
    }

 
    const newString = copy.join("");
    const result = isPalindrome ? newString : -1;
    // console.log(result, newString)
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const s = readLine();

    const result = highestValuePalindrome(s, n, k);

    ws.write(result + '\n');

    ws.end();
}
