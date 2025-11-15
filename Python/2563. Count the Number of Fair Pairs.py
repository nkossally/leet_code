class Solution:
    def countFairPairs(self, nums: List[int], lower: int, upper: int) -> int:
        nums.sort()
        i = 0
        j_1 = len(nums) - 1
        j_2 = len(nums) - 1
        res = 0
        print(nums)
        while i < len(nums) - 1:
            while j_1 > i + 1 and nums[i] + nums[j_1] >= lower:
                j_1 -= 1
            if  nums[i] + nums[j_1] < lower and j_1 < len(nums) - 1:
                j_1 += 1


            while j_2 > j_1 and nums[i] + nums[j_2] > upper:
                j_2 -= 1
            if nums[j_1 ] + nums[i] >= lower and nums[j_2] + nums[i] <= upper and j_2 >= j_1 :
                res += j_2 - j_1 + 1
            # print(i, j_1, j_2)
            i += 1
            if j_1 <= i:
                j_1 = len(nums) - 1
            if j_2 < j_1:
                j_2 = len(nums) -1
 
        return res
        