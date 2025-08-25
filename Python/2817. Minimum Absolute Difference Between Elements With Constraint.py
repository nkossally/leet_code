class Solution:
    def minAbsoluteDifference(self, nums: List[int], x: int) -> int:
        nums_and_indices = [[num, idx] for idx, num in enumerate(nums)]
        nums_and_indices.sort(key=lambda x : x[0])
        res = float("inf")
        for i, elem in enumerate(nums_and_indices):
            num, idx = elem
            j = i 
            while j < len(nums) and abs(nums_and_indices[j][1] - idx) < x:
                j += 1
            if j < len(nums):
                res = min(res, nums_and_indices[j][0] - num)
        return res
    
    def minAbsoluteDifferenceFast(self, nums: List[int], x: int) -> int:
        sortedNums = sorted((nums[i], i) for i in range(len(nums)))
        heapLeft, heapRight = [], []
        minDiff = float('inf')

        for i in range(len(sortedNums)):
            val, index = sortedNums[i]
            heapq.heappush(heapLeft, (index, val)) # min heap. smallest indices pop off (look for match on left side)
            heapq.heappush(heapRight, (-index, val)) # max heap. biggest indices pop off (look for match on right side)

            # because of sorting, everything in either heap is already less than val. so we just need to do an index check
            while heapLeft and heapLeft[0][0] + x <= index:# heapLeft we use to check whether current number can be the front half
                minDiff = min(minDiff, val - heapq.heappop(heapLeft)[1])
            while heapRight and heapRight[0][0] + x <= -index: # heapRight we use to check whether current number can be back half 
                minDiff = min(minDiff, val - heapq.heappop(heapRight)[1])
            # note that we don't mind popping these off, because we are always checking their distance with the closest valid partner
        return minDiff