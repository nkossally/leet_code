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
