const maxProduct = (B) => {
  const arrs = [];
  let currArr = [];
  let hasZero = false;
  for (let i = 0; i < B.length; i++) {
    if (B[i] === 0) {
        hasZero = true;
      if (currArr.length > 0) {
        arrs.push(currArr);
        currArr = [];
      }
    } else {
      currArr.push(B[i]);
    }
  }
  if (currArr.length > 0) arrs.push(currArr);

  const maxProductHelper = function (A) {
    if (A.length === 0) return 0;
    if (A.length === 1) return A[0];

    let prod = 1;
    const idxProd = {};
    for (let i = 0; i < A.length; i++) {
      prod *= A[i];
      idxProd[i] = prod;
    }

    let maxProd = -1 / 0;
    for (let i = 0; i < A.length; i++) {
      for (let j = i; j < A.length; j++) {
        const num1 = idxProd[j];
        const num2 = i > 0 ? idxProd[i - 1] : 1;
        const val = num1 / num2;
        maxProd = Math.max(maxProd, val);
      }
    }

    return maxProd;
  };

  // if there was a zero in the original, then 0 is a legit product
  let max = hasZero ? 0 : -1 / 0;

  for (let i = 0; i < arrs.length; i++) {
    max = Math.max(maxProductHelper(arrs[i]), max);
  }
  return max;
};

const maxProductFast = (A) => {
    if(A.length < 1) return 0;
    let result = A[0];
    let min = A[0];
    let max = A[0]
    for (let i = 1; i < A.length; i++) {
        const tempMax = Math.max(A[i], Math.max(A[i] * max, A[i] * min))
        min = Math.min(A[i], Math.min(A[i] * max, A[i] * min))
        max = tempMax
        result = Math.max(result, max)
    }
    return result;
};

maxProduct([ 0, -4, 0, -8 ]);
