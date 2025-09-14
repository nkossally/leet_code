class Solution:
    def sumDistance(self, nums: List[int], s: str, d: int) -> int:
        rights = []
        lefts = []

        def mod(num):
            return num % (10 ** 9 + 7)

        for i, num in enumerate(nums):
            if s[i] == "R":
                rights.append(num)
            else:
                lefts.append(num)
        
        time = d

        def get_dist_sums():
            positions = rights + lefts
            res = 0
            for i in range(len(positions)):
                for j in range(i + 1, len(positions)):
                    res += abs(positions[i] - positions[j])
            return res


        def get_collision():
            return [time, None, None]

            right_elems = []
            left_elems = []

            min_dist = float("inf")
            for i,num_1 in enumerate(rights):
                for j,num_2 in enumerate(lefts):
                    if num_1 < num_2:
                        dist = abs(num_2 - num_1)
                        diff = floor(dist / 2) 
                        if dist != 0 and dist < min_dist:
                            min_dist = dist
                            right_elems = [[i, num_1 + diff]]
                            left_elems = [[j, num_2 - diff]]
                        elif dist == min_dist:
                            right_elems.append([i, num_1 + diff])
                            left_elems.append([j, num_2 - diff])
            if min_dist == float("inf"):
                return [time, None, None]
            if ceil(min_dist/2) > time:
                return [time, None, None]
            return [min_dist, right_elems, left_elems]

        if not rights or not lefts:
            return get_dist_sums()
        while time > 0:
            dist, right_elems, left_elems = get_collision()
            time_diff = ceil(dist/2) if right_elems else dist
            time -= time_diff
            new_lefts = []
            new_rights = []
            if right_elems:
                for i in range(len(right_elems) -1, -1, -1):
                    idx, pos = right_elems[i]
                    rights.pop(idx)
                    new_lefts.append(pos)
                for i in range(len(left_elems) -1, -1, -1):
                    idx, pos = left_elems[i]
                    lefts.pop(idx)
                    new_rights.append(pos)                

            for i, num in enumerate(rights):
                rights[i] += time_diff
            for i, num in enumerate(lefts):
                lefts[i] -= time_diff
            for pos in new_lefts:
                lefts.append( pos)
            for pos in new_rights:
               rights.append( pos)

        return mod(get_dist_sums())

    def sumDistanceFast(self, nums: List[int], s: str, d: int) -> int:
        n, m = len(nums), int(1e9 + 7)
        # Ignore the Collisions
        for i in range(n):
            if s[i] == 'L':
                nums[i] -= d
            else: 
                nums[i] += d
        
        # Sort according to position to calculate abs sum of each pair in O(N)
        nums.sort()

        pre = nums.copy()
        # Calculate Prefix Sum
        for i in range(1, n):
            pre[i] += pre[i - 1]
            pre[i] %= m

        ans = 0
        for i in range(1, n):
            # each jth index contributes to j * nums[j] - pre[j - 1]
            ans += i * nums[i] - pre[i - 1]
            ans %= m
        return ans
        
    def sumDistanceFaster(self, nums: List[int], s: str, d: int) -> int:
        def get_mod(num):
            return num % (10 ** 9 + 7)

        for i in range(len(nums)):
            if s[i] == "R":
                nums[i] += d
            else:
                nums[i] -= d
        
        res = 0
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                res += abs(nums[i] - nums[j])
        return get_mod(res)
    

            
        
    def sumDistanceFastest(self, nums: List[int], s: str, d: int) -> int:
        def get_mod(num):
            return num % (10 ** 9 + 7)

        for i in range(len(nums)):
            if s[i] == "R":
                nums[i] += d
            else:
                nums[i] -= d
        nums.sort()
        prev = 0
        res = 0        
        for i in range(1, len(nums)):
            diff = nums[i] - nums[i - 1]
            new_prev = prev + i * diff
            res += new_prev
            prev = new_prev
        return get_mod(res)
            
        