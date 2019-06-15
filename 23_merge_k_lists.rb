require "byebug"
class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end


def merge_k_lists(lists)
  min = nil
  iterate = true
  result = nil
  next_node = nil
  min_idx = nil
  while iterate
    min = nil
    min_idx = nil
    lists.each_with_index do |list, idx|
      if min && list && list.val < min
        min = list.val
        min_idx = idx
      elsif !min && list
        min = list.val
        min_idx = idx
      end
        
    end

    if min
      lists[min_idx] = lists[min_idx].next
      if next_node 
        next_node.next = ListNode.new(min)
        next_node = next_node.next
      else
        result = ListNode.new(min)
        next_node = result
      end
    end
    iterate = min
  end
  result
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

p merge_k_lists([list1, list2, list3])
