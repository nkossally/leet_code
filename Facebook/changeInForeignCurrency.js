// Add any extra import statements you may need here


// Add any helper functions you may need here


function canGetExactChange2(targetMoney, denominations) {
    let foundTarget = false;
    const getToTarget = (i, amountLeft) =>{
      if(amountLeft === 0){
        foundTarget = true;
        return;
      } 
      if(i === denominations.length) return;
      const coin = denominations[i];
      let j= Math.floor(amountLeft/coin);
      for(let k = 0; k <= j; k++){
        getToTarget(i + 1, amountLeft - k*coin)
      }
    }
    getToTarget(0, targetMoney);
    return foundTarget;
    
  }

  function canGetExactChange(targetMoney, denominations) {
    denominations.sort((a, b) => b - a);
    
    for(let i= 0; i < denominations.length; i++){
      targetMoney = targetMoney % denominations[i];
    }
    return targetMoney === 0;
}  
  
  
  
  
  
  
  
  
  
  
  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom.
  function printString(str) {
    var out = '["' + str + '"]';
    return out;
  }
  
  var test_case_number = 1;
  
  function check(expected, output) {
    var result = (expected == output);
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
      var out = rightTick + ' Test #' + test_case_number;
      console.log(out);
    }
    else {
      var out = '';
      out += wrongTick + ' Test #' + test_case_number + ': Expected ';
      out += printString(expected);
      out += ' Your output: ';
      out += printString(output);
      console.log(out);
    }
    test_case_number++;
  }
  
  var target_1 = 94;
  var arr_1 = [5, 10, 25, 100, 200];
  var expected_1 = false;
  var output_1 = canGetExactChange2(target_1, arr_1);
  check(expected_1, output_1);
  
  var target_2 = 75;
  var arr_2 = [4, 17, 29];
  var expected_2 = true;
  var output_2 = canGetExactChange2(target_2, arr_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  