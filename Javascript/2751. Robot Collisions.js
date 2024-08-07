/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealthsBest = function (positions, healths, directions) {
  const result = [];
  const robots = [];
  for (let i = 0; i < positions.length; i++) {
    robots.push([positions[i], healths[i], directions[i], i]);
  }
  robots.sort((a, b) => a[0] - b[0]);
  const stack = [];
  for (let i = 0; i < robots.length; i++) {
    const robot = robots[i];
    if (robot[2] === "L") {
      if (stack.length === 0 || stack[stack.length - 1][2] === "L") {
        stack.push(robot);
        continue;
      }
      while (
        stack.length > 0 &&
        stack[stack.length - 1][2] === "R" &&
        robot[1] > 0
      ) {
        const lastRobot = stack[stack.length - 1];
        if (lastRobot[1] > robot[1]) {
          lastRobot[1]--;
          robot[1] = 0;
        } else if (lastRobot[1] < robot[1]) {
          stack.pop();
          robot[1]--;
        } else if (lastRobot[1] === robot[1]) {
          stack.pop();
          robot[1] = 0;
        }
      }
      if (robot[1] > 0) {
        stack.push(robot);
      }
    } else {
      stack.push(robot);
    }
  }

  stack.sort((a, b) => a[3] - b[3]);
  const remainingHealths = stack.map((elem) => elem[1]);

  return remainingHealths;
};

/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function (positions, healths, directions) {
  const result = [];
  const robots = [];
  for (let i = 0; i < positions.length; i++) {
    robots.push([positions[i], healths[i], directions[i], i]);
  }
  robots.sort((a, b) => a[0] - b[0]);

  const willHaveCollision = () => {
    let i = 0;
    let lowestRPosition = 1 / 0;
    let highestLPosition = -1 / 0;
    let result = false;

    while (i < robots.length) {
      const [position, health, direction, idx] = robots[i];
      if (direction === "R") {
        if (highestLPosition > position) {
          result = true;
          break;
        }
        lowestRPosition = Math.min(position, lowestRPosition);
      } else {
        if (lowestRPosition < position) {
          result = true;
          break;
        }
        highestLPosition = Math.max(position, highestLPosition);
      }
      i++;
    }
    return result;
  };

  const movePositions = () => {
    for (let i = 0; i < robots.length; i++) {
      const robot = robots[i];
      let direction = robot[2];
      if (direction === "R") {
        robot[0]++;
      } else {
        robot[0]--;
      }
    }
  };

  const compareIndices = (idx1, idx2) => {
    if (idx1 < 0 || idx2 < 0 || idx1 >= robots.length || idx2 >= robots.length)
      return 0;
    const robot1 = robots[idx1];
    const robot2 = robots[idx2];
    const [position1, health1] = robot1;
    const [position2, health2] = robot2;
    let deleteCount = 0;

    if (position1 >= position2) {
      if (health1 === health2) {
        robots.splice(idx1, 2);
        deleteCount = 2;
      } else if (health2 < health1) {
        robots[idx1][1]--;
        robots.splice(idx2, 1);
        deleteCount = 1;
      } else {
        robots[idx2][1]--;
        robots.splice(idx1, 1);
        deleteCount = 1;
      }
    }
    return deleteCount;
  };

  const processCollisions = () => {
    let i = 1;
    while (i < robots.length) {
      let deleteCount1 = compareIndices(i - 1, i);
      if (deleteCount1 !== 0) {
        i--;
      }

      let deleteCount2 = compareIndices(i, i + 1);

      if (deleteCount2 === 0) {
        i++;
      }
    }
  };

  while (willHaveCollision()) {
    movePositions();
    processCollisions();
  }

  robots.sort((a, b) => a[3] - b[3]);
  const remainingHealths = robots.map((elem) => elem[1]);

  return remainingHealths;
};
