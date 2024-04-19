class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """

        last_idx = {}
        length = 0
        max_length = 0


        for i in range(len(s)):
            letter = s[i]
            if letter not in last_idx:
                last_idx[letter] = i
                length += 1
                max_length = max(length, max_length)
            else:
                prev_idx = last_idx[letter]
                start = i - length
                for j in range(start, prev_idx):
                    del last_idx[s[j]]
                last_idx[letter] = i
                length = i - prev_idx
                # max_length = max(length, max_length)
        
            
            # print(letter, i, length, max_length)


        return max_length        


print(Solution.lengthOfLongestSubstring(None, "abcabcbb"))