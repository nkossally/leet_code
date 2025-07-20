class Solution:
    def minimumAddedCoins(self, coins: List[int], target: int) -> int:
        coins.sort()
        current_max = 0
        index = 0
        additions = 0
        while current_max < target:
            if index < len(coins) and coins[index] <= current_max + 1:
                current_max += coins[index]
                index += 1
            else:
                additions += 1
                current_max += current_max + 1

        return additions

    def minimumAddedCoinsSlow(self, coins: List[int], target: int) -> int:
        def get_coin_needed(curr_val, idx, curr_target):
            if curr_val > curr_target:
                return curr_target
            if curr_val == curr_target:
                return 0
            
            if idx == len(coins):
                return curr_target
            
            val_1 = get_coin_needed(curr_val + coins[idx], idx + 1, curr_target)
            val_2 = get_coin_needed(curr_val, idx + 1, curr_target)
            return min(val_1, val_2)

        count = 0
        for num in range(1, target + 1):
            coin_needed = get_coin_needed(0, 0, num)
        
            if coin_needed > 0:
                coins.append(coin_needed)
                count += 1
        return count