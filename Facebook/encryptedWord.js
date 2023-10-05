function findEncryptedWord(s) {
  const recursion = (str) => {
    if (str.length <= 1) return str;

    let mid;
    if (str.length % 2 === 1) {
      mid = (str.length - 1) / 2;
    } else {
      mid = str.length / 2 - 1;
    }
    return (
      str[mid] + recursion(str.slice(0, mid)) + recursion(str.slice(mid + 1))
    );
  };

  return recursion(s);
}

function findEncryptedWord2(s) {
  let result = "";
  let leftQueue = [s];
  const rightQueue = [];
  while (leftQueue.length > 0 || rightQueue.length > 0) {
    const queue = leftQueue.length > 0 ? leftQueue : rightQueue;
    const str = queue.shift();
    let midIdx;
    if (str.length % 2 === 0) {
      midIdx = str.length / 2 - 1;
      result += str[midIdx];
    } else {
      midIdx = (str.length - 1) / 2;
      result += str[midIdx];
    }
    const left = str.slice(0, midIdx);
    const right = str.slice(midIdx + 1);
    if (left.length) leftQueue.push(left);
    if (right.length) rightQueue.unshift(right);
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
  var result = expected == output;
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + " Test #" + test_case_number;
    console.log(out);
  } else {
    var out = "";
    out += wrongTick + " Test #" + test_case_number + ": Expected ";
    out += printString(expected);
    out += " Your output: ";
    out += printString(output);
    console.log(out);
  }
  test_case_number++;
}

var s_1 = "abc";
var expected_1 = "bac";
var output_1 = findEncryptedWord(s_1);
check(expected_1, output_1);

var s_2 = "abcd";
var expected_2 = "bacd";
var output_2 = findEncryptedWord(s_2);
check(expected_2, output_2);

// Add your own test cases here

var s_3 =
  "HelloThereLittlePiglet";
var expected_3 = "LoeHlleThrePtitleliget";
var output_3 = findEncryptedWord2(s_3);
check(expected_3, output_3);

// var s_4 =
//   "HelloThereLittlePiglet";
// var expected_4 = "LoeHlleThrePtitleliget";
// var output_4 = findEncryptedWord2(s_4);
// check(expected_4, output_4);
