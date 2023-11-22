module.exports = {
  //param A : integer
  //param B : array of integers
  //return a array of integers
  rodCut: function (A, B) {
    if (B.length === 0) return [];
    B.sort((a, b) => a - b);

    const mem = {};

    class SumSequence {
      constructor(sum, sequence) {
        this.sum = sum;
        this.sequence = sequence;
      }
    }
    const recur = (arr, start, end) => {
      const str = JSON.stringify(arr);
      const startEnd = JSON.stringify([start, end])
      // if (mem[str]){
      //   if(mem[str][startEnd]){
      //     return mem[str][startEnd];
      //   }
      // } 

      let minSequence = new SumSequence(0, []);
      if(arr.length === 0) return minSequence
      let minSum = 1 / 0;
      for (let i = 0; i < arr.length; i++) {
        const a = recur(arr.slice(0, i), start, arr[i]);
        const b = recur(arr.slice(i + 1), arr[i], end);
        const totalSum = end - start + a.sum + b.sum;
        if (totalSum < minSum) {
          minSum = totalSum;
          minSequence = new SumSequence(
            totalSum,
            [arr[i]].concat(a.sequence).concat(b.sequence)
          );
        }
      }
      if(!mem[str]) mem[str] = {}              
      mem[str][startEnd] = minSequence;
      return minSequence;
    };
    const result = recur(B, 0, A);
    console.log(result)
    return result.sequence;
  },
};

// const A = 100
// const B = [ 4, 5, 7, 8, 13, 17, 18, 19, 21, 24, 27, 29, 32, 34, 37, 39, 41, 42, 43, 44, 46, 51, 53, 55, 60, 62, 64, 66, 67, 68, 69, 71, 73, 74, 77, 80, 81, 82, 84, 87, 95, 97, 99 ]

// const A = 6
// const B = [ 1, 2, 3 ]

// const A = 4
// const B = [ 1, 2, 3 ]

const A = 1000000000
const B = [ 1177092, 1752343, 13800293, 33840561, 57674157, 60881651, 100609030, 108318378, 118167672, 133706461, 133906996, 135057793, 145837056, 149255253, 167889292, 188261091, 210687157, 218057014, 218865583, 224275827, 227807111, 230260883, 230565986, 241569803, 248897538, 267476340, 272191696, 272487263, 287474149, 291871508, 308151617, 330802763, 341549786, 352998723, 367842723, 370140871, 378048625, 393720537, 406776759, 412988470, 419606393, 421971562, 431702328, 442466877, 447079301, 447980000, 453057953, 457051778, 462039451, 476920890, 502858228, 505416351, 505522501, 517731642, 531340937, 534361987, 544483866, 545058961, 555981462, 567348832, 571774126, 573970706, 580213003, 588253053, 643163066, 656361444, 668780467, 681254728, 683060386, 694787999, 711841059, 722043845, 727052735, 742920699, 745837108, 750273319, 765782743, 768056095, 788690476, 803053804, 806778954, 815752786, 828668327, 829404846, 852662781, 882740190, 883996959, 885058560, 886141929, 891156403, 905617897, 911735919, 933054931, 948742927, 951869455, 961839504, 966166524, 970579902, 985167000, 987758243 ]

module.exports.rodCut(A, B);
