import math

class Solution:
    def internalAngles(self, sides: list[int]) -> list[float]:
        sides.sort()
        a, b, c = sides
        if c >= a + b:
            return []
        A =  math.degrees(math.acos((b**2 + c**2 - a**2)/(2*b*c)))
        B =  math.degrees(math.acos((a**2 + c**2 - b**2)/(2*a*c)))
        C =  math.degrees(math.acos((a**2 + b**2 - c**2)/(2*a*b)))
        return [A, B, C]