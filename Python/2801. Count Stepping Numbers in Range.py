class Solution:
    def countSteppingNumbers(self, low: str, high: str) -> int:

        MOD = int(1e9) + 7

        def count(n: str) -> int:  # count number of stepping numbers in range [0...n]
            @cache
            def dp(i, tight, lastDigit, leadingZero):
                if i == len(n):
                    return 1  # Found a good number
                maxDigit = int(n[i]) if tight else 9
                ans = 0
                for d in range(maxDigit + 1):
                    nxtTight = tight and d == maxDigit
                    nxtLeadingZero = leadingZero and d == 0
                    if (
                        nxtLeadingZero
                    ):  # for leading zero, we shouldn't treat lastDigit=d
                        ans = (
                            ans + dp(i + 1, nxtTight, lastDigit, nxtLeadingZero)
                        ) % MOD
                    elif lastDigit == -1 or abs(lastDigit - d) == 1:
                        ans = (ans + dp(i + 1, nxtTight, d, nxtLeadingZero)) % MOD
                return ans

            return dp(0, True, -1, True)

        def minusOne(s):  # s is a string representing a positive integer
            num = int(s) - 1
            return str(num)

        return (count(high) - count(minusOne(low)) + MOD) % MOD
