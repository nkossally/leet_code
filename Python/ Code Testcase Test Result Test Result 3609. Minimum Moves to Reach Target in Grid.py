import time

class Solution:
    def minMoves(self, sx: int, sy: int, tx: int, ty: int) -> int:
        def helper(x, y, prev_x, prev_y, count):
            if x == tx and y == ty:
                return count
            
            prev_dist = float("inf")
            if prev_x is not None:
                prev_dist = pow((tx - prev_x)** 2 + (ty - prev_y)**2, .5)

            dist = pow((tx - x)** 2 + (ty - y)**2, .5)

            if dist >= prev_dist:
                return float("inf")
            m = max(x, y)
            count_1 = helper(x + m, y, x, y, count + 1)
            count_2 = helper(x, y + m, x, y, count + 1)
            return min(count_1, count_2)
        count = helper(sx, sy, None, None, 0)
        if count == float("inf"):
            return -1
        return count
    


    def minMovesFast(self, sx: int, sy: int, tx: int, ty: int) -> int:
        count = 0
        x = tx
        y = ty
        while x != sx or y != sy:
            if x < sx or y < sy:
                return -1
            
            if x > y:
                if .5 * x > y:
                    if x % 2 == 1:
                        return -1
                    x = .5 * x
                else:
                    x -= y
            elif y > x:
                if .5 * y > x:
                    if y % 2 == 1:
                        return -1
                    y = .5 * y
                else:
                    y -= x
            else:
                if sx == 0:
                    x = 0
                elif sy == 0:
                    y = 0
                else:
                    return -1
            count += 1
        
        return count 
result =  Solution.minMovesFast(5, 1, 350824, 287008)
    
time_1 = time.time()
for i in range(1000):
    Solution.minMoves(5, 1, 350824, 287008)
time_2 = time.time()

time_3 = time.time()
for i in range(1000):
    Solution.minMovesFast(5, 1, 350824, 287008)
time_4 = time.time()


print(f"result {result}")
print(f"Slow wxecution time: {time_2 - time_1} seconds")
print(f"Fast wxecution time: {time_4 - time_3} seconds")
