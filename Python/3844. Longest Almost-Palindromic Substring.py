from collections import Counter
class Solution(object):
    def almostPalindromic(self, s):
        """
        :type s: str
        :rtype: int
        """
        self.res = 0
        def build_out(i, j):
            ans = j - i + 1
            curr_i = i
            curr_j = j
            while  curr_i > 0 and curr_j < len(s) - 1 and s[curr_i - 1] == s[curr_j + 1]:
                curr_i -= 1
                curr_j += 1
                ans = max(curr_j - curr_i + 1, ans)
            if curr_i > 0:
                curr_i_2 = curr_i - 1
                curr_j_2 = curr_j
                ans = max(curr_j_2 - curr_i_2 + 1, ans)

                while  curr_i_2 > 0 and curr_j_2 < len(s) - 1 and s[curr_i_2 - 1] == s[curr_j_2 + 1]:
                    curr_i_2 -= 1
                    curr_j_2 += 1
                    ans = max(curr_j_2 - curr_i_2 + 1, ans)
            if curr_j < len(s) -1:
                curr_i_2 = curr_i
                curr_j_2 = curr_j + 1
                ans = max(curr_j_2 - curr_i_2 + 1, ans)

                while  curr_i_2 > 0 and curr_j_2 < len(s) - 1 and s[curr_i_2 - 1] == s[curr_j_2 + 1]:
                    curr_i_2 -= 1
                    curr_j_2 += 1
                    ans = max(curr_j_2 - curr_i_2 + 1, ans)
            self.res = max(self.res, ans)
        
        for i in range(len(s)):
            build_out(i, i)
            if i < len(s) - 1 and s[i] == s[i + 1]:
                build_out(i, i + 1)

        return self.res