
const maximalRectangle = (A) => {
  if (A.length === 0 || A[0].length === 0) return 0;

  const heights = []
  const right = []
  const left = [];
  let maxArea = 0;
  for(let j = 0; j < A[0].length; j++){
    right.push(A[0].length - 1)
    left.push(0)
    heights.push(0)
  }

  
  for(let i = 0; i < A.length; i++){
    let currLeft = 0;
    let currRight = A[0].length - 1;
    for(let j = 0; j < A[0].length; j++){
      if( A[i][j] === 1){
        heights[j]++
      } else {
        heights[j] = 0
      }
    }

    for(let j = 0; j < A[0].length; j++){
      if(A[i][j] === 1){
        left[j] = Math.max(currLeft, left[j])
      } else {
          left[j] = 0
          currLeft = j + 1;
      }
    }

    for(let j = A[0].length - 1; j >= 0; j--){
      if(A[i][j] === 1){
        right[j] = Math.min(currRight, right[j])
      } else {
        right[j] = A[0].length - 1;
        currRight = j - 1;
      }
    }

    for(let j = 0; j < A[0].length; j++){
      maxArea = Math.max(maxArea, (right[j] - left[j] + 1)*heights[j])
    }

  
  }
  console.log(maxArea)
  return maxArea;
  
};

const arr = [
  [0, 1],
  [1, 0]
]

maximalRectangle(arr)