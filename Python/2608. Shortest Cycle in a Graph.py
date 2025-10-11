class Solution(object):
    def findShortestCycle(self, n, edges):
        """
        :type n: int
        :type edges: List[List[int]]
        :rtype: int
        """
        self.res = float("inf")

        connections = defaultdict(set)
        for x, y in edges:
            connections[x].add(y)
            connections[y].add(x)
        
        def get_cycle(path, curr):
            for node in connections[curr]:
                if len(path) > 1 and path[-2] == node:
                    continue
                if node in path:
                    idx = path.index(node)
                    length = len(path) - idx
                    self.res = min(self.res, length)
                    return
                cpy = path[:]
                cpy.append(node)
                get_cycle(cpy, node)
        for node in connections.keys():
            get_cycle( [node], node)
        if self.res == float("inf"):
            return -1
        return self.res

    def findShortestCycleFast(self, n, edges):
        """
        :type n: int
        :type edges: List[List[int]]
        :rtype: int
        """
        inf = float("inf")
        G = [[] for _ in range(n)]
        for i, j in edges:
            G[i].append(j)
            G[j].append(i)
        def root(i):
            res = inf
            dis = [inf] * n
            dis[i] = 0
            bfs = [i]
            for i in bfs:
                for j in G[i]:
                    if dis[j] == inf:
                        dis[j] = 1 + dis[i]
                        bfs.append(j)
                    elif dis[i] <= dis[j]:
                        res = min(res, dis[i] + dis[j] + 1)
            return res
        res = min(map(root, range(n)))
        return res if res < inf else -1
    
    def findShortestCycleFastRewrite(self, n, edges):
        """
        :type n: int
        :type edges: List[List[int]]
        :rtype: int
        """
        inf = float("inf")
        G = [[] for _ in range(n)]
        for i, j in edges:
            G[i].append(j)
            G[j].append(i)
        def root(i):
            res = inf
            dis = [inf] * n
            dis[i] = 0
            bfs = [i]
            while bfs:
                new_bfs = []
                for i in bfs:
                    for j in G[i]:
                        if dis[j] == inf:
                            dis[j] = 1 + dis[i]
                            new_bfs.append(j)
                        elif dis[i] <= dis[j]:
                            res = min(res, dis[i] + dis[j] + 1)
                bfs = new_bfs
            return res
        res = min(map(root, range(n)))
        return res if res < inf else -1