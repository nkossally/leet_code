function substringDiff(k, s1, s2) {
    let maxLength = 0;
    
    const processHalf = (i, j) =>{
        // Either i or j will be 0. The variable len is set to the max length 
        // of the substrings under consideration.
        let len = s1.length - Math.max(i, j)
        let sub = 0;
        let queue = []
        
        for(let l = 0; l < len; l++){
            // If we reach an index at which the substrings under consideration
            // have too many differences, then bump up the startind index
            // of substrings under consideration to what is called "sub" below.
            if(s1[i + l] !== s2[j + l]){
                if(k === 0){
                    sub = l + 1
                } else  {
                    if(queue.length === k) {
                        sub = queue.length > 0 ? queue.shift() + 1 : 1;
                    }
                    queue.push(l)
                }
            }
            maxLength = Math.max(maxLength, l - sub + 1)
        }
    }
    // Consider substr
    for(let i = 0; i < s1.length; i++){
         processHalf(i, 0)
    }
    for(let j = 1; j < s1.length; j++){
         processHalf(0, j)
     }
     
     return maxLength
}
