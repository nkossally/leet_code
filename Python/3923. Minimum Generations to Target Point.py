from math import floor
from typing import List, Set

class Solution:
    def minGenerations(self, points: List[List[int]], target: List[int]) -> int:
        def is_between(num, lower, upper):
            return num >= lower and num <= upper
        
        def setify(data: List[List[int]]) -> Set[str]:
            """Convert [[1,2],[3,4]] -> {'1,2', '3,4'}"""
            return {",".join(map(str, lst)) for lst in data}


        def listify(data: Set[str]) -> List[List[int]]:
            """Convert {'1,2', '3,4'} -> [[1,2], [3,4]]"""
            return [[int(x) for x in s.split(",")] for s in data]
            
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
            new_points = set()
            old_set = setify(old)
            # print("old", old)
            # print("old set", old_set)
            # print("new", new)
            for i in range(len(old)):
                for j in range(len(new)):
                    a, b, c = old[i]
                    d, e, f = new[j]
                    arr = [floor((a + d)/2), floor((b + e)/2),floor((c + f)/2)]
                    arr_str = ",".join(map(str, arr))
                    if arr_str not in old_set:
                        new_points.add(arr_str)
                    if arr == target:
                        return [True, []]                  
            for i in range(len(new)):
                for j in range(i + 1, len(new)):
                    a, b, c = new[i]
                    d, e, f = new[j]
                    if a==d and b == e and c == f:
                        continue
                    arr = [floor((a + d)/2), floor((b + e)/2),floor((c + f)/2)]
                    arr_str = ", ".join(map(str, arr))
                    if arr_str not in old_set:
                        new_points.add(arr_str)                    
                    if arr == target:
                        return [True, []]
            # print("new_points", new_points)
            # print("list new", [listify(new_points)])
            return [False] + [listify(new_points)]
        
        count = 0
        new_points = points
        old_points = []

        while True:
            count += 1
            found, newest_points = handle_generation(old_points, new_points)
            if found:
                return count
            if len(newest_points) == 0:
                return -1
            else:
                old_points += new_points
                new_points = newest_points
            if count > 13:
                return -1

    def minGenerationsFast(self, points: List[List[int]], target: List[int]) -> int:
        def is_between(num, lower, upper):
            return num >= lower and num <= upper
        max_a, max_b, max_c = points[0]
        min_a, min_b, min_c = points[0]
        point_set = set()
 
        for a, b, c in points:
            point_set.add(str([a,b,c]))
            if [a, b,c] == target:
                return 0
            max_a = max(max_a, a)
            min_a = min(min_a, a)
            max_b = max(max_b, b)
            min_b = min(min_b, b)
            max_c = max(max_c, c)
            min_c = min(min_c, c)
        
        target_x, target_y, target_z = target
        if not (is_between(target_x, min_a, max_a) and is_between(target_y, min_b, max_b) and is_between(target_z, min_c, max_c)):
            return -1
       
        count = 0
        new_points = []

        while True:
            count += 1
            for i in range(len(points)):
                for j in range(i + 1, len(points)):
                    a, b, c = points[i]
                    d, e, f = points[j]
                    m = (a + d)//2
                    n = (b + e)//2
                    o = (c + f)//2
                    midpoint = [m, n, o]
                    if midpoint == target:
                        return count
                    point_str = str(midpoint)
                    if point_str not in point_set:
                        point_set.add(point_str)
                        new_points.append(midpoint)
            if len(new_points) == 0:
                return -1
            points += new_points
            new_points = []
             
    
points = [[3,2,3],[5,5,4],[0,5,0],[4,6,2],[3,6,3],[3,1,2],[6,4,1]]
target = [2,3,4]
sol = Solution()
print(sol.minGenerations(points, target))
print(sol.minGenerationsFast(points, target))