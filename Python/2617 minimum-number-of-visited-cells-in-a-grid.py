from sortedcontainers import SortedList

class Solution:
    def minimumVisitedCells(self, grid: List[List[int]]) -> int:
        if len(grid) == 1 and len(grid[0]) == 1:
            return 1
        def is_on_board(x, y):
            return x >= 0 and x < len(grid) and y >= 0 and y < len(grid[0])
        
        dp = defaultdict(dict)

        def recur(x, y):
            if y in dp[x]:
                return dp[x][y]
            if x == len(grid) - 1 and y == len(grid[0]) - 1:
                return 1
            min_count = float("inf")
            for k in range(1, grid[x][y] + 1):
                if is_on_board(x + k, y):
                    min_count = min(min_count, recur(x + k, y))
            for k in range(1, grid[x][y] + 1):
                if is_on_board(x , y + k):
                    min_count = min(min_count, recur(x, y + k))
            
            dp[x][y] = min_count + 1
            return  1 + min_count
        recur(0, 0)
        if dp[0] and dp[0][0] == float("inf"):
            return -1

        return dp[0][0]



    def minimumVisitedCellsFast(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        s0 = [SortedList(range(n)) for _ in range(m)]
        s1 = [SortedList(range(m)) for _ in range(n)]
        q = deque([(0, 0, 1)])

        while q:
            i, j, d = q.popleft()
            if (i, j) == (m-1, n-1):
                return d
            for k in list(s0[i].irange(j+1, min(j+1+grid[i][j], n) - 1)):
                q.append((i, k, d+1))
                s0[i].remove(k)
                s1[k].remove(i)
            for k in list(s1[j].irange(i+1, min(i+1+grid[i][j], m) - 1)):
                q.append((k, j, d+1))
                s1[j].remove(k)
                s0[k].remove(j)
        return -1
            
