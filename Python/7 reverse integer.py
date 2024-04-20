class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        pos = abs(x)
        reverse_int = int(str(pos)[::-1])
        reverse_int = reverse_int if x >= 0 else -reverse_int
        if reverse_int > pow(2, 31) or reverse_int < -pow(2, 31):
            return 0
        return reverse_int