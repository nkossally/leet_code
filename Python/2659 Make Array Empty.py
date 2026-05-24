from typing import List

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
        
    def countOperationsToEmptyArrayFast(self, nums: List[int]) -> int:


        pos = {a: i for i, a in enumerate(nums)}
        res = n = len(nums)
        nums.sort()
        for i in range(1, n):
            if pos[nums[i]] < pos[nums[i - 1]]:
                res += n - i
        return res
        