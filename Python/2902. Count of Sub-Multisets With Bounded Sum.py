from collections import Counter
class Solution:
    def countSubMultisets(self, nums: List[int], l: int, r: int) -> int:

        def get_mod(num):
            return num % (10**9 + 7)

        dp = [0] * (r + 1)
        dp[0] = 1
        counter = Counter(nums)
        unique_nums = counter.keys()
        for num in unique_nums:
            cpy = dp[:]
            for k in range(1, counter[num] + 1, 1):
                for i in range(k * num, r + 1, 1):
                    dp[i] += cpy[i - k * num]
                    dp[i] = get_mod(dp[i])

        return get_mod(sum(dp[l : r + 1]))
