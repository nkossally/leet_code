from heapq import heappop, heappush
class Solution(object):
    def maxScore(self, nums1, nums2, k):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :type k: int
        :rtype: int
        """
        total = res = 0
        h = []

        # both lists are the same. just showing zip works
        list_1 = list(zip(nums1, nums2))
        list_2 = [[nums1[i], nums2[i]] for i in range(len(list_1))]

        list_2.sort(key=lambda elem: -elem[1])

        # the list is ordered by the second value in the tuple, and the heap keeps the highest values of the initial value of each tuple

        for a,b in list_2:
            heappush(h, a)
            total += a
            # even if you pop A, total * b will be less than other values so illegitimate scores are never the result
            if len(h) > k:
                total -= heappop(h)
            if len(h) == k:
                res = max(res, total * b)
        return res
