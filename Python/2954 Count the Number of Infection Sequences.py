class Solution:
    def numberOfSequence(self, n: int, sick: List[int]) -> int:
        count = 0

        def recur( infected):
            if len(infected) == n:
                return 1
            total = 0
            seen = set()
            for elem in infected:
                a = elem + 1
                b = elem - 1
                if a not in infected and a not in seen and a >= 0 and a < n:
                    cpy = set(list(infected))
                    cpy.add(a)
                    seen.add(a)
                    total += recur(cpy)
                if b not in infected and b not in seen and b >= 0 and b < n:
                    cpy = set(list(infected))
                    cpy.add(b)
                    seen.add(b)
                    total += recur(cpy)   
            return total 
        count = recur(set(sick))
        return count                
    
    MOD = 10 ** 9 + 7

    def factorial(n: int) -> int:
        if n == 0:
            return 1
        return n * Solution.factorial(n - 1) % Solution.MOD

    def numberOfSequenceFast(self, n: int, sick: List[int]) -> int:
        # DD, DDD, DDDD
        # 9! / 2! / 3! / 4! * (1) * (2 * 2 * 1) * (1)
        lengths = [sick[0], n - sick[-1] - 1]
        for a, b in pairwise(sick):
            length = b - a - 1
            if length > 0:
                lengths.append(length)

        res = Solution.factorial(sum(lengths))
        for i, x in enumerate(lengths):
            res *= pow(Solution.factorial(x), -1, Solution.MOD)
            res %= Solution.MOD

            # do not multiply by 2 for beginning and end
            if i >= 2:
                res *= pow(2, x - 1, Solution.MOD)
                res %= Solution.MOD

        return res