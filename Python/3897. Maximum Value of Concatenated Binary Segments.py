import heapq
class Solution:
    def maxValue(self, nums1: list[int], nums0: list[int]) -> int:
        mod = 10**9 + 7
        heap = []
        for i in range(len(nums0)):
            ones = nums1[i]
            zeros = nums0[i]
            priority = -ones
            if zeros == 0:
                priority = float("-inf")
            heapq.heappush(heap, [priority, -ones, zeros])
        res = 0
        while heap:
            priority, ones, zeros = heapq.heappop(heap)
            ones = -ones
            length = ones + zeros
            num = "1"*ones + "0"*zeros
            num = int(num, 2)
            res = res * 2**length + num
            res = res % mod
        return res
