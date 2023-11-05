require 'byebug'
DIGITS = (1..9).map{ |num| num.to_s }

def solve_sudoku(board)
  pos = next_pos(board)
  if pos
    valid_nums = valid_nums(board, pos)
    if valid_nums.length == 0
      return false
    end
    for num in valid_nums
      board[pos[0]][pos[1]] = num
      tryNum = solve_sudoku(board)
      if tryNum
        return tryNum
      else
        board[pos[0]][pos[1]] = '.'
      end
    end
    return false
  else
    return board
  end
end

def arrayString(arr)
  str = ''
  for innerArr in arr
    str += '['+innerArr.join(',')+']'
  end
  return str

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
  valid_nums = DIGITS.dup
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

board = [
[".",".","9","7","4","8",".",".","."],
["7",".",".",".",".",".",".",".","."],
[".","2",".","1",".","9",".",".","."],
[".",".","7",".",".",".","2","4","."],
[".","6","4",".","1",".","5","9","."],
[".","9","8",".",".",".","3",".","."],
[".",".",".","8",".","3",".","2","."],
[".",".",".",".",".",".",".",".","6"],
[".",".",".","2","7","5","9",".","."]]
p solve_sudoku(board)