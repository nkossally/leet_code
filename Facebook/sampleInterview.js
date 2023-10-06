const makeSpiral = (num) =>{
    const matrix = []
    for(let i = 0; i < num; i++){
        matrix.push([])
    }
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let dirIdx = 0;
    let dir = [0, 1]

    let x = 0;
    let y = -1;

    const isValid = (a, b) =>{
        return a >= 0 && a < num && b>=0 && b < num;
    }
    let currNum = 1;
    let stringLength = Math.pow(num, 2).toString().length;
    const numToString = number =>{
        let str = number.toString()
        while(str.length < stringLength){
            str = "0" + str
        }
        return str
    }
    while(currNum <= Math.pow(num, 2)){
        x += dir[0]
        y += dir[1]
        console.log("tryk", x, y, typeof x)
        if(!isValid(x, y) || matrix[x][y]){
            x -= dir[0]
            y -= dir[1]
            dirIdx = (dirIdx + 1) % 4;
            dir = dirs[dirIdx]
            x += dir[0]
            y += dir[1]
        }
        console.log(x, y)
        matrix[x][y] = numToString(currNum);
        console.log(matrix)

        currNum++
    }

    console.log(matrix)
    return matrix
}

makeSpiral(4)
makeSpiral(7)

const lookAndSay = startRow =>{
    const result = [startRow]
    let max = 1;
    while(result.length < 7){
        const lastRow = result[result.length - 1];
        const newRow = []
        let curr = lastRow[0];
        let i = 0
        let count = 1;
        while(i < lastRow.length){
            while(i < lastRow.length - 1 && lastRow[i + 1] === curr){
                count++;
                i++
            }
            newRow.push(count)
            newRow.push(curr)
            i++;
            curr = lastRow[i]
            count = 1;
        }
        result.push(newRow)
    }
    console.log(result)
    return result
}
lookAndSay([1])
lookAndSay([2])
lookAndSay([1,2,3])


const quickSort = arr =>{
    if(arr.length <= 1) return arr;

    let pivot = arr[0]
    let left = []
    let right = []
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    
    const result = [...quickSort(left), pivot, ...quickSort(right)];
    console.log(result)
    return result;
}
quickSort([2, -4, 4, 5, 11, 2, 5, 6])


const oneEditApart = (s1, s2) =>{
    if(Math.abs(s1.length - s2.length) > 1) return false;

    let changeOne = false

    if(s1.length === s2.length){
        for(let i = 0; i < s1.length; i++){
            const slice1 = s1.slice(0, i) + s1.slice(i + 1)
            const slice2 = s2.slice(0, i) + s2.slice(i + 1)

            if(slice1 === slice2){
                changeOne = true;
            }
        }
    }

    if(Math.abs(s1.length - s2.length) === 1){
        const larger = s1.length > s2.length ? s1 : s2;
        const smaller = larger === s1 ? s2 : s1;
        console.log("larger", larger, "smaller", smaller)
        for(let i = 0; i < larger.length; i++){
            if(smaller === larger.slice(0, i) + larger.slice(i + 1)){
                changeOne = true;
            }
        }
    }
    console.log(changeOne)
}

oneEditApart("abcd", "abce")
oneEditApart("abcd", "ab1cd")