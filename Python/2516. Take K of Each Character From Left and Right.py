class Solution:
    def takeCharacters(self, s: str, k: int) -> int:
        if k == 0:
            return 0
        a_left = []
        a_right = []
        b_left = []
        b_right = []
        c_left = []
        c_right = []
        a_left_count = 0
        a_right_count = 0
        b_left_count = 0
        b_right_count = 0
        c_left_count = 0
        c_right_count = 0


        for i in range(len(s)):
            j = len(s) - 1 - i
            if s[i] == "a":
                a_left_count += 1 
            elif s[i] == "b":
                b_left_count += 1
            else:
                c_left_count += 1

            if s[j] == "a":
                a_right_count += 1 
            elif s[j] == "b":
                b_right_count += 1
            else:
                c_right_count += 1
            
            a_left.append(a_left_count)
            a_right.insert(0, a_right_count)
            b_left.append(b_left_count)
            b_right.insert(0, b_right_count)
            c_left.append(c_left_count)
            c_right.insert(0, c_right_count)

        
        if a_left[-1] < k or b_left[-1] < k or c_left[-1] < k:
            return -1
        min_count = float("inf")
        for i in range(len(s)):
            if a_left[i] >= k and b_left[i] >= k and c_left[i] >= k:
                min_count = min(min_count, i + 1)
            if a_right[i] >= k and b_right[i] >= k and c_right[i] >= k:
                min_count = min(min_count, len(s) - i)
            for j in range(i + 1, len(s)):
                a_total = a_left[i] + a_right[j]
                b_total = b_left[i] + b_right[j]
                c_total = c_left[i] + c_right[j]
                if a_total >=k and b_total >= k and c_total >=k:
                    # print("i", i, "j", j, "a_total", a_total, a_total, a_total)
                    count = i + 1 + len(s) - j
                    min_count = min(min_count, count)

        return -1 if min_count == float("inf") else min_count
    
    def takeCharactersFast(self, s: str, k: int) -> int:
        # Total counts
        count = [0, 0, 0]
        for c in s:
            count[ord(c) - ord('a')] += 1

        if min(count) < k:
            return -1

        # Sliding Window
        res = float("inf")
        l = 0
        for r in range(len(s)):
            count[ord(s[r]) - ord('a')] -= 1

            while min(count) < k and l <= r:
                count[ord(s[l]) - ord('a')] += 1
                l += 1
            res = min(res, len(s) - (r - l + 1))
        return res