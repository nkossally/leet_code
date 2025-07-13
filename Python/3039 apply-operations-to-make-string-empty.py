class Solution:
    def lastNonEmptyString(self, s: str) -> str:
        letters = list("abcdefghijklmnopqrstuvwxyz")
        char_to_indices = {letter : [] for letter in letters}

        for idx, letter in enumerate(s):
            char_to_indices[letter].append(idx)
        max_len = 0
        for letter in letters:
            max_len = max(max_len, len(char_to_indices[letter]))
        
        remaining_arr = []
        for letter,arr in char_to_indices.items():
            if len(arr) == max_len:
                idx = arr[-1]
                heappush(remaining_arr, [idx, letter] )

        res = ""
        while remaining_arr:
            idx_and_letter =heappop(remaining_arr)
            res += idx_and_letter[1]

        
        return res
        