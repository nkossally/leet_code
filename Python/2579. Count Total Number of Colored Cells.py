class Solution:
    def coloredCells(self, n: int) -> int:
        num_rows = 1
        total = 1

        for i in range(2, n + 1):
            total += 2*num_rows + 2
            num_rows += 2
        return total

    def coloredCells_2(self, n: int) -> int:
        if n == 1:
            return 1

        total = 1

        for i in range(2, n + 1):
            total += 4*(i - 1)

        return total