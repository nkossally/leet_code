def subsets(nums)
  result = [[]]
  for elem in nums
    idx = result.length-1
    while idx >= 0
        new_arr = result[idx]+[elem]
      result.push(new_arr)
      idx -= 1
    end
  end
  result 
end