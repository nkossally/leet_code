from typing import List 
class Solution(object):
    def countSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """

        def get_count(string, left, right):
            count = 0

            while left >= 0 and right < len(string) and string[right] == string[left]:
                count += 1
                left -= 1
                right += 1
            return count

        total = 0
        for i in range(len(s)):
            total += get_count(s, i, i)
            total += get_count(s, i, i + 1)
        return total
