class Solution:
    def maximumStrength(self, nums: List[int], k: int) -> int:
        sums = [0]

        curr_sum = 0

        for num in nums:
            curr_sum += num
            sums.append(curr_sum)
 

        def get_sum(idx, count):
            if count == k:
                return 0
            furthest = len(nums) - 1 - (k - count - 1)

            max_sum = float("-inf")
            for i in range(idx, furthest + 1):
                for j in range(i, furthest + 1):
                    pos_or_neg = 1 if count % 2 == 0 else -1

                    new_total = pos_or_neg * (k - count) * (sums[j + 1] - sums[i])
                    new_sum = new_total + get_sum(j + 1, count + 1)
                    max_sum = max(max_sum, new_sum)
            return max_sum

        
        max_sum = get_sum(0, 0)
        return max_sum
    
    def maximumStrengthMem(self, nums: List[int], k: int) -> int:
        sums = [0]

        curr_sum = 0

        for num in nums:
            curr_sum += num
            sums.append(curr_sum)

        mem = [[None for _ in range(k)] for _ in range(len(nums))]

        def get_sum(idx, count):
            if count == k:
                return 0
            if mem[idx][count] != None:
                return mem[idx][count]
            furthest = len(nums) - 1 - (k - count - 1)

            max_sum = float("-inf")
            for i in range(idx, furthest + 1):
                for j in range(i, furthest + 1):
                    pos_or_neg = 1 if count % 2 == 0 else -1

                    new_total = pos_or_neg * (k - count) * (sums[j + 1] - sums[i])
                    new_sum = new_total + get_sum(j + 1, count + 1)
                    max_sum = max(max_sum, new_sum)
            mem[idx][count] = max_sum
            return max_sum

        
        max_sum = get_sum(0, 0)
        return max_sum
    
    def maximumStrengthDp(self, nums: List[int], k: int) -> int:

        dp = [[0] * (len(nums) + 1) for _ in range(k + 1)]
        for i in range(1, k + 1):
            maxsum = -float('inf')
            curr = -float('inf')
            multiplier = k + 1 - i if i % 2 == 1 else i - 1 - k
            for j in range(i - 1, len(nums)):
                curr = max(curr + nums[j] * multiplier, dp[i - 1][j] + nums[j] * multiplier)
                maxsum = max(maxsum, curr)
                dp[i][j + 1] = maxsum
        return dp[-1][-1] 