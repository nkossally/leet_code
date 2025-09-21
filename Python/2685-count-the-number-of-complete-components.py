class Solution:
    def countCompleteComponents(self, n: int, edges: List[List[int]]) -> int:
        groups = []
        num_to_group_idx = {}
        no_edges_count = n
        connections = defaultdict(set)


        for x, y in edges:
            connections[x].add(y)
            connections[y].add(x)
            if x in num_to_group_idx and y not in num_to_group_idx:
                idx = num_to_group_idx[x]
                groups[idx].append(y)
                num_to_group_idx[y] = idx
                no_edges_count -= 1
            elif x not in num_to_group_idx and y in num_to_group_idx:
                idx = num_to_group_idx[y]
                groups[idx].append(x)
                num_to_group_idx[x] = idx
                no_edges_count -= 1
            elif x not in num_to_group_idx and y not in num_to_group_idx:
                groups.append([x, y])
                num_to_group_idx[x] = len(groups) - 1
                num_to_group_idx[y] = len(groups) - 1
                no_edges_count -= 2
            else:
                idx = num_to_group_idx[x]
                idx_2 = num_to_group_idx[y]

                if idx != idx_2:
                    for elem in groups[idx_2]:
                        num_to_group_idx[elem] = idx
                    groups[idx] = list(set(groups[idx] + groups[idx_2]))
                    groups[idx_2] = None

        res = 0
        groups = [group for group in groups if group != None]
        for group in groups:
            is_complete = True
            for i in range(len(group)):
                for j in range(i + 1, len(group)):
                    if not is_complete:
                        break
                    if group[j] not in connections[group[i]]:
                        is_complete = False
                        break
            if is_complete:
                res += 1
        res += no_edges_count
        return res


            
        