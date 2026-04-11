class Solution(object):
    def maxPalindromes(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: int
        """
        def do_intervals_overlap(interval_1, interval_2):
            return (interval_1[0] >= interval_2[0] and interval_1[0] <= interval_2[1]) or (interval_2[0] >= interval_1[0] and interval_2[0] <= interval_1[1])
        def get_is_palindrome(string):
            l = 0
            r = len(string) - 1
            while l < r and string[l] == string[r]:
                l += 1
                r += 1
            return r <= l
        