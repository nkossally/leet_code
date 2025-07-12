class Solution:
    def maxBottlesDrunk(self, numBottles: int, numExchange: int) -> int:
        def get_max(bottles, empty, exchange, count):
            if bottles == 0 and exchange > empty:
                return count
            max_count = float("-inf")
            for i in range(1, bottles + 1):
                max_count = max(max_count, get_max(bottles - i, empty + i, exchange, count + i))
            if exchange <= empty:
                max_count = max(max_count, get_max(bottles + 1, empty - exchange, exchange + 1, count))
            return max_count
        return get_max(numBottles, 0, numExchange, 0)     