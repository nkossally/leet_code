class Solution:
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