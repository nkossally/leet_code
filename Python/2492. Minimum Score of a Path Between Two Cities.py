class Solution:
    def minScore(self, n: int, roads: List[List[int]]) -> int:
        roads_dict = defaultdict(lambda: defaultdict(lambda: float("inf")))
        for road_1, road_2, dist in roads:
            roads_dict[road_1][road_2] = dist
            roads_dict[road_2][road_1] = dist

        made_change = True
        while made_change:
            made_change = False

            for i in range(1, n + 1):
                if n not in roads_dict[i]:
                    roads_dict[i][n] = float("inf")
                for road, dist in roads_dict[i].items():
                    min_dist = min(roads_dict[i][n], min(roads_dict[i][road], roads_dict[road][n]))

                    if min_dist < roads_dict[i][n]:
                        made_change = True
                        roads_dict[i][n] = min_dist
                    
        return roads_dict[1][n]
        
    def minScore2(self, n: int, roads: List[List[int]]) -> int:
        roads_dict = defaultdict(lambda: defaultdict(lambda: float("inf")))
        max_cost = 0
        min_1_cost = float("inf")
        for road_1, road_2, dist in roads:
            roads_dict[road_1][road_2] = dist
            roads_dict[road_2][road_1] = dist
            max_cost = max(max_cost, dist)
            if road_1 == 1 or road_2 == 1:
                min_1_cost = min(min_1_cost, dist)

        res = float("inf")
        stack = [ [n, max_cost, set([n])]]
        while stack:
            node, cost, seen = stack.pop()

            if node == 1:
                res = min(res, cost)
                continue
            for other_node, other_dist  in roads_dict[node].items():
                if other_node not in seen:
                    seen_cpy = seen.copy()
                    seen_cpy.add(other_node)
                    resolved_dist = other_dist if other_node != 1 else min_1_cost
                    stack.append([other_node, min(cost, resolved_dist), seen_cpy])
        return res
