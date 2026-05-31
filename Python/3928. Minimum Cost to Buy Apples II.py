class Solution(object):
    def minCost(self, n, prices, roads):
        """
        :type n: int
        :type prices: List[int]
        :type roads: List[List[int]]
        :rtype: List[int]
        """
        connections = {i: {} for i in range(n)}
        for u, v, cost, tax in roads:
            connections[u][v] = [cost, tax]
            connections[v][u] = [cost, tax]

        paths = {i : defaultdict(list) for i in range(n)}

        def get_all_paths(path):
            curr_node = path[-1]
            if len(path) > 1:
                paths[path[0]][path[-1]].append(path)

            path_set = set(path)
            for adj_node in connections[curr_node]:
                if adj_node not in path_set:
                    get_all_paths(path[:] + [adj_node])
        
        for node in range(n):
            get_all_paths([node])

        res = []

        for i in range(n):
            min_cost = prices[i]
            for j in range(n):
                if j != i and prices[j] < prices[i]:
                    j_paths = paths[i][j]
                    to_min = float("inf")
                    back_min = float("inf")
                    for path in j_paths:
                        to_cost = 0
                        from_cost = 0
                        for idx, node in enumerate(path):
                            if idx == 0:
                                continue
                            prev = path[idx - 1]
                            cost, tax = connections[prev][node]
                            to_cost += cost
                            from_cost += cost * tax
                        to_min = min(to_min, to_cost)
                        back_min = min(back_min, from_cost)
                    min_cost = min(min_cost,prices[j] + to_min + back_min)
            res.append(min_cost)


        return res
        