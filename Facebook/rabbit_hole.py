N = 4
M = 4
A = [1, 2, 3, 4]
B = [4, 1, 2, 1]

def get_best_count(num_people, num_links, start_points, end_points):
    connections = {}
    for i in range(len(start_points)):
        a = start_points[i]
        b = end_points[i]
        if a not in connections:
            connections[a] = set()
        connections[a].add(b)

    best_counts = []

    def get_best_count(curr, nums, rounds_without_new):
        best_counts.append(len(nums))
        if rounds_without_new >= num_people:
            return
        
        new_rounds_without_new = rounds_without_new + 1 if curr in nums else 0

        if curr in connections:
            for other_num in connections[curr]:
                new_nums = set(nums)
                new_nums.add(other_num)
                get_best_count(other_num, new_nums, new_rounds_without_new)
        
    for i in range(1, num_people + 1):
        get_best_count(i, { i }, 0)

    return max(best_counts)
  
        
get_best_count(N, M, A, B)

    
        
N = 5
M = 6
A = [3, 5, 3, 1, 3, 2]
B = [2, 1, 2, 4, 5, 4]

get_best_count(N, M, A, B)

N = 10
M = 9
A = [3, 2, 5, 9, 10, 3, 3, 9, 4]
B = [9, 5, 7, 8, 6, 4, 5, 3, 9]

get_best_count(N, M, A, B)
