class Solution:
    def minimumMoves(self, grid: List[List[int]]) -> int:
        empty_positions = []

        for x in range(3):
            for y in range(3):
                if not grid[x][y]:
                    empty_positions.append([x, y])
        
        def get_closest(x, y, grid):
            min_dist = float("inf")
            res = None

            for m in range(3):
                for n in range(3):
                    if grid[m][n] > 1:
                        dist = abs(x - m) + abs(y - n)
                        if dist < min_dist:
                            res = [m, n]
                            min_dist = dist

            return res
        
        def get_min_count(empty_positions, total, grid):
            if len(empty_positions) == 0:
                return total

            best_total = float("inf")
            for i, pos in enumerate(empty_positions):
                x, y = pos
                m, n = get_closest(x, y, grid)
                dist = abs(x - m) + abs(y - n)
                grid_cpy = copy.deepcopy(grid)
                empty_positions_cpy = copy.deepcopy(empty_positions)
                empty_positions_cpy.pop(i)
                grid_cpy[x][y] = 1
                grid_cpy[m][n] -= 1
                best_total = min(best_total, get_min_count(empty_positions_cpy, total + dist, grid_cpy))
            return best_total

        return get_min_count(empty_positions, 0, grid)

        