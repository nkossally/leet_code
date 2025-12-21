class Solution:
    def minimumPartitionFast(self, s: str, k: int) -> int:
       
        if k < 10: return len(s) if k >= int(max(s)) else -1
        
        k, ans = str(k), 0
        digits = len(k)

        while s:
            s = s[digits:] if s[:digits] <= k else s[digits-1:]
            ans+= 1

        return ans

    def minimumPartition(self, s: str, k: int) -> int:
        mem = [{} for _ in range(len(s))]

        def recur(idx, num_str):
            if len(num_str) and int(num_str) > k:
                return float("inf")
            if idx == len(s):
                increment = 1 if len(num_str) else 0
                return increment
            if num_str in mem[idx]:
                return mem[idx][num_str]
            way_1 = float("inf")

            if len(num_str):
                way_1 = 1 + recur( idx +1, s[idx])
            way_2 = recur(idx +1, num_str[:] + s[idx])
            min_way = min(way_1, way_2)
            mem[idx][num_str] = min_way
            return min_way
            
        res = recur(0, "")
        return res if res != float("inf") else -1
