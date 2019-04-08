require "byebug"
def is_interleave(s1, s2, s3)
  # unless same_letters((s1 ? s1 : "") + (s2 ? s2 : ""), s3)
  #   return false
  # end

  if (s1 ? s1 : "") + (s2 ? s2 : "") == s3
    return true
  end 
  if s1 && s3 && s1[0]==s3[0] && is_interleave(s1[1..-1], s2, s3[1..-1])
    return true
  end
  if s2 && s3 && s2[0]==s3[0] && is_interleave(s1, s2[1..-1], s3[1..-1])
    return true
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

s1 = "bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa"
s2 = "babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab"
s3 = "babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab"
p is_interleave(s1, s2, s3 )

