class Solution:
    def stringCount(self, n: int) -> int:
        if n < 4:
            return 0
        
        def mod(num):
            return num % (10 ** 9 + 7)
        
        def pow_26(num):
            res = 1
            count = 0
            while count < num:
                res  = mod(res * 26)
                count += 1
            return res

        def choose(n, k):
            res = 1
            factor = n
            while factor > n - k:
                res = mod(res * factor)
                factor -= 1
            divisor = k
            while divisor > 1:
                res /= divisor
                divisor -= 1
            return int(res)
        
        def get_leet_perms(num):
            return choose(4*num, num) * choose(3*num, num)

        total = 0
        count = 1

        leetPerms = 12


        while count * 4 <= n:
            k = count * 4
            
            diff = mod(((-1) ** (count - 1)) * choose(n, k) * get_leet_perms(count) * pow_26(n - k) )
            total = mod(total + diff)
            count += 1

        return mod(total)

        
