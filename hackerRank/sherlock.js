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
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isValid(s) {
    const counts = {};
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split("");
    letters.forEach(letter =>{
        counts[letter] = 0;
    })
    s.split("").forEach(letter =>{
        counts[letter]++;
    })
    console.log(counts)
    let num1;
    let num2;
    let repeatingNum = undefined;
    let valid = true;
    for(let i = 0; i < letters.length; i++){
        const val = counts[letters[i]];
        if(val !== 0){
            if(num1 === undefined){
                num1 = val;
            } else if(num2 === undefined){
                if(val !== num1){
                     num2 = val;
                    console.log("setter num2 to", num2)
                }
            } else if(repeatingNum === undefined){
                console.log("repeating undefined", num1, num2, val)
                if(val === num1){
                    repeatingNum = val;
                    num1 = num2;
                    console.log("set num1 to", num1)   
                } else if(val === num2) {
                    repeatingNum = val;
                } else {
                    valid = false
                }
            } else if(val !== repeatingNum){
                valid = false
            }
        }
        console.log("repeatingnum", repeatingNum)

    }
    console.log(num1, num2, repeatingNum)
    if(num1 && num2 && !(Math.abs(num1 - num2) === 1 || num1 === 1)) valid = false;
    
    if(valid){
        return "YES"
    } else {
        return "NO"
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = isValid(s);

    ws.write(result + '\n');

    ws.end();
}
