class Solution(object):
  def longestValidParentheses(self, s):
    """
    :type s: str
    :rtype: int
    """
    result = 0
    for start_idx in range (0, len(s)):
      end_idx = len(s)-1
      while end_idx > start_idx and end_idx - start_idx+1 > result:
        if self.isValid(s[start_idx:end_idx+1]):
          result = end_idx - start_idx + 1
        end_idx -= 1
    return result
    
  def isValid(self, s):
    count = 0

    for char in s:
      if char is '(':
        count += 1
      elif count < 1:
          return False
      else:
        count -= 1

    return count == 0



test = Solution()
print test.longestValidParentheses('(()')

