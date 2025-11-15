class Solution:
    def minImpossibleOR(self, nums: List[int]) -> int:
        # if all powers of 2 up to n are in the set of nums, then all numbers up to n are reachable with or operations
        power = 0
        nums = set(nums)

        while 2 ** power  in nums:
            power += 1
        return 2 ** power