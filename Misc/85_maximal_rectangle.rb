require "byebug"
require "set.rb"

# passes 65 of 66 tests
def maximal_rectangle(matrix)
  zeros = Set.new()
  max = nil
  for i in (0...matrix.length)
    for j in (0...matrix[0].length)
      if matrix[i][j] == '0'
        zeros.add([i, j])
      end
    end
  end
  for i in (0...matrix.length)
    for j in (0...matrix[0].length)
      max_col = matrix[i][j] == '1' ? j : nil
      while max_col
        max_row = i
        while max_row
          if !max || (max_row-i+1)*(max_col-j+1) > max
            if all_ones(zeros, i, j, max_row, max_col)
              max = (max_row-i+1)*(max_col-j+1)
            else
              max_row = nil
              break
            end
          end
          max_row = max_row && max_row+1<matrix.length && matrix[max_row+1][j] == '1' ? max_row+1 : nil
        end
        max_col = max_col+1<matrix[0].length && matrix[i][max_col+1] == '1' ? max_col+1 : nil
      end
    end
  end
  return max ? max : 0
end

def all_ones(zeros, start_row, start_col, end_row, end_col)
  for row in (start_row..end_row)
    for col in (start_col..end_col)
      if zeros.include?([row, col])
        return false
      end 
    end
  end
  return true
end

p maximal_rectangle([
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
])
