def num_islands(grid)
  count = 0
  for i in (0...grid.length)
    for j in (0...grid[0].length)
      if grid[i][j] == '1'
        grid = change_surrounding(grid, [i,j])
        count += 1
      end
    end
  end
  return count
end

def change_surrounding(grid, pos)
  grid[pos[0]][pos[1]] = '0'
  if pos[0]+1 < grid.length && grid[pos[0]+1][pos[1]] == '1'
    grid = change_surrounding(grid, [pos[0]+1, pos[1]])
  end
  if pos[0]-1 >= 0 && grid[pos[0]-1][pos[1]] == '1'
    grid = change_surrounding(grid, [pos[0]-1, pos[1]])

  end
  if pos[1]+1 < grid[0].length && grid[pos[0]][pos[1]+1] == '1'
    grid = change_surrounding(grid, [pos[0], pos[1]+1])

  end
  if pos[1]-1 >= 0 && grid[pos[0]][pos[1]-1] == '1'
    grid = change_surrounding(grid, [pos[0], pos[1]-1])

  end
  return grid
end

puts num_islands([
['1','1','1','1','0'],
['1','1','0','1','0'],
['1','1','0','0','0'],
['0','0','0','0','0']
])