class Solution(object):

  def letterCombinations(self, digits):
    if digits == '':
      return []
    number_to_letters = {
      '2' : ['a','b','c'],
      '3' : ['d','e','f'],
      '4' : ['g','h','i'],
      '5' : ['j','k','l'],
      '6' : ['m','n','o'],
      '7' : ['p','q','r','s'],
      '8' : ['t','u','v'],
      '9' : ['w','x','y','z']
    }
    result = ['']
    for digit in digits:
      new_result = []
      for elem in result:
        for letter in number_to_letters[digit]:
          new_result.append(elem+letter)
      result = new_result
    return new_result

test = Solution()
print(test.letterCombinations('25'))



      
