const mergeSort = (arr: number[]) =>{
    if(arr.length <= 1) return arr;

    const mid: number = Math.floor(arr.length/2);

    const left: number[] = mergeSort(arr.slice(0, mid));
    const right: number[] = mergeSort(arr.slice(mid));

    return combine(left, right);
}

const combine = (a: number[], b: number[]): number[] =>{
    let idx1 = 0;
    let idx2 = 0;
    const arr: number[] = []

    while(idx1 < a.length && idx2 < b.length){
        const val1 = a[idx1];
        const val2 = b[idx2];
        if(val1 < val2){
            arr.push(val1);
            idx1++
        } else {
            arr.push(val2);
            idx2++;
        }
    }
    return arr.concat(a.slice(idx1)).concat(b.slice(idx2))
}

console.log(mergeSort([1, -1, 2, 7, 3, 33, -67, 76, 9]))