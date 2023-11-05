def find_substring(s, words)
  num_chars = 0
  if words.length == 0
    return []
  end
  num_chars = words[0].length * words.length
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
  word_length = words[0].length
  start_word = s[0...word_length]
  idx = words.index(start_word)
  if idx
    return is_concatenation(s[word_length..-1], words[0...idx]+words[idx+1..-1])
  end
  return false
end

p find_substring("barfoothefoobarman", ["foo","bar"])
