# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        
        def convert_to_num(node):
            res = ""
            while node != None:
                res = str(node.val) + res
                node = node.next
            return int(res)

        num1 = convert_to_num(l1) 
        num2 = convert_to_num(l2)        
        sum = num1 + num2
        sum_str = str(sum)[::-1]
        root = None
        prev = None
        for letter in sum_str:
            if root == None:
                root = ListNode(letter)
                prev = root
            else:
                prev.next = ListNode(letter)
                prev = prev.next


        return root
            
