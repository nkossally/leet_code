const insertionSort = arr =>{
    const newArr = Array.from(arr)
    const swap = (i, j) =>{
        console.log(i, j, newArr[i], newArr[j])
        const temp = newArr[i]
        newArr[i] = newArr[j]
        newArr[j] = temp
        console.log("after", newArr)

    }

    let i = 1;
    while(i < newArr.length){
        let swapIdx = i;
        while(swapIdx > 0 && newArr[swapIdx] < newArr[swapIdx - 1]){
            swap(swapIdx, swapIdx - 1)
            swapIdx--;
        }
    
        i++
    }

    console.log(newArr)
}

insertionSort([3, -4, 4, -5, 6, 7, 6, -4, 2])
insertionSort([0, 1, 2, 3, 4])