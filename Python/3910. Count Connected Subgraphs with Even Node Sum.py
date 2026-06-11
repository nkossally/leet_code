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
