class Solution:
    def minImpossibleOR(self, nums: List[int]) -> int:
        # if all powers of 2 up to n are in the set of nums, then all numbers up to n are reachable with or operations
        power = 0
        nums = set(nums)

        while 2 ** power  in nums:
            power += 1
        return 2 ** power
    

    def minImpossibleORSlow(self, nums: List[int]) -> int:
        nums.sort()
        def get_target(targetarget, curr,idx):
            if curr == target:
                return True
            if curr > target:
                return False
            if idx == len(nums):
                return False
            return get_target(targetarget, curr | nums[idx], idx + 1) | get_target(targetarget, curr, idx + 1)

        target = 1
        while True:
            if not get_target(target, 0, 0):
                return target
            target += 1