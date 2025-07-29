class Solution:
    def distributeCandies(self, n: int, limit: int) -> int:
        total = 0
        for i in range(0, limit + 1):
            min_num = max(0, n - i - limit)
            max_num = min(limit, n - i)
            if min_num <= max_num:
                total += max_num - min_num + 1

        return total

    def distributeCandiesFast(self, n: int, limit: int) -> int:
        def H3(n):
            return 0 if n<0 else (n+2)*(n+1)//2
        return H3(n)-3*H3(n-limit-1)+3*H3(n-2*(limit+1))-H3(n-3*(limit+1))
        