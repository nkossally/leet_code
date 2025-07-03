class Solution(object):
    def numberOfWays(self, n, x, y):
        """
        :type n: int
        :type x: int
        :type y: int
        :rtype: int
        """

        def helper(count, is_occupied_arr, occupied_count):
            if count == n:
                return y ** occupied_count
            
            total = 0
            
            for (i, is_occupied) in enumerate(is_occupied_arr):
                cpy = is_occupied_arr[:]
                if is_occupied:
                    total += helper(count + 1, cpy, occupied_count)
                else:
                    cpy[i] = True
                    total += helper(count + 1, cpy, occupied_count + 1)
            
            return total

        is_occupied_arr = [False for _ in range(x)]
        return helper(0, is_occupied_arr, 0)
    
    class Solution:
    def numberOfWays_2(self, n: int, x: int, y: int) -> int:
        
        mod = 10 ** 9 + 7

        def perm(num, lower):
            bound = num - lower
            curr = num
            result = 1
            while curr > bound:
                result *= curr
                curr -= 1
            return result % mod

        def get_count(num, groups):
            if groups > num:
                return 0
            if groups == 1:
                return 1
            return (get_count(num -1, groups - 1) + groups * get_count(num - 1, groups)) % mod

        min_groups = min(x, n)


        total = 0
        for i in range(1, min_groups + 1):
            total += math.perm(x, i) * (y ** i) * get_count(n, i)
            total = total % mod
        return total
                
