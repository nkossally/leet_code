class Solution:
    def maxOutput(self, n: int, edges: List[List[int]], price: List[int]) -> int:
        node_to_edge = defaultdict(set)
        for a, b in edges:
            node_to_edge[a].add(b)
            node_to_edge[b].add(a)
        
        def get_max_path(node, seen):

            max_tail = 0
            for adj in node_to_edge[node]:
                if adj not in seen:
                    seen_copy = seen.copy()
                    seen_copy.add(adj)
                    max_tail = max(max_tail, get_max_path(adj, seen_copy))
            return max_tail + price[node]
        
        res = 0
        for num in range(n):
            if len(node_to_edge[num]) == 1:
                path_sum = max(res, get_max_path(num, set([num])) )
                res = max(res, path_sum - price[num])
        return res

    def maxOutputMem(self, n: int, edges: List[List[int]], price: List[int]) -> int:
        node_to_edge = defaultdict(set)
        mem = [{} for _ in range(n)]

        for a, b in edges:
            node_to_edge[a].add(b)
            node_to_edge[b].add(a)
        
        def get_max_path(node, prev):

            max_tail = 0
            for adj in node_to_edge[node]:
                if adj != prev:
                    if adj in mem[node]:
                        max_tail = max(max_tail, mem[node][adj])
                    else:
                        tail = get_max_path(adj, node)
                        mem[node][adj] = tail
                        max_tail = max(max_tail, tail)
            return max_tail + price[node]
        
        res = 0
        for num in range(n):
            if len(node_to_edge[num]) == 1:
                path_sum = max(res, get_max_path(num, None) )
                res = max(res, path_sum - price[num])
        return res