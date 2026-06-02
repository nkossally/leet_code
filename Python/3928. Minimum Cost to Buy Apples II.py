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

    def minCostFastDijkstraAlgo(self, n, prices, roads):
        """
        :type n: int
        :type prices: List[int]
        :type roads: List[List[int]]
        :rtype: List[int]
        """
        # normal travel graph
        emptyGraph = [[] for _ in range(n)]

        # carrying apples graph
        carryGraph = [[] for _ in range(n)]

        for u, v, cost, taxi in roads:

            emptyGraph[u].append((v, cost))
            emptyGraph[v].append((u, cost))

            carry_cost = cost * taxi

            carryGraph[u].append((v, carry_cost))
            carryGraph[v].append((u, carry_cost))

        INF = 10**18

        ans = [0] * n

        emptyDist = [INF] * n
        carryDist = [INF] * n

        for src in range(n):

            # EMPTY TRAVEL
            for i in range(n):
                emptyDist[i] = INF

            emptyDist[src] = 0

            pq = [(0, src)]

            while pq:

                d, u = heapq.heappop(pq)

                if d > emptyDist[u]:
                    continue

                for v, w in emptyGraph[u]:

                    if emptyDist[v] > d + w:

                        emptyDist[v] = d + w

                        heapq.heappush(
                            pq,
                            (emptyDist[v], v)
                        )

            # CARRYING APPLES
            for i in range(n):
                carryDist[i] = INF

            carryDist[src] = 0

            pq = [(0, src)]

            while pq:

                d, u = heapq.heappop(pq)

                if d > carryDist[u]:
                    continue

                for v, w in carryGraph[u]:

                    if carryDist[v] > d + w:

                        carryDist[v] = d + w

                        heapq.heappush(
                            pq,
                            (carryDist[v], v)
                        )

            # FIND BEST SHOP
            best = prices[src]

            for shop in range(n):

                if (emptyDist[shop] == INF or
                    carryDist[shop] == INF):
                    continue

                total = (
                    emptyDist[shop]
                    + carryDist[shop]
                    + prices[shop]
                )

                best = min(best, total)

            ans[src] = best

        return ans


    def minCostNotFastEnough(self, n, prices, roads):
        """
        :type n: int
        :type prices: List[int]
        :type roads: List[List[int]]
        :rtype: List[int]
        """
        inf = float("inf")
        costs = { i : defaultdict(lambda: inf) for i in range(n) }
        tax_costs = { i : defaultdict(lambda: inf) for i in range(n) }

        for a, b, cost, tax in roads:
            costs[a][b] = cost
            costs[b][a] = cost
            tax_costs[a][b] = cost * tax
            tax_costs[b][a] = cost * tax
        
        res = prices[:]
        for node in range(n):

            to_cost = [inf for _ in range(n)]
            to_cost[node] = 0
            to_cost_tax = [inf for _ in range(n)]
            to_cost_tax[node] = 0

            heap = [[node, 0]]

            while heap:
                node_2, cost_1 = heapq.heappop(heap)

                for node_3, cost_2 in costs[node_2].items():
                    if to_cost[node_3] > cost_1 + cost_2:
                        heapq.heappush(heap, [node_3, cost_1 + cost_2])
                        to_cost[node_3] = cost_1 + cost_2
            

            heap = [[node, 0]]

            while heap:
                node_2, cost_1 = heapq.heappop(heap)

                for node_3, cost_2 in tax_costs[node_2].items():
                    if to_cost_tax[node_3] > cost_1 + cost_2:
                        heapq.heappush(heap, [node_3, cost_1 + cost_2])
                        to_cost_tax[node_3] = cost_1 + cost_2
            
            for i in range(n):
                if to_cost[i] == inf or to_cost_tax[i] == inf:
                    continue
                total_cost = to_cost[i] + to_cost_tax[i] + prices[i]
                res[node] = min(res[node], total_cost)
        return res

