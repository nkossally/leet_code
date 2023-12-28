const input = "./input.txt";
const fs = require("fs");

const decode_message = async (inputFile) => {
  let arr;
  fs.readFile(inputFile, (err, data) => {
    if (err) throw err;

    arr = data.toString().split("\n");

    const numToWord = {};
    arr.forEach((str) => {
      if (str.length > 0) {
        const numAndWordArr = str.split(" ");
        numToWord[numAndWordArr[0]] = numAndWordArr[1];
      }
    });

    const sortedNums = Object.keys(numToWord)
      .map((numStr) => parseInt(numStr))
      .sort((a, b) => a - b);
      console.log(numToWord)

    let pyramidRowLength = 1;
    let idx = -1;

    let message = "";

    while (idx < sortedNums.length) {
      idx += pyramidRowLength;
      if (idx < sortedNums.length) {
        message += numToWord[sortedNums[idx]] + " ";
      }
      pyramidRowLength++;
    }
    console.log(message)
    return message;
  });
};

decode_message(input);





// const decode_message = async (inputFile) => {
//     let arr;
//     fs.readFile(inputFile, (err, data) => {
//       if (err) throw err;
  
//       arr = data.toString().split("\n");
  
//       const numToWord = {};
//       arr.forEach((str) => {
//         if (str.length > 0) {
//           const numAndWordArr = str.split(" ");
//           numToWord[numAndWordArr[0]] = numAndWordArr[1];
//         }
//       });
  
//       const sortedNums = Object.keys(numToWord)
//         .map((numStr) => parseInt(numStr))
//         .sort((a, b) => a - b);
//         console.log(numToWord)
  
//       let pyramidRowLength = 1;
//       let idx = -1;
  
//       let message = "";
  
//       while (idx < sortedNums.length) {
//         idx += pyramidRowLength;
//         if (idx < sortedNums.length) {
//           message += numToWord[sortedNums[idx]] + " ";
//         }
//         pyramidRowLength++;
//       }
//       console.log(message)
//       return message;
//     });
//   };
  
//   decode_message(input);
  