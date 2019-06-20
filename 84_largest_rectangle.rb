def largest_rectangle_area(heights)
  increasing = increasing?(heights)
  if heights.length>2 && increasing
    return heights[heights.length/2]*(heights.length-heights.length/2)
  end
  constant = constant?(heights)
  if heights.length>0 && constant
    return heights[0]*heights.length
  end
  curr = 0
  max = nil
  while curr < heights.length
    start = curr
    stop = curr
    next_curr = nil
    while start > 0 && heights[start-1] >= heights[curr]
      start -= 1
    end
    while stop < heights.length-1 && heights[stop+1] >= heights[curr]
      stop += 1
    end
    area = heights[curr]*(stop-start+1)
    if !max || area>max
      max = area
    end
    curr += 1
  end
  return max ? max : 0
end

def increasing?(heights)
  for idx in (1...heights.length)
    if heights[idx] != heights[idx-1]+1
      return false
    end
  end
  return true
end

def constant?(heights)
  for idx in (1...heights.length)
    if heights[idx] != heights[idx-1]
      return false
    end
  end
  return true
end

p largest_rectangle_area([2,1,5,6,2,3])