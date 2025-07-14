class Solution:
    def incremovableSubarrayCount(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 1
            
        def get_count(arr_1, arr_2):
            i = 0
            j = 0
            result = 0

            while i < len(arr_1) and j < len(arr_2):
                if arr_1[i] < arr_2[j]:
                    result += len(arr_2) - j
                    i += 1
                else:
                    j += 1
            return result
        
        i = 0
        j = len(nums) - 1
        while i < len(nums) - 1 and nums[i] < nums[i + 1]:
            i += 1
        while j > 0 and nums[j] > nums[j - 1]:
            j -= 1
        
        if j < i:
            return int((len(nums) + 1) * len(nums)/2)
        
        result = get_count(nums[: i + 1], nums[j :])
        result += i + 1
        result += len(nums) - j 
        result += 1  # delete the whole array

        return result
        