import copy

class Solution:
    def magnificentSets(self, n: int, edges: List[List[int]]) -> int:
        connections = defaultdict(list)
        for a, b in edges:
            connections[a].append(b)
            connections[b].append(a)
        
        def recur(node, groups):
            if node == n + 1:
                return len(groups)
            
            positions = []
            bad_positions = set()

            for other in connections[node]:
                for idx, group in enumerate(groups):
                    if other in group:
                        if positions:
                            if positions[0] == idx - 1:
                                continue
                            elif len(positions) > 1 and positions[1] == idx - 1:
                                positions = [idx - 1]
                            elif positions[0] == idx + 1:
                                positions = [idx + 1]
                            else:
                                return float("-inf")
                        else:
                            positions = [idx -1, idx + 1]
            if len(positions) == 0:
                positions = list(range(-1, len(groups) + 1))

            res = float("-inf")
            for pos in positions:
                cpy = copy.deepcopy(groups)
                if pos == -1:
                    cpy.insert(0, [node])
                elif pos == len(groups):
                    cpy.append([node])
                else:
                    cpy[pos].append(node)
                res = max(res, recur(node + 1, cpy))

            return res
        res = recur(1, [])
        if res == float("-inf"):
            return -1
        return res