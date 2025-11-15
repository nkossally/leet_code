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
        return self.res
 

        