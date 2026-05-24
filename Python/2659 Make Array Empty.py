class Solution:
    def countOperationsToEmptyArray(self, nums: List[int]) -> int:

        ordered = nums[:]
        ordered.sort()
        count = 0

        while nums:
            idx = nums.index(ordered[0])
            nums = nums[idx + 1:] + nums[:idx]
            count += idx + 1
            ordered.pop(0)
        return count
        