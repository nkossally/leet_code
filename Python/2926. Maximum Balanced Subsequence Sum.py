import numpy as np

class Solution:
    def maxBalancedSubsequenceSum(self, nums: List[int]) -> int:
        tuples = [[num - i, i] for i, num in enumerate(nums)]
        tuples.sort(key=lambda x: x[0])
        dp = []

        max_sum = float("-inf")
        for i,elem in enumerate(tuples):
            diff, idx = elem

            k = i - 1
            prev_sum = 0
            for j in range(i):
                diff_2, idx_2 = tuples[j]
                if idx_2 < idx:
                    prev_sum = max(prev_sum, dp[j])

            new_sum = prev_sum + nums[idx]
            max_sum = max(max_sum, new_sum)
            dp.append(new_sum)
        return max_sum

