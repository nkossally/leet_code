class Solution:
    def countVisiblePeople(self, n: int, pos: int, k: int) -> int:
        mod = 10 ** 9 + 7

        def factorial(num):
            prod = 1
            curr = 2
            while curr <= num:
                prod *= curr
                curr += 1
            return int(prod)
        
        # def combination(a, b):
        #     return factorial(a)/(factorial(b)* factorial(a - b))
        
        left = pos
        right = n - pos - 1
        res = 0

        for i in range(0, min(k + 1, left + 1)):
            j = k -i
            if j <= right:
                res += int(comb(left, i) * comb(right, j))
                res = res % mod
        res  = (2* res) % mod
        return res
        