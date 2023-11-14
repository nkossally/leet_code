module.exports = { 
    //param A : array of integers
    //return a array of integers
       lszero : function(A){
           
           let sumTill = {}
           earliestSum = {}
           let result = [];
           
           let sum = 0
           for(let i = 0; i < A.length; i++){
               sum += A[i]
               sumTill[i] = sum;
               if(sum === 0) result = A.slice(0, i + 1)
               if(earliestSum[sum] === undefined){
                   earliestSum[sum] = i
               }
           }
           for(let i = 0; i < A.length; i++){
               const sum = sumTill[i]
               const otherIdx = earliestSum[sum]
               if(otherIdx !== undefined && otherIdx < i && i - otherIdx > result.length){
                   result = A.slice(otherIdx + 1, i + 1)
               }
           }
           return result;
       }
   };
module.exports.lszero([ 1, 2, -2, 4, -4 ])   