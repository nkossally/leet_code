const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);

  const arr1 = mergeSort(arr.slice(0, mid));
  const arr2 = mergeSort(arr.slice(mid));

  return combineArrs(arr1, arr2)
};

const combineArrs = (arr1, arr2) =>{
    const combinedArr = []

    let idx1 = 0
    let idx2 = 0

    while(idx1 < arr1.length && idx2 < arr2.length){
        const val1 = arr1[idx1]
        const val2 = arr2[idx2]
        if(val1 < val2){
            combinedArr.push(val1)
            idx1++
        } else {
            combinedArr.push(val2)
            idx2++
        }
    }

    return combinedArr.concat(arr1.slice(idx1)).concat(arr2.slice(idx2))

}

console.log(mergeSort([4, 0, -7, 11, 5, 4, 3, -109, 7 ]))