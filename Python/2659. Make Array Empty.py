class Solution:
    def countOperationsToEmptyArray(self, nums: List[int]) -> int:
        in_order = nums[:]
        in_order.sort()

        count = 0
        while nums:
            if nums[0] == in_order[0]:
                nums.pop(0)
                in_order.pop(0)
            else:
                nums.append(nums.pop(0))
            count += 1
        return count
    
    def countOperationsToEmptyArrayFast(self, nums: List[int]) -> int:
        pos = {a: i for i, a in enumerate(nums)}
        res = n = len(nums)
        nums.sort()
        for i in range(1, n):
            if pos[nums[i]] < pos[nums[i - 1]]:
                res += n - i
        return res