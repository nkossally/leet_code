/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    let count = 0;

    const getDistanceToLeaves = node =>{
        if(!node.right && !node.left) return [1]

        let rightDistances = []
        let leftDistances = []
        
        if(node.right){
            rightDistances = getDistanceToLeaves(node.right)
        }

        if(node.left){
            leftDistances = getDistanceToLeaves(node.left)
        }
        for(let i = 0; i < rightDistances.length; i++ ){
            for(let j = 0; j < leftDistances.length; j++){
                if(rightDistances[i] + leftDistances[j] <= distance ){
                    count++
                }
            }
        }

        return  (rightDistances.concat(leftDistances)).map(elem => elem + 1).filter(elem => elem <= distance) 
    }
    
    getDistanceToLeaves(root)

    return count
};