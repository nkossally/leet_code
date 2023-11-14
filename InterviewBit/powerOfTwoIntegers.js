module.exports = { 
    //param A : integer
    //return an integer
       isPower : function(A){
           if(A === 1) return 1
                   if(A === 2) return 0
   
           let result = false;
           let num = Math.pow(A, 1/2)
           let base = 2;
           while(num >= 2){
               if(Math.pow(Math.round(num), base) === A){
                   result = true;
                   break;
               }
               base++
               num = Math.pow(A, 1/base)
               console.log(num, base)
           }
           return result ? 1 : 0
   
       }
   };
   

   module.exports.isPower(16808)