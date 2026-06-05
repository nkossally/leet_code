from math import floor
from typing import List

class Solution:
    def minGenerations(self, points: List[List[int]], target: List[int]) -> int:
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
