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
 * Complete the 'activityNotifications' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY expenditure
 *  2. INTEGER d
 */

function activityNotifications(expenditure, d) {
    let notifications = 0;
    let data = []
    let lowest;
    const addToArr = (num) => {
        let i = -1;
        while(i + 1 < data.length && data[i + 1] < num){
            i++;
        }
        data.splice( i + 1, 0, num);
    }
    const getMedian = arr =>{
        if(arr.length % 2 === 0){
            const val1 = arr[Math.floor((arr.length - 1)/2)]
            const val2 = arr[Math.ceil((arr.length - 1)/2)]
            return (val1 + val2) / 2;
        } else {
            return arr[(arr.length - 1)/2];
        }
    }
    for(let i = 0; i < d; i++){
        addToArr(expenditure[i])
    }
    
    for(let i = d; i < expenditure.length; i++){
        const median = getMedian(data);
        if(2 * median <= expenditure[i]){
            notifications++;
        }
        const oldValue = expenditure[i - d];
        const idx = data.indexOf(oldValue);
        data.splice(idx, 1)
        addToArr(expenditure[i])
    }
    return notifications;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const d = parseInt(firstMultipleInput[1], 10);

    const expenditure = readLine().replace(/\s+$/g, '').split(' ').map(expenditureTemp => parseInt(expenditureTemp, 10));

    const result = activityNotifications(expenditure, d);

    ws.write(result + '\n');

    ws.end();
}
