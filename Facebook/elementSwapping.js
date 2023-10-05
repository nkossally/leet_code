// Add any extra import statements you may need here


// Add any helper functions you may need here

function findMinArray(arr, k) {
    let allSequences = new Set([arr]);
    let minSequence = Array.from(arr)
  
    const isLess = (a, b) =>{
      let i = 0; 
      while(a[i] === b[i] && i< a.length) i++
      if(i < a.length && a[i] < b[i]) return true;
      return false;
    }
    
    let step = 0;
    
    while(step < k){
      const newSequences = new Set()
      allSequences.forEach(seq => {
        for(let i = 0; i < seq.length - 1; i++){
          if(seq[i + 1] < seq[i]){
            const newSeq = Array.from(seq);
            const temp = seq[i];
            newSeq[i] = seq[i + 1]
            newSeq[i + 1] = temp;
            if(isLess(newSeq, minSequence)){
              minSequence = newSeq;
            }
            newSequences.add(newSeq)
          }
        }
       
      })
      if(newSequences.size > 0){
        allSequences = newSequences
      } else {
        break
      } 
      step++;
      
    }
    console.log("end arr", minSequence)

    return minSequence;
    
  }
  
  // better solution. It really helps to break this down into as many
  // helpers so that logic is easier to clean up
  function findMinArray2(arr, k) {  
    let stepsLeft = k;
    
    const getMinBelowIdx = i =>{
      let j = Math.min(arr.length - 1, i + stepsLeft);
      let minIdx = i;
      while(j > i){
        if(arr[j] < arr[minIdx]){
          minIdx = j
        }
        j--;
      }
      return minIdx;
    }
  
    const makeNextStep = () =>{
      let i = 0;
      let stepsUsed;
      while(i < arr.length){
        const switchIdx = getMinBelowIdx(i);
        if(switchIdx > i){
          const temp = arr[switchIdx];
          arr.splice(switchIdx, 1);
          arr.splice(i, 0, temp)
          stepsLeft -= switchIdx - i
          console.log(arr, stepsLeft)
          break;
        }
        i++
      }
      const madeChange = i < arr.length;
      return madeChange
    }
    
    let madeChange = true
    
    while(stepsLeft > 0 && madeChange){
      madeChange = makeNextStep()
      console.log(madeChange, stepsLeft)
    }
    console.log("end arr", arr)
    return arr;
    
  }
  
  
  
  
  
  
  
  
  
  
  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom.
  function printintegerArray(array) {
    var size = array.length;
    var res = '';
    res += '[';
    var i = 0;
    for (i = 0; i < size; i++) {
      if (i !== 0) {
        res += ', ';
      }
      res += array[i];
    }
    res += ']';
    return res;
  }
  
  var test_case_number = 1;
  
  function check(expected, output) {
    var expected_size = expected.length;
    var output_size = output.length;
    var result = true;
    if (expected_size != output_size) {
      result = false;
    }
    for (var i = 0; i < Math.min(expected_size, output_size); i++) {
      result &= (output[i] == expected[i]);
    }
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
      var out = rightTick + ' Test #' + test_case_number;
      console.log(out);
    }
    else {
      var out = '';
      out += wrongTick + ' Test #' + test_case_number + ': Expected ';
      out += printintegerArray(expected);
      out += ' Your output: ';
      out += printintegerArray(output);
      console.log(out);
    }
    test_case_number++;
  }
  
  
  var n_1 = 3, k_1 = 2;
  var arr_1 = [5, 3, 1];
  var expected_1 = [1, 5, 3];
  var output_1 = findMinArray(arr_1, k_1);
  check(expected_1, output_1);
  
  var n_2 = 5, k_2 = 3;
  var arr_2 = [8, 9 ,11, 2, 1];
  var expected_2 = [2, 8, 9, 11, 1];
  var output_2 = findMinArray(arr_2, k_2);
  check(expected_2, output_2);
  
  var n_ = 5, k_2 = 3;
  var arr_2 = [8, 9 ,11, 2, 1];
  var expected_2 = [2, 8, 9, 11, 1];
  var output_2 = findMinArray(arr_2, k_2);
  check(expected_2, output_2);
  // Add your own test cases here
  // Add your own test cases here
var n_3 = 5, k_3 = 5;
var arr_3 = [8, 9 ,11, 2, 3];
var expected_3 = [2, 8, 3, 9, 11];
var output_3 = findMinArray(arr_3, k_3);
check(expected_3, output_3);

var n_4 = 3, k_4 = 2;
var arr_4 = [3, 1, 2];
var expected_4 = [1, 2, 3];
var output_4 = findMinArray(arr_4, k_4);
check(expected_4, output_4);

var n_5 = 13, k_5 = 11;
var arr_5 = [11, 17, 18, 9, 2, 1, 3, 8, 6, 15, 13, 4, 7];
var expected_5 = [11, 17, 18, 9, 2, 1, 3, 8, 6, 15, 13, 4, 7];
var output_5 = findMinArray2(arr_5, k_5);
check(expected_5, output_5);
