class Solution:
    def minimumDistance(self, points: List[List[int]]) -> int:
        arr = []
        max_elem = None
        for i in range(len(points) - 1):
            for j in range(i + 1, len(points)):
                dist = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1])
                arr.append([dist, i, j])
                if max_elem == None or dist > max_elem[0]:
                    max_elem = [dist, i, j]
        idx_1 = max_elem[1]
        idx_2 = max_elem[2]
        max_1 = float("-inf")
        max_2 = float("-inf")
        for elem in arr:
            if elem[1] != idx_1 and elem[2] != idx_1:
                max_1 = max(max_1, elem[0])
            if elem[1] != idx_2 and elem[2] != idx_2:
                max_2 = max(max_2, elem[0])
        return min(max_1, max_2)