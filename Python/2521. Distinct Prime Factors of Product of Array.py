class Solution:
    def distinctPrimeFactors(self, nums: List[int]) -> int:
        primes = set()
        self.max_prime = 2
        def get_primes_helper(num):
            original = num
            curr = 2
            while curr <= num:
                while curr < num and num % curr != 0:
                    curr += 1
                primes.add(curr)
                self.max_prime = curr
                while num > 1 and num % curr == 0:
                    num /= curr
                curr += 1
        def get_primes(num):
            for prime in primes:
                while num > 1 and num % prime == 0:
                    num /= prime
            
            get_primes_helper(num)
        for num in nums:
            get_primes(num)
        return len(primes)