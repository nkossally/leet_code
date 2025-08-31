class Solution:
    def longestValidSubstring(self, word: str, forbidden: List[str]) -> int:
        forbidden_set = set(forbidden)
        res = 0
        idx_to_max_end = {i:len(word) for i in range(len(word))}
        for i in range(len(word)):
            for j in range (i, len(word)):
                if word[i : j + 1] in forbidden_set:
                    for k in range(0, i + 1):
                        idx_to_max_end[k] = min(idx_to_max_end[k], j)
                    break
        
        res = 0
        for i in range(len(word)):
            res = max(res, idx_to_max_end[i] - i)
   
        return res
    
    def longestValidSubstringFast(self, word: str, forbidden: List[str]) -> int:
        forbidden_set = set(forbidden)
        res = 0
        right = len(word) - 1
        for left in range(len(word) - 1, -1, -1):
            for i in range(left, right + 1):
                if word[left: i + 1] in forbidden_set:
                    right = i - 1
                    break
            res = max(res, right - left + 1)
        return res
      