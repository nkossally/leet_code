class Solution:
    def findScore(self, nums: List[int]) -> int:
        marked_indices = set()
        count = 0
        with_indices = [ [num, i] for i, num in enumerate(nums) ]
        with_indices.sort(key = lambda x : x[0])
        print(with_indices)
        while len(marked_indices) < len(nums):
            while len(with_indices) and with_indices[0][1] in marked_indices:
                with_indices.pop(0)
            if len(with_indices[0]) == 0:
                return count
            elem = with_indices.pop(0)
            count += elem[0]
            idx = elem[1]
            l = idx -1
            r = idx + 1
            marked_indices.add(idx)
            if l >= 0 and l < len(nums):
                marked_indices.add(l)
            if r >= 0 and r < len(nums):
                marked_indices.add(r)
        return count