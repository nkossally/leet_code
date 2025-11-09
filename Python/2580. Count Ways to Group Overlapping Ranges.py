class Solution:
    def countWays(self, ranges: List[List[int]]) -> int:

        def combine(a, b):
            if not a:
                return b
            if not b:
                return a
            return [min(a[0], b[0]), max(a[1], b[1])]

        def ranges_overlap(a, b):
            if not a:
                return False
            if not b:
                return False
            return (b[0] >= a[0] and b[0] <= a[1]) or (a[0] >= b[0] and a[0] <= b[1])

        curr_ranges = ranges
        made_change = True
        while made_change:
            made_change = False
            new_ranges = []
            idx = 0
            while idx < len(curr_ranges):
                range_1 = curr_ranges[idx]
                i = 0
                while i < len(new_ranges):
                    range_2 = new_ranges[i]
                    if ranges_overlap(range_1, range_2):
                        new_range = combine(range_1, range_2)
                        new_ranges[i] = new_range
                        made_change = True
                        break


                    i += 1
                if i == len(new_ranges):
                    new_ranges.append(range_1)
                idx += 1
            curr_ranges = new_ranges


        return 2 ** len(curr_ranges) % (10 **9 + 7)
