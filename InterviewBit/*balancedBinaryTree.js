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
  isBalanced: function (A) {
    if(A === null) return 1;
    let result = 1;

    const getHeight = node =>{
        if(node === null) return 0;

        const leftHeight = getHeight(node.left)
        const rightHeight = getHeight(node.right)

        if(Math.abs(leftHeight - rightHeight) > 1){
            result = 0;
        }

        return Math.max(leftHeight, rightHeight) + 1
    }


    getHeight(A)
    return result;
  },
};
//    17 1 2 3 4 5 -1 6 7 8 -1 -1 -1 -1 -1 -1 -1 -1
// const node1 = new TreeNode(17);
// const node2 = new TreeNode(1);
// const node3 = new TreeNode(2);
// const node4 = new TreeNode(3);
// const node5 = new TreeNode(4);
// const node6 = new TreeNode(5);
// const node7 = new TreeNode(6);
// const node8 = new TreeNode(7);
// const node9 = new TreeNode(8);
// node1.left = node2;
// node1.right = node3;
// node2.left = node4;
// node2.right = node5;
// node3.left = node6;
// // node3.right = node7
// node4.left = node7;
// node4.right = node8;
// node5.left = node9;
// module.exports.isBalanced(node1);



// 25 7 10 5 9 12 2 -1 11 -1 -1 1 8 4 -1 6 3 -1 -1 -1 -1 -1 -1 -1 -1 -1

const node1 = new TreeNode(25);
const node2 = new TreeNode(7);
const node3 = new TreeNode(10);
const node4 = new TreeNode(5);
const node5 = new TreeNode(9);
const node6 = new TreeNode(12);
const node7 = new TreeNode(2);
const node8 = new TreeNode(11);
const node9 = new TreeNode(1);
const node10 = new TreeNode(8);
const node11 = new TreeNode(4);
const node12 = new TreeNode(6);
const node13 = new TreeNode(3);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7
// node4.left = node8;
node4.right = node8;
node6.left = node9;
node6.right = node10;
node7.left = node11;
node8.left = node12;
node8.right = node13

module.exports.isBalanced(node1);