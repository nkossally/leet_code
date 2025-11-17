class Solution:
    def isPossibleToCutPath(self, grid: List[List[int]]) -> bool:
        m, n = len(grid), len(grid[0])

        #  number of paths from (0, 0) to (i, j)
        dp1 = [[0] * (n+1) for _ in range(m + 1)]
        dp1[1][1] = 1
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if grid[i-1][j-1]:
                    dp1[i][j] += dp1[i-1][j] + dp1[i][j-1]
        
        #  number of paths from (i, j) to (m-1, n-1)      
        dp2 = [[0] * (n+1) for _ in range(m + 1)]
        dp2[-2][-2] = 1
        for i in range(m - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                if grid[i][j]:
                    dp2[i][j] += dp2[i+1][j] + dp2[i][j+1]
        
        # number of paths from (0, 0) to (m-1, n-1)     
        target = dp1[-1][-1]

        for i in range(m):
            for j in range(n):
                if (i!=0 or j!=0) and (i!=m-1 or j!=n-1):
                    if dp1[i+1][j+1] * dp2[i][j] == target: 
                        return True
        return False
