class Solution:
    def countGood(self, nums: List[int], k: int) -> int:
        
        def choose_two(num):
            if num < 2:
                return 0
            return num * (num - 1)/ 2
        

        total = 0
        i = 0
        j = 0
        counter = defaultdict(int)
        pairs = 0
        counter[nums[0]] = 1

        while i < len(nums):
            if i > 0:
                num = nums[i - 1]
                if counter[num] > 1:
                    pairs -= counter[num] - 1
                counter[num] -= 1
            
            while pairs < k and j < len(nums) - 1:
                j += 1
                num = nums[j]
                pairs += counter[num]
                counter[num] += 1

            if pairs >= k:
                total += len(nums) - j
            else:
                return total

            i += 1
