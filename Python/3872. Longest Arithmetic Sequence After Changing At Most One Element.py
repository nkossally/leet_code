from typing import List
class Solution:
    def longestArithmeticWrong(self, nums: List[int]) -> int:
        self.res = 0

        def recur(idx, chose_one, count, prev, diff, chose_first, chose_last, arr):
            if idx == len(nums):
                print(arr)
                if chose_one:
                    self.res = max(self.res, count)
                else:
                    can_add = not (chose_first and chose_last)
                    count = count + 1 if can_add else count
                    self.res = max(self.res, count)
                return

            
            if nums[idx] == prev + diff:
                arr_2 = arr[:] + [ prev + diff ]
                recur(idx + 1, chose_one, count + 1, prev + diff, diff, chose_first, idx == len(nums) - 1, arr_2)
            elif not chose_one:
                arr_2 = arr[:] + [ prev + diff ]
                recur(idx + 1, True, count + 1, prev + diff, diff, chose_first, j == len(nums) - 1, arr_2)

            recur(idx + 1, chose_one, count, prev, diff, chose_first, False, arr )
        
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                diff = nums[j] - nums[i]
                recur(j + 1, False, 2, nums[j], diff, i == 0, j == len(nums) - 1, [ nums[i], nums[j] ])

        for i in range(len(nums)):
            for j in range(i + 2, len(nums)):
                if (nums[j] - nums[i]) % 2 == 0:
                    diff = int((nums[j] - nums[i]) / 2)
                    mid = int( (nums[i] +nums[j])/2)
                    arr = [nums[i], mid, nums[j]]
                    recur(j + 1, True, 3, nums[j], diff, i == 0, j == len(nums) - 1, arr)

        return self.res