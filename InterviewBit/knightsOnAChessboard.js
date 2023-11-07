module.exports = {
  //param A : integer
  //param B : integer
  //param C : integer
  //param D : integer
  //param E : integer
  //param F : integer
  //return an integer

  knight: function (A, B, C, D, E, F) {
    const isValid = (x, y) => {
      return x >= 1 && x <= A && y >= 1 && y <= B;
    };
    const dirs = [
      [1, 2],
      [-1, 2],
      [-1, -2],
      [1, -2],
      [2, 1],
      [-2, 1],
      [-2, -1],
      [2, -1],
    ];

    let result = -1;
    let heap = [[C, D, 0]];
    const str = JSON.stringify([C, D]);
    const seen = new Set([str]);

    while (heap.length > 0) {
      const coords = heap.shift();
      if (coords[0] === E && coords[1] === F) {
        result = coords[2];
        break;
      }

      dirs.forEach((dir) => {
        const x1 = coords[0] + dir[0];
        const y1 = coords[1] + dir[1];
        const str = JSON.stringify([x1, y1]);
        if (isValid(x1, y1) && !seen.has(str)) {
          seen.add(str);
          heap.push([x1, y1, coords[2] + 1]);
        }
      });
    }
    return result;
  },
};
