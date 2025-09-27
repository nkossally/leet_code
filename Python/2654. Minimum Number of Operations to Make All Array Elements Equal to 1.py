class Solution:
    def minOperations(self, nums: List[int]) -> int:


        mem = defaultdict(dict)

        def get_gcd(a, b):
            if b in mem[a]:
                return mem[a][b]
            
            min_num = min(a, b)
            max_num = max(a, b)
            while min_num != 0:
                temp = min_num
                min_num = max_num % min_num
                max_num = temp

            mem[a][b] = max_num
            mem[a][b] = max_num
            return max_num
        
        gcds = []
        for i in range(0, len(nums) - 1):
            gcds.append(get_gcd(nums[i], nums[ i + 1]))

        def get_one_count(arr):
            count = 0 
            for num in arr:
                if num == 1:
                    count += 1
            return count

        self.res = float("inf")
        def recur(arr, gcds, moves):
            one_count = get_one_count(arr)

            if one_count == len(arr):
                self.res = min(self.res, moves)
                return
            if moves + len(arr) - one_count >= self.res:
                return

            min_moves = float("inf")
            for i in range(0, len(arr) - 1):
                num_1 = arr[i]
                num_2 = arr[i + 1 ]

                gcd = gcds[i]
                cpy_1 = arr[:]
                cpy_2 = arr[:]
                cpy_1[i] = gcd
                cpy_2[i + 1] = gcd
                res_1 = float("inf")
                res_2 = float("inf")

                if gcd < num_1:
                    gcds_cpy = gcds[:]
                    gcds_cpy[i] = get_gcd(gcd, num_2)
                    if i > 0:
                        gcds_cpy[i - 1] = get_gcd(gcd, arr[i - 1])
                    recur(cpy_1,gcds_cpy, moves + 1)

                if gcd < num_2:
                    gcds_cpy = gcds[:]
                    gcds_cpy[i] = get_gcd(gcd, num_1)
                    if i < len(arr) - 2:
                        gcds_cpy[i + 1] = get_gcd(gcd, arr[i + 1])
                    recur(cpy_2,gcds_cpy, moves + 1)
        recur(nums, gcds, 0)
        if self.res == float("inf"):
            return -1
        return self.res
        


        