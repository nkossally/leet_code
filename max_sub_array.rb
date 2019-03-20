def max_sub_array(nums)
  i = 0
  max = nums[0]
  sum = 0
  while i<nums.length
    sum += nums[i]
    if sum > max
      max = sum
    end
    if sum < 0
      sum = 0
    end
    i += 1
  end
  max
end

puts max_sub_array([-3,-2,0,-1])