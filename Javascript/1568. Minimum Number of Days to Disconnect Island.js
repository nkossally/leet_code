/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function (grid) {
    // Use insight that takes at most two changes to disconnect islands
    const dirs = [[0, 1], [0, - 1], [1, 0], [-1, 0]]
    const isOnBoard = (x, y) => x >= 0 && x < grid.length && y >= 0 && y < grid[0].length

    const getIslandCount = () => {
        const connections = []
        const seenAlready = new Set()

        const helper = (m, n) => {
            const str = JSON.stringify([m, n])
            if (seenAlready.has(str)) return
            seenAlready.add(str)
            connections[connections.length - 1].push([m, n])
            dirs.forEach(dir => {
                const o = m + dir[0]
                const p = n + dir[1]
                if (isOnBoard(o, p) && grid[o][p] === 1) {
                    helper(o, p)
                }
            })

        }

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                const str = JSON.stringify([i, j])
                if (grid[i][j] === 1 && !seenAlready.has(str)) {
                    if (connections.length === 0) {
                        connections.push([])
                        helper(i, j)
                    } else {
                        return 2
                    }
                }
            }
        }
        return connections.length
    }

    let islandCount = getIslandCount(grid)
    if (islandCount !== 1) return 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                grid[i][j] = 0
                islandCount = getIslandCount()
                if (islandCount !== 1) return 1
                grid[i][j] = 1
            }
        }
    }

    return 2
};