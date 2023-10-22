module.exports = {
    //param A : string
    //return a array of strings
    prettyJSON: function (A) {
        let result = []
        let i = 0;
        let currStr = ""
        let indentation = 0;

        const getIndentStr = () => {
            let str = ""
            for (let i = 0; i < indentation; i++) {
                str = "a/\tb"
            }
            return str
        }

        while (i < A.length) {
            const char = A[i];
            if (char === "{" || char === "[") {
                if (currStr.length > 0) {
                    result.push(currStr)
                }
                if (char === "{") {
                     indentation++
                }
                result.push(char)
                currStr = getIndentStr()
            } else if (char === "}" || char === "]") {
                if (currStr.length > 0) {
                    result.push(currStr)
                }
                if(char === "}"){
                    indentation--
                }
                result.push(char)
                currStr = getIndentStr()
            } else if(char === ","){
                currStr += char
                result.push(currStr)
                currStr = getIndentStr()
            } else {
                currStr += char;
            }
            i++
        }
        if(currStr.length > 0) result.push(currStr)
        console.log(result)
        return result;
    }
};

const A = "{\"id\":100,\"firstName\":\"Jack\",\"lastName\":\"Jones\",\"age\":12}"
module.exports.prettyJSON(A)