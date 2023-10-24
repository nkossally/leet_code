// Swap two nodes to balance a binary search tree

module.exports = {
	//param A : root node of tree
	//return a array of integers
	recoverTree: function (A) {
		const getHigherLeftDescendant = node => {
			if(!node.left) return node;
			let maxNode = node;
			const queue = [node.left]
			while (queue.length > 0) {
				const curr = queue.shift()
				if(curr.data > maxNode.data){
					maxNode = curr
				}
				if(curr.left) queue.push(curr.left)
				if(curr.right) queue.push(curr.right)
			}
			return maxNode
		}
		
		const getLowerRightDescendant = node => {
			if(!node.right) return node;
			let minNode = node;
			const queue = [node.right]
			while (queue.length > 0) {
				const curr = queue.shift()
				if(curr.data < minNode.data){
					minNode = curr
				}
				if(curr.left) queue.push(curr.left)
				if(curr.right) queue.push(curr.right)
			}
			return minNode
		}
		
		const result = []
		const queue = [A]
		
		while(queue.length > 0){
			const curr = queue.shift()
			const maxLeft = getHigherLeftDescendant(curr)
			const minRight = getLowerRightDescendant(curr);
			if(maxLeft.data > curr.data){
				if(minRight.data < curr.data){
					result.push(minRight.data)
					result.push(maxLeft.data)
				} else {
					result.push(curr.data)
					result.push(maxLeft.data)
				}
				break;
			} else if(minRight.data < curr.data){
				result.push(minRight.data)
				result.push(curr.data)
				break;
			}
			
			if(curr.left) queue.push(curr.left)
			if(curr.right) queue.push(curr.right)
		}
		// result.sort((a, b) => a - b)

		return result;
	}
};
