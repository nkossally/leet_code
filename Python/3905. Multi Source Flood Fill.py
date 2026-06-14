import heapq

class Solution:
    def colorGrid(self, n: int, m: int, sources: list[list[int]]) -> list[list[int]]:
        def is_on_board(x, y):
            return x >= 0 and x< n and y >= 0 and y < m

        dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

        queue = sources
        grid = [[0 for _ in range(m)] for _ in range(n)]
        
        for x, y, c in sources:
            grid[x][y] = c

        while queue:
            round_additions = {}
            while queue:
                x, y, c = queue.pop()
                for dir in dirs:
                    x_2 = x + dir[0]
                    y_2 = y + dir[1]
                    if is_on_board(x_2, y_2):
                        pos_str = str([x_2, y_2])
                        if not grid[x_2][y_2]:
                            grid[x_2][y_2] = c
                            round_additions[pos_str] = [x_2, y_2, c]
                        elif pos_str in round_additions:
                            new_c =  max(grid[x_2][y_2], c)
                            grid[x_2][y_2] = new_c
                            round_additions[pos_str] = [x_2, y_2, new_c]
            queue = list(round_additions.values())

        return grid


    def colorGrid_2(self, n: int, m: int, sources: list[list[int]]) -> list[list[int]]:
        def is_on_board(x, y):
            return x >= 0 and x< n and y >= 0 and y < m

        dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

        queue = []
        grid = [[0 for _ in range(m)] for _ in range(n)]
        
        for x, y, c in sources:
            grid[x][y] = c
            heapq.heappush(queue, [-c, x, y])

        while queue:
            newqueue = []
            while queue:
                c, x, y = heapq.heappop(queue)
                c = -c
                for dir in dirs:
                    x_2 = x + dir[0]
                    y_2 = y + dir[1]
                    if is_on_board(x_2, y_2) and not grid[x_2][y_2]:
                        grid[x_2][y_2] = c
                        heapq.heappush(newqueue, [-c, x_2, y_2])
            queue = newqueue

        return grid


