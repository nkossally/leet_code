class Solution:
    def findCoins(self, numWays: List[int]) -> List[int]:
        N = len(numWays)
        dp = [0] * (N + 1)
        dp[0] = 1
        
        coins = []
        for i in range(1, N + 1):
            target = numWays[i - 1]
        
            if dp[i] == target - 1:
                coins.append(i)
                for j in range(i, N + 1):
                    dp[j] += dp[j - i]
            if dp[i] != target:
                return []
        
        return coins



    def findCoins_slower(self, numWays: List[int]) -> List[int]:
        denominations = []

        def get_count(num, denominations):
            def helper(curr_sum, idx):
                if curr_sum == num:
                    return 1
                if idx == len(denominations):
                    return 0
                max_factor = floor((num - curr_sum)/denominations[idx])
                total = 0
                for i in range(max_factor + 1):
                    total += helper(curr_sum + i * denominations[idx], idx + 1)
                return total
            return helper(0, 0)
        

        for i in range(len(numWays)):
            denomination = i + 1
            count = get_count(denomination, denominations)
            if count + 1 == numWays[i]:
                denominations.append(denomination)
            elif count != numWays[i]:
                return []
        return denominations