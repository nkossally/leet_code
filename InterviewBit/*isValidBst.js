// Definition for a  binary tree node
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  //param A : root node of tree
  //return an integer
  isValidBST: function (A) {
    const helper = (node, minimum, maximum) => {
      if(!node) return true;
      if(node.data < minimum || node.data > maximum){
        return false;
      }
      return helper(node.left, minimum, node.data) && helper(node.right, node.data, maximum)
       
    }
    const result = helper(A, -1/0, 1/0)

    console.log(result)
    return result ? 1 : 0;

  },
};
// const node1 = new TreeNode(11);
// const node2 = new TreeNode(3);
// const node3 = new TreeNode(2);
// const node4 = new TreeNode(4);
// const node5 = new TreeNode(1);
// const node6 = new TreeNode(3);
// node1.left = node2;
// node1.right = node3;
// node2.left = node4;
// node2.right = node5;
// node3.left = node6;


// [5,1,4,null,null,3,6]
const node1 = new TreeNode(5);
const node2 = new TreeNode(1);
const node3 = new TreeNode(4);
const node4 = new TreeNode(3);
const node5 = new TreeNode(6);
node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

module.exports.isValidBST(node1);
