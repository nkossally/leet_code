/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    let found = false;
    const seenSubstrings = {};
        
    const wordBreakRecursive = (s) => {
        if(!found){
            if(s.length === 0){
                found = true;
                return;
            }
            for (let i = 0; i< s.length; i++) {
                const substring = s.slice(0, i+1);
                if(!seenSubstrings[s.slice(i+1)]){
                    
                    if (wordDict.includes(substring)){
                        wordBreakRecursive(s.slice(i+1));
                        seenSubstrings[s.slice(i+1)] = true;
                    }

                }
             }
        }

    }
    
    wordBreakRecursive(s);

    return found;
    
};