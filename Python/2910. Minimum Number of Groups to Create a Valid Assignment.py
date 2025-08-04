# from collections import Counter
class Solution:
    def minGroupsForValidAssignment(self, balls: List[int]) -> int:
        counter = Counter(balls)
        min_count = float("inf")

        for count in counter.values():
            min_count = min(min_count, count)
        
        boxes = 0

        def try_min(min_count, num):
            box_limit = floor(num / (min_count + 1))

            for i in range(box_limit, -1, -1):
                leftover = num - i * (min_count + 1)
                other_count = leftover / min_count
                if leftover % min_count == 0:
                    return i + other_count 
            return 0
        
        total_boxes = 0
        while min_count:
            total_boxes = 0
            for count in counter.values():
                boxes = try_min(min_count, count)
                if not boxes:
                    total_boxes = 0
                    min_count -= 1
                    break
                total_boxes += boxes
            if total_boxes:
                break
        
        return int(total_boxes)
        