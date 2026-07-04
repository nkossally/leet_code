class Solution(object):
    def mergeCharacters(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: str
        """
        i = 0
        while i < len(s):
            j = i + 1
            is_changed = False
            while j <= i + k and j < len(s):
                if s[i] == s[j]:
                    s = s[:j] + s[j + 1:]
                    is_changed = True
                else:
                    j += 1
            if is_changed and i > 0:
                i = 0
            else:
                i += 1
        return s
        