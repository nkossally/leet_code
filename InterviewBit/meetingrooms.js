module.exports = {
  //param A : array of array of integers
  //return an integer
  solve: function (A) {
    const sortFn = (a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0];
      if (a[1] !== b[1]) return a[1] - b[1];
      return 0;
    };
    A.sort(sortFn);
    const doOverlap = (a, b) => {
      return (a[0] >= b[0] && a[0] < b[1]) || (b[0] >= a[0] && b[0] < a[1]);
    };

    let i = 0;
    const rooms = [[]];
    while (i < A.length) {
      let j = 0;
      const room = A[i];
      while (j < rooms.length) {
        let k = 0;
        while (k < rooms[j].length) {
          if (doOverlap(rooms[j][k], A[i])) {
            break;
          }
          k++;
        }
        if (k < rooms[j].length) {
          j++;
        } else {
          break;
        }
      }
      if (j === rooms.length) {
        rooms.push([]);
      }
      rooms[j].push(A[i]);
      i++;
    }
    return rooms.length;
  },
  solve2: function (A) {
    const starts = [];
    const ends = [];

    for (let i = 0; i < A.length; i++) {
      starts.push(A[i][0]);
      ends.push(A[i][1]);
    }

    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    let rooms = 0;
    let max = 0;
    console.log(starts);
    console.log(ends);
    while (i < starts.length && j < ends.length) {
      console.log(starts[i], ends[j],starts[i] < ends[j]);

      if (starts[i] < ends[j]) {
        rooms++;
        i++;
      } else {
        rooms--;
        j++;
      }
      max = Math.max(max, rooms);
      console.log(rooms, max);
    }
    console.log(max);

    return max;
  },
};
const A = [
  [1, 18],
  [18, 23],
  [15, 29],
  [4, 15],
  [2, 11],
  [5, 13],
];

module.exports.solve2(A);
