class Solution:
    def maximumScoreAfterOperations(self, edges: List[List[int]], values: List[int]) -> int:
        paths = []
        sums = []

        connections = [set() for _ in range(len(values))]
        for edge in edges:
            a, b = edge
            connections[a].add(b)
            connections[b].add(a)

        def get_ath(node, path, curr_sum):

            found_connection = False
            for other_node in connections[node]:
                if other_node not in path:
                    found_connection = True
                    cpy = set(list(path))
                    cpy.add(other_node)
                    get_path(other_node, cpy, curr_sum + values[other_node])
            if not found_connection:
                paths.append(path)
                sums.append(curr_sum)
        
        get_path(0, [0], values[0])
        def recur(node, score, sums):
            if node == len(values):
                return score
            sums_cpy = sums[:]
            max_score = recur(node + 1, score, sums)
            valid = True
            for i, path in enumerate(paths):
                if node in path:
                    sums_cpy[i] -= values[node]
                    if sums_cpy[i] == 0:
                        valid = False
                        break
            if valid:
                max_score = max(max_score, recur(node + 1, score + values[node], sums_cpy))
            return max_score
        return recur(0, 0, sums)
        