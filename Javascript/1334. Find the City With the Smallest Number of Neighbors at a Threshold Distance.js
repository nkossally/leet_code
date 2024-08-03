/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {

    const distances = {}
    const edgeToCityCount = {}
    let seen = {}


    const hasValue = (a, b) => {
        if (distances[a] && distances[a][b] !== undefined) return true
        return false
    }
    const addDistance = (a, b, distance) => {
        if (a === b) {
            if (!distances[a]) distances[a] = {}
            distances[a][a] = 0
            return

        }
        if (!edgeToCityCount[a]) edgeToCityCount[a] = 0
        if (!distances[a]) {
            distances[a] = { [b]: distance }
            if (distance <= distanceThreshold) edgeToCityCount[a]++
        } else if (distances[a][b] === undefined) {
            distances[a][b] = distance
            if (distance <= distanceThreshold) edgeToCityCount[a]++
        } else {
            const oldDistance = distances[a][b]
            distances[a][b] = Math.min(distances[a][b], distance)
            if (oldDistance > distanceThreshold && distance <= distanceThreshold) {
                edgeToCityCount[a]++
            }
        }

    }

    const doDis = new Set()

    const addAdditionalEdges = (start, end, dist, seenPoints, count) => {
        if (hasValue(start, end) && distances[start][end] < dist) return
        if (dist > distanceThreshold) return
        if(count > 2) return

        let pointsAndDists = distances[end]

        const originialSize = pointsAndDists ? pointsAndDists.size : 0

        if (pointsAndDists) {
            Object.keys(pointsAndDists).forEach(point => {
                const pointStr = point.toString()
                const delta = pointsAndDists[point]
                if (!seenPoints.has(point)) {

                    const copy = new Set(Array.from(seenPoints))
                    copy.add(point)
                    addDistance(start, point, dist + delta)
                    addDistance(point, start, dist + delta)
                    addAdditionalEdges(start, point, dist + delta, copy, count + 1)
                }
            })
        }
    }

    edges.forEach(edge => {
        addDistance(edge[0], edge[0], 0)
        addDistance(edge[1], edge[1], 0)
        if (edge[2] <= distanceThreshold) {
            addDistance(edge[0], edge[1], edge[2])
            addDistance(edge[1], edge[0], edge[2])

            doDis.add(edge[1].toString())
            doDis.add(edge[0].toString())
        }
    })

    doDis.forEach(point => {
        addAdditionalEdges(point, point, 0, new Set([point]), 0)
    })

    let lonelyCity
    let minNeighbors = 1 / 0

    for (let i = 0; i < n; i++) {
        if (!edgeToCityCount[i]) edgeToCityCount[i] = 0
        if (edgeToCityCount[i] <= minNeighbors) {
            lonelyCity = i
            minNeighbors = edgeToCityCount[i]
        }
    }

    return lonelyCity
};