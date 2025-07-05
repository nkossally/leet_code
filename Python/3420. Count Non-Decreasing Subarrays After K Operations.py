class Solution:
    def countNonDecreasingSubarrays(self, nums: List[int], k: int) -> int:
        bad_indices = []
        for i in range(1, len(nums)):
            if nums[i] < nums[i - 1]:
                bad_indices.append(i)
        
        dp = [[0 for _ in range(len(nums)) ] for _ in range(len(nums))]

        def get_is_valid(arr, i, j,idx, count):
            while idx < len(arr) and arr[idx] >= arr[idx - 1]:
                idx += 1
            if idx < len(arr):
                diff = arr[idx - 1] - arr[idx]
                if diff + count <= k:
                    arr[idx] += diff
                    return get_is_valid(arr, i, j,idx + 1, count + diff)
            else:
                dp[i][j] = 1
                return True
            return False
            
        total = 0

 


        for i in range(len(nums)):
            for j in range(len(nums) - 1, i - 1, -1):
                subarray = nums[i : j + 1]
                if  get_is_valid(subarray, i, j,1, 0):
                    total += j - i + 1
                    break


        return total
        
        

        