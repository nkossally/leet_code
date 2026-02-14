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
        
