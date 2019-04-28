def num_islands(grid)
  num_islands_recur(grid, nil, 0)
end

def num_islands_recur(grid, pos, count)
  for i in (0...grid.length)
    for j in (0...grid[0].length)
      if grid[i][j] == 1
        pos = [i, j]
        break
      end
    end
  end
end

def change_surrounding(grid, pos)
  grid[pos[0]][pos[1]] = 0
  if pos[0]+1 < grid.length && grid[pos[0]+1][pos[1]] == 1
    change_surrounding(grid, [pos[0]+1, pos[1])
  end
  if pos[0]-1 >= 0 && grid[pos[0]-1][pos[1]] == 1
    change_surrounding(grid, [pos[0]-1, pos[1])

  end
  if pos[1]+1 < grid[0].length && grid[pos[0]][pos[1]+1] == 1
    change_surrounding(grid, [pos[0], pos[1]+1])

  end
  if pos[1]-1 >= 0 && grid[pos[0]][pos[1]-1] == 1
    change_surrounding(grid, [pos[0]+1, pos[1])

  end

end

def get_next_pos(grid)
  i = 0
  j = 0
  val = grid[i][j]
  while val == 0 && i < grid.length
    if j < grid[0].length-1
      j += 1 
    else
      i += 1
      j = 0
    end
    val = grid[i][j]
  end
  return [i, j]
end

num_islands([
[1,1,1,1,0],
[1,1,0,1,0],
[1,1,0,0,0],
[0,0,0,0,0]
])