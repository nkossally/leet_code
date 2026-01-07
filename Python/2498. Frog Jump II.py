class Solution:
    def maxJump(self, stones: List[int]) -> int:
        if len(stones) == 2:
            return (stones[-1] - stones[0])
        maxjump = 0
        i, j = 0, 2
        while j < len(stones):
            maxjump = max(maxjump, (stones[j] - stones[i]))
            i+= 1; j+= 1
        return maxjump
    
    def maxJumpSlow(self, stones: List[int]) -> int:
        self.res = float("inf")

        def recur(idx, forward_max, back_max, forward_val, back_val):

            diff_forward = stones[idx] - forward_val
            diff_back = stones[idx] - back_val
            new_forward_max = max(forward_max, diff_forward)
            new_back_max = max(back_max, diff_back)
            if idx == len(stones) - 1:
                return max(new_forward_max, new_back_max)

            way_1 = recur(idx + 1, new_forward_max, back_max, stones[idx], back_val)
            way_2 = recur(idx + 1, forward_max, new_back_max, forward_val, stones[idx])
            return min(way_1, way_2)

        return recur(0, float("-inf"), float("-inf"), stones[0], stones[0])


