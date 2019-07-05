# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None



class Solution(object):
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        pointer1 = head
        pointer2 = head
        count = n+1
        while count > 0:
          if pointer2:
            pointer2 = pointer2.next
          else:
            head = head.next
          count -= 1
        while pointer2:
          pointer1 = pointer1.next
          pointer2 = pointer2.next
        if pointer1 and pointer1.next:
          pointer1.next = pointer1.next.next
        return head