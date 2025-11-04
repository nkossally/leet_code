class Solution:
    def findValidSplitSlow(self, nums: List[int]) -> int:
        def get_gcd(a, b):
            max_num = max(a, b)
            min_num = min(a, b)
            while max_num % min_num != 0:
                temp = max_num
                max_num = min_num
                min_num = temp % min_num
            return min_num
        prefix_prods = []
        suffix_prods = []
        curr = 1
        for num in nums:
            curr *= num
            prefix_prods.append(curr)
        curr = 1
        for i in range(len(nums) - 1, -1, -1):
            num = nums[i]
            curr *= num
            suffix_prods.insert(0, curr)
        for i in range(len(nums) - 1):
            gcd = get_gcd(prefix_prods[i], suffix_prods[i + 1])
            if gcd == 1:
                return i
        return -1
    
    def findValidSplit_2(self, nums: List[int]) -> int:
        right_indices = {}
        factors_at_idx = [ [] for i in range(len(nums)) ]

        def record_prime_idx(num, idx):
            max_factor = floor(pow(num, .5))
            factor = 2
            while num > 1 and factor <= num:
                if num % factor == 0:
                    factors_at_idx[idx].append(factor)
                    if factor not in right_indices:
                        right_indices[factor] = idx
                    else:
                        right_indices[factor]= max(right_indices[factor], idx)
                    while num % factor == 0:
                        num /= factor
                factor += 1
        right_bound = -1
        for i, num in enumerate(nums):
            record_prime_idx(num, i)
            
        for i in range(len(nums) - 1):        
            factor_bound = -1
            for factor in factors_at_idx[i]:
                factor_bound = max(factor_bound, right_indices[factor])
            right_bound = max(right_bound, factor_bound)
            if right_bound == i:
                return i
        return - 1
            
        