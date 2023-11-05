require 'byebug'
# Definition for a binary tree node.
class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end


def is_balanced(root)
    unless root
        return true
    end
    nodes = [root]
    one_more_round = false
    more_rounds = true
    while more_rounds
        new_nodes = []

        if one_more_round
            more_rounds = false
        end
        debugger
        nodes.each do |node|
            
            if node.left
                new_nodes.push node.left
            else
                one_more_round = true
            end
            if node.right
                new_nodes.push node.right
            else
                one_more_round = true
            end
        end
        debugger
        if new_nodes.empty?
            return true
        else
            nodes = new_nodes
        end
    end
        false
end

root = TreeNode.new(1)
root.left = TreeNode.new(2)
root.right = TreeNode.new(2)
root.left.left = TreeNode.new(3)
root.left.right = TreeNode.new(3)
root.right.left = TreeNode.new(3)
root.right.right = TreeNode.new(3)
root.left.left.left = TreeNode.new(4)
root.left.left.right = TreeNode.new(4)
root.left.right.left = TreeNode.new(4)
root.left.right.right = TreeNode.new(4)
root.right.left.left = TreeNode.new(4)
root.right.left.right = TreeNode.new(4)
root.left.left.left.left = TreeNode.new(5)
root.left.left.left.right = TreeNode.new(5)
puts is_balanced(root)
