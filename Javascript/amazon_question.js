// const inputArr = [7, 7, 3, 4, 5, 1, 1, 2, 5, 3, 7, 9, 8];
const inputArr = [-3, -4, 9, 3, -6, 2, 0, 5, 2, 7];

const divisor = 7;


const ITERATION_COUNT = 1000;

// # O(1 + 2 + .. + n) ~ O(n*n)
const countDivisibleSubarrays = (inp, divisor) => {
  const working = []

  let count = 0;

  for (let i = 0; i < inp.length; i++) {
    working[i] = 0
    for (let j = 0; j <= i; j++) {
      working[j] = (inp[i] + working[j]) % divisor;
      if (working[j] === 0) {
        count++;
      }
    }
  }
  return count;
};

const countDivisibleSubarraysV2 = (inp, divisor) => {
    const numToCount = {};
    let sum = 0;
    let count = 0;
  
    for (let i = 0; i < inp.length; i++) {
      sum += inp[i];
      // handle negative nums
      sum = (sum + divisor) % divisor;
      if (!numToCount[sum]) numToCount[sum] = 0;
      numToCount[sum]++;
      count += numToCount[sum] - 1;
      if (sum === 0) {
        // handle from beginning to input at i
        count++;
      }
    }
  
    return count;
  };

const countDivisibleSubarraysV3 = (inp, divisor) => {
  const numToCount = {};
  let sum = 0;
  let count = 0;

  for (let i = 0; i < inp.length; i++) {
    sum += inp[i];
    // handle negative nums
    sum = (sum + divisor) % divisor;
    if (!numToCount[sum]) numToCount[sum] = 0;
    numToCount[sum]++;
  }

  Object.keys(numToCount).forEach((num) => {
    const parsedNum = parseInt(num);
    if(parsedNum === 0) count += numToCount[num]
    const numCount = numToCount[num];
    count += (numCount * (numCount - 1)) / 2;
  });

  return count;
};

const testFunction = (fn) => {
  let ans;
  const start = performance.now();

  for (let i = 0; i < ITERATION_COUNT; i++) {
    ans = fn(inputArr, divisor);
  }

  const end = performance.now();

  console.log(end - start, ans);
};

testFunction(countDivisibleSubarrays);
testFunction(countDivisibleSubarraysV2);
testFunction(countDivisibleSubarraysV3);
