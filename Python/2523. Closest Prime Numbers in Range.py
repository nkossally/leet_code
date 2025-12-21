from typing import List
from math import floor
class Solution:
    def closestPrimesFast(self, left: int, right: int) -> List[int]:
        sieve = [True] * (right + 1)
        sieve[0] = sieve[1] = False
        
        for i in range(2, int(right**0.5) + 1):
            if sieve[i]:
                for j in range(i*i, right + 1, i):
                    sieve[j] = False
        
        primes = [i for i in range(left, right + 1) if sieve[i]]
        
        if len(primes) < 2:
            return [-1, -1]
        
        min_gap = float('inf')
        result = [-1, -1]
        
        for i in range(1, len(primes)):
            gap = primes[i] - primes[i-1]
            if gap < min_gap:
                min_gap = gap
                result = [primes[i-1], primes[i]]
        
        return result
    def closestPrimes(self, left: int, right: int) -> List[int]:
        min_dist = float("inf")
        res = [-1, -1]

        def is_prime(num):
            if num == 1:
                return False
            curr = floor(num ** .5)
            while curr > 1:
                if num % curr == 0:
                    return False
                curr -= 1
            return True
        prev = None
        min_dist = float("inf")
        for num in range(left, right + 1):
            if is_prime(num):
                if prev != None:
                    if num - prev < min_dist:
                        min_dist = num - prev
                        res = [prev, num]
                prev = num
        return res

