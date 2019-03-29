require 'byebug'
def is_number(s)
  s = s.strip
    return false if s==""
  digits = (0..9).to_a.map{|num| num.to_s}
  decimal = false
  exponent = false
  idx = 0
  while idx < s.length
    char = s[idx]
    if char == "+" || char == "-"
      if (idx != 0 && s[idx-1] != 'e') || !( digits.include?(s[idx+1]) || (s[idx+1]=="." && digits.include?(s[idx+2])))
        return false
      end
    elsif char == '.'
      if decimal || exponent || s.length == 1 || (idx==0 && s[idx+1]=="e")
        return false
      else
        decimal = true;
        numerical = false
      end
    elsif char == 'e'
      if( exponent || idx == 0 || idx == s.length-1)

        return false
      else
        exponent = true;
      end
    elsif !digits.include?(char)
      return false
    end
    idx += 1;
  end
  return true
end

p is_number("-1.")
