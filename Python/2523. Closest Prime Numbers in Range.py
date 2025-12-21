from typing import List
from math import floor
class Solution:
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

