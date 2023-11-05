class Solution(object):
  def nextPermutation(self, nums):
    """
    :type nums: List[int]
    :rtype: None Do not return anything, modify nums in-place instead.
    """
    idx = len(nums) - 1
    while idx>0 and nums[idx] <= nums[idx-1]:
      idx -= 1
    if idx == 0:
      nums.reverse()
    else:
      alternative1 = self.alternative1(self.dup(nums), idx)
      alternative2 = self.alternative2(self.dup(nums), idx)
      alternative3 = self.alternative3(self.dup(nums), idx)
      alternative4 = self.alternative4(self.dup(nums), idx)
      if alternative1 > nums and (alternative2 < nums or alternative2 >= alternative1) and (alternative3 < nums or alternative3 >= alternative1) and (alternative4 < nums or alternative4 >= alternative1):
        self.alternative1(nums, idx)
      elif alternative2 > nums and (alternative1 < nums or alternative1 >= alternative2) and (alternative3 < nums or alternative3 >= alternative2) and (alternative4 < nums or alternative4 >= alternative2):
        self.alternative2(nums, idx)
      elif alternative3 > nums and (alternative1 < nums or alternative1 >= alternative3) and (alternative2 < nums or alternative2 >= alternative3) and (alternative4 < nums or alternative4 >= alternative3):
        self.alternative3(nums, idx)
      else:
        self.alternative4(nums, idx)
    return nums
  
  def alternative1(self, nums, idx):
    tail = []
    temp = nums[idx]
    nums[idx] = nums[idx-1]
    nums[idx-1] = temp
    self.reverse_tail(nums, idx+1)
    return nums

  def alternative2(self, nums, idx):
    tail = []
    temp = nums[idx]
    nums[idx] = nums[idx-1]
    nums[idx-1] = temp
    self.push_down(nums, idx)
    self.reverse_tail(nums, idx)
    return nums

  def alternative3(self, nums, idx):
    tail = []
    temp = nums[idx-1]
    nums[idx-1] = nums[len(nums)-1]
    nums[len(nums)-1] = temp
    self.reverse_tail(nums, idx)
    return nums
  
  def alternative4(self, nums, idx):
    tail = []
    switch_idx = idx
    for i in range(idx+1, len(nums)):
      if nums[i] > nums[idx-1] and nums[i] <= nums[switch_idx]:
        switch_idx = i
    temp = nums[idx-1]
    nums[idx-1] = nums[switch_idx]
    nums[switch_idx] = temp
    self.reverse_tail(nums, idx)
    return nums  

  def dup(self, nums):
    return nums[:]
  
  def push_down(self, nums, idx):
    i = idx
    while i < len(nums)-1 and nums[i+1] > nums[idx]:
      i+=1
    temp = nums[idx]
    nums[idx] = nums[i]
    nums[i] = temp
    return nums

  def reverse_tail(self, nums, idx):
    tail_length = len(nums) - idx
    mid_tail = idx+(len(nums) - idx)/2
    for i in range(idx, mid_tail):
      mirror = idx + tail_length - (i-idx) - 1
      temp = nums[i]
      nums[i] = nums[mirror]
      nums[mirror] = temp
    return nums

test = Solution()
print test.nextPermutation([3,8,0,9,2,3,1,8,7,4,1,6,3,8,5,5,0])
