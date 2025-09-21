class Solution:
    def canTraverseAllPairsSlow(self, nums: List[int]) -> bool:
        nums = list(set(nums))
        def has_common_factor(a, b):
            min_num = min(a, b)
            max_num = max(a, b)
            if max_num % min_num == 0:
                return True
            i = 2
            while i <= min_num/2:
                if min_num % i == 0 and max_num % i == 0:
                    return True
                i += 1
            return False
        common_divisors = defaultdict(set)
        for i in range(len(nums)):
            num_1 = nums[i]
            common_divisors[num_1].add(num_1)
            for j in range(i + 1, len(nums)):
                num_2 = nums[j]
                if has_common_factor(num_1, num_2):
                    common_divisors[num_1].add(num_2)
                    common_divisors[num_2].add(num_1)
        stack = nums[:]
        while stack:
            new_stack = []
            while stack:
                num = stack.pop()
                connections = common_divisors[num]
                connections_cpy = list(connections)
                for other_num in connections_cpy:
                    other_num_connections = common_divisors[other_num]
                    for second_connection in other_num_connections:
                        if second_connection not in connections:
                            connections.add(second_connection)
                            new_stack.append(second_connection)
            stack = new_stack
        return len(common_divisors[nums[0]]) == len(nums)
        
    def canTraverseAllPairs(self, nums: List[int]) -> bool:
        def dfs(index, visitedIndex, visitedPrime):
            if visitedIndex[index]:
                return
            visitedIndex[index] = True

            for prime in index2prime[index]:
                if visitedPrime.get(prime, False):
                    continue
                visitedPrime[prime] = True
                for index1 in prime2index[prime]:
                    if visitedIndex[index1]:
                        continue
                    dfs(index1, visitedIndex, visitedPrime)

        prime2index = {}
        index2prime = {}
        for i, num in enumerate(nums):
            temp = num
            for j in range(2, int(num ** 0.5) + 1):
                if temp % j == 0:
                    prime2index.setdefault(j, []).append(i)
                    index2prime.setdefault(i, []).append(j)
                    while temp % j == 0:
                        temp //= j
            if temp > 1:
                prime2index.setdefault(temp, []).append(i)
                index2prime.setdefault(i, []).append(temp)

        visitedIndex = [False] * len(nums)
        visitedPrime = {}
        dfs(0, visitedIndex, visitedPrime)

        return all(visitedIndex)