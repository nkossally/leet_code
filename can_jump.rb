require "set.rb"
def can_jump(nums)

  bool = false
  nums.each_with_index do |num, idx|
    if idx + num >= nums.length-1 && idx != nums.length-1
      bool = true
      break
    end
  end
  if !bool && nums.length>1
    return false
  end

  seen = Set.new
  return can_jump_three_args(nums, 0, seen)
end

def can_jump_three_args(nums, pos, seen)
  if nums[0]>=nums.length - 1
    return true
  end
  i = 1
  while i <= nums[0]
    if !seen.include?(pos+i)
      seen.add(pos+i)
      if can_jump_three_args(nums[i..-1], pos+i, seen)
        return true
      end
    end
    i += 1
  end
  return false
end


p can_jump([3,2,1,0,4])
p can_jump([3,2,1,4])

