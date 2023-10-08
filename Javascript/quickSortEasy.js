const quickSort = (arr) => {
    if(arr.length <= 1) return arr;
    const pivot = arr[0];

    const left = [];
    const right = [];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    const result = [...quickSort(left), pivot, ...quickSort(right)]
    console.log(result);
    return result;
}

quickSort([55, 12, 4, -4, 5, 8, 4, 11])