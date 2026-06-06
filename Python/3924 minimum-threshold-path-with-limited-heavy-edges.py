from collections import deque
from typing import List

class Solution:
    def minimumThreshold(self, n: int, edges: List[List[int]], source: int, target: int, k: int) -> int:
        if source == target:
            return 0
        connections = [{} for _ in range(n)]

        weights_set = set()
        weights_set.add(0)
        for u, v, w in edges:
            connections[u][v] = w
            connections[v][u] = w
            weights_set.add(w)
        weights = list(weights_set)
        weights.sort()

        queue = []
        paths = []

        for u, w in connections[source].items():
            if u == target:
                paths.append([source, u])
            else:
                queue.append([source, u])

        while queue:
            new_queue = []
            path = queue.pop(0)
            path_set = set(path)
            u = path[-1]
            for v in connections[u].keys():
                v_int = int(v)
                if v_int not in path_set:
                    if v_int == target:
                        paths.append(path + [v_int])
                    else:
                        new_queue.append(path + [v_int])
            queue += new_queue

        if len(paths) == 0:
            return -1
        
        for threshold in weights:
            for path in paths:
                count = 0

                for j in range(1, len(path)):
                    u = path[j - 1]
                    v = path[j]
                    w = connections[u][v]
                    if w > threshold:
                        count += 1
                    if count > k:
                        break
                
                if count <= k:
                    return threshold
        return -1




    def bfs01(self, n, k, src, target, mid, adj):
        dist = [10**9] * n
        dq = deque()

        dist[src] = 0
        dq.append(src)

        while dq:
            u = dq.popleft()

            for v, w in adj[u]:
                wt = 1 if w > mid else 0

                if dist[u] + wt < dist[v]:
                    dist[v] = dist[u] + wt

                    if wt == 0:
                        dq.appendleft(v)
                    else:
                        dq.append(v)

        return dist[target] <= k

    def minimumThresholdFast(self, n: int, edges: List[List[int]], source: int, target: int, k: int) -> int:
        adj = [[] for _ in range(n)]

        for u, v, w in edges:
            adj[u].append((v, w))
            adj[v].append((u, w))

        left, right, ans = 0, 10**9, -1

        while left <= right:
            mid = (left + right) // 2

            if self.bfs01(n, k, source, target, mid, adj):
                ans = mid
                right = mid - 1
            else:
                left = mid + 1

        return ans