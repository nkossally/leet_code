class Solution:
    def minimumBeautifulSubstrings(self, s: str) -> int:
        dp = [float("inf") for _ in range(len(s) + 1)]
        dp[0] = 0
        def is_power(string):
            num = int(string, 2)
            while num >= 5 and num % 5 == 0:
                num /= 5
            return num == 1
        

        for i in range(len(s)):
            min_val = float("inf")
            for j in range(i, -1, -1):
                if s[j] != "0" and is_power(s[j : i + 1]):
                    min_val = min(min_val, dp[j] + 1)
            dp[i + 1] = min_val

        return dp[-1] if dp[-1] != float("inf") else -1
    

    def minimumBeautifulSubstringsFast(self, s: str) -> int:
        powers = tuple(bin(pow(5,i))[2:] for i in range(7))

        def dp(s):
            if s in powers: return 1 
            if not s: return inf
            
            return 1+ min((dp(s[len(p):]) for p in powers
                            if s.startswith(p)), default = inf)

        ans = dp(s)

        return ans if ans != inf else -1