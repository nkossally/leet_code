class Solution:
    def repairCars(self, ranks: List[int], cars: int) -> int:
        ranks.sort()
        cars_per = ceil(cars / len(ranks))
        left = ranks[0] * pow(cars_per, 2)
        right = ranks[-1] * pow(cars_per, 2)
        while True:
            total = 0
            if left >= right:
                return left
            mid = floor((right + left)/2)
            for rank in ranks:
                count = floor(pow(mid/rank, .5))
                total += count
            if total >= cars:
                right = mid 
            else:
                left = mid + 1