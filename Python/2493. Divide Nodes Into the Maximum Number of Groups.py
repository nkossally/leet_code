import copy
from collections import defaultdict, deque
from typing import List

class Solution:
    def magnificentSets(self, n: int, edges: List[List[int]]) -> int:
        connections = defaultdict(list)
        for a, b in edges:
            connections[a].append(b)
            connections[b].append(a)
        
        nodes = list(range(1, n + 1))
        nodes.sort(key = lambda node: -len(connections[node]))
        
        def recur(node_idx, groups):
            print(f"node_idx: {node_idx}, groups: {groups}")
            
            if node_idx == n:
                return len(groups)
            node = nodes[node_idx]
            
            positions = []

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
                res = max(res, recur(node_idx + 1, cpy))

            return res
        res = recur(0, [])
        if res == float("-inf"):
            return -1
        return res


    def magnificentSetsFast(self, n: int, edges: List[List[int]]) -> int:
        g = [[] for _ in range(n)]
        for a, b in edges:
            g[a - 1].append(b - 1)
            g[b - 1].append(a - 1)
        d = defaultdict(int)
        for i in range(n):
            q = deque([i])
            dist = [0] * n
            dist[i] = mx = 1
            root = i
            while q:
                a = q.popleft()
                root = min(root, a)
                for b in g[a]:
                    if dist[b] == 0:
                        dist[b] = dist[a] + 1
                        mx = max(mx, dist[b])
                        q.append(b)
                    elif abs(dist[b] - dist[a]) != 1:
                        return -1
            d[root] = max(d[root], mx)
        return sum(d.values())

n = 92

edges = [[67,29],[13,29],[77,29],[36,29],[82,29],[54,29],[57,29],[53,29],[68,29],[26,29],[21,29],[46,29],[41,29],[45,29],[56,29],[88,29],[2,29],[7,29],[5,29],[16,29],[37,29],[50,29],[79,29],[91,29],[48,29],[87,29],[25,29],[80,29],[71,29],[9,29],[78,29],[33,29],[4,29],[44,29],[72,29],[65,29],[61,29]]

print(Solution().magnificentSetsFast(92, edges))