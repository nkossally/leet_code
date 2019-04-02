require "byebug"
def full_justify(words, max_width)
  str = ""
  char_count = 0
  word_count = 0
  result = []
  while words.length > 0
    space = word_count == 0 ? 0 : 1
    if(words[word_count] && words[word_count].length + space + char_count <= max_width)
      char_count += (words[word_count].length + space)
      word_count += 1
    else
      extra_space = (max_width - char_count)
      last = word_count == words.length
      while(word_count > 0)
        padding_count = !last && word_count>1 ? ((extra_space+0.0)/(word_count - 1)).ceil : 0
        padding = " "*padding_count
        str += " "+words.shift + padding
        extra_space -= padding_count
        word_count -= 1
      end
      str += " "*extra_space
      result.push(str[1..-1])
      str = ""
      char_count = 0
    end
  end
  result
end

p full_justify(["This", "is", "an", "example", "of", "text", "justification."], 16)
