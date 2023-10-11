class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

//param A : root node of tree
//return an integer
function maxPathSum(A) {
  let result = -1 / 0;

  const sum = (node) => {
    if (node === null) return 0;
    const left = Math.max(0, sum(node.left));
    const right = Math.max(0, sum(node.right));
    result = Math.max(result, node.data + left + right);
    return node.data + Math.max(left, right);
  };

  sum(A);
  console.log(result)
  return result;
}

const node = new TreeNode(3);
const node2 = new TreeNode(1);
const node3 = new TreeNode(2);
node.left = node2;
node.right = node3;
maxPathSum(node);
