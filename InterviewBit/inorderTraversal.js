class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  //param A : root node of tree
  //return a array of integers
  inorderTraversal: function (A) {
    if (!A) return [];
    const result = [];

    const helper = (node) => {
      if (node.left) {
        helper(node.left);
      }
      result.push(node.data);
      if (node.right) {
        helper(node.right);
      }
    };

    helper(A);
    console.log(result)
    return result;
  },

  preorderTraversal: function (A) {
    if (!A) return [];
    const result = [];

    const helper = (node) => {
      result.push(node.data);
      if (node.left) {
        helper(node.left);
      }
      if (node.right) {
        helper(node.right);
      }
    };

    helper(A);
    console.log(result)
    return result;
  },


  postOrderTraversal: function (A) {
    if (!A) return [];
    const result = [];

    const helper = (node) => {
      if (node.left) {
        helper(node.left);
      }
      if (node.right) {
        helper(node.right);
      }
      result.push(node.data);
    };

    helper(A);
    console.log(result)
    return result;
  },
};

const node1 = new TreeNode(100)
const node2 = new TreeNode(20)
const node3 = new TreeNode(200)
const node4 = new TreeNode(10)
const node5 = new TreeNode(30)
const node6 = new TreeNode(150)
const node7 = new TreeNode(300)
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

module.exports.postOrderTraversal(node1);
