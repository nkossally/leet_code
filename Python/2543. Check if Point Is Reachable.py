class Solution:
    def isReachable(self, targetX: int, targetY: int) -> bool:
        def is_power_of_two(num):
            return num > 0 and (num & (num - 1)) == 0
        
        def is_power_of_two_2(num):
            while num > 1 and num % 2 == 0:
                num /= 2
            return num == 1
        

        return is_power_of_two_2(gcd(targetX, targetY))