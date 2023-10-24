// Definition for a  binary tree node
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return the root node in the tree
  buildTree: function (A, B) {
    let aIndex = 0;

    const buildTree = (start, end) => {
      let i = start;
      let bIndex = -1;
      while (i <= end) {
        if (B[i] === A[aIndex]) {
          bIndex = i;
          break;
        }
        i++;
      }
      if (bIndex === -1) return null;
      const root = new TreeNode(A[aIndex]);
      aIndex++;

      root.left = buildTree(start, bIndex - 1);
      root.right = buildTree(bIndex + 1, end);

      return root;
    };

    const root = buildTree(0, B.length - 1);

    return root;
  },
};
