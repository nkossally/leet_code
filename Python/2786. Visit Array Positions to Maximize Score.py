class Solution:
    def maxScore(self, nums: List[int], x: int) -> int:
        even_sum = nums[0] if nums[0] % 2 == 0 else None
        odd_sum = nums[0] if nums[0] % 2 == 1 else None

        for i in range(1, len(nums)):
            num = nums[i]
            val_1 = float("-inf")
            val_2 = float("-inf")
            val_3 = float("-inf")

            if num % 2 == 0:
                if even_sum != None:
                    val_1 = even_sum + num
                else:
                    val_2 = odd_sum + num - x
                if odd_sum != None:
                    val_3 = odd_sum + num - x
                even_sum = max([val_1, val_2, val_3])

            else:
                if odd_sum != None:
                    val_1 = odd_sum + num
                else:
                    val_2 = even_sum + num - x
                if even_sum != None:
                    val_3 = even_sum + num - x
                odd_sum = max([val_1, val_2, val_3])
                
        even_sum = even_sum if even_sum else 0
        odd_sum = odd_sum if odd_sum else 0
        return max(even_sum, odd_sum)