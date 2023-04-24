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
 * Complete the 'lilysHomework' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function lilysHomework(arr) {
    // const arrCopy = [...arr];
    let numSwaps = 0;
    // arrCopy.sort((a, b) => a - b)
    
    const swap = (i, j) =>{
        const temp = arr[i]
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    const getSum = () =>{
        let i = 1;
        let sum = 0;
        while(i < arr.length){
            sum += Math.abs(arr[i] - arr[i - 1]);
            i++
        }
        return sum;
    }
    
    const getNextSwap = () =>{
        let x;
        let y;
        let minSum = getSum(arr);
        let oldSum = minSum;
        for(let i = 0; i < arr.length; i++){
            for(let j = i + 1; j < arr.length; j++){
                swap(i, j);
                const sum = getSum(arr);
                if(sum < minSum){
                    minSum = sum;
                    x = i;
                    y = j;
                }
                swap(i, j)
            }
        }
        if(minSum < oldSum){
            swap(x, y);
            numSwaps++;
            return true;
        }
        return false;
    }
    
    let continueSwapping = true;
    
    while(continueSwapping){
        continueSwapping = getNextSwap();
    }

    console.log(arr)

    return numSwaps;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = lilysHomework(arr);

    ws.write(result + '\n');

    ws.end();
}
