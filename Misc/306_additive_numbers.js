/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  let result = false;

  const getValidAdditon = (idx, firstIdx, num1, num2) => {
    if (result) return;
    if (idx > num.length) return;

    if (num[firstIdx] === "0" && idx > firstIdx) return;

    const numSoFar = parseInt(num.substring(firstIdx, idx + 1));
    console.log(idx, firstIdx, num1, num2, numSoFar);

    if (num1 === undefined) {
      getValidAdditon(idx + 1, idx + 1, numSoFar, undefined);
    }

    if (num1 !== undefined && num2 === undefined) {
      getValidAdditon(idx + 1, idx + 1, num1, numSoFar);
    }

    if (num1 === undefined || num2 === undefined) {
      getValidAdditon(idx + 1, firstIdx, num1, num2);
    }

    if (num1 !== undefined && num2 !== undefined && num1 + num2 === numSoFar) {
      if (idx === num.length - 1) {
        result = true;
      } else {
        getValidAdditon(idx + 1, idx + 1, num2, numSoFar);
      }
    }

    if (num1 !== undefined && num2 !== undefined) {
      if (num1 + num2 > numSoFar) {
        getValidAdditon(idx + 1, firstIdx, num1, num2);
      }
    }
  };

  getValidAdditon(0, 0, undefined, undefined);

  console.log(result);
  return result;
};

isAdditiveNumber("101");
