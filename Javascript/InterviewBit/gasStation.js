canCompleteCircuit = function (A, B) {
  let i = 0;
  let result = -1;
  while (i < A.length) {
    let gas = 0;
    for (let j = 0; j < A.length; j++) {
      const idx = (i + j) % A.length;
      gas += A[idx];
      gas -= B[idx];
      if (gas < 0) break;
    }
    if (gas >= 0) {
      result = i;
      break;
    }
    i++;
  }
  return result;
};

canCompleteCircuit2 = function (A, B) {
  let n = A.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += A[i] - B[i];
  }

  if (sum < 0) return -1;

  let ind = 1 / 0;
  sum = 0;
  // we know that it is possible since the total gas is greater than total cost
  // we always reset the index in the for loop when we reach a point at which the sum is 0
  // we are looking for the first index after which A[i] - B[i] is always positive
  for (let i = 0; i < n; i++) {
    sum += A[i] - B[i];
    if (sum >= 0) {
      ind = Math.min(ind, i);
    } else {
      ind = 1 / 0;
      sum = 0;
    }
  }
  return ind;
};
