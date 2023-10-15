// Pigeonhole solution
// without modifying an array, find the maximum gap between two
// consecutive elements (if the array were in order) in O(n) time
// assume all elements are nonnegative

function maximumGap(A) {
  const n = A.length;

  if (n < 2) return 0;

  if (n == 2) return Math.abs(A[0] - A[1]);

  let maxele = -1;

  let minele = 1 / 0;

  for (let i = 0; i < n; i++) {
    maxele = Math.max(maxele, A[i]);

    minele = Math.min(minele, A[i]);
  }

  if (maxele == minele) return 0;

  const interval = Math.ceil((maxele - minele + 0.0) / (n - 1));

  const bucketmax = [];

  const bucketmin = [];

  for (let i = 0; i < n - 1; i++) {
    bucketmax[i] = -1;

    bucketmin[i] = 1 / 0;
  }

  for (let i = 0; i < n; i++) {
    if (A[i] == minele || A[i] == maxele) continue;

    //magic number basically determined to which bucket the given element belongs to

    let magicNumber = Math.floor((A[i] - minele) / interval);

   console.log("i is", i, "with val", A[i], "going to bucket:"+magicNumber);

    bucketmax[magicNumber] = Math.max(bucketmax[magicNumber], A[i]);

    bucketmin[magicNumber] = Math.min(bucketmin[magicNumber], A[i]);
  }
  console.log(bucketmin)
  console.log(bucketmax)

  let maxgap = -1;

  let prev = minele;

  for (let i = 0; i < n - 1; i++) {
    if (bucketmax[i] == -1) {
      // System.out.println("skipping bucket");

      continue;
    }

    maxgap = Math.max(maxgap, Math.abs(bucketmin[i] - prev));

    prev = bucketmax[i];
  }

  maxgap = Math.max(maxgap, Math.abs(maxele - prev));

  console.log(maxgap)
  return maxgap;
}

maximumGap([1, 5, 3, 4, 10])
maximumGap([2, 2, 17, 23, 4, 20, 15])