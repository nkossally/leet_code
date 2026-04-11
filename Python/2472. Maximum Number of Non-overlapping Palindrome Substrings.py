import copy

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
                r -= 1
            return r <= l
        def can_add_interval(group, interval):
            for other in group:
                if do_intervals_overlap(other, interval):
                    return False
            return True
        intervals = []
        for i in range(len(s)):
            for j in range(i + k - 1, len(s)):
                if get_is_palindrome(s[i : j + 1]):
                    intervals.append([i, j])
        ans = 0
        groups = [[]]
        for interval in intervals:
            new_groups = []
            for group in groups:
                if can_add_interval(group, interval):
                    cpy = copy.deepcopy(group)
                    cpy.append(interval)
                    new_groups.append(cpy)
                    ans = max(ans, len(cpy))
            groups = groups + new_groups

        return ans
    

    def maxPalindromesFast(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: int
        """
    
        n = len(s)
        # function to check whether substring is a palindrome
        def valid(i, j):
            # if end index is greater then length of string
            if j > len(s):
                return False
            if s[i : j] == s[i : j][::-1]:
                return True
            return False
        maxSubstrings = 0
        start = 0
        while start < n:
            if valid(start, start + k):
                maxSubstrings += 1
                start += k
            elif valid(start, start + k + 1):
                maxSubstrings += 1
                start += k + 1
            else:
                # when there is no palindrome starting at that particular index   
                start += 1
        return maxSubstrings