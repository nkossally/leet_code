class Solution(object):
    def divide(self, dividend, divisor):
        """
        :type dividend: int
        :type divisor: int
        :rtype: int
        """
        result = dividend/divisor

        if divisor == -1 and dividend > 1:
          result += 1
        elif divisor == -1 and dividend < -1:
          result -= 1
        elif dividend*divisor < 0 and abs(dividend)>1 and dividend % divisor != 0:
          result += 1
        return result
