class Solution(object):
    def threeSumClosest(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        closest_sum = float("inf")

        for i in range (len(nums)):
            for j in range (i + 1, len(nums)):
                for k in range (j + 1, len(nums)):
                    sum = nums[i] + nums[j] + nums[k]
                    if abs(target - sum ) < abs(closest_sum - target):
                        closest_sum = sum

        return closest_sum