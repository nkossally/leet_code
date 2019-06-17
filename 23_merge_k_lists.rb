require "byebug"
class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

def merge_k_lists(lists)
  lists.select!{|node| node}
  lists.sort!{|node1, node2| node1.val<=>node2.val}
  result = nil
  next_node = nil

  while lists.length>0
    min = lists[0].val
    lists[0] = lists[0].next
    lists = moveDownFirst(lists)

    if next_node 
      next_node.next = ListNode.new(min)
      next_node = next_node.next
    else
      result = ListNode.new(min)
      next_node = result
    end
  end
  return result
end

 
def moveDownFirst(lists)
  first_node = lists[0]
  insert_idx = nil
  if first_node
    for idx in (1...lists.length)
      if first_node.val <= lists[idx].val
        insert_idx = idx
        break
      end
    end
    insert_idx = insert_idx ? insert_idx : lists.length
    lists.insert(insert_idx, first_node)

  end
  lists.delete_at(0)
  return lists
end

def make_list(vals)
  list = ListNode.new(vals[0])
  next_node = list
  for val in vals[1..-1]
    next_node.next = ListNode.new(val)
    next_node = next_node.next
  end
  list
end

list1 = make_list([1, 4, 5])
list2 = make_list([1, 3, 4])
list3 = make_list([2, 6])

p merge_k_lists([list4, list5])
