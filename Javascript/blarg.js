function quickestWayUp(ladders, snakes) {
  const reposition = {};
  const dp = {};
  let currMin = 1 / 0;

  ladders.forEach((ladder) => {
    reposition[ladder[0]] = ladder[1];
  });

  snakes.forEach((snake) => {
    reposition[snake[0]] = snake[1];
  });

  const getMinSteps = (pos, path) => {
    if (pos > 100) return 1 / 0;
    if (path.size - 1 > currMin) return 1 / 0;
    if (pos === 100) {
      currMin = Math.min(currMin, path.size - 1);
      dp[100] = Math.min(currMin, path.size - 1);
      return path.size - 1;
    }

    let min = 1 / 0;
    let currPos = pos;
    const newPath = new Set(Array.from(path));
    if(dp[pos] && dp[pos] <= path.size) return dp[pos];

    while (currPos < 100) {
      let newPos = currPos;
      for (let i = 1; i <= 6; i++) {
        const nextPos = currPos + i;
        const repo = reposition[nextPos];
        if (repo && !newPath.has(repo)) {
            const anotherPath = new Set(Array.from(newPath))
            anotherPath.add(repo)
          min = Math.min(
            min,
            getMinSteps(reposition[nextPos], anotherPath)
          );
        } else if(!repo) {
          if (nextPos <= 100 && !newPath.has(nextPos)) {
            newPos = Math.max(nextPos, newPos);
          }
        }
      }
      if (currPos === newPos) {
        break;
      } else {
        newPath.add(newPos);
      }
      currPos = newPos;

      min = Math.min(min, getMinSteps(currPos, newPath))
    }

    dp[pos] = min + 1;
    return min + 1;
  };
  getMinSteps(1, new Set([1]));
  return currMin;
}

console.log(
    '\x1b[36m%s\x1b[0m',
    "answer is ", 
  quickestWayUp(
    [
      [3, 54],
      [37, 100],
    ],
    [[56, 33]]
  )
);
console.log(
    '\x1b[36m%s\x1b[0m',
    "answer is ", 
  quickestWayUp(
    [
      [3, 57],
      [8, 100],
    ],
    [[88, 44]]
  )
);

console.log(
    '\x1b[36m%s\x1b[0m',
    "answer is ", 
  quickestWayUp(
    [
      [8, 52],
      [6, 80],
      [26, 42],
      [2, 72],
    ],
    [
      [51, 19],
      [39, 11],
      [37, 29],
      [81, 3],
      [59, 5],
      [79, 23],
      [53, 7],
      [43, 33],
      [77, 21],
    ]
  )
);

class TestClass{
  constructor(a, b){
    this.hello = a;
    this.good = b
  }
}

function TestFunc(a, b){
  this.page = a;
  this.book = b;
  return this;
}

const a = TestFunc("banana", "pickle")
console.log(a.page)
console.log(a.book)
const b = new TestClass("banana", "pickle")
console.log(b.hello)
console.log(b.good)

const c = new TestClass("banana", "pickle")
const d = new TestClass("banana", "pickle")
const e = new TestClass("my", "day")

console.log(c === d)
console.log(c === e)

const strFromCharCode = String.fromCharCode(97, 98, 99);
console.log(strFromCharCode)
