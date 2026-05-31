from typing import List

class Solution:
    def maxScoreSlow(self, grid: List[List[int]]) -> int:

        res = float("-inf")

        for m in range(len(grid)):
            for i in range(len(grid[0])):
                    lower_bound = i + 1 if m != 0 and m != len(grid) - 1 else i + 2
                    for j in range(lower_bound, len(grid[0]) + 1):
                        curr_sum = sum(grid[m][i : j])
                        res = max(res, curr_sum)
        
        for n in range(len(grid[0])):
            for i in range(len(grid)):
                lower_bound = i + 1 if n != 0 and n != len(grid[0]) - 1 else i + 2

                for j in range(lower_bound, len(grid) + 1):
                    curr_sum = 0
                    for k in range(i, j):
                        curr_sum += grid[k][n]
                    res = max(res, curr_sum)
        return res


    def maxScore(self, grid: List[List[int]]) -> int:

        n = len(grid)
        m = len(grid[0])
        maxSum = -float('inf')

        for i in range(1, n - 1) :
            for j in range(1, m - 1) :
                maxSum = max(maxSum, grid[i][j])

        for i in range(n) :
            curSum = grid[i][0]
            for j in range(1, m) :
                curSum = max(curSum + grid[i][j], grid[i][j] + grid[i][j - 1])
                maxSum = max(maxSum, curSum)

        for j in range(m) :
            curSum = grid[0][j]
            for i in range(1, n) :
                curSum = max(curSum + grid[i][j], grid[i][j] + grid[i - 1][j])
                maxSum = max(maxSum, curSum)

        return maxSum  