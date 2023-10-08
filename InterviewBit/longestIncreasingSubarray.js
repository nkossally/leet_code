const lis = function (A) {
  const v = [];
  v.push(A[0]);

  const lowerBound = (val) => {
    if(val <= v[0]) return -1
    let i = 0;
    while (i < v.length - 1 && v[i + 1] < val) {
      i++;
    }
    return i;
  };

  for (let i = 1; i < A.length; i++) {
    if (v[v.length - 1] < A[i]) {
      v.push(A[i]);
    } else {
      const idx = lowerBound(A[i]);
      v[idx + 1] = A[i] ;

    }
    console.log("looking at index", i, "value", A[i])
    console.log("v", v)
  }
  return v.length;
};

lis([1, 2, 3, 2, -5, 7, 11, 7, 4, 6, 8, 9, 10, 11, 11, 11])
const A = [ 30, 92, 22, 48, 52, 64, 92, 50, 85, 38, 97, 15, 14, 75, 59, 46, 74, 6, 95, 67, 86, 88, 25, 49, 67, 69, 50, 99, 83, 49, 60, 6, 90, 1, 50, 41, 57, 18, 36, 5, 44, 100, 23, 33, 52, 11, 46, 49, 34, 27, 77, 57, 93, 82, 38, 95, 6, 51, 100, 32, 11, 26, 50, 3, 55, 39, 84, 54, 44, 75, 76, 51, 21, 40, 28, 50, 30, 6, 84, 58, 76, 42, 35, 49, 98, 49, 13, 101, 3, 1, 60, 48, 99, 70 ]
lis(A)
// lis([ 84, 80, 27 ])