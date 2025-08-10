class Solution:
    def minSizeSubarray(self, nums: List[int], target: int) -> int:
        arr_sum = sum(nums)
        multiple_count = floor(target / arr_sum) * len(nums)
        remainder = target % arr_sum
        if remainder == 0:
            return multiple_count

        partial_sums = [0]
        curr_sum = 0
        for i in range(2 * len(nums)):
            idx = i % len(nums)
            curr_sum += nums[idx]
            partial_sums.append(curr_sum)
        
        min_dist = float("inf")
        for i in range(len(partial_sums) - 1):
            max_j = min(len(partial_sums), i + min_dist)
            for j in range(i + 1, max_j):
                dist = j - i
                if partial_sums[j] - partial_sums[i] == remainder:
                    min_dist = min(min_dist, j - i)
        total =  min_dist + multiple_count

        
        return total if total != float("inf") else -1