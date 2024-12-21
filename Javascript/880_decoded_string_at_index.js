/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function (s, k) {
    const digits = new Set([])
    for (let i = 0; i < 10; i++) {
        digits.add(i.toString())
    }

    let decodedStrArr = []

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (digits.has(char)) {
            const num = parseInt(char)
            if(decodedStrArr.length * num >= k){
                let idx = k % decodedStrArr.length - 1
                if(idx === -1) idx = decodedStrArr.length - 1
                return decodedStrArr[idx]
            }
            temp = decodedStrArr.slice(0)
            for (let j = 0; j < num - 1; j++) {
                decodedStrArr = decodedStrArr.concat(temp)
                if (decodedStrArr.length >= k) {
                    return decodedStrArr[k - 1]
                }
            }
        } else {
            decodedStrArr.push(char)
            if (decodedStrArr.length >= k) {
                return decodedStrArr[k - 1]
            }
        }
    }
    console.log(decodedStrArr[k - 1],decodedStrArr )
    return decodedStrArr[k - 1]
};

s = "y959q969u3hb22odq595"
k = 222280369

decodeAtIndex(s, k)