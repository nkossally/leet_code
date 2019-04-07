require "byebug"
require "set.rb"
def maximal_rectangle(matrix)
  zeros = Set.new
  for row in (0...matrix.length)
    for col in (0...matrix[0].length)
      if matrix[row][col] == "0"
        zeros.add([row, col])
      end
    end
  end
  max = nil
  arr = []
  for row in (0...matrix.length)
    for col in (0...matrix[0].length)
      for max_row in (row...matrix.length)
        for max_col in (col...matrix[0].length)
          area = (max_row-row+1)*(max_col-col+1)
          if !max || area>max
            if all_ones(zeros, row, col, max_row, max_col)
              max = area
            end
          end
        end
      end
    end
  end
max || 0

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

test_arr = [["1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","0"],["1","1","1","1","1","1","1","0"],["1","1","1","1","1","0","0","0"],["0","1","1","1","1","0","0","0"]]

p maximal_rectangle(test_arr)
p all_ones(test_arr, 0,0, 2, 6 )

# def maximal_rectangle(matrix)
#   max = nil
#   arr = []
#   for row in (0...matrix.length)
#     for col in (0...matrix[0].length)

#       if(matrix[row][col] == "1")
#         max_row = row
#         max_col = col 
#         while(max_row<matrix.length-1 && matrix[max_row+1][col] == "1")
#           max_row += 1
#         end
#         while( max_col<matrix[0].length-1 && matrix[row][max_col+1] == "1")
#           max_col += 1
#         end

#         for test_row in (row..max_row)
#           for test_col in (col..max_col)

#             area = (test_row-row+1)*(test_col-col+1)
#             if !max || area>max
#               if all_ones(matrix, row, col, test_row, test_col)
#                 max = area
#               end
#             end
#           end
#         end
#       end
#     end
#   end

# max || 0
    
# end

# def all_ones(matrix, start_row, start_col, end_row, end_col)
#   for row in (start_row..end_row)
#     for col in (start_col..end_col)
#       if matrix[row][col] == "0"
#         return false
#       end 
#     end
#   end
#   return true

# end
# p maximal_rectangle([
#   ["1","0","1","0","0"],
#   ["1","0","1","1","1"],
#   ["1","1","1","1","1"],
#   ["1","0","0","1","0"]
# ])

# test_arr = [["1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","0"],["1","1","1","1","1","1","1","0"],["1","1","1","1","1","0","0","0"],["0","1","1","1","1","0","0","0"]]

# p maximal_rectangle(test_arr)
# p all_ones(test_arr, 0,0, 2, 6 )
