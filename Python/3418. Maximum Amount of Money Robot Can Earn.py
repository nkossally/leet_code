class Solution:
    def maximumAmount(self, coins: List[List[int]]) -> int:
        def is_on_board(x, y):
            return x >= 0 and x < len(coins) and y >= 0 and y < len(coins[0])
        
        def get_one_away(x, y):
            way_1 = dp[x - 1][y][0] if is_on_board(x - 1, y) else float("-inf")
            way_2 = dp[x ][y - 1][0] if is_on_board(x, y - 1) else float("-inf")
            max_num = max(way_1, way_2)
            if max_num == float("-inf"):
                return 0
            return max_num

        def get_one_skip(x, y):
            way_1 = dp[x - 1][y][1] if is_on_board(x - 1, y) else float("-inf")
            way_2 = dp[x ][y - 1][1] if is_on_board(x, y - 1) else float("-inf")
            max_num = max(way_1, way_2)
            if max_num == float("-inf"):
                return 0
            return max_num


        def get_two_skips(x, y):
            way_1 = dp[x - 1][y][2] if is_on_board(x - 1, y) else float("-inf")
            way_2 = dp[x ][y - 1][2] if is_on_board(x, y - 1) else float("-inf")
            way_3 = dp[x - 1][y - 1][2] if is_on_board(x - 1, y - 1) else float("-inf")

            max_num = max(way_1, way_2)
            if max_num == float("-inf"):
                return 0
            return max_num

        dp = [[None for _ in range(len(coins[0])) ] for _ in range(len(coins))]

    
        for i in range(len(coins)):
            for j in range(len(coins[0])):
                one_away = get_one_away(i, j)
                one_skip = get_one_skip(i, j)
                two_skip = get_two_skips(i, j)
                elem_1 = coins[i][j] + one_away
                elem_2 = max(one_away, one_skip + coins[i][j])
                elem_3 = max( one_skip, two_skip + coins[i][j])


                dp[i][j] =[elem_1, elem_2, elem_3]

 
        return max(dp[len(coins) - 1][len(coins[0]) - 1])
