/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
    const visited = new Set()
    const result = [[rStart, cStart]]
    visited.add(JSON.stringify([rStart, cStart]))
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let dirIdx = 0
    let = x = rStart
    let y = cStart


    const isOnBoard = (i, j) => {
        return i >= 0 && i < rows && j >= 0 && j < cols
    }

    const getAlreadyVisited = (x, y) => {
        return visited.has(JSON.stringify([x, y]))
    }

    const onePartInGutter = (x, y) => {
        if ((x === -1 || x === rows) && (y >= 0 && y < cols)) return true
        if ((y === -1 || y === cols) && (x >= 0 && x < rows)) return true
        return false
    }

    const twoPartInGutter = (x, y) => {
        return (x < 0 || x >= rows) && (y < 0 || y >= cols)
    }

    const travelAroundGutter = () => {
        let dir = dirs[dirIdx]
        let nextDir = dirs[(dirIdx + 1) % 4]
        while (getAlreadyVisited(x + nextDir[0], y + nextDir[1]) && onePartInGutter(x, y)) {
            x += dir[0]
            y += dir[1]
            if (twoPartInGutter(x, y)) {
                x += nextDir[0]
                y += nextDir[1]
                dirIdx = (dirIdx + 1) % 4
                dir = dirs[dirIdx]
                nextDir = dirs[(dirIdx + 1) % 4]

            }
        }
        x += nextDir[0]
        y += nextDir[1]
        dirIdx = (dirIdx + 1) % 4
        result.push([x, y])
        visited.add(JSON.stringify([x, y]))
    }

    while (result.length < rows * cols) {
        let dir = dirs[dirIdx];
        const prevDirIdx = (dirIdx + 3) % 4;
        const prevDir = dirs[prevDirIdx]
        if (isOnBoard(x + dir[0], y + dir[1]) && !getAlreadyVisited(x + dir[0], y + dir[1])) {
            x += dir[0];
            y += dir[1]
            result.push([x, y])
            visited.add(JSON.stringify([x, y]))
            dirIdx = (dirIdx + 1) % 4
        } else if (onePartInGutter(x + dir[0], y + dir[1])) {
            x += dir[0]
            y += dir[1]
            dirIdx = (dirIdx + 1) % 4
            travelAroundGutter()
        } else if (isOnBoard(x + prevDir[0], y + prevDir[1]) && !getAlreadyVisited(x + prevDir[0], y + prevDir[1])) {
            x += prevDir[0]
            y += prevDir[1]
            result.push([x, y])
            visited.add(JSON.stringify([x, y]))
        } else if (onePartInGutter(x + prevDir[0], y + prevDir[1])) {
            x += prevDir[0]
            y += prevDir[1]
            // dirIdx = (dirIdx + 1) % 4
            travelAroundGutter()
        }
    }

    return result
};

