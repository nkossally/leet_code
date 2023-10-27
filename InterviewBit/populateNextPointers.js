class TreeLinkNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

module.exports = {
  //param A : root node of tree
  //return nothing
  connect: function (A) {
    A.next = null;
    const queue = [A];

    while (queue.length > 0) {
      const node = queue.shift();
      if (node.left) {
        node.left.next = node.right;
        queue.push(node.left);
      }
      if (node.right) {
        if (node.next) {
          node.right.next = node.next.left;
        }
        queue.push(node.right);
      }
    }

    console.log("left");
    console.log(A.left.right);
    // console.log("right");
    // console.log(A.right);
    return A;
  },
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const constructTree = (arr) => {
  const root = new TreeLinkNode(arr[0]);
  const queue = [root];
  for (let i = 1; i < arr.length; i += 2) {
    const node = queue.shift();
    const left = arr[i] !== -1 ? new TreeLinkNode(arr[i]) : null;
    const right =
      arr[i + 1] !== -1 && arr[i + 1] !== undefined
        ? new TreeLinkNode(arr[i + 1])
        : null;
    node.left = left;
    node.right = right;
    if (left) queue.push(left);
    if (right) queue.push(right);
  }

  return root;
};
const root = constructTree(arr);

module.exports.connect(root);
