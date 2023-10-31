module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return a array of integers
  order: function (A, B) {
    let orders = [[]];

    let i = 0;

    while (i < B.length) {
      const newOrders = [];
      while (orders.length > 0) {
        const order = orders.shift();
        for (let i = 0; i < A.length; i++) {
          let doesNotHaveAlready = true;
          const greaterCount = B[i];
          let count = 0;
          order.forEach((prevElem) => {
            if (prevElem === A[i]) doesNotHaveAlready = false;
            if (prevElem > A[i]) {
              count++;
            }
          });
          if (doesNotHaveAlready && count === greaterCount) {
            newOrders.push([...order, A[i]]);
          }
        }
      }
      orders = newOrders;
      i++;
    }

    return orders[0];
  },

  orderGreatSolution: function (A, B) {
    const pairs = [];
    for (i = 0; i < A.length; i++) {
      pairs.push([A[i], B[i]]);
    }

    pairs.sort((a, b) => a[0] - b[0]);

    let result = [];

    // since the array of pairs is sorted, when we count past spots in the result array
    // that are undefined, those elems will be higher heighs
    for (let i = 0; i < A.length; i++) {
      const pair = pairs[i];
      let count = 0;
      let j = 0;
      while (j < A.length && count <= pair[1]) {
        if (result[j] === undefined) {
          count++;
        }
        j++;
      }
      j--;
      result[j] = pair[0];
    }
    return result;
  },
  orderBest: function (A, B) {
    const pairs = [];
    for (i = 0; i < A.length; i++) {
      pairs.push([A[i], B[i]]);
    }

    pairs.sort((a, b) => b[0] - a[0]);
    let result = [];
    for (let i = 0; i < A.length; i++) {
      const pair = pairs[i];
      result.splice(pair[1], 0, pair[0]);
    }
    console.log(result)
    return result;
  },
};

module.exports.orderBest(
  [86, 92, 49, 21, 62, 27, 90, 59],
  [2, 0, 0, 2, 0, 2, 1, 3]
);
