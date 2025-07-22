class Test():
    def test_order():
        print(ord("z") - ord("a"))
    
    def delete_set():
        nums = set([1, 2, 3])
        print(nums)
        nums.remove(1)
        print(nums)
        print(nums)

new_test_object = Test()
Test.delete_set()