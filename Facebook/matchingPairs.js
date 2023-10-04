
// Add any helper functions you may need here


function matchingPairs(s, t) {
    if(s.length === 0) return 0

    const matchingIndices = new Set();
    for(let i = 0; i < s.length; i++){
      if(s[i] === t[i]) matchingIndices.add(i)
     }
    
    let canIncreaseByOne = false;
    let canIncreaseByTwo = false;
    let twoDiffIdxMatch = false
    
    const getCanIncrease = () =>{
      let result = false;
      for(let i = 0; i < s.length; i++){
        for(let j = 0; j < t.length; j++){
          if(i !== j && s[i] === t[j]) twoDiffIdxMatch = true;
  
          if(!matchingIndices.has(i) && !matchingIndices.has(j)){
            if(s[i] === t[j]) canIncreaseByOne = true;
            if(s[i] === t[j] && s[j] === t[i]){
              canIncreaseByTwo = true;
            }
          }
        }
        
      }
    }
    getCanIncrease();
    if(matchingIndices.size === s.length){
      if(twoDiffIdxMatch){
        return matchingIndices.size
      } else {
        return matchingIndices.size - 2;
      }
    }
    if(canIncreaseByTwo) return matchingIndices.size + 2;
    if(canIncreaseByOne)return matchingIndices.size + 1;
    return  matchingIndices.size

    
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
  
  var s_1 = "abcde";
  var t_1 = "adcbe";
  var expected_1 = 5;
  var output_1 = matchingPairs(s_1, t_1);
  check(expected_1, output_1);
  
  var s_2 = "abcd";
  var t_2 = "abcd";
  var expected_2 = 2;
  var output_2 = matchingPairs(s_2, t_2);
  check(expected_2, output_2); 
  
  // Add your own test cases here
  
  var s_3 = "mno";
  var t_3 = "mno";
  var expected_3 = 1;
  var output_3 = matchingPairs(s_3, t_3);
  check(expected_3, output_3); 
  
  var s_4 = "abcdi";
var t_4 = "efghi";
var expected_4 = 1;
var output_4 = matchingPairs(s_4, t_4);
check(expected_4, output_4); 

var s_5 = "";
var t_5 = "";
var expected_5 = 0;
var output_5 = matchingPairs(s_5, t_5);
check(expected_5, output_5); 

var s_6 = "abcd";
var t_6 = "efgh";
var expected_6 = 0;
var output_6 = matchingPairs(s_6, t_6);
check(expected_6, output_6); 