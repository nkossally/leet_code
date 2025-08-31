class Solution:
    def checkArray(self, nums: List[int], k: int) -> bool:
        arr_sum = sum(nums)
        if arr_sum % k != 0:
            return False
        
        target_count = arr_sum / k

        count = 0

        for i in range(len(nums) - k + 1):
            min_num = min(nums[i : i + k])
            for j in range(i, i + k):
                nums[j] -= min_num

            count += min_num
        
        return count == target_count
        
        
