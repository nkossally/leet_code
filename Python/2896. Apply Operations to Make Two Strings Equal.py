class Solution:
    def minOperations(self, s1: str, s2: str, x: int) -> int:
        diffs = []
        dp = {}
        for i in range(len(s1)):
            if s1[i] != s2[i]:
                diffs.append(i)
        if len(diffs) % 2 == 1:
            return -1

        def recur(diffs):
            if len(diffs) == 0:
                return 0
            diff_str = str(diffs)
            if diff_str in dp:
                return dp[diff_str]

            min_count = float("inf")

            for i in range(len(diffs) - 1):
                for j in range(i + 1, len(diffs)):
                    diffs_cpy = diffs[:]
                    cost = min(diffs[j] - diffs[i], x)
                    diffs_cpy.pop(j)
                    diffs_cpy.pop(i)
                    min_count = min(min_count, cost + recur(diffs_cpy))
            dp[diff_str] = min_count
            return min_count
        res = recur(diffs)
        return res 