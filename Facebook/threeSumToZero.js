const sumToZero = arr =>{
    if(arr.length === 0) return "No";

    let result = "No";

    const valCount = {}
    for(let i = 0; i < arr.length; i++){
        const val = arr[i]
        if(!valCount[val]) valCount[val] = 0
        valCount[val]++
    }

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            const sum = arr[i] + arr[j];
            const other = -sum;
            const count = valCount[other]
            if(count){
                if(other === arr[i] && other === arr[j]){
                    if(count >= 3) result = "Yes"
                } else if (other === arr[i]){

                    if(count >= 2) result = "Yes"
                }else if (other === arr[j]){

                    if(count >= 2) result = "Yes"
                } else {
                    result = "Yes"
                }
            }
           
        }
    }
    console.log(result)
    return result;
}

// sumToZero([1, 2, 3, -2])
// sumToZero([-1, -2, 3, -3])

// sumToZero([0, 1, 2])
sumToZero([-2, 1, 3])