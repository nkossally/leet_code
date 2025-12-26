class Solution:
    def minimizeSet(self, divisor1: int, divisor2: int, uniqueCnt1: int, uniqueCnt2: int) -> int:
        L, R, G = 0, 10**10, lcm(divisor1, divisor2)

        while L < R:
            
            M = (L+R)//2                # [0] try middle value
            
            x = M - M//divisor1 >= uniqueCnt1         # [1] criterion 1
            y = M - M//divisor2 >= uniqueCnt2         # [2] criterion 2
            z = M - M//G  >= uniqueCnt1 + uniqueCnt2    # [3] criterion 3
            
            if x and y and z : R = M    # [4] classical step of
            else             : L = M+1  #     the binary search

        return L