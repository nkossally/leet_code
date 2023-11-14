module.exports = {
  //param A : array of integers
  //param B : array of integers
  //param C : integer
  //return an integer
  hotel: function (A, B, C) {
    if (A.length === 0) return 1;
    if (C >= A.length) return 1;
    class Interval {
      constructor(start, end) {
        this.start = start;
        this.end = end;
      }
    }
    const intervals = [];
    for (let i = 0; i < A.length; i++) {
      const interval = new Interval(A[i], B[i]);
      intervals.push(interval);
    }
    const sortFn = (a, b) => {
      if (a.start !== b.start) return a.start - b.start;
      return a.end - b.end;
    };
    intervals.sort(sortFn);
    const overlap = (a, b) => {
      return (
        (a.start >= b.start && a.start <= b.end) ||
        (b.start >= a.start && b.start <= a.end)
      );
    };

    const getRoomCount = (lastInterval, idx) => {
      if (intervals.length === 0 || idx === intervals.length) {
        return;
      };
      const nextInterval = intervals[idx];
      if (!overlap(lastInterval, nextInterval)) {
        intervals.splice(idx, 1)
        getRoomCount(nextInterval, idx);
      } else {
        getRoomCount(lastInterval, idx + 1);
      }
    };

    let rooms = 0;

    while(intervals.length > 0){
      rooms++
      const interval = intervals[0]
      intervals.splice(0, 1)
      getRoomCount(interval, 1);

    }
    return rooms <= C ? 1 : 0;
  },

  hotel2: function (A, B, C) {
    if (A.length === 0) return 1;
    if (C >= A.length) return 1;
    class Interval {
      constructor(start, end) {
        this.start = start;
        this.end = end;
      }
    }
    const intervals = [];
    for (let i = 0; i < A.length; i++) {
      const interval = new Interval(A[i], B[i]);
      intervals.push(interval);
    }
    const sortFn = (a, b) => {
      if (a.start !== b.start) return a.start - b.start;
      return a.end - b.end;
    };
    intervals.sort(sortFn);
    const overlap = (a, b) => {
      return (
        (a.start >= b.start && a.start <= b.end) ||
        (b.start >= a.start && b.start <= a.end)
      );
    };
    const rooms = [[intervals[0]]];
    for (let i = 1; i < intervals.length; i++) {
      const interval = intervals[i];
      let j = 0;
      while (j < rooms.length) {
        const otherInterval = rooms[j][rooms[j].length - 1];
        if (!overlap(interval, otherInterval)) {
          rooms[j].push(interval);
          break;
        }
        j++;
      }
      if (j === rooms.length) {
        rooms.push([interval]);
      }
    }
    return rooms.length <= C ? 1 : 0;
  },
};
const A = [ 13, 14, 36, 19, 44, 1, 45, 4, 48, 23, 32, 16, 37, 44, 47, 28, 8, 47, 4, 31, 25, 48, 49, 12, 7, 8 ]
const B = [ 28, 27, 61, 34, 73, 18, 50, 5, 86, 28, 34, 32, 75, 45, 68, 65, 35, 91, 13, 76, 60, 90, 67, 22, 51, 53 ]
const C = 23
module.exports.hotel(A, B, C);
module.exports.hotel2(A, B, C);
