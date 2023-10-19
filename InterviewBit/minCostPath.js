module.exports = {
  //param A : integer
  //param B : integer
  //param C : array of strings
  //return an integer
  solve: function (A, B, C) {
    const pq = [[0, 0, 0]];

    const dist = []
    for(let i = 0; i < A; i++){
        dist.push([])
    }

    const delrow = [-1, 0, 1, 0];
    const delcol = [0, 1, 0, -1];
    const dir = ["U", "R", "D", "L"];

    dist[0][0] = 0;
    let result 

    const placeInQueue = (elem) =>{
        let i = 0;
        const cost = elem[0]
        while(i < pq.length){
            const elem2 = pq[i]
            const otherCost = elem2[0]
            if(otherCost > cost) break
            i++
        }
        pq.splice(i, 0, elem)
    }

    while (pq.length > 0 && result === undefined) {
      const node = pq.shift();

      const cost = node[0];
      const r = node[1];
      const c = node[2];

      if (r === A - 1 && c === B - 1){
        result = cost;
        break;
      }

      for (let i = 0; i < 4; i++) {
        const nr = r + delrow[i];
        const nc = c + delcol[i];

        if (nr >= 0 && nr < A && nc >= 0 && nc < B) {
          const extraCost = C[r][c] !== dir[i] ? 1 : 0;
          const newCost = dist[r][c] + extraCost
          if (dist[nr][nc] === undefined || newCost < dist[nr][nc]) {
            dist[nr][nc] = newCost
            placeInQueue([newCost, nr, nc])
            //  pq.push({dist[nr][nc], {nr, nc}});
          }
        }
      }
    }
    console.log(result)
    return result !== undefined? result : -1;
  },
};

const C = ["UDUD"];
module.exports.solve(1, 4, C);
const C2 = ["LLLL", "RRRR"];
module.exports.solve(2, 4, C2);
const C3 = ["RRRRRRRRRR"];
module.exports.solve(1, 10, C3);
const C4 = ["RRR", "DDD", "UUU"];
module.exports.solve(3, 3, C4);
