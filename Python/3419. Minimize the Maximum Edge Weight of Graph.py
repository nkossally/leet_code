import heapq

class Solution:
    def minMaxWeight(self, n: int, edges: List[List[int]], threshold: int) -> int:
        edges.sort(key=lambda x : x[2])
        G = [{} for i in range(n)]
        for i, j, w in edges:
            if i not in G[j]:
                G[j][i] = w
            else:
                G[j][i] = min(w, G[j][i])
        heap = [[0, 0]]
        inf = float("inf")
        seen = [inf] * n
        k = n
        while len(heap) > 0 and k > 0:
            # weight, i = heappop(heap)
            weight, i = heap.pop(0)
            if seen[i] < inf:
                continue
            k -= 1
            seen[i] = weight
            for j in G[i]:
                if seen[j] < inf:
                    continue
                # heappush(heap, [G[i][j], j])
                idx = 0
                while idx < len(heap) and G[i][j] > heap[idx][0]:
                    idx += 1
                heap.insert(idx, [G[i][j], j])
                
        return -1 if k > 0 else max(seen)


                