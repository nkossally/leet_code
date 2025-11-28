class Solution(object):
    def countQuadruplets(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        # cnt[j] stores the number of triplets i,j, k such that nums[i] < nums[k ] < nums[j] with i < j < k
        cnt = [0] * n
        ans = 0
        for j in range(n):
            # keep track of the count of indices below j with nums smaller than nums at j
            prev_small = 0
            for i in range(j):
                if nums[j] > nums[i]:
                    prev_small += 1
                    # for all triplets with i as the second index, we can now add j to form a quad, so add cnt[i] to the answer
                    ans += cnt[i]
                elif nums[j] < nums[i]:
                    cnt[i] += prev_small
        return ans


    # passes 117/121
    def countQuadrupletsSlow(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        # cnt[j] stores the number of triplets i,j, k such that nums[i] < nums[k ] < nums[j] with i < j < k
        cnt = [0] * n
        ans = 0

        for k in range(n):
            for j in range(k):
                if nums[k] > nums[j]:
                    ans += cnt[j]
                else:
                    for i in range(j):
                        if nums[k] > nums[i]:
                            cnt[j] += 1

        return ans