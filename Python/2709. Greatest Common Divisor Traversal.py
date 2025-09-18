class Solution:
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