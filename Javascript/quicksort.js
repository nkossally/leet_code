const swap = (arr, i, j) =>{
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const quickSort = (arr, start, end) =>{
    if(start >= end) return;

    let pivot = partition(arr, start, end);

    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end)
    console.log(arr)
}

const partition = (arr, low, high) => {
    let i = low + 1;
    let count = 0;
    const pivot = arr[low]

    while(i <= high){
        if(arr[i] <= pivot){
            count++;
        }
        i++;
    }
    const pivotIdx = low + count;
    swap(arr, low, pivotIdx);
    i = low;
    let j = high;
    while(i < pivotIdx && j > pivotIdx){
        while(arr[i] <= pivot){
            i++;
        }
        while(arr[j] >= pivot){
            j--
        }
        if(i < pivotIdx && j > pivotIdx){
            swap(arr, i, j)
        }
        i++
        j--;

    }
    return pivotIdx;

}
const arr = [1, -1, 2, 7, 3, 33, -67, 76, 9]

quickSort(arr, 0, arr.length - 1)