def max_area(height) 
  idx = 0 
  max = 0
  area = handleIncreasing(height)
  if area
    return area
  end
  area = handleIncreasing(height.reverse)
  if area
    return area
  end
  while idx < height.length 
    start_idx = furthestStart(height, idx)
    end_idx = furthestEnd(height, idx)
    area1 = area(height, start_idx, idx) 
    area2 = area(height, idx, end_idx) 
    max = [max, area1, area2].max
    idx += 1
  end 
  return max  
end

def handleIncreasing(height)
  increasing = true
  for index in (1...height.length)
    unless height[index] == height[index-1]+1
      increasing = false
      break
    end
  end
  if increasing
    return area(height, height.length/2-1, height.length-1)
  end
  return false
end

def furthestStart(height, idx)
  result = 0
  while result < idx && height[result]<height[idx]
    result+=1
  end
  return result
end

def furthestEnd(height, idx)
  result = height.length-1
  while result>idx && height[result]<height[idx]
    result-=1
  end
  return result
end

def area(height, start_idx, end_idx)
  (end_idx-start_idx)*([height[start_idx], height[end_idx]].min)
end

p max_area([1,8,6,2,5,4,8,3,7])
