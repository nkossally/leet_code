class Solution:
    def minAbsoluteDifference(self, nums: List[int], x: int) -> int:
        nums_and_indices = [[num, idx] for idx, num in enumerate(nums)]
        nums_and_indices.sort(key=lambda x : x[0])
        res = float("inf")
        for i, elem in enumerate(nums_and_indices):
            num, idx = elem
            j = i 
            while j < len(nums) and abs(nums_and_indices[j][1] - idx) < x:
                j += 1
            if j < len(nums):
                res = min(res, nums_and_indices[j][0] - num)
        return res