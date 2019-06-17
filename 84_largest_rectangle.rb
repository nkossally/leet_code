def largest_rectangle_area(heights)
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

p largest_rectangle_area([2,1,5,6,2,3])