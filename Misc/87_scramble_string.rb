require "byebug"
def is_scramble(s1, s2)
  if s1.length <= 1 && s1 == s2
    return true
  end

  if same_letters(s1, s2)
    for partition in (1..s1.length/2)
      s1_left = s1[0...partition]
      s1_right = s1[partition..-1]
      s2_left = s2[0...partition]
      s2_right = s2[partition..-1]
      if is_scramble(s1_left, s2_left) && is_scramble(s1_right, s2_right)
        return true
      end

      s2_left = s2[0...s2.length-partition]
      s2_right = s2[s2.length-partition..-1]
      if is_scramble(s1_left, s2_right) && is_scramble(s1_right, s2_left)
        return true
      end

      s1_left = s1[0...s1.length-partition]
      s1_right = s1[s1.length-partition..-1]
      if is_scramble(s1_left, s2_left) && is_scramble(s1_right, s2_right)
        return true
      end

      s2_left = s2[0...partition]
      s2_right = s2[partition..-1]
      if is_scramble(s1_left, s2_right) && is_scramble(s1_right, s2_left)
        return true
      end
    end
  end
  return false
end

def same_letters(s1, s2)
  if s1.length != s2.length
    return false
  end

  idx = 0
  while idx < s1.length
    char = s1[idx]
    idx2 = s2.index(char)
    if idx2
      s2 = s2[0...idx2] + s2[idx2+1..-1]
    else
      return false
    end
    idx += 1
  end

  return s2 == ""
end

p is_scramble("great", "rgeat")
p is_scramble("abcde", "caebd")

