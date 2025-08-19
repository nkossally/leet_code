from collections import Counter
from math import prod
class Solution:
    def countKSubsequencesWithMaxBeauty(self, s: str, k: int) -> int:

        def get_mod(num):
            return num % (10 ** 9 + 7)
        def choose(n, k):
            higher = max(k, n - k)
            lower = min(k, n - k)
            res = 1
            factor = n
            while factor > higher:
                res *= factor
                factor -= 1
            factor = 2
            while factor <= lower:
                res /= factor
                factor += 1
            return int(get_mod(res))

        counts = Counter(s)
        values = sorted(counts.values(), reverse=True)
        if k > len(values):
            return 0
        last_count = 0
        select_count = 0
        val = values[k -1]
        idx = k
        while idx < len(values) and values[idx] == val:
            last_count += 1
            idx += 1
        sub_list = values[0: k]
        while sub_list and sub_list[-1] == val:
            sub_list.pop()
            select_count += 1
            last_count += 1
        print("sub_list",sub_list, "values", values, "last_count", last_count, "select_count", select_count)
                
        res = prod(sub_list) * (val ** select_count) * choose(last_count, select_count)

        return get_mod(res)

s = "inqlawbzdevmtlurffuzhpgyks"
k = 13
obj = Solution()
print(obj.countKSubsequencesWithMaxBeauty(s, k))

