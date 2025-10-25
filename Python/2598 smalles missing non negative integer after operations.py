class Solution:
    def findSmallestInteger(self, nums: List[int], value: int) -> int:
        nums = [ num % value for num in nums ]
        ans = 0
        counter = Counter(nums)
        while len(nums) > 0:
            ans_mod = ans % value
            if counter[ans_mod] == 0:
                return ans
            counter[ans_mod] -= 1
            ans += 1

        return ans


        