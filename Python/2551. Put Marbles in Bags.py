class Solution(object):
    def putMarbles(self, weights, k):
        """
        :type weights: List[int]
        :type k: int
        :rtype: int
        """
        mins = [[None for _ in range(len(weights)) ] for _ in range(k)]
        maxes = [[None for _ in range(len(weights)) ] for _ in range(k)]

        for i in range(len(weights)):
            mins[0][i] = weights[0] + weights[i]
            maxes[0][i] = weights[0] + weights[i]
        
        partial_sum = 0
        partial_sums = []
        for i in range(len(weights)):
            partial_sum += weights[i]
            partial_sums.append(partial_sum)
        for i in range(1, k):
            for j in range(i, len(weights)):
                if j == i:
                    mins[i][i] = 2 * partial_sums[i]
                    maxes[i][i] = 2 * partial_sums[i]
                    continue
                way_1 = mins[i - 1][j - 1] + 2 * weights[j]
                way_2 = maxes[i - 1][j - 1] + 2 * weights[j]
                way_3 = mins[i][j - 1] - weights[j - 1] + weights[j]
                way_4 = maxes[i][j - 1] - weights[j - 1] + weights[j]
                high = max([way_1, way_2, way_3, way_4])
                low = min([way_1, way_2, way_3, way_4])
                mins[i][j] = low
                maxes[i][j]= high

        print(mins)
        print(maxes)
        return maxes[k -1][len(weights) - 1] - mins[k -1][len(weights) - 1]
    

    def putMarblesFast(self, weights, k):
        """
        :type weights: List[int]
        :type k: int
        :rtype: int
        """
        n = len(weights) - 1
        weights = [weights[i] + weights[i + 1] for i in range(n)]
        weights.sort()
        res = 0
        for i in range(k - 1):
            res += weights[-1 - i] - weights[i]
        return res