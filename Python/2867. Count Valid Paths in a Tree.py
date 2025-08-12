class Solution:
    def countPaths(self, n: int, edges: List[List[int]]) -> int:
        primes = set()
        composites = set()
        def get_is_prime(num):
            if num == 1:
                return False
            if num == 2:
                return True
            if num in composites:
                return False
            if num in primes:
                return True

            curr = floor(num ** .5)
            while curr > 1:
                if num % curr == 0:
                    composites.add(num)
                    return False
                curr -= 1
            primes.add(num)
            return True

        node_to_nodes = [[] for node in range(n + 1)]
        for edge in edges:
            node_to_nodes[edge[0]].append(edge[1])
            node_to_nodes[edge[1]].append(edge[0])
        
        paths = []
        paths_set = set()

        def get_paths(path, contains_prime):
            ends_1 = str([path[0], path[-1]])
            ends_2 = str([path[-1], path[0]])

            count = 0
            if len(path) > 1:
                if contains_prime and ends_1 not in  paths_set and ends_2 not in paths_set:
                    paths_set.add(ends_1)
                    paths_set.add(ends_2)
                    count += 1

            curr_node = path[-1]
            for node in node_to_nodes[curr_node]:
                if not (len(path) > 1 and path[ - 2] == node):
                    is_prime = get_is_prime(node)
                    if not (contains_prime and is_prime):
                        count += get_paths(path[:] + [node], contains_prime or is_prime)
            return count
        total = 0
        for node in range(1, n + 1):
            is_prime = get_is_prime(node)
            total += get_paths([node], is_prime)
        return total
