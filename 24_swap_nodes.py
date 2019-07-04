class ListNode(object):
  def __init__(self, x):
    self.val = x
    self.next = None

class Solution(object):
  def swapPairs(self, head):
    """
    :type head: ListNode
    :rtype: ListNode
    """
    if not head or not head.next:
      return head
    result = head.next
    curr = head
    prev = None
    while curr and curr.next:
      temp = curr.next
      curr.next = curr.next.next
      temp.next = curr
      if prev:
        prev.next = temp
      prev = curr
      curr = curr.next
    return result

node1 = ListNode(1)
node2 = ListNode(2)
node3 = ListNode(3)
node4 = ListNode(4)
node1.next = node2
node2.next = node3
node3.next = node4
test = Solution()
print test.swapPairs(node1).next.next.next


        