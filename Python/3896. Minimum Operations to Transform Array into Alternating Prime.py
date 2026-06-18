class Solution:
    def minOperations(self, nums: list[int]) -> int:
        max_num = 100004
        primes = [True for _ in range(max_num)]
        primes[0] = primes[1] = False
        for i in range(2, max_num):
            if not primes[i]:
                continue
            curr = 2 * i
            while curr < max_num:
                primes[curr] = False
                curr += i

        res = 0

        for i, num in enumerate(nums):
            curr = num
            if i % 2 == 0:
                while not primes[curr]:
                    curr += 1
                    res += 1
            else:
                while primes[curr]:
                    curr += 1
                    res += 1
        return res