from collections import defaultdict, Counter

class Test():
    def test_order():
        print(ord("z") - ord("a"))
    
    def delete_set():
        nums = set([1, 2, 3])
        print(nums)
        nums.remove(1)
        print(nums)
        print(nums)
    
    def default_dict():
        list_dict = defaultdict(list)
        list_dict[1].append(0)
        print(list_dict)

        lamdda_dict = defaultdict(lambda : [])
        lamdda_dict["goodbye"].append(5)
        print(lamdda_dict)

        def test_fn():
            return set([1, 2, 3])

        func_dict = defaultdict(test_fn)
        func_dict["hello"].add("goodbye")
        print(func_dict)
    
    def compare_arrays():
        arr_1 = [1000]
        arr_2 = [999, 888, 88]
        arr_3 = [999, 888, 88]
        print(arr_1 < arr_2)
        print(arr_1 > arr_2)
        print(arr_2 == arr_3)

    def test_collector():
        fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
        fruit_counts = Counter(fruits)
        print(fruit_counts)
        fruit_counts = Counter("fruitssss")
        print(fruit_counts)
        
new_test_object = Test()
Test.test_collector()
