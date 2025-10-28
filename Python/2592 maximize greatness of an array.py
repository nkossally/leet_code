
class Solution:
    def maximizeGreatness(self, nums: List[int]) -> int:
        cpy = nums[:]
        cpy.sort()
        nums.sort()
        self.idx = 0
        def get_idx(val):
            while self.idx < len(cpy):
                if cpy[self.idx] > val:
                    return 
                self.idx += 1
        ans = 0
        for num in nums:
            get_idx(num)
            if self.idx != len(cpy):
                ans += 1
                cpy.pop(self.idx)
        return ans

        
class Solution:
    def maximizeGreatnessFast(self, nums: List[int]) -> int:
        nums.sort()
        res = 0
        for  num in nums:
            if num > nums[res]:
                res += 1
        return res

        