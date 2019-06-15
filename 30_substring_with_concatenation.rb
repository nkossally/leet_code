require 'byebug'
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
  for start in (0..s.length-num_chars)
    if is_concatenation(s[start..-1], words)
      result.push(start)
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
