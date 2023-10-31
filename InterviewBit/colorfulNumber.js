module.exports = { 
    //param A : integer
    //return an integer
       colorful : function(A){
           A = A.toString().split("").map(elem => parseInt(elem))
           const seen = new Set();
           let result = 1;
           for(let i = 0; i < A.length;i++){
            for(let j = i; j < A.length; j++){
                const prod = A.slice(i, j + 1).reduce((acc, curr) => acc*curr, 1);
                if(seen.has(prod)){
                    result = 0
                }
                seen.add(prod)
            }
           }
           return result;
       },
      
    
   };
   module.exports.colorful(234)