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