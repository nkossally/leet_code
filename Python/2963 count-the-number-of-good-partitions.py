class Solution:
    def numberOfGoodPartitions(self, nums: List[int]) -> int:
        num_to_interval = {}
        for i, num in enumerate(nums):
            if num not in num_to_interval:
                num_to_interval[num] = [i, i]
            else:
                num_to_interval[num][1] = i

        
        def get_intervals_overlap(a, b):

            return (a[0] >= b[0] and a[0] <= b[1]) or (b[0] >= a[0] and b[0] <= a[1])
        
        intervals = list(num_to_interval.values())
        intervals.sort(key=lambda elem: elem[0])

        i = 1
        while i < len(intervals):
            prev = intervals[i - 1]
            curr = intervals[i]
            if get_intervals_overlap(prev, curr):
                intervals[i - 1][1] = max(prev[1], curr[1])
                intervals.pop(i)
            else:
                i+= 1
        # partitions_count = [0]
        def get_mod(num):
            return num % (10 ** 9 + 7)
        print(len(intervals))

        curr_partitions_sum = 0
        for i in range( len(intervals)):

            curr_partitions_sum = get_mod(2*curr_partitions_sum + 1)
        return get_mod(int((curr_partitions_sum - 1)/2) + 1)
    
    def numberOfGoodPartitionsFast(self, nums: List[int]) -> int:
        last = {a: i for i,a in enumerate(nums)}
        res = 1
        mod = 10 ** 9 + 7
        j = 0
        for i,a in enumerate(nums):
            if i > j:
                res = res * 2 % mod
            j = max(j, last[a])
        return res