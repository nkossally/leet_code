class Solution:
    def countValidSubsetsSlow(self, parent: List[int], nums: List[int], k: int) -> int:

        incompatible = {i : set() for i in range(-1, len(nums))}
        self.res = 0

        for i, par in enumerate(parent):
            incompatible[i].add(par)
            incompatible[par].add(i)

        def recur(i, curr_sum, selected ):
            if i == len(nums):
                if len(selected) and curr_sum % k == 0:
                    self.res += 1
                return
            
            j = 0
            while j < len(selected):
                node = selected[j]
                if node in incompatible[i]:
                    break
                j += 1
            
            recur(i + 1, curr_sum, selected[:])

            if j == len(selected):
                new_selected = selected[:] + [i]
                recur(i + 1, curr_sum + nums[i], new_selected)
        recur(0, 0, [])
        return self.res
