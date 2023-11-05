def next_permutation(nums)
  idx = nums.length-1
  continue_swap = true
  while continue_swap && idx > 0
    if nums[idx] > nums[idx-1]
      continue_swap = false
    end
    nums[idx-1], nums[idx] = nums[idx], nums[idx-1]
    idx -= 1
    if idx == 0 && nums.length != 2
      nums[idx-1], nums[idx-2] = nums[idx-2], nums[idx-1]
      continue_swap = false
    end
  end
  nums
end

p next_permutation([1,2])



