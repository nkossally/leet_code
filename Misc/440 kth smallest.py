class Solution(object):
    def findKthNumber(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: int
        """
        arr = list(range(1, n + 1))

        def compare(a, b):
            str1 = str(a)
            str2 = str(b)
            minLength = min(len(str1), len(str2))
            result = None
            for x in range(minLength):
                char1 = str1[x]
                char2 = str2[x]
                if char1 != char2:
                    result = int(char1) - int(char2)
                    break
            if result == None:
                if len(str1) > len(str2):
                    result = 1
                elif len(str2) > len(str1):
                    result = -1
                else:
                    result = 0
            return result
        
        arr.sort(compare)
        # print(arr)
        return arr[k - 1]


        