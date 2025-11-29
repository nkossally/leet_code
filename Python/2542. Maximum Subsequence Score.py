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
        list_1 = list(zip(nums1, nums2))
        list_2 = [[nums1[i], nums2[i]] for i in range(len(list_1))]
        for a,b in sorted(list_2, key=lambda ab: -ab[1]):
            heappush(h, a)
            total += a
            if len(h) > k:
                total -= heappop(h)
            if len(h) == k:
                res = max(res, total * b)
        return res

arr = [1, 2, 3]
arr2 = ["a", "b", "c"]
arr3 = ["a", "b"]
list_1 = list(zip(arr, arr2))
list_2 = list(zip(arr, arr3))
print(list_1)
print(list_2)  # Output: [(1, 'a'), (2, '  # Output: [(1, 'a'), (2, '