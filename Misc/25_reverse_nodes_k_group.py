class ListNode(object):
  def __init__(self, x):
    self.val = x
    self.next = None
 
class Solution(object):
  def reverseKGroup(self, head, k):
    if k ==1:
      return head
    prev = None
    curr = head
    new_head = None
    
    while curr:
      swapped = self.swap(curr, k)
      if swapped:
        if prev:
          prev.next = swapped
          prev = self.get_descendant(prev, k)
        else:
          new_head = swapped
          prev = self.get_descendant(swapped, k-1)
        curr = prev.next
      else:
        curr = None
        
    if not new_head:
      return head
    return new_head

  def get_descendant(self, node, num):
    descendant = node
    for i in range(num):
      if descendant:
        descendant = descendant.next
    return descendant

  def swap(self, curr, swap_length):
    new_head = self.get_descendant(curr, swap_length-1)
    if not new_head:
      return None
    new_curr = curr
    prev = None
    while swap_length > 1:
      penultimate = self.get_descendant(new_curr, swap_length-2)
      parent = None
      if penultimate:
        parent = penultimate.next
      if parent:
        if swap_length == 2:
          temp = parent.next
          parent.next = new_curr
          new_curr.next = temp

        else:
          temp = new_curr.next
          new_curr.next = parent.next

          penultimate.next = new_curr
          parent.next = temp
        if prev:
          prev.next = parent
        prev = parent
        new_curr = parent.next

        swap_length -= 2
      else:
        return None

    return new_head