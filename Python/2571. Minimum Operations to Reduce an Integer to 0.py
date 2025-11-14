class Solution:
    def minOperations( self, n: int) -> int:
        self.res = float("inf")
        
        def recur(num, count):
            if num == n:
                self.res = min(self.res, count)
                return

            exp = floor(log(abs(n - num), 2))
            exp_exact = log(abs(n - num), 2)
            if num < n:
                recur(num + 2**exp, count + 1)
                if exp_exact > exp:
                    recur(num + 2**(exp + 1), count + 1)
            else:
                recur(num - 2**exp, count + 1)
                if exp_exact > exp:
                    recur(num - 2**(exp + 1), count + 1)            
        recur(0, 0)

        return self.res
    



    def minOperationsFast( self, n: int) -> int:
        res = 0
        while n > 0:
            if n % 2 == 0:
                n >>= 1
            elif (n & 2) > 0:
                n += 1
                res += 1
            else:
                res += 1
                n >>= 2
        return res
    
    def minOperationsFast_2( self, n: int) -> int:
        res = 0
        while n > 0:
            if n % 2 == 0:
                n >>= 1
            elif (n & 2) > 0:
                n += 1
                res += 1
            else:
                res += 1
                n -= 1
                # n >>= 2
        return res