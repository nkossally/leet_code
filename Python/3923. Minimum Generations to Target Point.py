from math import floor
from typing import List

class Solution:
    def minGenerations(self, points: List[List[int]], target: List[int]) -> int:
        def is_between(num, lower, upper):
            return num >= lower and num <= upper
        
        max_a, max_b, max_c = points[0]
        min_a, min_b, min_c = points[0]
 
        for a, b, c in points:
            max_a = max(max_a, a)
            min_a = min(min_a, a)
            max_b = max(max_b, b)
            min_b = min(min_b, b)
            max_c = max(max_c, c)
            min_c = min(min_c, c)
        
        target_x, target_y, target_z = target
        if not (is_between(target_x, min_a, max_a) and is_between(target_y, min_b, max_b) and is_between(target_z, min_c, max_c)):
            return -1


        if target in points:
            return 0
        def handle_generation(old, new):
            new_points = []
            for i in range(len(old)):
                for j in range(len(new)):
                    a, b, c = old[i]
                    d, e, f = new[j]
                    arr = [floor((a + d)/2), floor((b + e)/2),floor((c + f)/2)]
                    new_points.append(arr)
                    if arr == target:
                        return [True] + [new_points]                    
            for i in range(len(new)):
                for j in range(i + 1, len(new)):
                    a, b, c = new[i]
                    d, e, f = new[j]
                    arr = [floor((a + d)/2), floor((b + e)/2),floor((c + f)/2)]
                    new_points.append(arr)
                    if arr == target:
                        return [True] + [new_points]
            return [False] + [new_points]
        
        count = 0
        new_points = points
        old_points = []

        while True:
            count += 1
            found, newest_points = handle_generation(old_points, new_points)
            if found:
                return count
            else:
                old_points += new_points
                new_points = newest_points
            if count > 5:
                return -1
