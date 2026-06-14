from itertools import combinations


class Solution:
    def evenSumSubgraphs(self, nums: list[int], edges: list[list[int]]) -> int:
        n = len(nums)
        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)
        
        ans = 0
        total_subsets = 1 << n
        
        for mask in range(1, total_subsets):
            # 1. Calculate the sum of nodes for this subset
            curr_sum = 0
            for i in range(n):
                if (mask >> i) & 1:
                    curr_sum += nums[i]
            
            if curr_sum % 2 != 0:
                continue
                
            # 2. Find the first node in the subset to start DFS
            start_node = -1
            for i in range(n):
                if (mask >> i) & 1:
                    start_node = i
                    break
            
            # 3. Check for connectedness using DFS
            visited = 0
            stack = [start_node]
            visited |= (1 << start_node)
            
            while stack:
                u = stack.pop()
                for v in adj[u]:
                    if (mask >> v) & 1: # Only traverse if 'v' is in our subset
                        if not (visited & (1 << v)):
                            visited |= (1 << v)
                            stack.append(v)
            
            # If all nodes in the subset were visited, it's connected
            if visited == mask:
                ans += 1
                
        return ans



    def evenSumSubgraphsNoBitwise(self, nums: list[int], edges: list[list[int]]) -> int:
        n = len(nums)

        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)

        ans = 0

        # Generate every non-empty subset of nodes
        for size in range(1, n + 1):
            for subset in combinations(range(n), size):

                subset_set = set(subset)

                # 1. Calculate sum of nodes in subset
                curr_sum = sum(nums[i] for i in subset)

                if curr_sum % 2 != 0:
                    continue

                # 2. DFS to check connectivity
                start_node = subset[0]

                visited = [False] * n
                stack = [start_node]
                visited[start_node] = True

                visited_count = 0

                while stack:
                    u = stack.pop()
                    visited_count += 1

                    for v in adj[u]:
                        if v in subset_set and not visited[v]:
                            visited[v] = True
                            stack.append(v)

                # 3. Connected iff we reached every node in subset
                if visited_count == len(subset):
                    ans += 1

        return ans