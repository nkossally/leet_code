from collections import defaultdict
from typing import List

class Solution:
    def countInterestingSubarraysSlow(self, nums: List[int], modulo: int, k: int) -> int:
        counts = [0]
        count = 0
        for num in nums:
            if num % modulo == k:
                count += 1
            counts.append(count)

        total = 0

        for i in range(len(counts)):
            for j in range(i + 1, len(counts)):
                if (counts[j] - counts[i]) % modulo == k:
                    total += 1

        return total

    def countInterestingSubarrays(self, nums: List[int], modulo: int, k: int) -> int:
        counts = defaultdict(int)
        # empty array increments counts[0]
        counts[0] = 1
        count = 0
        res = 0

        for num in nums:
            if num % modulo == k:
                count += 1
                count = count % modulo
            other = (count - k) % modulo
            res += counts[other]
            counts[count] += 1

        return res
