class Solution:
    def minIncrease(self, n: int, edges: List[List[int]], cost: List[int]) -> int:
        node_to_sums = {i: set() for i in range(0, n)}
        node_to_nodes = {i: [] for i in range(0, n )}
        node_to_children = {}
        levels = []
        sums = set()
        leaves = set()

        for edge in edges:
            a = edge[0]
            b = edge[1]
            node_to_nodes[a].append(b)
            node_to_nodes[b].append(a)

        def add_children(path):
            for i in range(len(path) - 1):
                if path[i] not in node_to_children:
                    node_to_children[path[i]] = set()
                for elem in path[i + 1:]:
                    node_to_children[path[i]].add(elem)

        def helper(curr_node, path, curr_sum):
            connections = node_to_nodes[curr_node]
            length = len(path)
            if len(levels) < len(path):
                levels.append([])
            levels[len(path) - 1].append(curr_node)
            is_terminal = True
            for node in connections:
                if not (len(path) > 1 and path[-2] == node):
                    is_terminal = False
                    new_path = path[:]
                    new_path.append(node)
                    helper(node, new_path, curr_sum + cost[node])
            if is_terminal:
                leaves.add(curr_node)
                sums.add(curr_sum)
                add_children(path)
                for node in path:
                    node_to_sums[node].add(curr_sum)


        helper(0, [0], cost[0])

        count = 0
        seen_sums = set()
        remaining_nums = set(range(n))

        for level in levels:
            for node in level:
                if len(node_to_sums[node]) == 1  :
                    num = list(node_to_sums[node])[0]
                    if num not in seen_sums:

                        count += 1
                        seen_sums.add(num)
                        remaining_nums.remove(node)
                        if node in node_to_children:
                            for child in node_to_children[node]:
                                remaining_nums.remove(child)
       

        maximum_sum = max(seen_sums)

        for num in remaining_nums:
            if num in leaves:
                curr_sum = node_to_sums[num].pop()
                if curr_sum != maximum_sum:
                    count += 1
        return count - 1
                
class Solution:
    def minIncrease(self, n: int, edges: List[List[int]], cost: List[int]) -> int:
        G = [[] for i in range(n)]
        for u, v in edges:
            G[u].append(v)
            G[v].append(u)
        res = [0]

        def dfs(i, f = -1):
            score = []
            for j in G[i]:
                if j == f: continue
                score.append(dfs(j, i))
            if not score:
                return cost[i]
            ma = max(score)
            res[0] += sum(ma - v > 0 for v in score)
            return ma + cost[i]

        dfs(0)
        print(res)
        return res[0]