class Solution:
    def longestBalanced(self, s: str) -> int:
        one_count = 0
        zero_count = 0
        ones = [0]
        zeros =[0]
        
        for char in s:
            if char == "1":
                one_count += 1
            else:
                zero_count += 1
            ones.append(one_count)
            zeros.append(zero_count)

        def has_another(char, i, j):
            # zero_last = 
            if char == "1":
                if ones[-1] > ones[j]:
                    return True
                elif ones[i -1] > 0:
                    return True
            else:
                if zeros[-1] > zeros[j]:
                    return True
                elif zeros[i -1] > 0:
                    return True
            return False
        
        res = 0
        for i in range(1, len(s) + 1):
            for j in range(i + 1, len(s) + 1, 2):
                one_count = ones[j] - ones[i - 1]
                zero_count =  zeros[j] - zeros[i - 1]
                diff = abs(one_count - zero_count)
                min_count = min(one_count, zero_count)

                if one_count == zero_count:
                    res = max(res, j - i + 1 )
                elif diff == 2:
                    if one_count == min_count and has_another("1", i, j):
                        res = max(res, j - i + 1)
                    elif zero_count == min_count and has_another("0", i, j):

                        res = max(res, j - i + 1)
        return res

        