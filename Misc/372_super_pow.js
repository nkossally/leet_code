/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {
  let result = 1;
  let powerOfTen = 1;
  let i = 0;

  const digitToVal = { 0: a % 1337 };
  const valToDigit = { [a % 1337]: 0 };

  const vals = new Set([a]);
  let digit = 1;
  let val = a;

  const power = (base, exp) => {
      let result = 1;
      let i = 0;
      while (i < exp) {
          result = (result * base) % 1337
          i++
      }
      return result
  }

  while (!vals.has(power(val, 10))) {
      val = power(val, 10)
      digitToVal[digit] = val;
      valToDigit[val] = digit;
      digit++;
      vals.add(val);
  }

  const endOfCycleDigit = digit - 1;
  const startOfCycleDigit = valToDigit[power(val, 10)];

  const digits = Object.keys(digitToVal);
  const preCycle = digits.slice(0, startOfCycleDigit).map((elem) => parseInt(elem));
  const cycle = digits.slice(startOfCycleDigit).map((elem) => parseInt(elem));

  while (i < b.length) {
      let val;
      const digit = i;
      const exp = b[b.length - 1 - i]
      let pos = i
      let base
      if (i < preCycle.length) {
          base = digitToVal[preCycle[pos]]
      } else {
          pos -= (preCycle.length)
          base = digitToVal[cycle[pos % cycle.length]]

      }

      result = (result * power(base, exp)) % 1337;
      i++;
  }

  return result;
};