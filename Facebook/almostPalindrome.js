// palindrome with at most one difference
const perfectPalindrom = (s) =>{
    let idx1 = 0;
    let idx2 = s.length - 1
    let result = true;
    while(idx1 < idx2){
        if(s[idx1] !== s[idx2]){
            result = false;
            break
        }
        idx1++;
        idx2--;
    }
    return result;
}

const almostPalindrome = (s) =>{
    let idx1 = 0;
    let idx2 = s.length - 1
    let result = true;
    while(idx1 < idx2){
        if(s[idx1] !== s[idx2]){
            const s1 = s.slice(idx1 + 1, idx2 + 1);
            const s2 = s.slice(idx1, idx2)
            result = perfectPalindrom(s1) || perfectPalindrom(s2);
            break;
        }
        idx1++;
        idx2--;
    }
    return result;
}
