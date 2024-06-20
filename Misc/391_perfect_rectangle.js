/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCoverBetter = function (rectangles) {

    let hasOverlap = false
    let minX = 1 / 0
    let maxX = -1 / 0
    let minY = 1 / 0
    let maxY = -1 / 0

    let area = 0
    const coordinates = new Set()

    // Each point should be shared by even amount of rectangles, except the cornes
    for (let i = 0; i < rectangles.length; i++) {
        const rec = rectangles[i]
        minX = Math.min(minX, rec[0])
        maxX = Math.max(maxX, rec[2])
        minY = Math.min(minY, rec[1])
        maxY = Math.max(maxY, rec[3])

        const point1 = JSON.stringify([rec[0], rec[1]])
        const point2 = JSON.stringify([rec[0], rec[3]])
        const point3 = JSON.stringify([rec[2], rec[3]])
        const point4 = JSON.stringify([rec[2], rec[1]])

        if (coordinates.has(point1)) {
            coordinates.delete(point1)
        } else {
            coordinates.add(point1)
        }
        if (coordinates.has(point2)) {
            coordinates.delete(point2)
        } else {
            coordinates.add(point2)
        }
        if (coordinates.has(point3)) {
            coordinates.delete(point3)
        } else {
            coordinates.add(point3)
        }
        if (coordinates.has(point4)) {
            coordinates.delete(point4)
        } else {
            coordinates.add(point4)
        }
        area += (rec[3] - rec[1]) * (rec[2] - rec[0])
    }

    const targetedArea = (maxX - minX) * (maxY - minY)

    if(area !== targetedArea) return false

    if(!(coordinates.size === 4 && coordinates.has(JSON.stringify([minX, minY]))  && coordinates.has(JSON.stringify([minX, maxY]))  && coordinates.has(JSON.stringify([maxX, minY]))  && coordinates.has(JSON.stringify([maxX, maxY])))) return false

    return true
};



/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function (rectangles) {

    let hasOverlap = false
    let minX = 1 / 0
    let maxX = -1 / 0
    let minY = 1 / 0
    let maxY = -1 / 0

    for (let i = 0; i < rectangles.length; i++) {
        const rec = rectangles[i]
        minX = Math.min(minX, rec[0])
        maxX = Math.max(maxX, rec[2])
        minY = Math.min(minY, rec[1])
        maxY = Math.max(maxY, rec[3])
    }

    const area = (maxX - minX) * (maxY - minY)

    const recsOverlap = (rec1, rec2) => {
        return ((rec1[0] >= rec2[0] && rec1[0] < rec2[2]) || (rec2[0] >= rec1[0] && rec2[0] < rec1[2])) &&
            ((rec1[1] >= rec2[1] && rec1[1] < rec2[3]) || (rec2[1] >= rec1[1] && rec2[1] < rec1[3]))
    }

    let areaSum = 0

    for (let i = 0; i < rectangles.length; i++) {
        const rec1 = rectangles[i]
        areaSum += (rec1[3] - rec1[1]) * (rec1[2] - rec1[0])
    }

    if (areaSum === area) {
        for (let i = 0; i < rectangles.length; i++) {
            if (hasOverlap) break
            const rec1 = rectangles[i]
            for (let j = i + 1; j < rectangles.length; j++) {
                const rec2 = rectangles[j]
                if (recsOverlap(rec1, rec2)) {
                    hasOverlap = true;
                    break
                }
            }
        }
    }

    return areaSum === area && !hasOverlap;
};