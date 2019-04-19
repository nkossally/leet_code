require 'byebug'
DIGITS = (1..9).map{ |num| num.to_s }

def solve_sudoku(board)
  pos = next_pos(board)
  return board unless pos
  solve_sudoku_recursion(board, pos)
end

def solve_sudoku(board, pos)

  valid_nums = valid_nums(board, pos)
  if valid_nums.empty?
    return false
  end
  valid_nums.each do |num|
    # debugger
    new_board = board.dup
    new_board[pos[0]][pos[1]] = num
    solve_sudoku(new_board)
 
  end
  solve_sudoku(board)
end


def next_pos(board)
  pos = nil
  (0..8).each do |row|
    (0..8).each do |col|
      if board[row][col] == '.'
        return [row, col]
      end
    end
  end
  return nil
end

def valid_nums(board, pos)
  valid_nums = DIGITS
  (0..8).each do |row|
    valid_nums.delete(board[row][pos[1]])
  end
  valid_nums = valid_nums.reject{ |digit| board[pos[0]].include?(digit) }
  box_row = (pos[0]/3)*3
  box_col = (pos[1]/3)*3
  for row in (box_row..box_row+2)
    for col in (box_col..box_col+2)
      valid_nums.delete(board[row][col])
    end
  end


  valid_nums

end

board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
p solve_sudoku(board)

# display board
# display pos
# display valid_nums

