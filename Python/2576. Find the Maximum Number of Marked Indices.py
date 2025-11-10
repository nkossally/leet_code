class Solution:
    def maxNumOfMarkedIndices(self, nums: List[int]) -> int:
        n, i, ans = len(nums), 0, 0
        nums.sort()
        for j in range(n - n // 2, n):
            if nums[i] * 2 <= nums[j]:
                i += 1 
                ans += 2
        return ans