require 'byebug'

def solve_n_queens(n)
  n_queens_recur(n, 0, [])

end

def n_queens_recur(n, row, arrangements)
  
  new_arrangements = []

  if n == 1
    return [['Q']]
  end
  if row == n
    return arrangements
  end
  if row == 0
    (0...n).each do |column|
      str = ""
      column.times{ str += "."}
      str += "Q"
      (n-1-column).times{ str += "."}
      new_arrangements.push([str])
    end
    return n_queens_recur(n, row+1, new_arrangements)
  end


  arrangements.each do |arrangement|

    (0...n).each do |column|
      bool = true

      arrangement.each_with_index do |string, idx|


        if string[column] == 'Q'
          bool = false
        end
        if column+row-idx < n && string[column+row-idx] == 'Q'
          bool = false
        end
        if column-row+idx >= 0 && string[column-row+idx] == 'Q'
          bool = false
        end
        if(bool)
          cat = 5
          
        end

      end
      if(bool)
        str = ""
        column.times{ str += "."}
        str += "Q"
        (n-1-column).times{ str += "."}
        new_arrangements.push(arrangement + [str])
      end

    end
  end
  if new_arrangements.empty?
    return []
  else
    return n_queens_recur(n, row+1, new_arrangements)
  end
  
end

puts solve_n_queens(5)