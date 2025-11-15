from typing import List
from math import floor, gcd
from collections import defaultdict
class Solution:
    def squareFreeSubsets(self, nums: List[int]) -> int:
        def divisible_by_square(num):
            root = floor(num ** .5)
            divisor = 2
            while divisor <= root:
                if num % (divisor ** 2) == 0:
                    return True
                divisor += 1
            return False
        
        self.res = 0
        def get_subset(product, idx):
            if idx == len(nums):
                return
            new_prod = product * nums[idx]
            if not divisible_by_square(new_prod):
                self.res += 1
                get_subset(new_prod, idx + 1)
            get_subset(product, idx + 1)
        get_subset(1, 0)
        print(self.res)
        return self.res
    
    def squareFreeSubsetsFast(self, nums: List[int]) -> int:
        def get_mod(num):
            return num % (10**9 + 7)

        candidates = set([1, 2, 3, 5, 6, 7, 10, 11, 13, 14, 15, 17, 19, 21, 22, 23, 26, 29, 30])
        cnt = defaultdict(int)
        for num in nums:
            if num in candidates:
                cnt[num] += 1
        
        self.res = -1

        unique_nums = list(cnt.keys())

        def get_subset(prod, factor, idx):
            # print(prod, factor, idx)
            if idx == len(unique_nums):
                self.res += factor
                self.res = get_mod(self.res)
                return
            
            num = unique_nums[idx]
            count = cnt[num]

            if  gcd(num, prod) == 1:
                mult = count
                if num == 1:
                    mult = 2**count - 1
                get_subset(prod * num, factor * mult, idx + 1)
            get_subset(prod, factor, idx + 1)
        get_subset(1, 1, 0)
        print(self.res)
        return self.res

Solution().squareFreeSubsetsFast([1, 1, 3, 3])
Solution().squareFreeSubsets([1, 1, 3, 3])