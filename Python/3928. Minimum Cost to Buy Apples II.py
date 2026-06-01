from collections import defaultdict
from typing import List
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
            connections[u][v] = [cost, tax * cost]
            connections[v][u] = [cost, tax * cost]

        costs = {i : defaultdict(lambda: float("inf")) for i in range(n)}
        tax_costs = {i : defaultdict(lambda: float("inf")) for i in range(n)}

        def get_all_paths(path, cost, tax_cost):
            curr_node = path[-1]
            if len(path) > 1:
                costs[path[0]][path[-1]] = min(costs[path[0]][path[-1]], cost)
                tax_costs[path[0]][path[-1]] = min(tax_costs[path[0]][path[-1]], tax_cost)

            path_set = set(path)
            for adj_node in connections[curr_node]:
                if adj_node not in path_set:
                    new_cost = cost + connections[path[-1]][adj_node][0]
                    new_tax_cost = tax_cost + connections[path[-1]][adj_node][1]

                    get_all_paths(path[:] + [adj_node], new_cost, new_tax_cost)
        
        for node in range(n):
            get_all_paths([node], 0, 0)

        res = []

        for i in range(n):
            min_cost = prices[i]
            for j in costs:
                cost = costs[i][j]
                tax_cost = tax_costs[i][j]
                min_cost = min(min_cost, cost + tax_cost + prices[j])

            res.append(min_cost)


        return res
        