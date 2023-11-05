def trap(heights)
  left_maxes = {}
  right_maxes = {}
  idx = 0
  max = nil
  while idx<heights.length-1
    unless max
      max = heights[idx]
    else 
      max = max > heights[idx] ? max : heights[idx]
    end
    left_maxes[idx+1] = max
    idx += 1
  end

  max = nil
  idx = heights.length-1
  while idx>0
    unless max
      max = heights[idx]
    else 
      max = max > heights[idx] ? max : heights[idx]
    end
    right_maxes[idx-1] = max
    idx -= 1
  end

  idx = 1
  result = 0
  while idx < heights.length-1
    min = left_maxes[idx] < right_maxes[idx] ? left_maxes[idx] : right_maxes[idx]
    if heights[idx]< min
      result += min - heights[idx]
    end
    idx+=1
  end
  result
end

p trap([0,1,0,2,1,0,1,3,2,1,2,1])
p trap([5,2,1,2,1,5])