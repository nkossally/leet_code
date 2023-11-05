# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {Integer[]} nums
# @return {TreeNode}
def sorted_array_to_bst(nums)
  if nums.empty?
    return nil
  end
  mid = nums.length/2
  tree = TreeNode.new(nums[mid])
  tree.left = sorted_array_to_bst(nums[0...mid])
  tree.right = sorted_array_to_bst(nums[mid+1..-1])
  return tree
end