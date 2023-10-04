function rotationalCipher(input, rotationFactor) {
    let result = "";
    
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    
    const lowerToIdx = {} 
    const upperToIdx = {}
    const numToIdx = {}
  
    lowerCase.split("").forEach((letter, idx) =>{
      lowerToIdx[letter] = idx;
    })
    
     upperCase.split("").forEach((letter, idx) =>{
      upperToIdx[letter] = idx;
    })
      
     nums.split("").forEach((num, idx) =>{
      numToIdx[num] = idx;
    })
  
    for(let i = 0; i < input.length; i++){
      let char = input[i]
      if(lowerToIdx[char] !== undefined){
        const idx = (lowerToIdx[char] + rotationFactor) % lowerCase.length
        char = lowerCase[idx]
        
      } else if(upperToIdx[char] !== undefined){
          const idx = (upperToIdx[char] + rotationFactor) % upperCase.length
         char = upperCase[idx]  
      } else if(numToIdx[char] !== undefined){
          const idx = (numToIdx[char] + rotationFactor) % nums.length
        char = nums[idx]
      }
      result += char;
    }
    return result;
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
  
  var input_1 = "All-convoYs-9-be:Alert1.";
  var rotationFactor_1 = 4;
  var expected_1 = "Epp-gsrzsCw-3-fi:Epivx5.";
  var output_1 = rotationalCipher(input_1, rotationFactor_1);
  check(expected_1, output_1);
  
  var input_2 = "abcdZXYzxy-999.@";
  var rotationFactor_2 = 200;
  var expected_2 = "stuvRPQrpq-999.@";
  var output_2 = rotationalCipher(input_2, rotationFactor_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  