// Definition for a  binary tree node
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

//param A : integer
//return an array of TreeNode
const generateTrees = (A) => {
  const constructAllTrees = (start, end) => {
    if (start > end) return [null];

    const list = [];

    for (let i = start; i <= end; i++) {
      const rightNodes = constructAllTrees(i + 1, end);
      const leftNodes = constructAllTrees(start, i - 1);

      rightNodes.forEach((rightNode) => {
        leftNodes.forEach((leftNode) => {
          const node = new TreeNode(i);
          node.left = leftNode;
          node.right = rightNode;
          list.push(node);
        });
      });
    }
    return list;
  };
  const allNodes = constructAllTrees(1, A);
  return allNodes;
};

const printNode = (node) => {
  const heap = [node];
  let nums = [];

  while (heap.length > 0) {
    const curr = heap.shift();
    nums.push(curr.data);
    if (curr.left) heap.push(curr.left);
    if (curr.right) heap.push(curr.right);
  }
  console.log(nums);
};

generateTrees(3);
