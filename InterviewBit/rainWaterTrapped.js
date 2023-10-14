module.exports = { 
    //param A : array of integers
    //return an integer
       trap : function(A){
           let right = []
           let left = [A[0]]
           right[A.length - 1] = A[A.length - 1]
           
           for(let i = 1; i < A.length; i++){
               left[i] = Math.max(left[i - 1], A[i])
           }
           
           for(let i = A.length - 2; i >= 0; i--){
               right[i] = Math.max(right[i + 1], A[i])
           }
           console.log(left, right)
           
           let total = 0;
           for(let i = 0; i < A.length; i++){
               const val = Math.min(left[i], right[i]) - A[i];
               if(val > 0) total += val;
           }
           console.log("total", total)
           return total;
       }
   };
   module.exports.trap([ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ])