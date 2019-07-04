require 'byebug'
# solution1:solves 172/173
# def find_substring(s, words)
#   num_chars = 0
#   if words.length == 0
#     return []
#   end
#   for word in words
#     num_chars += word.length
#   end
#   if num_chars > s.length
#     return []
#   end
#   result = []
#   for start in (0..s.length-num_chars)
#     if is_concatenation(s[start..-1], words)
#       result.push(start)
#     end
#   end
#   result
# end

# def is_concatenation(s, words)
#   if words.length == 0 
#     return true
#   end
#   for word in words
#     if word == s[0...word.length]
#       idx = words.index(word)
#       if is_concatenation(s[word.length..-1], words[0...idx]+words[idx+1..-1])
#         return true
#       end
#     end
#   end
#   return false
# end

# solution2 solves 172/173
def find_substring(s, words)
  num_chars = 0
  if words.length == 0
    return []
  end
  for word in words
    num_chars += word.length
  end
  if num_chars > s.length
    return []
  end
  result = []
  bad_indices = []
  delta = words[0].length
  for start in (0..s.length-num_chars)
    if !result.include?(start) && !bad_indices.include?(start) && is_concatenation(s[start..-1], words)
      result.push(start)
      old_start = start
      while true
        new_start = old_start + delta
        if !result.include?(new_start) && !bad_indices.include?(new_start) && new_start <= s.length-num_chars && s[old_start...new_start] == s[new_start+num_chars-delta...new_start+num_chars]
          result.push(new_start)
          old_start = new_start
        else
          bad_indices.push(new_start)
          break
        end

      end
    end
  end
  result
end

def is_concatenation(s, words)
  if words.length == 0 
    return true
  end
  for word in words
    if word == s[0...word.length]
      idx = words.index(word)
      if is_concatenation(s[word.length..-1], words[0...idx]+words[idx+1..-1])
        return true
      end
    end
  end
  return false
end