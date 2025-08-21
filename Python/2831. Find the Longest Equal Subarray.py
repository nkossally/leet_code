class Solution:
    def longestEqualSubarray(self, nums: List[int], k: int) -> int:
        def get_max(indices):
            res = 1
            curr_res = 1
            count = 0
            idx = 0
            for i in range(len(indices)):
                if i > 0 and idx >= i:
                    count -= indices[i] - indices[i - 1] - 1
                    curr_res -= 1
                else:
                    count = 0
                    idx = i
                    curr_res = 1
                while idx < len(indices) - 1:
                    if indices[idx + 1] - indices[idx] - 1 + count <= k:
                        curr_res += 1
                        count +=  (indices[idx + 1] - indices[idx] - 1)
                        idx += 1

                    else:
                        break
                res = max(curr_res, res)
            return res
        
        num_to_indices = defaultdict(list)
        for i, num in enumerate(nums):
            num_to_indices[num].append(i)
        
        res = float("-inf")
        for num in num_to_indices.keys():
            curr_res = get_max(num_to_indices[num])
            res = max(res, curr_res)

        return res
