class Solution:
    def minEdgeReversals(self, n: int, edges: List[List[int]]) -> List[int]:
        res = [float("inf") for _ in range(n)]

        def test_min_changes(i, changes, node_to_nodes):
            if changes > res[i]:
                return
            connections = set([i])
            queue = [i]
            while len(queue):
                elem = queue.pop(0)
                new_queue = set(queue)
                for  node in node_to_nodes[elem]:
                    if node not in connections:
                        new_queue.add(node)
                        connections.add(node)
                queue = list(new_queue)
            if len(connections) == n:
                res[i] = min(res[i], changes)
            
            
        
        def select_changes(idx, change_count, node_to_nodes):
            if idx == len(edges):
                for i in range(n):
                    test_min_changes(i, change_count, node_to_nodes)
                return
            a, b = edges[idx]

            cpy = deepcopy(node_to_nodes)
            node_to_nodes[a].append(b)
            cpy[b].append(a)
            select_changes(idx + 1, change_count, node_to_nodes)
            select_changes(idx + 1, change_count + 1, cpy)

        select_changes(0, 0, [[] for _ in range(n)])

        return res
            


        