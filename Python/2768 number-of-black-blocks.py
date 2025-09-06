class Solution:
    def countBlackBlocks(self, m: int, n: int, coordinates: List[List[int]]) -> List[int]:
        arr = [0, 0, 0, 0, 0]
        counts = defaultdict(int)

        for x, y in coordinates:
            for i in range(max(0, x - 1),  min(x + 1, m - 1)):
                for j in range(max(0, y - 1), min(y + 1, n - 1)):
                    coord = str([i, j])
                    counts[coord] += 1
        
        counter = Counter(counts.values())
        zeros = (m - 1) * (n - 1) - len(counts.keys())
        res = [zeros, counter[1], counter[2], counter[3], counter[4]]
        return res

        