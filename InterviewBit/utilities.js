//Definition for a  binary tree node
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
  isSymmetric: function (A) {
    if (!A) return true;
    if (!A.right && !A.left) return true;

    const helper = (a, b) => {
      if (!a && !b) return true;
      if ((a && !b) || (!a && b) || a.data !== b.data) {
        return false;
      }
      return helper(a.right, b.right) && helper(a.left, b.left);
    };
    const result = helper(A.left, A.right) ? 1 : 0;
    console.log(result)
    return result;
  },
};

const nums = [
  67, 0, 4, 4, 10, 6, 6, 10, 16, 3, 14, 9, 9, 14, 3, 16, 13, -1, 7, 11, -1, -1,
  -1, 15, 15, -1, -1, -1, 11, 7, -1, 13, -1, 12, -1, 1, -1, -1, -1, -1, -1, -1,
  -1, -1, 1, -1, 12, -1, 8, -1, 5, 2, 2, 5, -1, 8, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1,
];

const constructTree = (arr) => {
  const root = new TreeNode(arr[0]);
  const queue = [root];
  for (let i = 1; i < arr.length; i += 2) {
    const node = queue.shift()
    const left = arr[i] !== -1 ? new TreeNode(arr[i]) : null;
    const right =
      arr[i + 1] !== -1 && arr[i + 1] !== undefined ? new TreeNode(arr[i + 1]) : null;
    node.left = left
    node.right = right
    if(left) queue.push(left)
    if(right) queue.push(right)
  }

  return root;
};

const root = constructTree(nums)
console.log("root", root)
module.exports.isSymmetric(root)
