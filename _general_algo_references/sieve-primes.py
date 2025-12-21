from typing import List
from time import perf_counter
from math import floor

def get_primes(self, left: int, right: int) -> List[int]:
    sieve = [True] * (right + 1)
    sieve[0] = sieve[1] = False
    
    for i in range(2, int(right**0.5) + 1):
        if sieve[i]:
            for j in range(i*i, right + 1, i):
                sieve[j] = False
    
    primes = [i for i in range(left, right + 1) if sieve[i]]
    return primes
