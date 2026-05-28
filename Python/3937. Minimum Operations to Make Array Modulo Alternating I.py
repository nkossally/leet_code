class Solution:
    def minOperations(self, nums: list[int], k: int) -> int:
        if len(nums) < 2:
            return 0

        def get_count(odd_target, even_target):
            res = 0
            for i, num in enumerate(nums):
                if i % 2 ==0:
                    dist_1 = abs((num % k) - even_target)
                    dist_2 = k - dist_1
                    res += min(dist_1, dist_2)
                else:
                    dist_1 = abs((num % k) - odd_target)
                    dist_2 = k - dist_1
                    res += min(dist_1, dist_2)
            return res

        res = float("inf")
        for m in range(k):
            for n in range(m + 1, k):
                count_1 = get_count(m, n)
                count_2 = get_count(n, m)
                print(m, n, count_1, count_2)
                res = min(res, count_1, count_2)
        return res

