class Solution:
    def minTime(self, n: int, edges: List[List[int]]) -> int:
        node_to_edges = {i : [] for i in range(n)}
        if n == 1:
            return 0

        for edge in edges:
            node_to_edges[edge[0]].append(edge)

        best = None

        stack = [[0, 0, set([0])]]
        while stack:
            curr = stack.pop()
            while curr[0] == n - 1:
                time = curr[1]
                if not best or best > time:
                    best = time
                if not stack:
                    break
                curr = stack.pop()
            curr_node = curr[0]
            time = curr[1]
            if best and time >= best:
                continue
            seen = curr[2]
            adjacencies = node_to_edges[curr_node]
            for adjacent in adjacencies:
                node = adjacent[1]
                start = adjacent[2]
                end = adjacent[3]
                if node not in seen and time <= end:
                    wait = max(start - time, 0) + 1
                    new_seen = set(list(seen))
                    new_seen.add(node)
                    stack.append([node,  time + wait, new_seen])
        

        
        return best if best else -1


class Solution:
    def minTime(self, n: int, edges: List[List[int]]) -> int:
        node_to_edges = {i : [] for i in range(n)}
        if n == 1:
            return 0

        for edge in edges:
            node_to_edges[edge[0]].append(edge[1:])

        seen = set()
        stack = [[0, 0]]
        while stack:
            time, node = heappop(stack)
            if node == n - 1:
                return time
            if node in seen:
                continue
            seen.add(node)
            adjacencies = node_to_edges[node]
            for other_node, start, end in adjacencies:
                if time <= end:
                    wait = max(start - time, 0) + 1
                    heappush(stack, [time + wait,  other_node])
        
        
        return -1
