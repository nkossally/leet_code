const input = "./input.txt";
const input2 = "./Input2.txt";
const fs = require("fs");

const decode_message = async (inputFile) => {
  async function readFile() {
    let content;
    try {
      content = await fs.promises.readFile(inputFile, "utf8");
    } catch (e) {
      console.error(e);
    }
    return content;
  }

  const data = await readFile();
  const arr = data.toString().split("\n");

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
  console.log(message);
  return message;
};


/* This function decodes a message by putting each line of the input file into an array,
 * and then constructiong an object for which the keys are the number on each line,
 * and the values are the words associated with each key. Finally, the function
 * constructs the decoded message by starting with the word associated with 1,
 * adding the word associated with 1 + 2 = 3, then adding the word associated
 * with 3 + 3 = 6, and so on.
 */
