/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {

    const maxNum = Math.pow(board.length, 2)
    const posToStep = {}

    const numToCoords = num => {
        num = Math.min(maxNum, num)
        const row = Math.floor((maxNum - num) / board.length)
        let col = ((num % board.length) - 1 + board.length) % board.length
        if ((board.length - 1 - row) % 2 === 1) {
            col = board.length - 1 - col
        }
        return [row, col]
    }

    let count = 0;

    let queue = [1]

    const seen = new Set()

    while (queue.length > 0) {
        console.log(queue, count)
        let newQueue = new Set()
        for (let i = 0; i < queue.length; i++) {
            const pos = queue[i]
            seen.add(pos)

            if (pos + 6 >= maxNum) {
                return count + 1
            }

            for (let j = 1; j <= 6; j++) {
                const [row, col] = numToCoords(pos + j)
                const newPos = board[row][col] !== -1 ? board[row][col] : pos
                if(newPos === maxNum) return count + 1

                if (board[row][col] !== -1) {
                    if (!seen.has(newPos)) {
                        newQueue.add(newPos)
                    }
                }
            }

            let k = 6
            while (k > 0) {
                const [row, col] = numToCoords(pos + k)
                if (board[row][col] === -1 && !seen.has(pos + k)) {
                    newQueue.add(pos + k)
                    break
                }
                k--
            }

        }
        queue = Array.from(newQueue)

        count++
    }

    return -1
};

/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLaddersV2 = function (board) {

    let minSteps = 1 / 0
    const maxNum = Math.pow(board.length, 2)
    const posToStep = {}

    const numToCoords = num => {
        num = Math.min(maxNum, num)
        const row = Math.floor((maxNum - num) / board.length)
        let col = ((num  % board.length) - 1 + board.length) % board.length
        if ((board.length - 1 - row) % 2 === 1) {
            col = board.length - 1 - col
        }
        return [row, col]
    }

    const [row, col] = numToCoords(7)

    const getToEnd = (pos, steps, seen ) => {
        if(posToStep[pos] === undefined){
            posToStep[pos] = steps
        } else if(posToStep[pos] <= steps){
            return
        }
        if (steps > minSteps) return
        if (pos >= maxNum) {
            // if (steps < minSteps) console.log("setting to steps", steps)
            minSteps = Math.min(minSteps, steps)

            return
        }

        seen.add(pos)

        if (pos + 6 >= maxNum) {
            minSteps = Math.min(minSteps, steps + 1)
            return
        }

        let newPositions = new Set()

        for (let i = 1; i <= 6; i++) {
            const [row, col] = numToCoords(pos + i)
            const newPos = board[row][col] !== -1 ? board[row][col] : pos

            if (board[row][col] !== -1) {
                if (!seen.has(newPos)) {
                    newPositions.add(newPos)
                }
            }
        }

        const newPositionsArr = Array.from(newPositions)
        for(let i = 0; i < newPositionsArr.length; i++){
            const newPos = newPositionsArr[i]
            const dup = new Set(Array.from(seen))
            getToEnd(newPos, steps + 1, dup )
        }

        let i = 6
        while (i > 0) {
            const [row, col] = numToCoords(pos + i)
            if (board[row][col] === -1 && !seen.has(pos + i)) {
                const dup = new Set(Array.from(seen))
                getToEnd(pos + i, steps + 1, dup)
                break
            }
            i--
        }
        // getToEnd(pos + 6, steps + 1, new Set(Array.from(seen)),false, [...path, pos + 6])

    }
    getToEnd(1, 0, new Set())

    // console.log(minSteps)
    return minSteps !== 1 / 0 ? minSteps : -1
};