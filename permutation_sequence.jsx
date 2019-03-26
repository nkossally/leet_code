var getPermutation = function(n, k) {
  let digits = [];
  let result = "";
  let num = 1;
  let count = 0;

  while (num <= n) {
    digits.push(num.toString());
    num += 1;
  }
  console.log(digits);
  while (count < n) {
    remainder = Math.ceil(k / factorial(n - 1 - count));
    console.log("remainder: " + remainder);
    result += digits[(remainder - 1 + digits.length) % digits.length];
    console.log("result: " + result);

    digits.splice((remainder - 1) % digits.length, 1);
    console.log("digits: " + digits);

    k = k % factorial(n - 1 - count);
    count += 1;
  }
  return result;
};

var factorial = function(n) {
  result = 1;
  while (n > 1) {
    result *= n;
    n -= 1;
  }
  return result;
};

console.log(getPermutation(3, 2));
