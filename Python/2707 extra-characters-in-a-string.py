class Solution:
    def minExtraChar(self, s: str, dictionary: List[str]) -> int:
        dp = [i for i in range(len(s) + 1)]
        dictionary = set(dictionary)

        for i in range(len(s)):
            dp[i + 1] = min(dp[i + 1], dp[i] + 1)
            for j in range(i, len(s)):

                substr = s[i: j + 1]
                if substr in dictionary:
                    dp[j + 1] = min(dp[j + 1], dp[i])

        return dp[len(s)]

        