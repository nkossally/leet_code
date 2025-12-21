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

def get_primes_slow(self, left: int, right: int) -> List[int]:
    primes = []

    def is_prime(num):
        if num == 1:
            return False
        curr = floor(num ** .5)
        while curr > 1:
            if num % curr == 0:
                return False
            curr -= 1
        return True
    for num in range(left, right + 1):
        if is_prime(num):
            primes.append(num)
    return primes
    
for _ in range(100):
    start = perf_counter()
    get_primes(None, 10, 2000)
    end = perf_counter()
    print(end - start)

for _ in range(100):
    start = perf_counter()
    get_primes(None, 10, 2000)
    end = perf_counter()
    print(end - start)


print(get_primes(None, 10, 2000)) 
print(get_primes_slow(None, 10, 2000))  # Example usage # Example usage