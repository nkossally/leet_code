from collections import Counter

class Solution(object):
    def sortVowels(self, s):
        """
        :type s: str
        :rtype: str
        """

        vowels = ["a", "e", "i", "o", "u"]
        valid_vowels = []
        for v in vowels:
            if v in s:
                valid_vowels.append(v)
        counter = Counter(s)

        length = len(s)

        valid_vowels.sort(key=lambda v: -counter[v]*length + s.index(v))

        ordered_vowels = ""
    
        for vowel in valid_vowels:
            for _ in range(counter[vowel]):
                ordered_vowels += vowel
        result = ""
        vowel_idx = 0
        for letter in s:
            if letter in valid_vowels:
                result += ordered_vowels[vowel_idx]
                vowel_idx += 1
            else:
                result += letter

            
        return result