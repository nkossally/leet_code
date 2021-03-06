class Solution(object):
  def isValid(self, s):
    """
    :type s: str
    :rtype: bool
    """
    matches = {
      ')' :'(',
      ']' : '[',
      '}' : '{',
    }
    stack = []
    for char in s:
      if char in matches.values():
        stack.append(char)
      else:
        if len(stack) > 0 and matches[char] == stack[len(stack)-1]:
          stack.pop()
        else:
          return False
    return len(stack) == 0

test = Solution()
print(test.isValid("()"))