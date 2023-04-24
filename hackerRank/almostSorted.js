'use strict';

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
 * Complete the 'almostSorted' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function almostSorted(arr) {
    const getIsIncreasing = array =>{
        let i = 0;
        let isIncreasing = true;
        while(i < array.length - 1){
            if(array[i] > array[i + 1]){
                isIncreasing = false;
                break
            }
            i++;
        }
        return isIncreasing;
    }
    const swap = (i, j) =>{
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        
    }
    
    let swapWorks;
    let reverseWorks;
    
    let firstProblem = -1;
    while(firstProblem + 2 < arr.length && arr[firstProblem + 1] < arr[firstProblem + 2]){
        firstProblem++;
    }
    firstProblem = Math.max(0, firstProblem)
    let lastProblem = arr.length;
    while(lastProblem - 2 >= 0 && arr[lastProblem - 2] < arr[lastProblem - 1]){
        lastProblem--;
    }
    lastProblem = Math.min(lastProblem, arr.length - 1)
    let idx1;
    let idx2;
    // console.log("first and last", firstProblem, lastProblem)
    
    const trySwap = () => {
        const max = Math.max(arr.length, firstProblem + 2)
        for(let i = firstProblem; i < max; i++){
            for(let j = 0; j < arr.length; j++){
                if(!swapWorks){
                    swap(i, j);
                    if(getIsIncreasing(arr)){
                        swapWorks = true;
                        idx1 = i;
                        idx2 = j
                        break
                    }
                    swap(i, j) 
                }

            }
        }
    }
    
    const tryReverse = () =>{
        const max = Math.max(arr.length, firstProblem + 2)
        for(let i = firstProblem; i < max; i++){
            for(let j = arr.length - 1; j > firstProblem; j--){
                const array = arr.slice(0, i).concat(
                    arr.slice(i, j + 1).reverse()
                ).concat(arr.slice(j + 1))
                if(getIsIncreasing(array)){
                    reverseWorks = true;
                    idx1 = i;
                    idx2 = j
                    break
                }
            }
        } 
    }
    
    trySwap();
    // console.log("swapWorks", swapWorks)
    if(!swapWorks) tryReverse();
    
    if(swapWorks){
        console.log("yes")
        console.log("swap " + (idx1 + 1).toString() + " " + (idx2 + 1).toString())
    } else if(reverseWorks){
        console.log("yes")
        console.log("reverse " + (idx1 + 1).toString() + " " + (idx2 + 1).toString())
    } else {
        console.log("no")
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    almostSorted(arr);
}
