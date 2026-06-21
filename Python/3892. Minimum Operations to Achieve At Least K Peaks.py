import heapq
from dataclasses import dataclass

@dataclass
class Node:
    cost: int
    idx: int
    left: int
    right: int
    is_dead: bool = False

    def __lt__(self, other):
        return self.cost < other.cost

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



    def minOperationsFast(self, nums: list[int], k: int) -> int:
        n = len(nums)
        res = 0
        queue = []
        nodes = []
        count = 0
        
        for i, num in enumerate(nums):
            left = (i - 1 + n) % n
            right = (i + 1) % n
            target = max(nums[left], nums[right]) + 1
            cost = max(target - num, 0)
            # each node consists of ints representing cost, idx in nodes list, left idx, right idx, and a final value of 1 or 0 signifying it is dead or alive. Ints are used so that the node can be in a priority queue
            node = [cost, i, left, right, 0]
            heapq.heappush(queue, node)
            nodes.append(node)
        
        while count < k and queue:
            node = heapq.heappop(queue)
            cost, idx, left, right, dead = node
            # print("cost", cost,"idx", idx, "left",left, "right", right, "dead", dead)
            # node is dead if last val is 1
            if dead:
                continue
            res += cost
            count += 1
            node[-1] = True

            left_node = nodes[left]
            right_node = nodes[right]
            left_node[-1] = 1
            right_node[-1] = 1

            if left == right or left_node[2] == right_node[1] or right_node[3] == left_node[1]:
                continue

            new_cost = left_node[0] + right_node[0] - cost
            new_node = [new_cost, idx, left_node[2], right_node[3], 0]
            nodes[idx] = new_node
            new_left_node = nodes[left_node[2]]
            new_right_node = nodes[right_node[3]]
            new_left_node[3] = idx
            new_right_node[2] = idx
            heapq.heappush(queue, new_node)

        return res if count >= k else -1



    # see node classs defined above
    def minOperationsReadable(self, nums: list[int], k: int) -> int:
        n = len(nums)
        queue = []
        nodes = []
        
        # 1. Initialize nodes and push to priority queue
        for i, num in enumerate(nums):
            left = (i - 1 + n) % n
            right = (i + 1) % n
            target = max(nums[left], nums[right]) + 1
            cost = max(target - num, 0)
            
            node = Node(cost, i, left, right)
            heapq.heappush(queue, node)
            nodes.append(node)

        res = 0
        count = 0
        
        # 2. Process the queue
        while count < k and queue:
            node = heapq.heappop(queue)
            
            if node.is_dead:
                continue
                
            res += node.cost
            count += 1
            node.is_dead = True
            
            left_node = nodes[node.left]
            right_node = nodes[node.right]
            left_node.is_dead = True
            right_node.is_dead = True
            
            if node.left == node.right or left_node.left == right_node.idx or right_node.right == left_node.idx:
                continue
                
            # Create new merged node
            new_cost = left_node.cost + right_node.cost - node.cost
            new_node = Node(new_cost, node.idx, left_node.left, right_node.right)
            
            nodes[node.idx] = new_node
            
            # Update adjacent nodes
            nodes[left_node.left].right = node.idx
            nodes[right_node.right].left = node.idx
            
            heapq.heappush(queue, new_node)

        return res if count >= k else -1
