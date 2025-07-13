class Solution:
    def minimumOperationsToMakeEqual(self, x: int, y: int) -> int:
        def helper(val):

            if val == y:
                return 0
            if val < y:
                return y - val

            down_5 = val % 5
            down_11 = val % 11

            count_1 = abs(val - y)
            count_2 = float("inf")
            count_3 = float("inf")
            count_4 = float("inf")
            count_5 = float("inf")
            count_6 = float("inf")
            count_7 = float("inf")

            if val % 5 != 0:
                count_2 =  down_5 + 1 + helper((val - down_5)/5)
                count_6 = 5 - down_5 + 1  + helper((val + 5 - down_5)/5)

            if val % 11 != 0:
                count_3 = down_11 + 1 + helper((val - down_11)/11)
                count_7 = 11 - down_11 + 1 + helper((val + 11 - down_11)/11)
            
            if val % 5 == 0:
                count_4 = 1 + helper(val / 5)
            if val % 11 == 0:
                count_5 = 1 + helper(val / 11)

            min_num = min([count_1, count_2, count_3, count_4, count_5, count_6, count_7])
            return min_num

        return int(helper(x))     