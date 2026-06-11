class Solution:
    def maxFixedPoints(self, nums: list[int]) -> int:
        self.res = 0

        def get_count(arr):
            count = 0
            for i, num in enumerate(arr):
                if i == num:
                    count += 1
            return count
        
        def recur(arr):
            self.res = max(self.res, get_count(arr))

            for idx in range(len(arr)):
                recur(arr[:idx] + arr[idx + 1:])
        
        recur(nums)

        return self.res
    
    def maxFixedPointsFast(self, nums: list[int]) -> int:
        n = len(nums)
        v = []

        # store (i - nums[i], nums[i])
        for i in range(n):
            if nums[i] <= i:
                v.append((i - nums[i], nums[i]))

        if not v:
            return 0

        # sort by d, then by value
        v.sort()

        # LIS on values
        lis = []

        for d, val in v:
            idx = bisect_left(lis, val)

            if idx == len(lis):
                lis.append(val)
            else:
                lis[idx] = val

        return len(lis)