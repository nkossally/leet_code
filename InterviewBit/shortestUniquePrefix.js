module.exports = {
  //param A : array of strings
  //return a array of strings
  prefix: function (A) {
    const tree = {};
    A.forEach((word) => {
      let node = tree;
      for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (node[letter] === undefined) {
          node[letter] = {};
        }
        node = node[letter];
      }
    });
    const result = []

    const getPrefixFromNode = (prefix, node, lastBranchIdx) =>{
        if(Object.keys(node).length === 0){
            if(lastBranchIdx !== undefined){
                result.push(prefix.slice(0, lastBranchIdx + 1))
            } else {
                result.puths(prefix.slice(0, 1))
            }
        } else if(Object.keys(node).length === 1){
            Object.keys(node).forEach( letter =>{
                getPrefixFromNode(prefix + letter, node[letter], lastBranchIdx)
            })
        } else {
            Object.keys(node).forEach( letter =>{
                getPrefixFromNode(prefix + letter, node[letter], prefix.length)
            })
        }
    }
 
    getPrefixFromNode("",tree,undefined)
    return result;
  },
};

module.exports.prefix([ "bearcat", "bert" ])