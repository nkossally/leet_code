class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  //param A : root node of tree
  //param B : integer
  //param C : integer
  //return an integer
  lca: function (A, B, C) {
    if (B === C) return B;
    const lookForNode = (node, val, arr) => {
      if (!node) return;
      if (node.data === val) {
        return arr;
      }
      if (!node.right && !node.left) return null;
      let arr1;
      let arr2;
      if (node.left) {
        arr1 = lookForNode(node.left, val, [...arr, 0]);
      }
      if (node.right) {
        arr2 = lookForNode(node.right, val, [...arr, 1]);
      }
      if (arr1) return arr1;
      if (arr2) return arr2;
    };

    const arr1 = lookForNode(A, B, []);
    const arr2 = lookForNode(A, C, []);
    console.log(arr1, arr2)

    if (!arr1 || !arr2) return -1;

    let i = -1;
    let node = A;
    while (
      i < Math.min(arr1.length, arr2.length) &&
      arr1[i + 1] === arr2[i + 1]
    ) {
      if (arr1[i + 1] === 1) {
        node = node.right;
      } else {
        node = node.left;
      }
      i++;
    }
    console.log(node)
    return node.data;
  },
};

const node = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
const node4 = new TreeNode(5)
node.right = node2
node.left = node3
node3.right = node4
module.exports.lca(node, 5, 3)