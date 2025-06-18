# https://leetcode.com/contest/weekly-contest-454/problems/maximum-product-of-first-and-last-elements-of-a-subsequence/description/

class Solution(object):
    def maximumProduct(self, nums, m):
        """
        :type nums: List[int]
        :type m: int
        :rtype: int
        """
        result = float("-inf")

        mins = []
        maxes = []
        curr_min = float("inf")
        curr_max = float("-inf")
        for i in range(len(nums) - 1, -1, -1):
            curr_min = min(curr_min, nums[i])
            curr_max = max(curr_max, nums[i])
            mins.insert(0, curr_min)
            maxes.insert(0, curr_max)

        for i in range(0, len(nums) - m + 1):
            j = i + m - 1
            prod = nums[i] * maxes[j]
            result = max(result, prod)
          
            j = i + m - 1
            prod = nums[i] * mins[j]
            result = max(result, prod)
     
        return result