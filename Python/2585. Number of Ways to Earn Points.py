class Solution:
    def waysToReachTarget(self, target: int, types: List[List[int]]) -> int:
        self.res = 0

        def get_to_target(curr_sum, idx):
            if curr_sum == target:
                self.res += 1
                return
            
            if idx == len(types):
                return

            count, num = types[idx]
            max_count = floor((target - curr_sum)/num)
            max_count = min(max_count, count)
            for i in range(0, max_count + 1):
                get_to_target(curr_sum + i*num, idx + 1)

        get_to_target(0, 0)

        return self.res