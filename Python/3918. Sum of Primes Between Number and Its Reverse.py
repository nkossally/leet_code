class Solution:
    def sumOfPrimesInRange(self, n: int) -> int:
        r = int(str(n)[::-1])
        l = min(r, n)
        r = max(r, n)

        res = 0
        primes = [True for _ in range(r)]

        primes[0] = False

        for idx in range(1, r):
            if primes[idx]:
                num = idx + 1
                if num >= l and num <= r:
                    res += num
                curr = 2 * num
                while curr <= r:
                    primes[curr - 1] = False
                    curr += num
        return res