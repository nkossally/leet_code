class Solution:
    def findIndices(self, nums: List[int], indexDifference: int, valueDifference: int) -> List[int]:
        n = len(nums)
        maxValuesFromRight = [0] * n
        minValuesFromRight = [0] * n
        ans = [-1, -1]

        maxValuesFromRight[n - 1] = nums[n - 1]
        minValuesFromRight[n - 1] = nums[n - 1]

        for i in range(n - 2, -1, -1):
            maxValuesFromRight[i] = max(nums[i], maxValuesFromRight[i + 1])
            minValuesFromRight[i] = min(nums[i], minValuesFromRight[i + 1])

        for i in range(n):
            j = i + indexDifference
            if j < n and (abs(nums[i] - maxValuesFromRight[j]) >= valueDifference or abs(nums[i] - minValuesFromRight[j]) >= valueDifference):
                ans[0] = i
                for k in range(j, n):
                    if abs(nums[i] - nums[k]) >= valueDifference:
                        ans[1] = k
                        break
                break

        return ans