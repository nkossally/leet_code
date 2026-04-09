# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minimumOperations(self, root: Optional[TreeNode]) -> int:
        stack = [root]
        self.swaps = 0
        def process_row(row):
            row_sorted = row[:]
            row_sorted.sort()

            for idx in range(len(row)):
                num = row[idx]
                correct_num = row_sorted[idx]
                if num != correct_num:
                    other_idx = row.index(correct_num)
                    row[other_idx] = num
                    row[idx] = correct_num
                    self.swaps += 1
        
        while stack:
            new_stack = []
            row = []
            for node in stack:
                row.append( node.val)
                if node.left:
                    new_stack.append(node.left)
                if node.right:
                    new_stack.append(node.right)
            process_row(row)
            stack = new_stack
        return self.swaps

        