class Solution:
    def numberOfWays(self, n: int, x: int) -> int:
        mem = defaultdict(dict)
        def mod(num):
            return num % (10 **9 + 7)

        def recur(curr, num):
            if num in mem[curr]:
                return mem[curr][num]

            if curr == n:
                print(path)
                return 1

            if curr + num ** x <= n:
                val_1 = recur(curr + num ** x, num + 1)
                val_2 = recur(curr, num + 1)
                mem[curr][num] = val_1 + val_2
                return val_1 + val_2
            else:
                return 0
        return mod(recur(0, 1))


    def numberOfWaysFast(self, n: int, x: int) -> int:
        MOD = 1_000_000_007

       # precompute powers
        powers = []
        i = 1
        while True:
            p = pow(i, x)
            if p > n:
                break
            powers.append(p)
            i += 1

        dp = [0] * (n + 1)
        dp[0] = 1
        for p in powers:
            for s in range(n, p - 1, -1):
                dp[s] = (dp[s] + dp[s - p]) % MOD

        return dp[n]
