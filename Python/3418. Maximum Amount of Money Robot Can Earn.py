class Solution:
    def maximumAmount(self, coins: List[List[int]]) -> int:
        def is_on_board(x, y):
            return x >= 0 and x < len(coins) and y >= 0 and y < len(coins[0])
        
        def get_dp(x, y, index):
            way_1 = dp[x - 1][y][index] if is_on_board(x - 1, y) else float("-inf")
            way_2 = dp[x ][y - 1][index] if is_on_board(x, y - 1) else float("-inf")
            max_num = max(way_1, way_2)
            if max_num == float("-inf"):
                return 0
            return max_num

        dp = [[None for _ in range(len(coins[0])) ] for _ in range(len(coins))]

        for i in range(len(coins)):
            for j in range(len(coins[0])):
                no_skip = get_dp(i, j, 0)
                one_skip = get_dp(i, j, 1)
                two_skip = get_dp(i, j, 2)
                elem_1 = coins[i][j] + no_skip
                elem_2 = max(no_skip, one_skip + coins[i][j])
                elem_3 = max( one_skip, two_skip + coins[i][j])

                dp[i][j] =[elem_1, elem_2, elem_3]

 
        return max(dp[len(coins) - 1][len(coins[0]) - 1])
