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
        for i in range(len(nums) - 1, m - 2, -1):
            curr_min = min(curr_min, nums[i])
            curr_max = max(curr_max, nums[i])
            mins.insert(0, curr_min)
            maxes.insert(0, curr_max)
            
            j = i - m + 1
            prod = nums[j] * maxes[0]
            result = max(result, prod)
                  
            prod = nums[j] * mins[0]
            result = max(result, prod)
            
