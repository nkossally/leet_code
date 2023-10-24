module.exports = { 
    //param A : array of strings
    //param B : string
    //return an integer
       exist : function(A, B){
       const dirs = [
         [1, 0],
         [-1, 0],
         [0, 1],
         [0, -1],
       ];
       const isValid = (x, y) => {
         return x >= 0 && x < A.length && y >= 0 && y < A[0].length;
       };
   
       let result = 0;
       const getWord = (x, y, word) => {
           if(result === 1) return
         if (word === "") {
           result = 1;
           return;
         }
           dirs.forEach((dir) => {
             const newX = x + dir[0];
             const newY = y + dir[1];
             if (isValid(newX, newY) && word[0] === A[newX][newY]) {
               getWord(newX, newY, word.slice(1));
             }
           });
      
       };
       for (let i = 0; i < A.length; i++) {
         for (let j = 0; j < A[0].length; j++) {
           if(A[i][j] === B[0]) getWord(i, j, B.slice(1));
         }
       }
       // console.log(result);
       return result;
       }
   };
const A = [
  "BGGAGBGE",
  "EFFAGBEG",
  "FGGCBBFF",
  "BEEBDEDC",
  "FACABDCD",
  "ECGEFFED",
  "GDBEGACG",
  "GCECFBBD",
];
const B = "CABBFFEAC";
module.exports.exist(A, B);
