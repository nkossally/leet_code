class Solution(object):
  def generateParenthesis(self, n):
    """
    :type n: int
    :rtype: List[str]
    """
    result = ['']
    while len(result[0]) < 2*n:
      new_result = []
      for elem in result:
        open_count = self.open_count(elem)
        close_count = self.close_count(elem)
        if open_count < n:
          new_result.append(elem+'(')
        if close_count < open_count:
          new_result.append(elem+')')
      result = new_result
    return result

  def open_count(self, s):
    count = 0
    for char in s:
      if char is '(':
        count += 1
    return count

  def close_count(self, s):
    count = 0
    for char in s:
      if char is ')':
        count += 1
    return count


test = Solution()
print test.generateParenthesis(3)