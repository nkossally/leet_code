class Solution:
    def minOperations(self, nums: List[int]) -> int:
        # the list must be composed of either two increasing lists or two decreasing lists. If not, then return -1
        if len(nums) <= 1:
            return 0

        def get_increasing_pivot():
            idx = 1
            pivot = None
            while idx < len(nums):
                if nums[idx] < nums[idx - 1]:
                    if pivot == None:
                        pivot = idx
                    else:
                        return -1
                idx += 1
            return pivot

        def get_decreasing_pivot():
            idx = 1
            pivot = None
            while idx < len(nums):
                if nums[idx] > nums[idx - 1]:
                    if pivot == None:
                        pivot = idx
                    else:
                        return -1
                idx += 1
            return pivot

        increasing_pivot = get_increasing_pivot()
        decreasing_pivot = get_decreasing_pivot()
        res_1 = float("inf")
        res_2 = float("inf")
        print("increasing_pivot", increasing_pivot, "decreasing_pivot", decreasing_pivot)
        if increasing_pivot != -1:
            if increasing_pivot == None:
                res_1 = 0
            else:
                way_1 = increasing_pivot if nums[0] > nums[-1] else float("inf")
                way_2 = increasing_pivot + 2 if nums[increasing_pivot] > nums[-1] else float("inf")
                print(increasing_pivot, increasing_pivot + 2)
                res_1 = min(way_1, way_2)
        if decreasing_pivot != -1:
            if decreasing_pivot == None:
                res_2 = 1
            else:
                way_1 = decreasing_pivot + 1 if nums[0] < nums[-1] else float("inf")
                way_2 = len(nums) - decreasing_pivot + 1 if nums[0] < nums[-1] else float("inf")
                res_2 = min(way_1, way_2 )
                print(decreasing_pivot + 1, len(nums) - decreasing_pivot + 1 )
        print("res_1", res_1, "res_2", res_2)
        res = min(res_1, res_2)
        return res if res != float("inf") else -1


        