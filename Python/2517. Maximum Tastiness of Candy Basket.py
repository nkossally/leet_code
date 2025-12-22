class Solution:
    def maximumTastiness(self, price: List[int], k: int) -> int:
        price.sort()
        if k == 2:
            return price[-1] - price[0]
        res = float("-inf")
        heap = []
        max_dist = floor((price[-1] - price[0])/(k - 1))

        def try_dist(dist, count, idx, num):
            if count == k:
                return True
            i = idx
            while i < len(price) and price[i] - num < dist:
                i += 1
            if i < len(price):
                return try_dist(dist, count + 1, i + 1, price[i])
            return False

        for dist in range(max_dist, 0, -1):
            if try_dist(dist, 1, 1, price[0]):
                return dist
        return 0
    

    def maximumTastinessBinary(self, price: List[int], k: int) -> int:
        price.sort()
        if k == 2:
            return price[-1] - price[0]
        res = float("-inf")
        heap = []
        max_dist = floor((price[-1] - price[0])/(k - 1))

        def try_dist(dist, count, idx, num):
            if count == k:
                return True
            i = idx
            while i < len(price) and price[i] - num < dist:
                i += 1
            if i < len(price):
                return try_dist(dist, count + 1, i + 1, price[i])
            return False
        
        l = 0
        r = max_dist

        while r > l:
            mid = floor((r + l)/2)
            if try_dist(mid, 1, 1, price[0]):
                l = mid + 1
            else:
                r = mid
        if try_dist(l, 1, 1, price[0]):
            return l
        return l - 1
    
    def maximumTastinessFast(self, price: List[int], k: int) -> int:
        price.sort()
        def check(x):
            last, count, i = price[0], 1, 1
            while count < k and i < len(price):
                if price[i] - last >= x:
                    last, count = price[i], count + 1
                i += 1
            return count == k
        lo, hi = 0, 10 ** 9
        while lo < hi:
            mid = (lo + hi) // 2
            if check(mid): lo = mid + 1
            else: hi = mid
        return lo - 1
