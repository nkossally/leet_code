class Solution:
    def minimumTime(self, grid: List[List[int]]) -> int:
        if grid[0][1] > 1 and grid[1][0] > 1: return -1
        m, n = len(grid), len(grid[0])
        visited = set()
        pq = [(grid[0][0], 0, 0)]
        
        while pq:
            time, row, col = heappop(pq)
            if row == m-1 and col == n-1: return time
            if (row, col) in visited: continue
            visited.add((row, col))
            for dr, dc in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
                r, c = row + dr, col + dc
                if 0 <= r < m and 0 <= c < n and (r, c) not in visited:
                    wait = 1 if ((grid[r][c] - time) % 2 == 0) else 0
                    heappush(pq, (max(time + 1, grid[r][c] + wait), r, c))
            
    def minimumTimeSlow(self, grid: List[List[int]]) -> int:
        if grid[0][1] > 1 and grid[1][0] > 1:
            return -1
        
        time = 0
        queue = []
        heapq.heappush(queue, [grid[1][0], 1, 0])
        heapq.heappush(queue, [grid[0][1], 0, 1])

        dirs = [[0, 1], [1, 0]]

        def is_on_board(x, y):
            return x < len(grid) and y < len(grid[0])
        
        while queue:
            new_queue = []
            while queue:
                priority, x, y = heapq.heappop(queue)
                available = time + 1
                if time + 1 < priority:
                    diff = priority - time - 1
                    if diff % 2 == 1:
                        available = priority + 1 
                    else:
                        available = priority             
                if x == len(grid) - 1 and y == len(grid[0]) -1:
                    return available
                
                for dir in dirs:
                    x_2 = x + dir[0]
                    y_2 = y + dir[1]
                    if is_on_board(x_2, y_2):
                        heapq.heappush(new_queue, [grid[x_2][y_2], x_2, y_2])
            time += 1
            queue = new_queue


    def minimumTimeBetter(self, grid: List[List[int]]) -> int:
        if grid[0][1] > 1 and grid[1][0] > 1:
            return -1
        
        queue = [[0, 0, 0]]
        dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]]
        visited = set()
        
        def is_on_board(x, y):
            return x >= 0 and x < len(grid) and y >= 0 and y < len(grid[0])
        
        while queue:
            time, x, y = heapq.heappop(queue)
            if (x, y) in visited:
                continue
            visited.add((x, y))
           
            if x == len(grid) - 1 and y == len(grid[0]) -1:
                return time
            
            for dir in dirs:
                x_2 = x + dir[0]
                y_2 = y + dir[1]
                if is_on_board(x_2, y_2) and (x_2, y_2) not in visited:
                    new_time = time + 1
                    if new_time < grid[x_2][y_2]:
                        diff = grid[x_2][y_2] - new_time
                        if diff % 2 == 1:
                            new_time =  grid[x_2][y_2] + 1
                        else:
                            new_time = grid[x_2][y_2]
