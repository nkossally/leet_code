class Solution:
    def maxFrequencyScore(self, nums: List[int], k: int) -> int:
        counts_original = {}
        min_num = float("inf")
        max_num = float("-inf")
        for num in nums:
            if num not in counts_original:
                counts_original[num] = 0
            min_num = min(min_num, num)
            max_num = max(max_num, num)
            counts_original[num] += 1
        
        if len(counts_original.keys()) == 1:
            return list(counts_original.values())[0]
        
        def get_next_key(counts, target):
            next_key = None
            best_dist = float("inf")

            for key in counts.keys():
                dist = abs(target - key)
                if key != target and dist < best_dist:
                    best_dist = dist
                    next_key = key
            return next_key

        

        def get_count(counts, target, changes):
            if changes == k:
                return counts[target]

            next_key = get_next_key(counts, target)
            if next_key == None:
                return counts[target]

            diff = abs(target - next_key)
            
            if diff + changes > k:
                return counts[target]
            
            max_key_count = int(floor(k - changes)/diff)
            
            key_count = min(counts[next_key],max_key_count )

            counts[next_key] -= key_count
            if counts[next_key] == 0:
                del counts[next_key]  

            counts[target] += key_count             
            return get_count(counts, target, changes + diff * key_count)
        
        max_count = 0
        targets = counts_original.keys()
        for target in targets:
            counts_cpy = counts_original.copy()
            count = get_count(counts_cpy, target, 0)
            max_count = max(max_count, count) 
        return max_count

            
        