class Solution:
    def minOperations(self, nums: list[int]) -> int:
        mem = {}
        def is_prime(num):
            if num in mem:
                return mem[num]
            if num < 2:
                return False
            primes = [True for _ in range(num + 1)]
            for i in range(2, num):
                if not primes[i]:
                    continue
                curr = 2 * i
                while curr <= num:
                    primes[curr] == False
                    mem[curr] = False
                    if curr == num:
                        mem[num] = False
                        return False
                    curr += i
            mem[num] = True
            return True
        res = 0

        for i, num in enumerate(nums):
            curr = num
            if i % 2 == 0:
                while not is_prime(curr):
                    curr += 1
                    res += 1
            else:
                while is_prime(curr):
                    curr += 1
                    res += 1
        return res