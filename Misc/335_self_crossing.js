/**
 * @param {number[]} distance
 * @return {boolean}
 */
var isSelfCrossing = function (distance) {
    const dirs = [[0, 1], [-1, 0], [0, -1], [1, 0]]

    let dirPos = 0
    let xPos = 0;
    let yPos = 0
    let hasOverlap = false;
    const lines = []

    const isBetween = (x, a, b) => {
        return (x >= a && x <= b) || (x <= a && x >= b)
    }

    const shareVertex = (line1, line2) =>{
        if(line1[0] === line2[0] && line1[1] === line2[1]) return true
        if(line1[0] === line2[2] && line1[1] === line2[3]) return true
        if(line1[2] === line2[0] && line1[3] === line2[1]) return true
        if(line1[2] === line2[2] && line1[3] === line2[3]) return true
        return false
    }

    const linesIntersect = (line1, line2) => {
        if ((isBetween(line1[1], line2[1], line2[3]) && isBetween(line2[0], line1[0], line1[2])) || shareVertex(line1, line2)) {
            return true
        }
        return false
    }

    for (let i = 0; i < distance.length; i++) {
        if (hasOverlap) break
        const dist = distance[i]
        const dir = dirs[dirPos]
        const line1 = [xPos, yPos, xPos + dist * dir[0], yPos + dist * dir[1]]
        for (let j = 0; j < lines.length - 1; j++) {
            const line2 = lines[j]
            if (linesIntersect(line1, line2)) {
                hasOverlap = true;
                break
            }
        }
        lines.push(line1)
        xPos = xPos + dist * dir[0]
        yPos = yPos + dist * dir[1]
        dirPos = (dirPos + 1) % 4
    }

    return hasOverlap
};