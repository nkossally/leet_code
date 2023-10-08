const insertionSort = arr =>{
    const swap = (i, j) =>{
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    let i = 1;
    while(i < arr.length){
        let swapIdx = i;
        while(swapIdx > 0 && arr[swapIdx] < arr[swapIdx - 1]){
            swap(swapIdx, swapIdx - 1)
            swapIdx--;
        }
    
        i++
    }

    console.log(arr)
}

insertionSort([3, -4, 4, -5, 6, 7, 6, -4, 2])
insertionSort([0, 1, 2, 3, 4])