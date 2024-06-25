/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    const palindromes = []

    class Node{
        constructor(letter){
            this.letter = letter
            this.endIdx = undefined
            this.children = {}
        }
    }

    const getIsPalindrome = word =>{
        let i = 0;
        let isPalindrome = true
        while(i < word.length / 2){
            if(word[i] !== word[word.length - i - 1]){
                isPalindrome = false
                break
            }
            i++
        }
        return isPalindrome;
    }

    const backwordsRoot = new Node()
    let emptyStringIdx;
    const basePalindromeIndices = []

    // Handle condition of wordss that are palindromes that can combine with empty string
    for(let i = 0; i < words.length; i++){
        const word = words[i]
        if(word !== "" && getIsPalindrome(word)){
            basePalindromeIndices.push(i)
        }
        if(word === ""){
            emptyStringIdx = i
        }
    }
    if(emptyStringIdx !== undefined){
        basePalindromeIndices.forEach(idx => {
            palindromes.push([emptyStringIdx, idx])
            palindromes.push([idx, emptyStringIdx])
        })
    }



    for(let i = 0; i < words.length; i++){
        const word = words[i]
        let node = backwordsRoot
        for(let j = word.length - 1; j >= 0; j--){
            const letter = word[j]
            if(!node.children[letter]){
                node.children[letter] = new Node(letter)
            }
            node = node.children[letter]
            if(j === 0) node.endIdx = i
        }
    }

    const lookForPalindromicPrefix = (node, i, prefixSoFar, beginning) =>{
        if(node.endIdx !== undefined && node.endIdx !== i && !beginning){
            if(getIsPalindrome(prefixSoFar)){
                palindromes.push([i, node.endIdx])
            }
        }
        Object.keys(node.children).forEach(letter => {
            lookForPalindromicPrefix(node.children[letter], i, prefixSoFar + letter, false)
        })
    }

    for(let i = 0; i < words.length; i++){
        const word = words[i]
        let node = backwordsRoot
        for(let j = 0; j < word.length; j++){
            const letter = word[j]
            if(node.children[letter]){
               node = node.children[letter]
               if(node.endIdx !== undefined){
                    if(node.endIdx !== i && getIsPalindrome(word.slice(j + 1))){
                        palindromes.push([i, node.endIdx])
                    }

               }
               // look for palindromes in which words[i] is shorter than the word with which to combine and form palindrome
               if(j === word.length -1){
                lookForPalindromicPrefix(node, i, "", true)
               }

            } else {
                break
            }
            
        }
    }
    return palindromes
};