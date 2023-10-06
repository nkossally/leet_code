// Add any extra import statements you may need here


// Add any helper functions you may need here


function minOperations(arr) {
    let target = "";
    for(let i = 1; i <= arr.length; i++){
      target += i !== arr.length ? i.toString() + "," : i;
    }
    console.log("target", target)
    
    let arrStr = arr.join(",");
    
    let queue = [[arrStr, 0]]
    let result
    
    while(queue.length > 0 ){
      const curr = queue.shift();
      const level = curr[1]
      const str = curr[0]
      if(str === target){
        result = level;
        break
      }
      const strArr = str.split(",")
      for(let i = 0; i < strArr.length; i++){
        for(let j = i + 1; j < strArr.length; j++){
          const newArr = strArr.slice(0, i).concat( strArr.slice(i, j + 1).reverse()).concat(strArr.slice(j + 1))
          const newStr = newArr.join(",")
          queue.push([newStr, level + 1])
        }
      }
      
    }
    
    return result;
    
    
    
    
  }
  
  
  
  
  
  
  
  
  
  
  
  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom.
  function printInteger(n) {
    var out = '[' + n + ']';
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
      out += printInteger(expected);
      out += ' Your output: ';
      out += printInteger(output);
      console.log(out);
    }
    test_case_number++;
  }
  
  var n_1 = 5;
  var arr_1 = [1, 2, 5, 4, 3];
  var expected_1 = 1;
  var output_1 = minOperations(arr_1);
  check(expected_1, output_1);
  
  var n_2 = 3;
  var arr_2 = [3, 1, 2];
  var expected_2 = 2;
  var output_2 = minOperations(arr_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  