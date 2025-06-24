def minSwapsFast(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    evens = []
    odds = []


    for (i, num) in enumerate(nums):
        if num % 2 == 0:
            evens.append(i)
        else:
            odds.append(i)
        
    if abs(len(evens) - len(odds)) >= 2:
        return -1
    
    def helper(indices):
        result = 0
        for (i, index) in enumerate(indices):
            result += abs(index - 2 * i)
        return result

    way_1 = float("inf")
    way_2 =float("inf")

    if len(evens) >= len(odds):
        way_1 = helper(evens)
    if len(odds) >= len(evens):
        way_2 = helper(odds)

    return min(way_1, way_2)

def minSwaps(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    evens = []
    odds = []


    for (i, num) in enumerate(nums):
        if num % 2 == 0:
            evens.append(i)
        else:
            odds.append(i)
        
    if abs(len(evens) - len(odds)) >= 2:
        return -1

    def add_even(count, evens, odds, swaps):
        if len(evens) == 0:
            return [count, evens, odds, swaps]
        
        idx = evens.pop(0)
        diff = abs(idx - count)
        i = 0
        while i < len(odds) and odds[i] < idx:
            odds[i] += 1
            i += 1
        
        return [count + 1, evens, odds, swaps + diff]

    def add_odd(count, evens, odds, swaps):
        if len(odds) == 0:
            return [count, evens, odds, swaps]
        
        idx = odds.pop(0)
        diff = abs(idx - count)
        i = 0
        while i < len(evens) and evens[i] < idx:
            evens[i] += 1
            i += 1
        
        return [count + 1, evens, odds, swaps + diff]

    if len(evens) > len(odds):
        count = 0
        swaps = 0
        while count  < len(nums):
            result = add_even(count, evens, odds, swaps)
            count = result[0]
            evens = result[1]
            odds = result[2]
            swaps = result[3]

            result = add_odd(count, evens, odds, swaps)
            count = result[0]
            evens = result[1]
            odds = result[2]
            swaps = result[3]

        result = add_even(count, evens, odds, swaps)
        swaps = result[3]
        return swaps
    elif len(odds) > len(evens):
        count = 0
        swaps = 0
        while count  < len(nums):
            result = add_odd(count, evens, odds, swaps)
            count = result[0]
            evens = result[1]
            odds = result[2]
            swaps = result[3]

            result = add_even(count, evens, odds, swaps)
            count = result[0]
            evens = result[1]
            odds = result[2]
            swaps = result[3]

        result = add_odd(count, evens, odds, swaps)
        swaps = result[3]
        return swaps
    else:
        count = 0
        swaps_1 = 0
        evens_cpy = evens[:]
        odds_cpy = odds[:]
        while count  < len(nums):
            result = add_even(count, evens_cpy, odds_cpy, swaps_1)
            count = result[0]
            evens_cpy = result[1]
            odds_cpy = result[2]
            swaps_1 = result[3]

            result = add_odd(count, evens_cpy, odds_cpy, swaps_1)
            count = result[0]
            evens_cpy = result[1]
            odds_cpy = result[2]
            swaps_1 = result[3]

        result = add_even(count, evens_cpy, odds_cpy, swaps_1)
        swaps_1 = result[3]

        count = 0
        swaps = 0
        while count  < len(nums):
            result = add_odd(count, evens, odds, swaps)
            count = result[0]
            evens = result[1]
            odds = result[2]
            swaps = result[3]

            result = add_even(count, evens, odds, swaps)
            count = result[0]
            evens = result[1]
            odds = result[2]
            swaps = result[3]

        result = add_odd(count, evens, odds, swaps)
        swaps = result[3]
    
        return min(swaps, swaps_1)
    