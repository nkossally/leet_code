class Solution:
    def maximumSumOfHeights(self, heights: List[int]) -> int:
        def get_total(total, max_idx):
            curr_max = heights[max_idx]
            idx = max_idx - 1
            max_from_right = []
            while idx >= 0:
                curr_max = min(curr_max, heights[idx] )
                max_from_right.insert(0, curr_max)
                idx -= 1
            curr_max = heights[max_idx]
            idx = max_idx + 1
            max_from_left = []
            while idx < len(heights):
                curr_max = min(curr_max, heights[idx] )
                max_from_left.append(curr_max)
                idx += 1
            for i, num in enumerate(heights):
                if i < max_idx:
                    if heights[i] > max_from_right[i]:
                        total -= heights[i] - max_from_right[i]
                elif i > max_idx:
                    transform_i = i - max_idx - 1
                    if heights[i] > max_from_left[transform_i]:
                        total -= heights[i] - max_from_left[transform_i]
            return total
        
        max_val = float("-inf")
        total = sum(heights)
        for idx in range(len(heights)):
            max_val = max(max_val, get_total(total, idx))
        return max_val
        