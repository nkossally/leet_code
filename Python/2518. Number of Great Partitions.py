from typing import List

class Solution:
    def countPartitions(self, nums: List[int], k: int) -> int:
        total = sum(nums)
        mem = [{} for i in range(len(nums))]
        max_count = total - k

        def mod(num):
            return num % (10 ** 9 + 7)

        def recur(idx, sum_1, sum_2):
            if sum_1 > max_count or sum_2 > max_count:
                return 0

            if idx >= len(nums):
                return 1
            num = nums[idx]
            val_1 = mem[idx][sum_1 + num] if sum_1 + \
                num in mem[idx] else mod(recur(idx + 1, sum_1 + nums[idx], sum_2))
            val_2 = mem[idx][sum_2 + num] if sum_2 + \
                num in mem[idx] else mod(recur(idx + 1, sum_1, sum_2 + num))
            mem[idx][sum_1 + num] = mod(val_1)
            mem[idx][sum_2 + num] = mod(val_2)
            return mod(mod(val_1) + mod(val_2))
        return recur(0, 0, 0)

    def countPartitionsFast(self, nums: List[int], k: int) -> int:
        n = len(nums)
        dp = [[0] * (k + 1)] + [[-1] * (k + 1) for _ in range(n)]
        dp[0][0] = 1

        def subsetSumCounts(s, idx):
            if s < 0:
                return 0
            if dp[idx][s] < 0:
                dp[idx][s] = subsetSumCounts(
                    s, idx - 1) + subsetSumCounts(s - nums[idx - 1], idx - 1)
            return dp[idx][s]

        invalid_pairs = sum([subsetSumCounts(i, n) for i in range(k)]) * 2
        return max(2**n - invalid_pairs, 0) % (10**9 + 7)
    
    def countPartitionsFast2(self, A: List[int], k: int) -> int:
        if sum(A) < k * 2: return 0
        mod = 10**9 + 7
        dp = [1] + [0] * (k - 1)
        for a in A:
            for i in range(k - 1 - a, -1, -1):
                dp[i + a] += dp[i]
        return (pow(2, len(A), mod) - sum(dp) * 2) % mod
