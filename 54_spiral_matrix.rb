require "byebug"
def spiral_order(matrix)
  if matrix.length == 1
    return matrix[0]
  end
  if matrix == []
    return []
  end

  pos = [0,0]
  result = []
  directions = {
    "right"=> [[0,1], "down"],
   "down"=> [[1,0], "left"],
    "left"=> [[0,-1], "up"],
    "up"=> [[-1,0], "right"]
  }
  direction = "right"
  max_row = matrix.length
  max_col = matrix[0].length
  while(true)
    curr = matrix[pos[0]][pos[1]]
    if curr
      result.push(curr)
      matrix[pos[0]][pos[1]] = nil
      delta = directions[direction][0]
      new_pos = [pos[0]+delta[0], pos[1]+delta[1]]
      if(!( new_pos[0]>=0 && new_pos[0]<max_row && new_pos[1]>=0 && new_pos[1]<max_col && matrix[new_pos[0]][new_pos[1]] ))
        direction = directions[direction][1]
        new_delta = directions[direction][0]
        new_pos = [pos[0]+new_delta[0], pos[1]+new_delta[1]]
      end
      pos = new_pos
    else
      break
    end
      
  end
    result
end

p spiral_order([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
 ])