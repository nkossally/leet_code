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
        