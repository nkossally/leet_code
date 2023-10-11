function maxProfit(A) {
  if (A.length < 2) return 0;
  if (A[0].length < 1) return 0;

  const oneSell = [0];

  for (let i = 1; i < A.length; i++) {
    const val = oneSell[i - 1] - A[i - 1] + A[i];
    oneSell[i] = Math.max(val, oneSell[i - 1]);
  }

  const twoSell = [0, 0, 0];
  for (let i = 3; i < A.length; i++) {
    const val = oneSell[i - 2] - A[i - 1] + A[i];
    twoSell[i] = Math.max(val, twoSell[i - 1]);
  }

  console.log("oneSell")
  console.log(oneSell)

  console.log("twoSell")
  console.log(twoSell)

  let result = Math.max(twoSell[A.length - 1], oneSell[A.length - 1]);
  result = Math.max(0, result);
  console.log(result)
  return result;
}

maxProfit([1, 4, 11, 10]);
