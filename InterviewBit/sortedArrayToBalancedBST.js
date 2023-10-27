// Definition for a binary tree node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
module.exports = {
  /** * param A: list of integer
   *      return: root node of balanced BST
   */
  sortedArrayToBST: function (A) {

    const constructTree = ( start, end) =>{
        if(start > end) return null;
        const mid = Math.floor((end + start)/2);

        const node = new TreeNode(A[mid]);
        node.left = constructTree(start, mid - 1)
        node.right = constructTree(mid + 1, end)
        return node
    }

    const root = constructTree( 0, A.length - 1)

    return root;
  },
  isBalanced: function (A) {
    if (A === null) return 1;
    let result = 1;

    const getHeight = (node) => {
      if (node === null) return 0;

      const leftHeight = getHeight(node.left);
      const rightHeight = getHeight(node.right);

      if (Math.abs(leftHeight - rightHeight) > 1) {
        result = 0;
      }

      return Math.max(leftHeight, rightHeight) + 1;
    };

    getHeight(A);
    return result;
  },
};

const A = [
  90, 228, 245, 290, 397, 471, 572, 649, 688, 710, 823, 829, 830, 859, 932, 939,
  962,
];

module.exports.sortedArrayToBST(A);
