class Solution:
    def minIncrements(self, n: int, cost: List[int]) -> int:
        node_to_max_sum = {}

        def get_max_sum(node):

            child = 2 * node 
            max_branch_sum =  0

            if child <= n:
                max_branch_sum = get_max_sum(child)
                max_branch_sum = max(max_branch_sum, get_max_sum(child + 1))
            
            node_to_max_sum[node] = max_branch_sum + cost[node - 1]
            
            return  max_branch_sum + cost[node - 1]
        
        get_max_sum(1)
        max_path_sum = node_to_max_sum[1]

        res = 0

        def get_count(node, added_so_far, path_sum):
            diff = max_path_sum - node_to_max_sum[node] - added_so_far - path_sum
            child = 2 * node
            total = diff

            if child <= n:
                total += get_count(child, added_so_far + diff , path_sum + cost[node - 1])
                total += get_count(child + 1,added_so_far + diff , path_sum + cost[node - 1]  )
            return total
        
        res = get_count(1, 0, 0)
        return res

    def minIncrementsFast(self, n: int, cost: List[int]) -> int:
        self.res = 0
        def dfs(i):
            if i >= len(cost): return 0
            a, b = dfs(2 * i + 1), dfs(2 * i + 2)
            self.res += abs(a - b)
            return cost[i] + max(a, b)
        dfs(0)
        return self.res