import heapq
class Solution:
    def minOperations(self, nums: list[int], k: int) -> int:
        peaks = set()
        n = len(nums)
        self.res = float("inf")
        queue = []
        costs = {}
        
        for i, num in enumerate(nums):
            left = (i - 1 + n) % n
            right = (i + 1) % n
            max_num = max(nums[left], nums[right])
            if num > max_num:
                peaks.add(i)
                costs[i] = 0
            else:
                needed = max_num + 1 - num
                heapq.heappush(queue, [needed, i])
        
        def recur( peaks, queue, costs, cost):
            # print( "peaks", peaks,"queue", queue, "costs", costs, "cost", cost)
            if cost >= self.res:
                return
            if len(peaks) >= k:
                self.res = min(self.res, cost)
                return
            if not queue:
                return
            needed, i = heapq.heappop(queue)
            peaks_2 = peaks.copy()
            peaks_2.add(i)
            queue_2 = queue.copy()
            costs_2 = costs.copy()
            costs_2[i] = needed
            cost_2 = cost + needed

            left = (i - 1 + n) % n
            right = (i + 1) % n
            
            if left in costs or right in costs:
                recur( peaks, queue, costs, cost)
            
            if left in costs_2:
                other_cost = costs_2.pop(left)
                cost_2 -= other_cost
                peaks_2.remove(left)
            if right in costs_2:
                other_cost = costs_2.pop(right)
                cost_2 -= other_cost
                peaks_2.remove(right)
            recur( peaks_2, queue_2, costs_2, cost_2)

        recur(peaks, queue, costs, 0)

        return self.res if self.res != float("inf") else -1

        