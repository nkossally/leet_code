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
let word;

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'initialize' function below.
 *
 * The function accepts STRING s as parameter.
 */

function initialize(s) {
    word = s;
    // This function is called once before all queries.

}

/*
 * Complete the 'answerQuery' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER l
 *  2. INTEGER r
 */

function answerQuery(l, r) {
    // Return the answer for this query modulo 1000000007.
    const str = word.slice(l - 1, r);
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let counts = {};
    let maxVal = 0;
    letters.split("").forEach(letter =>{
        counts[letter] = 0;
    })
    str.split("").forEach(letter => {
        counts[letter]++;
        if(counts[letter] > maxVal){
            maxVal = counts[letter]
        }
    })
    let numerator = 1;
    let denominator = 1;
    let singles = 0;
    let doubles = 0;
    const factorialStore = {0: 1};
    const max = 26 * maxVal/2
    let currFactorial = 1
    for(let i = 1; i < max; i++){
        currFactorial *= i;
        factorialStore[i] = currFactorial;
    }

    const factorial = n =>{
        if(factorialStore[n]) return factorialStore[n];
    }

    letters.split("").forEach(letter =>{
        const val = counts[letter];
        if(val % 2 === 1){
            doubles += (val - 1)/2;
            singles += 1;
            denominator *= factorialStore[(val - 1) / 2];
        } else {
            doubles += val/2;
            denominator *= factorialStore[val / 2];
        }
    })
    let result = factorialStore[doubles] / denominator;
    if(singles > 0 ){
        // can add a single single or add nothing to middle of palindrome
        result *= singles
    }
    console.log(counts)
    console.log(singles, doubles)
    // if(doubles === 0) result = singles;
    // console.log(result)
    return Math.floor(result % (Math.pow(10, 9) + 7));
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    initialize(s);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const l = parseInt(firstMultipleInput[0], 10);

        const r = parseInt(firstMultipleInput[1], 10);

        const result = answerQuery(l, r);

        ws.write(result + '\n');
    }

    ws.end();
}
