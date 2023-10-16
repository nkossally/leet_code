module.exports = { 
    //param A : array of integers
    //return a array of array of integers
       subsetsWithDup : function(A){
           A.sort((a, b) => a - b)
           const counts = {}
           A.forEach(val =>{
               if(!counts[val]) counts[val] = 0;
               counts[val]++
           })
           A = Array.from(new Set(A))
           const subsets = [];
           const getSubset = (arr, idx) =>{
               if(idx === A.length){
                   subsets.push(arr.sort((a, b) => a - b));
                   return
               }
               let val = A[idx]
               let count = counts[val]
               let k = 0;
               const tail = []
               while(k <= count){
                   getSubset(arr.concat(tail), idx + 1)
                   tail.push(val)
                   k++
               }
               
           }
           getSubset([], 0)
           const sortFn = (a, b) =>{
               if(a.length === 0) return -1;
               if(b.length === 0) return 1;
               if(a[0] === b[0]){
                   return sortFn(a.slice(1), b.slice(1))
               }
               return a[0] - b[0]
           }
           subsets.sort(sortFn)
           console.log(subsets)
           return subsets;
           
   
       }
   };
   
   module.exports.subsetsWithDup([ 1, 9, 10, 10, 3, 8, 9 ])