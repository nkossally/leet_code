class Solution:
    def lexicographicallySmallestArraySlow(self, nums: List[int], limit: int) -> List[int]:
        num_and_indices = []

        for i,num in enumerate(nums):
            num_and_indices.append([num, i])
        num_and_indices.sort(key=lambda x : x[0])

        arrs = []
        for num_and_idx in num_and_indices:
            num = num_and_idx[0]
            i = 0
            while i < len(arrs):
                num_and_idx_2 = arrs[i][-1]
                if num_and_idx[0] - num_and_idx_2[0] <= limit:
                    arrs[i].append(num_and_idx)
                    break
                i += 1
            if i == len(arrs):
                arrs.append([num_and_idx])
        result = [None for i in range(len(nums))]
        for arr in arrs:
            indices = [x[1] for x in arr]
            indices.sort()
            for i, insert_i in enumerate(indices):
                result[insert_i] = arr[i][0]

        return result
        

    def lexicographicallySmallestArray(self, nums: List[int], limit: int) -> List[int]:
        b = []
        n = len(nums)
        for i in range(n):
            b.append((nums[i],i))
        b = sorted(b,key=lambda x: x[0])
        
        c = [[b[0]]]
        for i in range(1,n):
            if b[i][0]-b[i-1][0] <= limit:
                c[-1].append(b[i])
            else:
                c.append([b[i]])
        for t in c:
            ind = []
            for x,y in t:
                ind.append(y)
            ind.sort()
            for i in range(len(ind)):
                nums[ind[i]] = t[i][0]
        return nums