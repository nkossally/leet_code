class Solution:
    def beautifulSubstringsSlow(self, s: str, k: int) -> int:
        vowels = set(["a", "e", "i", "o", "u"])
        v_counts = [0]
        c_counts = [0]
        

        for i in range(len(s)):
            if s[i] in vowels:
                v_counts.append(v_counts[-1] + 1)
                c_counts.append(c_counts[-1])
            else:
                v_counts.append(v_counts[-1])
                c_counts.append(c_counts[-1] + 1)

        total = 0
        for i in range(len(s) + 1):
            for j in range(i + 1, len(s) + 1):
                v_count = v_counts[j] - v_counts[i]
                c_count = c_counts[j] - c_counts[i]
                if v_count == c_count and v_count * c_count % k == 0:
                    total += 1
        return total