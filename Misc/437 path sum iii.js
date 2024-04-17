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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if(!root) return 0;

    let count = 0;

    const dfs = node =>{
        if(!node) return

        test(node, targetSum)
        dfs(node.left)
        dfs(node.right)
    }


    const test = (node, target) =>{
        if(!node) return

        if(target === node.val) count++

        test(node.left, target - node.val)
        test(node.right, target - node.val)
    }

    dfs(root)

    return count 
};


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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    const cache = {0: 1}
    let result = 0;

    const dfs = (node, currPathSum) =>{
        if(!node) return
        const sum = currPathSum + node.val
        const diff = sum - targetSum;

        if(cache[diff] === undefined) cache[diff] = 0
        result += cache[diff]
        if(cache[sum] === undefined) cache[sum] = 0
        cache[sum]++

        dfs(node.right, sum)
        dfs(node.left, sum)

        // when move to a different branch, the currPathSum is no longer available, hence remove one. 
        cache[sum]--
    }

    dfs(root, 0)

    return result
};