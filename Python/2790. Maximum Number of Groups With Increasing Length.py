class Solution:
    def maxIncreasingGroups(self, usageLimits: List[int]) -> int:
        heap = [[-count, i] for i, count in enumerate(usageLimits) ]
        heapq.heapify(heap)
        
        length = 1

        while heap:
            if len(heap) < length:
                return length - 1
            removed = []
            count = 0
            while count < length:
                curr = heapq.heappop(heap)
                count += 1
                curr[0] += 1
                if curr[0] != 0:
                    removed.append(curr)
            length += 1
            for elem in removed:
                heapq.heappush(heap, elem)


        return length - 1