module.exports = {
  //param A : string
  //return a strings
  longestPalindrome: function (A) {
    const isPerfectPalindrome = (s) => {
      let pointer1 = 0;
      let pointer2 = s.length - 1;
      while (pointer2 > pointer1) {
        if (s[pointer1] !== s[pointer2]) {
          break;
        }
        pointer1++;
        pointer2--;
      }
      return pointer1 >= pointer2;
    };

    let maxStr = "";

    for (let i = 0; i < A.length; i++) {
      for (let j = A.length - 1; j >= 0; j--) {
        if (
          j - i + 1 > maxStr.length &&
          isPerfectPalindrome(A.slice(i, j + 1))
        ) {
          maxStr = A.slice(i, j + 1);
        }
      }
    }
    return maxStr;
  },

  longestPalindromeBetter: function (A) {
    let maxStr = "";
    const getPalindrome = (leftStart, rightStart) => {
      let l = leftStart;
      let r = rightStart;
      while (l > 0 && r < A.length - 1 && A[l - 1] === A[r + 1]) {
        l--;
        r++;
      }
      if (maxStr.length < r - l + 1) {
        maxStr = A.slice(l, r + 1);
      }
    };

    for (let i = 0; i < A.length; i++) {
      getPalindrome(i, i);
      if (i < A.length - 1 && A[i] === A[i + 1]) getPalindrome(i, i + 1);
    }

    return maxStr;
  },
};
