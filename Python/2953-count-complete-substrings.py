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

    def countCompleteSubstringsFast(self, word: str, k: int) -> int:
        def calc(s):
            res = 0
            v = len(s)
            for i in range(1, 27):
                if i * k > v: break
                l = i * k
                cnt = Counter(s[:l])
                freq = Counter(cnt.values())
                
                if freq[k] == i: res += 1
                
                for idx in range(v - l):
                    freq[cnt[s[idx]]] -= 1
                    cnt[s[idx]] -= 1
                    freq[cnt[s[idx]]] += 1

                    freq[cnt[s[idx+l]]] -= 1
                    cnt[s[idx+l]] += 1
                    freq[cnt[s[idx+l]]] += 1

                    if freq[k] == i: res += 1
            return res
        
        idx = 0
        ans = 0
        n = len(word)
        for i in range(1, n):
            if abs(ord(word[i]) - ord(word[i-1])) > 2:
                ans += calc(word[idx:i])
                idx = i
        ans += calc(word[idx:])
        return ans


