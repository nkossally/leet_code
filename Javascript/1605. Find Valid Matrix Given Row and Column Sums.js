/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
    const result = []

    for(let i = 0; i < rowSum.length; i++  ){
        result.push([])
        for(let j = 0; j < colSum.length; j++){
            const min = Math.min(rowSum[i], colSum[j])
            result[i][j] = min
            rowSum[i] -= min
            colSum[j] -= min
        }
    }

    return result
};

/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrixV1 = function (rowSum, colSum) {
    const rows = rowSum.length
    const cols = colSum.length
    let result

    const deepCopy = arr => {
        const cpy = []
        arr.forEach(elemArr => {
            cpy.push([...elemArr])
        })
        return cpy
    }

    const getMatrix = (arr, count, rowSums, colSums) => {
        if (count === rows * cols) {
            result = arr
            return
        }
        if (result) return
        const row = Math.floor((count) / cols)
        const col = (count) % cols

        if (rowSums[row] === undefined) rowSums[row] = 0
        if (colSums[col] === undefined) colSums[col] = 0

        const maxRowVal = rowSum[row] - rowSums[row]
        const maxColVal = colSum[col] - colSums[col]
        if (maxRowVal < 0) return
        if (maxColVal < 0) return

        let maxVal = Math.min(maxRowVal, maxColVal)

        let minVal = 0;
        // if in the last row, then the column sum is determined
        if (row === rows - 1) {
            if (col === cols - 1) {
                if (maxRowVal !== maxColVal) {
                    return
                }
            }
            if (maxColVal > maxRowVal) return
            minVal = maxColVal
        }
        if (col === cols - 1) {
            if (maxRowVal > maxColVal) return
            minVal = maxRowVal
        }

        // console.log("minVal", minVal, "maxVal", maxVal)

        for (let i = minVal; i <= maxVal; i++) {
            const arrCpy = deepCopy(arr)
            if (col === 0) {
                arrCpy.push([])
            }
            arrCpy[arrCpy.length - 1].push(i)
            const newRowSums = [...rowSums]
            newRowSums[row] += i
            const newColSums = [...colSums]
            newColSums[col] += i
            getMatrix(arrCpy, count + 1, newRowSums, newColSums)
        }
    }

    getMatrix([], 0, [], [])

    return result

};