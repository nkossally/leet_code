class Solution:
    def findValueOfPartitionMisunderstoodButBetter(self, nums: List[int]) -> int:
        left_max = [nums[0]]
        right_max = [nums[-1]]
        curr_max = nums[0]
        for i in range(1, len(nums)):
            curr_max = max(curr_max, nums[i])
            left_max.append(curr_max)
        curr_max = nums[-1]
        for i in range(len(nums) - 2, -1, -1 ):
            curr_max = max(curr_max, nums[i])
            right_max.insert(0, curr_max)

        left_min = [nums[0]]
        right_min = [nums[-1]]
        curr_min = nums[0]
        for i in range(1, len(nums)):
            curr_min = min(curr_min, nums[i])
            left_min.append(curr_min)
        curr_min = nums[-1]
        for i in range(len(nums) - 2, -1, -1 ):
            curr_min = min(curr_min, nums[i])
            right_min.insert(0, curr_min)

        res = float("inf")
        for i in range(0, len(nums) - 1):
            res = min(res, abs(left_max[i] - right_min[i + 1]))
            res = min(res, abs(left_min[i] - right_max[i + 1]))

        return res