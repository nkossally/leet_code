class Solution:
    def numberOfSetsFast(self, n: int, maxDistance: int, roads: List[List[int]]) -> int:
        ans = 0
        for i in range(1 << n):
            g = [[float('inf')] * n for _ in range(n)]

            for x, y, w in roads:
                if ((i >> x) & 1) and ((i >> y) & 1):
                    g[x][y] = min(g[x][y], w)
                    g[y][x] = min(g[y][x], w)

            for j in range(n):
                g[j][j] = 0

            for p in range(n):
                for q in range(n):
                    for k in range(n):
                        g[q][k] = min(g[q][k], g[q][p] + g[p][k])

            ok = 1
            for j in range(n):
                for k in range(n):
                    if ((i >> j) & 1) and ((i >> k) & 1):
                        ok &= 1 if g[j][k] <= maxDistance else 0

            ans += ok
        return ans


class Solution:
    def numberOfSets(self, n: int, maxDistance: int, roads: List[List[int]]) -> int:
        node_to_node = [{} for _ in range(n)]
        for road in roads:
            a, b, w = road
            if b not in node_to_node[a]:
                 node_to_node[a][b] = float("inf")
            if a not in node_to_node[b]:
                 node_to_node[b][a] = float("inf")
            node_to_node[a][b] = min(node_to_node[a][b], w)
            node_to_node[b][a] = min(node_to_node[b][a], w)

        def has_all_nums(input_arr):

            all_nums = [0,1, 2,]
            for num in all_nums:
                if num not in input_arr:
                    return False
            return True

        valid_sets = []
        paths = []
        path_weight_sums = []
        queue = []
        weight_queue = []
        for road in roads:
            queue.append([road[0], road[1]])
            queue.append([road[1], road[0]])
            weight_queue.append([0, road[2]])
            weight_queue.append([0, road[2]])

        while queue :
            path = queue.pop(0)
            path_weight_sum = weight_queue.pop(0)
            paths.append(path)
            path_weight_sums.append(path_weight_sum)
            node_1 = path[-1]
            connections = node_to_node[node_1]
            for node_2 in connections:
                if node_2 not in path:
                    new_sum = path_weight_sum[-1] + connections[node_2]
                    if new_sum <= maxDistance:
                        new_path = path[:] + [node_2]
                        queue.append(new_path)
                        new_path_weight_sum =path_weight_sum[:]  + [new_sum]
                        weight_queue.append(new_path_weight_sum)

        # print(paths)

        def get_is_path_valid(removed, path):
            for node in path:
                if node in removed:
                    return False
            return True
        def get_max_distance( removed):
            max_distance = 0

            for i in range(n):
                if i in removed:
                    continue

                for j in range(i + 1, n):
                    curr_min_distance = float("inf")
                    if j in removed:
                        continue
                    for index, path in enumerate( paths):
                        if ((path[0] == i and path[-1] == j) or (path[0] == j and path[-1] == i)) and get_is_path_valid(removed, path):
                            weight_sum = path_weight_sums[index][-1]
                            curr_min_distance = min(curr_min_distance, weight_sum)
                
                    if curr_min_distance == float("inf"):
                        return float("inf")
                    max_distance = max(max_distance, curr_min_distance)
            return max_distance 
        def get_valid_sets(idx, removed):
            if idx == n:
                max_distance = get_max_distance(removed)

            
                if max_distance <= maxDistance:
                    valid_sets.append(list(removed))
                return
            
            cpy = set(list(removed))
            cpy.add(idx)
            get_valid_sets(idx + 1, removed)
            get_valid_sets(idx + 1, cpy)
        get_valid_sets(0, set())
        # print("valid_sets", valid_sets)
        return len(valid_sets)



    
    