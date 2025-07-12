class Solution:
    def maxSelectedElements(self, nums: List[int]) -> int:
        nums.sort()
        def get_count(curr, idx, count):
            if idx == len(nums):
                return count
            num = nums[idx]
            elem = nums[idx]
            count_2 = count
            if elem == curr + 1 or elem + 1 == curr + 1:
                return get_count(curr + 1, idx + 1, count + 1)
            return get_count(curr, idx + 1,count)
        
        max_count = 0
        for i in range(len(nums)):
            count_1 = get_count(nums[i], i + 1, 1)
            count_2 = get_count(nums[i] + 1, i + 1, 1)
            max_count= max([max_count, count_1, count_2])

        return max_count

    def maxSelectedElementsFast(self, nums: List[int]) -> int:
        nums.sort()
        dp ={}

        for num in nums:
            if num not in dp:
                dp[num] = 0
            if num - 1 not in dp:
                dp[num - 1] = 0
            dp[num + 1] = dp[num ] + 1
            dp[num] = dp[num - 1] + 1

        return max(dp.values())