class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        max_num = max(nums)
        curr_count = 0
        start = 0
        end = None

        for i, num in enumerate(nums):
            if num == max_num:
                curr_count += 1
                if curr_count == k:
                    end = i
                    break

        total = 0

        if end == None:
            return 0

        while start < len(nums):
            while curr_count < k and end < len(nums) - 1:
                end += 1
                if nums[end] == max_num:
                    curr_count += 1
            if curr_count != k:
                break
            print(start, end)
            total += len(nums) - end
            if nums[start] == max_num:
                curr_count -= 1
            start += 1
        

        return total

        