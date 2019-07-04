class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

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
          pointer2 = pointer2.next
          count -= 1
        while pointer2:
          pointer1 = pointer1.next
          pointer2 = pointer2.next
        pointer1.next = pointer1.next.next
        return head

# test
node1 = ListNode(1)
node2 = ListNode(2)
node3 = ListNode(3)
node4 = ListNode(4)
node5 = ListNode(5)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
test = Solution()
test.removeNthFromEnd(node1, 2)
print(node3.next.val)