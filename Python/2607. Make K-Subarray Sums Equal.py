class Solution(object):
    def makeSubKSumEqual(self, arr, k):

        def gcd(a, b):
            if b == 0:
                return a
            return gcd(b, a % b)

        n = len(arr)
        v = [[] for i in range(n + 1)]
        k = gcd(n, k)
        for i in range(n):
            v[i % k].append(arr[i])
        ans = 0
        for i in range(k):
            v[i].sort()
            x = v[i][len(v[i]) // 2]
            for j in v[i]:
                ans += abs(x - j)
        return ans
