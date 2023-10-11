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
    const helper = node =>{
        const val = node.data;
        const left = node.left ? helper(node.left) : 0;
        const right = node.right ? helper(node.right) : 0;
        const leftOrRight = Math.max(left, right)
        return val + Math.max(0, leftOrRight)
    }

    let max = A.data;
    let heap =[A]
    while(heap.length > 0){
        const node = heap.shift();
        max = Math.max(max, helper(node))
        if(node.left) heap.push(node.left)
        if(node.right) heap.push(node.right)
    }
    return max
}

const node = new TreeNode(3)
const node2 = new TreeNode(1)
const node3 = new TreeNode(2)
node.left = node2;
node.right = node3
maxPathSum(node)