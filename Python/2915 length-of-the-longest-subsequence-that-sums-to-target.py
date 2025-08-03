from typing import List
from collections import defaultdict
class Solution:
    def lengthOfLongestSubsequence(self, nums: List[int], target: int) -> int:
        sum_to_length = defaultdict(int)
        for num in nums:
            cpy = sum_to_length.copy()
            for prev_sum in sum_to_length:
                new_sum = prev_sum + num
                if new_sum <= target:
                    cpy[new_sum] =max( sum_to_length[prev_sum] + 1, cpy[new_sum] )
            cpy[num] = max(1, cpy[num])
            sum_to_length = cpy

        return sum_to_length[target] if sum_to_length[target] else -1
    
solutionInstance = Solution()
print(solutionInstance.lengthOfLongestSubsequence([1,2,3,4,5], 9))