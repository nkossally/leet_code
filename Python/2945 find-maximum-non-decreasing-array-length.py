class Solution:
    def findMaximumLength(self, nums: List[int]) -> int:
        def recur(length, last_val, curr_sum, idx):
            if idx == len(nums):
                if curr_sum == 0:
                    return length
                else:
                    return 0

            max_len = recur(length,last_val, curr_sum + nums[idx], idx + 1)

            if last_val is None or nums[idx] + curr_sum >= last_val:
                max_len = max(max_len, recur(length + 1, nums[idx] + curr_sum, 0, idx + 1))
            return max_len
        return recur(0, None, 0, 0)