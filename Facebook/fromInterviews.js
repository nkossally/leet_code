// See almostPalindrome and power.js for phonenscreen

//Write a function that returns the kth missing number in an array
// O(n + k)
const kthMissing1 = (arr, k) => {
  let i = 0;
  let nextNum;
  let count = 0;
  while (i < arr.length) {
    const num = arr[i];
    if (i === 0) {
      nextNum = num + 1;
      i++;
      continue;
    }
    while (nextNum < num) {
      count++;
      if (count === k) break;
      nextNum++;
    }
    if (count === k) break;
    nextNum = num + 1;
    i++;
  }
  const result = count === k ? nextNum : null;
  console.log(result);
  return result;
};

// O(n) solution
const kthMissing2 = (arr, k) => {
  let i = 0;
  let nextNum;
  let count = k;
  while (i < arr.length) {
    const num = arr[i];
    if (i === 0) {
      nextNum = num + 1;
      i++;
      continue;
    }
    if (num > nextNum) {
      if (num - nextNum >= count) {
        nextNum = nextNum + count - 1;
        count = 0;
        break;
      } else {
        count -= num - nextNum;
      }
    }

    nextNum = num + 1;
    i++;
  }
  const result = count === 0 ? nextNum : null;
  console.log(result);
  return result;
};

// O(log(N))
const kthMissing3 = (arr, k) => {
  let count = 0;
  let result = null;

  const getRealIdx = (num) => num - arr[0];

  const helper = (start, end) => {
    if (end < start) return;
    if (count === k) return;
    const targetVal = Math.floor((start + end) / 2);
    const realIdx = getRealIdx(targetVal);
    if (arr[realIdx] === undefined || targetVal < arr[realIdx]) {
      helper(start, targetVal - 1);
    }
    if (arr[realIdx] !== targetVal) {
      arr.splice(realIdx, 0, targetVal);
      count++;
    }
    if (count === k) result = targetVal;
    helper(targetVal + 1, end);

  };

  helper(arr[0], arr[arr.length - 1]);
  console.log(result);

  return result;
};

kthMissing1([1, 2, 5, 7], 2);
kthMissing1([1, 2, 5, 7], 4);
kthMissing1([1, 2, 3, 4, 5, 7], 2);
kthMissing1([1, 2002], 2000);

// kthMissing2([1, 2, 5, 7], 2);
// kthMissing2([1, 2, 5, 7], 4);
// kthMissing2([1, 2, 3, 4, 5, 7], 2);
// kthMissing2([1, 2002], 2000);

kthMissing3([1, 2, 5, 7], 2);
kthMissing3([1, 2, 5, 7], 4);
kthMissing3([1, 2, 3, 4, 5, 7], 2);
kthMissing3([1, 2002], 2000);
