function solution(s) {
    const indexOfLetter = []
    const letters = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < s.length; i++){
        const charCode = s[i].charCodeAt(0) - "a".charCodeAt(0);
        if(indexOfLetter[charCode] === undefined){
            indexOfLetter[charCode] = i;
        } else {
            indexOfLetter[charCode] = null;
        }
    }
    let minIdx = 1/0;
    indexOfLetter.forEach(idx =>{
        if(idx !== null){
            minIdx = Math.min(minIdx, idx)
        }
    })
    
    return minIdx !== 1/0 ? s[minIdx] : "_"
}
