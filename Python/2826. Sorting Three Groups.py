class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        dp =[]

        res = 0
        for i in range(len(nums)):
            max_val = 0
            for j in range(i):
                if nums[j] <= nums[i]:
                    max_val = max(max_val, dp[j])
            res = max(max_val + 1, res)
            dp.append( max_val + 1)
        return len(nums) - res
