from math import floor
from typing import List

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
            for i in range(len(old)):
                for j in range(len(new)):
                    a, b, c = old[i]
                    d, e, f = new[j]
                    arr = [floor((a + d)/2), floor((b + e)/2),floor((c + f)/2)]
                    arr_str = ", ".join(map(str, arr))
                    if arr_str not in old_set:
                        new_points.add(arr_str)
                    if arr == target:
                        return [True, []]                  
            for i in range(len(new)):
                for j in range(i + 1, len(new)):
                    a, b, c = new[i]
                    d, e, f = new[j]
                    arr = [floor((a + d)/2), floor((b + e)/2),floor((c + f)/2)]
                    arr_str = ", ".join(map(str, arr))
                    if arr_str not in old_set:
                        new_points.add(arr_str)                    
                    if arr == target:
                        return [True, []]
            return [False] + [listify(new_points)]
        
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
            if count > 7:
                return -1

    def minGenerationsFast(self, points: List[List[int]], target: List[int]) -> int:
        point_set=set()
        point_list=[]
        for p in points:
            string=f"{p[0]},{p[1]},{p[2]}"
            point_set.add(string)
            point_list.append(p)
            if p[0]==target[0] and p[1]==target[1] and p[2]==target[2]:
                return 0
        count=0
        while True:
            count+=1
            new_list=[]
            size=len(point_list)
            for i in range(size):
                for j in range(i+1,size):
                    a=point_list[i]
                    b=point_list[j]
                    if a[0]==b[0] and a[1]==b[1] and a[2]==b[2]:
                        continue
                    e=(a[0]+b[0])//2
                    f=(a[1]+b[1])//2
                    g=(a[2]+b[2])//2
                    string=f"{e},{f},{g}"
                    if string not in point_set:
                        point_set.add(string)
                        arr=[e,f,g]
                        if e==target[0] and f==target[1] and g==target[2]:
                            return count
                        new_list.append(arr)
            if not new_list:
                return -1
            point_list.extend(new_list)