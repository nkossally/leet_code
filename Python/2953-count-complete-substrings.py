class Solution:
    def countCompleteSubstrings(self, word: str, k: int) -> int:
    
        def increment_counts(counts, letter):
            if letter not in counts:
                counts[letter] = 0
            counts[letter] += 1

        valid_sts_count = 0

        for i in range(len(word)):
            counts = {}
            k_nums = set()
            for j in range(i, len(word)):
                letter = word[j]
                if j > i:
                    if abs(ord(letter) - ord(word[j - 1]) ) > 2:
                        break

                increment_counts(counts, letter)
                if counts[letter] == k:
                    k_nums.add(letter)
                elif letter in k_nums:
                    k_nums.remove(letter)
                if len(counts.keys()) == len(k_nums):
                    valid_sts_count += 1
        return valid_sts_count

