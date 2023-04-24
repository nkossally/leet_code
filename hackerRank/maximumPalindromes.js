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
    console.log(word)
    const str = word.slice(l, r + 1);
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let counts = {};
    letters.split("").forEach(letter =>{
        counts[letter] = 0;
    })
    str.split("").forEach(letter => {
        counts[letter]++;
    })
    let doubles = 0;
    let singles = 0;
    letters.split("").forEach(letter =>{
        counts[letter] = 0;
    })
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
